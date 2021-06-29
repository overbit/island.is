import { Logger } from 'winston'
import { logger as defaultLogger } from '@island.is/logging'

import { FetchAPI, FetchError, Response } from './types'

export interface ErrorMiddlewareOptions {
  // Name of fetch chain, used in log statements.
  name: string

  // Timeout for requests. Defaults to 5000ms. Can be disabled by passing 0.
  timeout?: number

  // If true, will include (and log) response body in thrown errors. Defaults to false.
  // Should only be used if error objects do not have sensitive information or PII.
  includeBodyInErrors?: boolean

  // Should errors be logged? Defaults to true.
  logErrors?: boolean

  // Override logger.
  logger?: Logger
}

const createResponseError = async (
  response: Response,
  includeBody: boolean,
) => {
  const error = new Error(
    `Request failed with status code ${response.status}`,
  ) as FetchError
  error.name = 'FetchError'
  const { url, status, headers, statusText } = response
  Object.assign(error, { url, status, headers, statusText, response })

  const contentType = response.headers.get('content-type')
  const isJson = contentType === 'application/json'
  const isProblem = contentType === 'application/problem+json'
  const shouldIncludeBody = includeBody && (isJson || isProblem)
  if (isProblem || shouldIncludeBody) {
    const body = await response.clone().json()
    if (shouldIncludeBody) {
      error.body = body
    }
    if (isProblem) {
      error.problem = body
    }
  } else if (includeBody) {
    error.body = await response.clone().text()
  }

  return error
}

export const errorMiddleware = ({
  timeout = 5000,
  includeBodyInErrors = false,
  logger = defaultLogger,
  logErrors = true,
}: ErrorMiddlewareOptions) => (fetch: FetchAPI): FetchAPI => {
  return async function errorMiddleware(input, init) {
    try {
      const response = await fetch(input, {
        timeout,
        ...init,
      })

      if (!response.ok) {
        throw await createResponseError(response, includeBodyInErrors)
      }

      return response
    } catch (error) {
      const logLevel =
        error.name === 'FetchError' && error.status < 500 ? 'warn' : 'error'
      logger.log(logLevel, {
        ...error,
        stack: error.stack,
        url: input,
        message: `Fetch failure (${name}): ${error.message}`,
        // Do not log large response objects.
        response: undefined,
      })
      throw error
    }
  }
}

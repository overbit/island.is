import CircuitBreaker from 'opossum'
import defaultFetch from 'node-fetch'
import { Logger } from 'winston'
import { logger as defaultLogger } from '@island.is/logging'
import { FetchAPI } from './types'
import { CacheMiddlewareOptions } from './cache.middleware'
import { circuitBreakerMiddleware } from './circuitBreaker.middleware'
import { composeMiddleware } from './compose.middleware'
import { errorMiddleware } from './error.middleware'

export interface EnhancedFetchOptions {
  // The name of this fetch function, used in logs and opossum stats.
  name: string

  // Timeout for requests. Defaults to 5000ms. Can be disabled by passing 0.
  timeout?: number

  // Shortcut to disable circuit breaker. Keeps timeout and logging.
  enableCircuitBreaker?: boolean

  // By default 400 responses are considered warnings and will not open the circuit.
  // This can be changed by passing `treat400ResponsesAsErrors: true`.
  // Either way they will be logged and thrown.
  treat400ResponsesAsErrors?: boolean

  // If true, will log error response body. Defaults to false.
  // Should only be used if error objects do not have sensitive information or PII.
  includeBodyInErrors?: boolean

  // Configure circuit breaker logic.
  opossum?: CircuitBreaker.Options

  // Enable and configure caching.
  cache?: CacheMiddlewareOptions

  // Override logger.
  logger?: Logger

  // Override fetch function.
  fetch?: FetchAPI
}

/**
 * Creates a fetch function for resilient ops:
 *
 * - Includes circuit breaker logic. By default, if more than 50% of the
 *   requests from the last 10 seconds are misbehaving, we'll open the circuit.
 *   All future requests will be stopped to lower pressure on the remote server.
 *   Every 30 seconds we'll allow one request through. If it's successful, we'll
 *   close the circuit and let requests through again.
 *
 * - Includes request timeout logic. By default, throws an error if there is no
 *   response in 5 seconds.
 *
 * - Throws an error for non-200 responses. The error object includes details
 *   from the response, including a `problem` property if the response implements
 *   the [Problem Spec](https://datatracker.ietf.org/doc/html/rfc7807).
 *
 * - Logs circuit breaker events and failing requests
 *
 * - Optionally opens the circuit for 400 responses.
 *
 * - Optionally parses and logs error response bodies.
 *
 * This function (and it's error logic) is mostly compatible with "OpenAPI
 * Generator" clients. The only difference revolve around non-200 responses. It
 * throws an Error object instead of the response (all response properties are
 * copied to the Error object), and since these errors are thrown "inside" the
 * fetch call, any "post" middlewares will not be invoked for non-200 responses.
 */
export const createEnhancedFetch = ({
  name,
  treat400ResponsesAsErrors = false,
  enableCircuitBreaker = true,
  includeBodyInErrors = false,
  timeout = 5000,
  opossum,
  logger = defaultLogger,
  fetch = defaultFetch,
}: EnhancedFetchOptions): FetchAPI => {
  return composeMiddleware(
    !enableCircuitBreaker
      ? null
      : circuitBreakerMiddleware({
          name,
          logger,
          opossum,
          treat400ResponsesAsErrors,
        }),

    errorMiddleware({
      name,
      timeout,
      includeBodyInErrors,
      logger,
    }),
  )(fetch)
}


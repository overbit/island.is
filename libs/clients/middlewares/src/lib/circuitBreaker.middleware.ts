import CircuitBreaker from 'opossum'
import { Logger } from 'winston'
import { logger as defaultLogger } from '@island.is/logging'
import { FetchAPI, FetchError } from './types'

interface CircuitBreakerMiddlewareOptions {
  // Name of fetch chain, used in log statements.
  name: string

  // Override logger.
  logger?: Logger

  // Configure opossum logic.
  opossum?: CircuitBreaker.Options

  // By default 400 responses will not open the circuit.
  // This can be changed by passing `treat400ResponsesAsErrors: true`.
  treat400ResponsesAsErrors?: boolean
}

export const circuitBreakerMiddleware = ({
  name,
  logger = defaultLogger,
  treat400ResponsesAsErrors = false,
  opossum,
}: CircuitBreakerMiddlewareOptions) => (fetch: FetchAPI): FetchAPI => {
  const errorFilter = treat400ResponsesAsErrors
    ? opossum?.errorFilter
    : (error: FetchError) => {
        if (error.name === 'FetchError' && error.status < 500) {
          return true
        }
        return opossum?.errorFilter?.(error) ?? false
      }

  const breaker = new CircuitBreaker(fetch, {
    name,
    volumeThreshold: 10,
    // False disables timeout logic, the types are incorrect.
    // We want to use our own timeout logic so we can disable the circuit
    // breaker while still supporting timeouts.
    timeout: (false as unknown) as number,

    ...opossum,
    errorFilter,
  })

  breaker.on('open', () =>
    logger.error(`Fetch (${name}): Too many errors, circuit breaker opened`),
  )
  breaker.on('halfOpen', () =>
    logger.error(`Fetch (${name}): Circuit breaker half-open`),
  )
  breaker.on('close', () =>
    logger.error(`Fetch (${name}): Circuit breaker closed`),
  )

  return function circuitBrakerMiddleware(input, init) {
    return breaker.fire(input, init)
  }
}

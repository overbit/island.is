import { HTTPCache } from 'apollo-datasource-rest'
import { KeyValueCache } from 'apollo-server-caching'
import { Request, Response } from 'node-fetch'
import type { RequestInfo, RequestInit } from 'node-fetch'
import type {
  fetch as apolloFetch,
  Response as ApolloResponse,
  Request as ApolloRequest,
} from 'apollo-server-env'

type FetchAPI = (url: RequestInfo, init?: RequestInit) => Promise<Response>

type CacheOptions = { ttl?: number }
type CacheOptionsArg = (response: Response, request: Request) => CacheOptions
type ApolloCacheOptionsArg = (
  response: ApolloResponse,
  request: ApolloRequest,
) => CacheOptions

export interface CacheMiddlewareOptions {
  keyValueCache?: KeyValueCache
  cacheKey?: (request: Request) => string
  cacheKeyPrefix?: string
  cacheOptions?: CacheOptionsArg
}

export const cacheMiddleware = ({
  keyValueCache,
  cacheKey: generateCacheKey = (request) => request.url,
  cacheKeyPrefix = '',
  cacheOptions,
}: CacheMiddlewareOptions) => (fetch: FetchAPI): FetchAPI => {
  const httpCache = new HTTPCache(
    keyValueCache,
    (fetch as unknown) as typeof apolloFetch,
  )

  return function cacheMiddleware(input, init) {
    const request = new Request(input, init)
    const cacheKey = cacheKeyPrefix + generateCacheKey(request)

    return httpCache.fetch(request, {
      cacheKey,
      cacheOptions: (cacheOptions as unknown) as ApolloCacheOptionsArg,
    }) as Promise<Response>
  }
}

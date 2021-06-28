import { HTTPCache } from 'apollo-datasource-rest'
import { KeyValueCache } from 'apollo-server-caching'
import nodeFetch, { Request, Response } from 'node-fetch'
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

export interface CachedFetchOptions {
  keyValueCache?: KeyValueCache
  fetch?: typeof nodeFetch
  cacheKey?: (request: Request) => string
  cacheKeyPrefix?: string
  cacheOptions?: CacheOptionsArg
}

export const createCachedFetch = ({
  keyValueCache,
  fetch = nodeFetch,
  cacheKey: generateCacheKey = (request) => request.url,
  cacheKeyPrefix = '',
  cacheOptions,
}: CachedFetchOptions): FetchAPI => {
  const httpCache = new HTTPCache(
    keyValueCache,
    (fetch as unknown) as typeof apolloFetch,
  )

  return (input, init) => {
    const request = new Request(input, init)
    const cacheKey = cacheKeyPrefix + generateCacheKey(request)

    return httpCache.fetch(request, {
      cacheKey,
      cacheOptions: (cacheOptions as unknown) as ApolloCacheOptionsArg,
    }) as Promise<Response>
  }
}

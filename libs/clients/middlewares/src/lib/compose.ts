import { FetchAPI } from './types'
import defaultFetch from 'node-fetch'

interface FetchOptions {
  fetch?: FetchAPI
}
type FetchFn = (options: FetchOptions) => FetchAPI

const compose = (...middlewares: Array<[FetchFn, FetchOptions]>): FetchAPI => {
  return middlewares
    .reverse()
    .reduce<FetchAPI>(
      (fetch, middleware) => middleware[0]({ ...middleware[1], fetch }),
      defaultFetch,
    )
}

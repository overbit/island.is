import { FetchAPI } from './types'

type Middleware = (fetch: FetchAPI) => FetchAPI

export const composeMiddleware = (...middlewares: Array<Middleware | null>) => (
  fetch: FetchAPI,
): FetchAPI => {
  return middlewares
    .reverse()
    .reduce<FetchAPI>(
      (fetch, middleware) => (middleware === null ? fetch : middleware(fetch)),
      fetch,
    )
}

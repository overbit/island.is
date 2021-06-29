import type {
  RequestInfo,
  RequestInit as FetchInit,
  Request,
  Response,
} from 'node-fetch'
import type { Auth } from '@island.is/auth-nest-tools'

interface RequestInit extends FetchInit {
  ttl?: number
  auth: Auth
}

export type FetchAPI = (
  info: RequestInfo,
  init?: RequestInit,
) => Promise<Response>

export type { Request, Response, RequestInfo, RequestInit }

export interface FetchProblem {
  type: string
  title: string
  status?: number
  detail?: string
  instance?: string
  [key: string]: unknown
}

export interface FetchError extends Error {
  url: string
  status: number
  headers: Headers
  statusText: string
  response: Response
  body?: unknown
  problem?: FetchProblem
}

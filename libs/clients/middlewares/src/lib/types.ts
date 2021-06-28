import type { RequestInfo, RequestInit, Request, Response } from 'node-fetch'

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

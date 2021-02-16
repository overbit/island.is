export type DataProviderType = object | string | boolean | number

export interface DataProviderResult<Data = DataProviderType> {
  data?: Data
  date: Date
  reason?: string
  status: 'failure' | 'success'
  statusCode?: number
}

export interface FailedDataProviderResult extends DataProviderResult {
  reason: string
  status: 'failure'
}

export interface SuccessfulDataProviderResult<Data = DataProviderType> extends DataProviderResult<Data> {
  status: 'success'
}

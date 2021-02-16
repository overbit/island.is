import { ApplicationTypes } from './ApplicationTypes'
import { DataProviderResult } from './DataProviderResult'

export interface ExternalData {
  [key: string]: DataProviderResult
}

export type Answer = string | number | boolean | Answer[] | FormValue

export interface FormValue {
  [key: string]: Answer
}

export interface Application<Answers = FormValue, Data = ExternalData> {
  id: string
  state: string
  applicant: string
  assignees: string[]
  typeId: ApplicationTypes
  modified: Date
  created: Date
  attachments: object
  answers: Answers
  externalData: Data
  name?: string
  progress?: number
}

import {
  BasicDataProvider,
  Application,
  SuccessfulDataProviderResult,
} from '@island.is/application/core'
import { PregnancyStatusData } from './APIDataTypes';

export class PregnancyStatus extends BasicDataProvider {
  type = 'PregnancyStatus'
  provide(application: Application): Promise<unknown> {
    // TODO this will be the url used for this
    // const {applicant} = application
    // return fetch(`users/${applicant}/pregnancyStatus`)
    return Promise.resolve({})
  }
  onProvideSuccess(): SuccessfulDataProviderResult<PregnancyStatusData> {
    return {
      date: new Date(),
      data: {
        hasActivePregnancy: true,
        pregnancyDueDate: '2021-01-15',
      },
      status: 'success',
    }
  }
}

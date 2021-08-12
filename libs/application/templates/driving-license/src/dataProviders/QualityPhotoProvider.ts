import {
    BasicDataProvider,
    Application,
    SuccessfulDataProviderResult,
    FailedDataProviderResult,
  } from '@island.is/application/core'
  import { m } from '../lib/messages'
  
  export class QualityPhotoProvider extends BasicDataProvider {
    type = 'QualityPhotoProvider'

    async provide(
      application: Application,
    ){
      const query = `
        query HasQualityPhoto {
            qualityPhoto {
            success
        }
      }
      `
        
      const res = await this.useGraphqlGateway(query)
    
        
      if (!res.ok) {
        return Promise.reject({
          reason: 'Náði ekki sambandi við vefþjónustu',
        })
      }
      const response = await res.json()
      console.log('Res: ' + JSON.stringify(response) +"\n\n\n")
  
      if (response.errors) {
        return Promise.reject({ error: response.errors })
      }
  
      return response.data.qualityPhoto.success
    }
  
    onProvideError(): FailedDataProviderResult {
      return {
        date: new Date(),
        reason: m.errorDataProvider,
        status: 'failure',
        data: {},
      }
    }
  
    onProvideSuccess(result: object): SuccessfulDataProviderResult {
      return { date: new Date(), status: 'success', data: result }
    }
  }
  
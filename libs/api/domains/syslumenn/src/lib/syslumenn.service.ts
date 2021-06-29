import { SyslumennClient } from './client/syslumenn.client'
import { Homestay, mapHomestay } from './models/homestay'
import { Injectable } from '@nestjs/common'
import { Person, Attachment, DataUploadResponse } from './models/dataUpload'
import {
  OperatingLicense,
  mapOperatingLicense,
} from './models/operatingLicense'

@Injectable()
export class SyslumennService {
  constructor(private syslumennClient: SyslumennClient) {}

  async getHomestays(year?: number): Promise<Homestay[]> {
    const homestays = await this.syslumennClient.getHomestays(year)

    return (homestays ?? []).map(mapHomestay)
  }

  async getOperatingLicenses(): Promise<OperatingLicense[]> {
    const operatingLicenses = await this.syslumennClient.getOperatingLicenses()

    return (operatingLicenses ?? []).map(mapOperatingLicense)
  }

  async uploadData(
    persons: Person[],
    attachement: Attachment,
    extraData: { [key: string]: string },
  ): Promise<DataUploadResponse> {
    return await this.syslumennClient.uploadData(
      persons,
      attachement,
      extraData,
    )
  }
}

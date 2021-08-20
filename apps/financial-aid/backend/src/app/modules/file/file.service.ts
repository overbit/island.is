import { Inject, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'

import type { Logger } from '@island.is/logging'
import { LOGGER_PROVIDER } from '@island.is/logging'

import { CloudFrontService } from './cloudFront.service'

import { SignedUrlModel, ApplicationFileModel } from './models'

import { environment } from '../../../environments'
import { CreateFileDto } from './dto'

@Injectable()
export class FileService {
  constructor(
    @InjectModel(ApplicationFileModel)
    private readonly fileModel: typeof ApplicationFileModel,
    private readonly cloudFrontService: CloudFrontService,
    @Inject(LOGGER_PROVIDER)
    private readonly logger: Logger,
  ) {}

  async createFile(createFile: CreateFileDto): Promise<ApplicationFileModel> {
    return this.fileModel.create(createFile)
  }

  async getAllApplicationFiles(
    applicationId: string,
  ): Promise<ApplicationFileModel[]> {
    this.logger.debug(`Getting all files for case ${applicationId}`)

    return this.fileModel.findAll({
      where: { applicationId },
      order: [['created', 'DESC']],
    })
  }

  createSignedUrl(folder: string, fileName: string): SignedUrlModel {
    const key = `${folder}/${fileName}`

    const fileUrl = `${environment.files.fileBaseUrlOsk}/${key}`

    const signedUrl = this.cloudFrontService.createPresignedPost(fileUrl)

    return {
      key,
      url: signedUrl,
    }
  }

  async createSignedUrlForFileId(id: string): Promise<SignedUrlModel> {
    const file = await this.fileModel.findOne({
      where: { id },
    })

    const fileUrl = `${environment.files.fileBaseUrlVeita}/${file.key}`

    const signedUrl = this.cloudFrontService.createPresignedPost(fileUrl)

    return {
      key: file.key,
      url: signedUrl,
    }
  }
}

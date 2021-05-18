import { Inject, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'

import { Logger, LOGGER_PROVIDER } from '@island.is/logging'

import { CreateInstitutionDto, UpdateInstitutionDto } from './dto'
import { Institution } from './institution.model'

@Injectable()
export class InstitutionService {
  constructor(
    @InjectModel(Institution)
    private readonly institutionModel: typeof Institution,
    @Inject(LOGGER_PROVIDER)
    private readonly logger: Logger,
  ) {}

  getAll(): Promise<Institution[]> {
    this.logger.debug('Getting all institutions')

    return this.institutionModel.findAll({
      order: ['name'],
    })
  }

  create(userToCreate: CreateInstitutionDto): Promise<Institution> {
    this.logger.debug('Creating a new institution')

    return this.institutionModel.create(userToCreate)
  }

  async update(
    id: string,
    update: UpdateInstitutionDto,
  ): Promise<{
    numberOfAffectedRows: number
    updatedInstitution: Institution
  }> {
    this.logger.debug(`Updating institution ${id}`)

    const [
      numberOfAffectedRows,
      [updatedInstitution],
    ] = await this.institutionModel.update(update, {
      where: { id },
      returning: true,
    })

    return { numberOfAffectedRows, updatedInstitution }
  }
}

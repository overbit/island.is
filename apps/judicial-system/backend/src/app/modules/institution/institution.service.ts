import { UniqueConstraintError } from 'sequelize'

import { ForbiddenException, Inject, Injectable } from '@nestjs/common'
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

  async create(userToCreate: CreateInstitutionDto): Promise<Institution> {
    this.logger.debug('Creating a new institution')

    try {
      return await this.institutionModel.create(userToCreate)
    } catch (error) {
      if (error instanceof UniqueConstraintError) {
        throw new ForbiddenException('Institution already exists')
      }
    }
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

import { Inject, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Logger, LOGGER_PROVIDER } from '@island.is/logging'
import { Case } from './case.model'
import { CreateCaseDto } from './dto/createCase.dto'
import { UpdateCaseDto } from './dto/updateCase.dto'

@Injectable()
export class CaseService {
  constructor(
    @InjectModel(Case)
    private caseModel: typeof Case,
    @Inject(LOGGER_PROVIDER)
    private logger: Logger,
  ) {}

  async getAll() {
    this.logger.debug('Getting all cases')

    return this.caseModel.findAll()
  }

  async findById(id: string) {
    this.logger.debug(`Finding case with id "${id}"`)

    return this.caseModel.findOne({
      where: { id },
    })
  }

  async create(caseToCreate: CreateCaseDto) {
    this.logger.debug(`Creating case ${caseToCreate}`)

    return this.caseModel.create(caseToCreate)
  }

  async update(id: string, caseToUpdate: UpdateCaseDto) {
    this.logger.debug(`Updating case whith id "${caseToUpdate.id}"`)

    const [numberOfAffectedRows, [updatedCase]] = await this.caseModel.update(
      caseToUpdate,
      {
        where: { id },
        returning: true,
      },
    )

    return { numberOfAffectedRows, updatedCase }
  }

  async delete(id: string) {
    this.logger.debug(`Deleting case with id "${id}"`)

    return this.caseModel.destroy({ where: { id } })
  }
}

import { Inject, UseGuards } from '@nestjs/common'
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql'

import { Logger, LOGGER_PROVIDER } from '@island.is/logging'
import {
  CurrentGraphQlUser,
  JwtGraphQlAuthGuard,
} from '@island.is/judicial-system/auth'
import {
  AuditedAction,
  AuditTrailService,
} from '@island.is/judicial-system/audit-trail'
import { User } from '@island.is/judicial-system/types'

import { BackendAPI } from '../../../services'
import { CreateInstitutionInput, UpdateInstitutionInput } from './dto'
import { Institution } from './institution.model'

@UseGuards(JwtGraphQlAuthGuard)
@Resolver(() => Institution)
export class InstitutionResolver {
  constructor(
    private readonly auditTrailService: AuditTrailService,
    @Inject(LOGGER_PROVIDER)
    private readonly logger: Logger,
  ) {}

  @Query(() => [Institution], { nullable: true })
  institutions(
    @CurrentGraphQlUser() user: User,
    @Context('dataSources') { backendApi }: { backendApi: BackendAPI },
  ): Promise<Institution[]> {
    this.logger.debug('Getting all institutions')

    return this.auditTrailService.audit(
      user.id,
      AuditedAction.GET_INSTITUTIONS,
      backendApi.getInstitutions(),
      (institutions: Institution[]) =>
        institutions.map((institution) => institution.id),
    )
  }

  @Mutation(() => Institution, { nullable: true })
  createInstitution(
    @Args('input', { type: () => CreateInstitutionInput })
    input: CreateInstitutionInput,
    @CurrentGraphQlUser() user: User,
    @Context('dataSources') { backendApi }: { backendApi: BackendAPI },
  ): Promise<Institution> {
    this.logger.debug('Creating a new institution')

    return this.auditTrailService.audit(
      user.id,
      AuditedAction.CREATE_INSTITUTION,
      backendApi.createInstitution(input),
      (institution) => institution.id,
    )
  }

  @Mutation(() => Institution, { nullable: true })
  updateInstitution(
    @Args('input', { type: () => UpdateInstitutionInput })
    input: UpdateInstitutionInput,
    @CurrentGraphQlUser() user: User,
    @Context('dataSources') { backendApi }: { backendApi: BackendAPI },
  ): Promise<Institution> {
    const { id, ...updateInstitution } = input

    this.logger.debug(`Updating institution ${id}`)

    return this.auditTrailService.audit(
      user.id,
      AuditedAction.UPDATE_INSTITUTION,
      backendApi.updateInstitution(id, updateInstitution),
      id,
    )
  }
}

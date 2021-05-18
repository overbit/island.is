import { Allow } from 'class-validator'

import { Field, InputType } from '@nestjs/graphql'

import { UpdateInstitution } from '@island.is/judicial-system/types'

@InputType()
export class UpdateInstitutionInput implements UpdateInstitution {
  @Allow()
  @Field()
  readonly id!: string

  @Allow()
  @Field()
  readonly name?: string
}

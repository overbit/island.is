import { Allow } from 'class-validator'

import { Field, InputType } from '@nestjs/graphql'

import { CreateInstitution } from '@island.is/judicial-system/types'

@InputType()
export class CreateInstitutionInput implements CreateInstitution {
  @Allow()
  @Field()
  readonly name!: string
}

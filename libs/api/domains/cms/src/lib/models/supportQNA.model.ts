import { Field, ObjectType } from '@nestjs/graphql'
import { map } from 'lodash'

import { ISupportQna } from '../generated/contentfulTypes'

import { mapOrganization, Organization } from './organization.model'
import { SupportCategory } from './supportCategory.model'

@ObjectType()
export class SupportQNA {
  @Field()
  question!: string

  @Field()
  answer!: string

  @Field(() => Organization, { nullable: true })
  organization?: Organization | null

  @Field(() => SupportCategory, { nullable: true })
  category?: SupportCategory
}

export const mapSupportQNA = ({ fields }: ISupportQna): SupportQNA => ({
  question: fields.question,
  answer: JSON.stringify(fields.answer),
  organization: fields.organization
    ? mapOrganization(fields.organization)
    : null,
  category: fields.category?.fields,
})

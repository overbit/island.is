import { Field, ObjectType } from '@nestjs/graphql'

import { ISupportQNA } from '../generated/contentfulTypes'

import { Organization } from './organization.model'
import { SupportCategory } from './supportCategory.model'

@ObjectType()
export class SupportQNA {
  @Field()
  question: string

  @Field()
  answer: string

  @Field(() => Organization, { nullable: true })
  organization?: Organization

  @Field(() => SupportCategory, { nullable: true })
  category?: SupportCategory
}

export const mapSupportQNA = ({ fields }: ISupportQNA): SupportQNA => ({
  question: fields.question,
  answer: JSON.stringify(fields.answer),
  organization: fields.organization?.fields,
  category: fields.category?.fields,
})

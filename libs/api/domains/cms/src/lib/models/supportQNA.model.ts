import { Field, ID, ObjectType } from '@nestjs/graphql'

import { ISupportQna } from '../generated/contentfulTypes'
import { mapDocument, SliceUnion } from '../unions/slice.union'

import { mapOrganization, Organization } from './organization.model'
import { SupportCategory } from './supportCategory.model'

@ObjectType()
export class SupportQNA {
  @Field(() => ID)
  id!: string

  @Field()
  question!: string

  @Field(() => [SliceUnion])
  answer: Array<typeof SliceUnion> = []

  @Field(() => Organization, { nullable: true })
  organization?: Organization | null

  @Field(() => SupportCategory, { nullable: true })
  category?: SupportCategory
}

export const mapSupportQNA = ({ fields, sys }: ISupportQna): SupportQNA => ({
  id: sys.id,
  question: fields.question,
  answer: fields.answer ? mapDocument(fields.answer, sys.id) : [],
  organization: fields.organization
    ? mapOrganization(fields.organization)
    : null,
  category: fields.category?.fields,
})

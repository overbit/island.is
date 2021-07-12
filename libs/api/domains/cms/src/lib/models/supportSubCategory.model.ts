import { Field, ObjectType } from '@nestjs/graphql'
import { ISupportSubCategory } from '../generated/contentfulTypes'
import { mapOrganization, Organization } from './organization.model'
import { mapSupportQNA, SupportQNA } from './supportQNA.model'

@ObjectType()
export class SupportSubCategory {
  @Field()
  title!: string

  @Field()
  slug!: string

  @Field()
  description?: string

  @Field(() => [SupportQNA])
  qnas?: SupportQNA[]
}

export const mapSupportSubCategory = ({
  fields,
}: ISupportSubCategory): SupportSubCategory => ({
  title: fields.title ?? '',
  slug: fields.slug ?? '',
  description: fields.description ?? '',
  qnas: (fields.qnas ?? []).map(mapSupportQNA),
})

import { Field, ObjectType } from '@nestjs/graphql'
import { ISupportCategory } from '../generated/contentfulTypes'
import { mapOrganization, Organization } from './organization.model'
import { mapSupportSubCategory, SupportSubCategory } from './supportSubCategory'

@ObjectType()
export class SupportCategory {
  @Field()
  title!: string

  @Field()
  slug!: string

  @Field()
  description?: string

  @Field(() => Organization, { nullable: true })
  organization?: Organization | null

  @Field(() => [SupportSubCategory])
  subcategories?: SupportSubCategory[]
}

export const mapSupportCategory = ({
  fields,
}: ISupportCategory): SupportCategory => ({
  title: fields.title,
  slug: fields.slug ?? '',
  subcategories: (fields.subCategories ?? []).map(mapSupportSubCategory),
  description: fields.description ?? '',
  organization: fields.organization
    ? mapOrganization(fields.organization)
    : null,
})

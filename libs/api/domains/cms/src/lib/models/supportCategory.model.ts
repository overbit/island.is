import { Field, ObjectType } from '@nestjs/graphql'

import { ISupportCategory } from '../generated/contentfulTypes'

@ObjectType()
export class SupportCategory {
  @Field()
  title!: string

  @Field()
  slug!: string

  @Field()
  description?: string
}

export const mapSupportCategory = ({
  fields,
}: ISupportCategory): SupportCategory => ({
  title: fields.title,
  slug: fields.slug ?? '',
  description: fields.description ?? '',
})

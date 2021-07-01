import { Field, ObjectType } from '@nestjs/graphql'

import { ISupportCategory } from '../generated/contentfulTypes'

@ObjectType()
export class SupportCategory {
  @Field()
  title!: string
}

export const mapSupportCategory = ({
  fields,
}: ISupportCategory): SupportCategory => ({
  title: fields.title,
})

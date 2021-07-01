import { Field, ObjectType } from '@nestjs/graphql'
import { SupportCategory } from './supportCategory.model'

@ObjectType()
export class SupportCategories {
  @Field(() => [SupportCategory])
  items?: SupportCategory[]
}

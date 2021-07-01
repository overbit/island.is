import { Field, ObjectType } from '@nestjs/graphql'
import { SupportQNA } from './supportQNA.model'

@ObjectType()
export class SupportQNAs {
  @Field(() => [SupportQNA])
  items?: SupportQNA[]
}

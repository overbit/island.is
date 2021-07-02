import { Field, InputType } from '@nestjs/graphql'
import { IsOptional, IsString } from 'class-validator'

@InputType()
export class GetSupportQNAInput {
  @Field(() => String)
  @IsString()
  lang = 'is-IS'
}

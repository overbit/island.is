import { Field, InputType } from '@nestjs/graphql'
import { IsOptional, IsString } from 'class-validator'

@InputType()
export class GetSupportCategoryInput {
  @Field(() => String)
  @IsString()
  lang = 'is-IS'

  @Field(() => String)
  @IsString()
  @IsOptional()
  slug?: string
}

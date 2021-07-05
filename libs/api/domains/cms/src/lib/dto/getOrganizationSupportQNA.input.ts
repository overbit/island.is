import { Field, InputType } from '@nestjs/graphql'
import { IsOptional, IsString } from 'class-validator'

@InputType()
export class GetOrganizationSupportQNAInput {
  @Field(() => String)
  @IsString()
  lang = 'is-IS'

  @Field(() => String)
  @IsString()
  @IsOptional()
  slug?: string
}

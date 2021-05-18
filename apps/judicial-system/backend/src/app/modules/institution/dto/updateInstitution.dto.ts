import { IsString, IsOptional } from 'class-validator'

import { ApiPropertyOptional } from '@nestjs/swagger'

export class UpdateInstitutionDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly name?: String
}

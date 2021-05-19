import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common'
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger'

import {
  JwtAuthGuard,
  RolesGuard,
  RolesRule,
  RolesRules,
} from '@island.is/judicial-system/auth'
import { UserRole } from '@island.is/judicial-system/types'

import { CreateInstitutionDto, UpdateInstitutionDto } from './dto'
import { InstitutionService } from './institution.service'
import { Institution } from './institution.model'

// Allows admins to perform any action
const adminRule = UserRole.ADMIN as RolesRule

@Controller('api')
@ApiTags('institutions')
export class InstitutionController {
  constructor(private readonly institutionService: InstitutionService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @RolesRules(adminRule)
  @Post('institution')
  @ApiCreatedResponse({
    type: Institution,
    description: 'Creates a new institution',
  })
  create(
    @Body()
    institutionToCreate: CreateInstitutionDto,
  ): Promise<Institution> {
    return this.institutionService.create(institutionToCreate)
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @RolesRules(adminRule)
  @Put('institution/:id')
  @ApiOkResponse({
    type: Institution,
    description: 'Updates an existing institution',
  })
  async update(
    @Param('id') id: string,
    @Body() institutionToUpdate: UpdateInstitutionDto,
  ): Promise<Institution> {
    const {
      numberOfAffectedRows,
      updatedInstitution,
    } = await this.institutionService.update(id, institutionToUpdate)

    if (numberOfAffectedRows === 0) {
      throw new NotFoundException(`Institution ${id} does not exist`)
    }

    return updatedInstitution
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @RolesRules(adminRule)
  @Get('institutions')
  @ApiOkResponse({
    type: Institution,
    isArray: true,
    description: 'Gets all existing institutions',
  })
  getAll(): Promise<Institution[]> {
    return this.institutionService.getAll()
  }
}

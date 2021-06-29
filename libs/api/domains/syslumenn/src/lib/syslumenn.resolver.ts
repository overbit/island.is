import { Args, Directive, Query, Resolver } from '@nestjs/graphql'
import { GetHomestaysInput } from './dto/getHomestays.input'
import { Homestay } from './models/homestay'
import { SyslumennService } from './syslumenn.service'
import { OperatingLicense } from './models/operatingLicense'

const cacheTime = process.env.CACHE_TIME || 5

const cacheControlDirective = (ms = cacheTime) => `@cacheControl(maxAge: ${ms})`

@Resolver()
export class SyslumennResolver {
  constructor(private syslumennService: SyslumennService) {}

  @Directive(cacheControlDirective())
  @Query(() => [Homestay])
  getHomestays(@Args('input') input: GetHomestaysInput): Promise<Homestay[]> {
    return this.syslumennService.getHomestays(input.year)
  }

  @Directive(cacheControlDirective())
  @Query(() => [OperatingLicense])
  getOperatingLicenses(): Promise<OperatingLicense[]> {
    return this.syslumennService.getOperatingLicenses()
  }
}

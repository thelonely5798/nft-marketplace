import { Controller, Get, Post, Body, Patch, Param, Delete, CacheTTL, UseInterceptors } from '@nestjs/common';
import { AssetsService } from './assets.service';
import { GetPageQueryDTO } from './dto';
import { CacheInterceptor } from '@nestjs/cache-manager';

@Controller('assets')
export class AssetsController {
  constructor(private readonly assetsService: AssetsService) {}

  @Post("/page-query")
  @CacheTTL(3600)
  @UseInterceptors(CacheInterceptor)
  async getPageQuery(@Body() req: GetPageQueryDTO) {
    return await this.assetsService.getPageQuery(req)
  }
}

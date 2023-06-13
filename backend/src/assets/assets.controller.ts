import { Controller, Get, Post, Body, Patch, Param, Delete, CacheTTL, UseInterceptors, CacheInterceptor } from '@nestjs/common';
import { AssetsService } from './assets.service';
import { GetPageQueryDTO } from './dto';

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

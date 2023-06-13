import { Body, CacheInterceptor, CacheTTL, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { CollectionService } from './collection.service';
import { GetCollectionAssetSearchListPaginationQueryDTO, GetPageQueryDTO } from './dto';

@Controller('collection')
export class CollectionController {
  constructor(private readonly collectionService: CollectionService) {}

  
  @Post("/asset-search-list-pagination-query")
  @UseInterceptors(CacheInterceptor)
  @CacheTTL(3600)
  async getCollectionAssetSearchListPaginationQuery(@Body() req: GetCollectionAssetSearchListPaginationQueryDTO) {
    return this.collectionService.getCollectionAssetSearchListPaginationQuery(req)
  }
  @Post("/page-query")
  @UseInterceptors(CacheInterceptor)
  @CacheTTL(3600)
  async getPageQuery(@Body() req: GetPageQueryDTO) {
    return this.collectionService.getCollectionPageQuery(req.collection)
  }
}

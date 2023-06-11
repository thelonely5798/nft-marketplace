import { Controller, Get, Post, Body, Patch, Param, CacheInterceptor, UseInterceptors } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import axios from "axios"
import { CacheTTL } from '@nestjs/cache-manager';


const _ = require("lodash")

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) { }


  @Get('/:slug/trending-tag-list')
  @UseInterceptors(CacheInterceptor)
  @CacheTTL(3600)
  async getTrendingTagLists(@Param() param: any ) {
    const slug = param.slug
    return await this.categoryService.getTrendingTagLists(slug)
  }

  @CacheTTL(3600)
  @UseInterceptors(CacheInterceptor)
  @Get('/carousel-query')
  async getCarouselQuery() {
    return await this.categoryService.getCarouselQuery()
  }

  // @CacheTTL(3600)
  // @UseInterceptors(CacheInterceptor)
  @Get('/:slug/category-scroller-query')
  async getCategoryScrollerQuery(@Param() param: any) {
    const slug = param.slug
    return await this.categoryService.getCategoryScrollerQuery(slug)
  }
  

}

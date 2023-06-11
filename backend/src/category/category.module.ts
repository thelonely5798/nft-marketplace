import { CacheModule, Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';


@Module({
  imports: [CacheModule.register({isGlobal: true, ttl: 3600})],
  controllers: [CategoryController],
  providers: [CategoryService]
})
export class CategoryModule {}

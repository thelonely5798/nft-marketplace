import { CacheModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EthModule } from './eth/eth.module';
import { EthController } from './eth/eth.controller';
import { ArbModule } from './arb/arb.module';
import { PolygonModule } from './polygon/polygon.module';
import { CategoryModule } from './category/category.module';
import { ConfigModule } from '@nestjs/config';
import { CollectionModule } from './collection/collection.module';
import { AssetsModule } from './assets/assets.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [EthModule, ArbModule, PolygonModule, CategoryModule, ConfigModule.forRoot(), CollectionModule, CacheModule.register({isGlobal: true, ttl: 3600}), AssetsModule, OrdersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

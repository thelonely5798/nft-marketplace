import { CacheModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EthModule } from './eth/eth.module';
import { EthController } from './eth/eth.controller';
import { ArbModule } from './arb/arb.module';
import { PolygonModule } from './polygon/polygon.module';
import { CategoryModule } from './category/category.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [EthModule, ArbModule, PolygonModule, CategoryModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

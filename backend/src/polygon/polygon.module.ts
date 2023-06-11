import { Module } from '@nestjs/common';
import { PolygonService } from './polygon.service';
import { PolygonController } from './polygon.controller';

@Module({
  controllers: [PolygonController],
  providers: [PolygonService]
})
export class PolygonModule {}

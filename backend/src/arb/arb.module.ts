import { Module } from '@nestjs/common';
import { ArbService } from './arb.service';
import { ArbController } from './arb.controller';

@Module({
  controllers: [ArbController],
  providers: [ArbService]
})
export class ArbModule {}

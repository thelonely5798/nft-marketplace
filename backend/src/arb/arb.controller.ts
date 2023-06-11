import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ArbService } from './arb.service';
import { CreateArbDto } from './dto/create-arb.dto';
import { UpdateArbDto } from './dto/update-arb.dto';

@Controller('arb')
export class ArbController {
  constructor(private readonly arbService: ArbService) { }

  @Get('/collection/trading-volume')
  getHottestNFTCollectionsByTradingVolume() {
    return this.arbService.getHottestNFTCollectionsByTradingVolume();
  }

  @Get('/top-seller')
  getTopSeller() {
    return this.arbService.getTopSeller();
  }
}

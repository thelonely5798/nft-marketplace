import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EthService } from './eth.service';
import { CreateEthDto } from './dto/create-eth.dto';
import { UpdateEthDto } from './dto/update-eth.dto';

@Controller('eth')
export class EthController {
  constructor(private readonly ethService: EthService) { }

  @Get('/collection/trading-volume')
  getHottestNFTCollectionsByTradingVolume() {
    return this.ethService.getHottestNFTCollectionsByTradingVolume();
  }

  @Get('/top-seller')
  getTopSeller() {
    return this.ethService.getTopSeller();
  }
}

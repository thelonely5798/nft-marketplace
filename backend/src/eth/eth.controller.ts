import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EthService } from './eth.service';
import { CreateEthDto } from './dto/create-eth.dto';
import { UpdateEthDto } from './dto/update-eth.dto';
import { ethers } from "ethers";

import { OpenSeaSDK, Chain } from "opensea-js";

// This example provider won't let you make transactions, only read-only calls:
const provider = new ethers.JsonRpcProvider(
  "https://mainnet.infura.io"
) as any

const openseaSDK = new OpenSeaSDK(provider, {
  chain: Chain.Mainnet,
  apiKey: 'e2030c99d83e4b8696e20bfdefee5994',
});

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

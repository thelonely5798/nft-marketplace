import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EthService } from './eth.service';
import { CreateEthDto } from './dto/create-eth.dto';
import { UpdateEthDto } from './dto/update-eth.dto';
import { ethers } from "ethers";
import { VerifyContractDTO } from './dto/verify-contract.dto';

const API_ENDPOINT = "https://api-sepolia.etherscan.io/"

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
  @Post("/verify-collection-contract")
  verifyCollectionContract(@Body() body: VerifyContractDTO) {
    return this.ethService.verifyCollectionContract(body)
  }
  
}

import { Injectable } from '@nestjs/common';
import { BaseNftScan } from 'src/core/nftscan';
import axios from 'axios';
import { VerifyContractDTO } from './dto/verify-contract.dto';
import * as fs from 'fs'
import { join } from 'path';
@Injectable()
export class EthService {
  async getHottestNFTCollectionsByTradingVolume(): Promise<any> {
    const request = await BaseNftScan.getEth().get("/v2/collections/rankings?sort_field=volume_1d&sort_direction=desc&limit=20")
    return request.data
  }

  async getTopSeller(): Promise<any> {
    const request = await BaseNftScan.getEth().get("/v2/statistics/ranking/traders?time=1d&trade_type=sell")
    return request.data
  }

  async verifyCollectionContract(req: VerifyContractDTO) {
    try {
      let sourceCode = fs.readFileSync(join(process.cwd(), './src/contracts/Collection.sol'), { encoding: "utf8" })
      console.log(process.env.ETH_API_KEY)
      let data = JSON.stringify({
        'contractaddress': req.contractaddress,
        'codeformat': 'solidity-single-file',
        'contractname': 'Collection',
        'compilerversion': process.env.SOLC_VERSION,
        'optimizationUsed': '0',
        'apikey': process.env.ETH_API_KEY,
        'module': 'contract',
        'action': 'verifysourcecode',
        'sourceCode': sourceCode,
        'constructorArguements': req.constructorArguements
      });
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://api-sepolia.etherscan.io/api',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: data
      };

      const response = await axios.request(config)
      return response.data
    } catch (err) {
      throw err
    }
  }
} 

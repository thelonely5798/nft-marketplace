import { Injectable } from '@nestjs/common';
import { BaseNftScan } from 'src/core/nftscan';

@Injectable()
export class PolygonService {

    async getHottestNFTCollectionsByTradingVolume(): Promise<any> {
        const request = await BaseNftScan.getEth().get("/v2/collections/rankings?sort_field=volume_1d&sort_direction=desc&limit=20")
        return request.data
      }
    
      async getTopSeller(): Promise<any> {
        const request = await BaseNftScan.getEth().get("/v2/statistics/ranking/traders?time=1d&trade_type=sell")
        return request.data
      }
}

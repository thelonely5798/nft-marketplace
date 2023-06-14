import { ResponseInterface, httpRequest } from "~/api/axios";
import { NetworkStrategy, NetworkType } from ".";


export class Arbitrum implements NetworkStrategy {
    createCollection(data: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
    getNetworkType(): NetworkType {
        return NetworkType.Arbitrum
    }
    getName(): string {
       return "Arbitrum"
    }
    getCurrency(): string {
       return "ARB"
    }
    async getCollectionsByTradingVolume(): Promise<ResponseInterface> {
        const request = await httpRequest.get("arb/collection/trading-volume")
        return request.data as ResponseInterface
    }

    async getTopSeller(): Promise<ResponseInterface> {
        const request = await httpRequest.get("arb/top-seller")
        return request.data as ResponseInterface
    }
}
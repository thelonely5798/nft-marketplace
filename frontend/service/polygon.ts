import { ResponseInterface, httpRequest } from "~/api/axios";
import { NetworkStrategy, NetworkType } from ".";


export class Polygon implements NetworkStrategy {
    createCollection(data: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
    getNetworkType(): NetworkType {
        return NetworkType.Arbitrum
    }
    getName(): string {
        return "Polygon"
    }
    getCurrency(): string {
        return "MATIC"
    }
    async getCollectionsByTradingVolume(): Promise<ResponseInterface> {
        const request = await httpRequest.get("polygon/collection/trading-volume")
        return request.data as ResponseInterface
    }

    async getTopSeller(): Promise<ResponseInterface> {
        const request = await httpRequest.get("polygon/top-seller")
        return request.data as ResponseInterface
    }
}
import { ResponseInterface, httpRequest } from "~/api/axios";
import { NetworkStrategy, NetworkType } from ".";


export class Etherum implements NetworkStrategy {
    getNetworkType(): NetworkType {
        return NetworkType.Etherum
    }
    getName(): string {
        return "Ethrerum"
    }
    getCurrency(): string {
        return "ETH"
    }
    async getCollectionsByTradingVolume(): Promise<ResponseInterface> {
        const request = await httpRequest.get("eth/collection/trading-volume")
        return request.data as ResponseInterface
    }

    async getTopSeller(): Promise<ResponseInterface> {
        const request = await httpRequest.get("eth/top-seller")
        return request.data as ResponseInterface
    }
}
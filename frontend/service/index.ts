import { ResponseInterface, httpRequest } from "~/api/axios";
import { Arbitrum } from "./arbitrum";
import { GetCollectionAssetSearchListPaginationQueryDTO } from "~/types";


export enum NetworkType {
    Etherum,
    Polygon,
    Arbitrum,
}

export interface NetworkStrategy {
    getCollectionsByTradingVolume(): Promise<ResponseInterface>
    getTopSeller(): Promise<ResponseInterface>
    getName() : string
    getCurrency(): string
    getNetworkType(): NetworkType
}

export class Network {
    network: NetworkStrategy

    constructor(network: NetworkStrategy) {
        this.network = network
    }
    setNetwork(network: NetworkStrategy) {
        this.network = network        
    }

    getCollectionsByTradingVolume(): Promise<ResponseInterface> {
        return this.network.getCollectionsByTradingVolume()
    }

    getTopSeller(): Promise<ResponseInterface> {
        return this.network.getTopSeller()
    }

    getName(): string {
        return this.network.getName()
    }

    getCurrency(): string {
        return this.network.getCurrency()
    }
    getNetworkType(): NetworkType {
        return this.network.getNetworkType()
    }
    async getCategoryByTrendingTagList(slug: string) {
        const response = await httpRequest.get(`category/${slug}/trending-tag-list`)
        return response.data
    }

    async getCarouselQuery() {
        const response = await httpRequest.get(`category/carousel-query`)
        return response.data
    }

    async getCategoryScrollerQuery(slug: string) {
        const response = await httpRequest.get(`category/${slug}/category-scroller-query`)
        return response.data
    }

    async getCollectionAssetSearchListPaginationQuery(data: GetCollectionAssetSearchListPaginationQueryDTO) {
        const response = await httpRequest.post(`/collection/asset-search-list-pagination-query`, data)
        return response.data
    }

    async getCollectionPageQuery(data: any) {
        const response = await httpRequest.post(`/collection/page-query`, data)
        return response.data
    }

    async getAssetPageQuery(data: any) {
        const response = await httpRequest.post(`/assets/page-query`, data)
        return response.data
    }
}
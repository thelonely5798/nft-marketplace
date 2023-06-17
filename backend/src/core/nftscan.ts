import axios, { AxiosInstance } from "axios"

export enum BaseNftNetworkType  {
    Ethreum,
    Arbitrum,
    Polygon
}
export class BaseNftScan {
    static key: string = "ZpWLKpQnCcVFRQr8TaCcu3wl"

    static getArbitrumOne(): AxiosInstance {
        let instance = axios.create({
            baseURL: "https://arbitrumapi.nftscan.com/api/",
            headers: {
                "X-API-KEY": this.key
            }
        })
        return instance
    }

    static getEth(): AxiosInstance {
        let instance = axios.create({
            baseURL: "https://restapi.nftscan.com/api/",
            headers: {
                "X-API-KEY": this.key
            }
        })
        return instance
    }
}
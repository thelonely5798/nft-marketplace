import { ResponseInterface, httpRequest } from "~/api/axios";
import { NetworkStrategy, NetworkType } from ".";
import Collection from "@/contracts/build/contracts/Collection.json"
import Web3 from 'web3';
import { useUserStore } from "~/store/user";
import { error } from "console";

interface VerifyContractDTO {
    contractaddress: string,
    constructorArguements: string
}

export class Etherum implements NetworkStrategy {
    createCollection(data: any, callback: Function) {
        try {
            const { bytecode, abi } = Collection
            const address = useUserStore().getAddress
            let web3 = new Web3(window.ethereum)
            const { name, symbol } = data
            const contract = new web3.eth.Contract(abi, { from: address, data: bytecode });
            const agrs = [name, symbol]
            contract.deploy({ arguments: agrs as any }).send({
                from: address,
            }).on("error", function (data: any) {
                callback(null, error)
            }).then((newContractInstance: any) => {
                const encodeABIAgrument = web3.eth.abi.encodeParameters(['string', 'string'], agrs);
                const data: VerifyContractDTO = {
                    contractaddress: newContractInstance._address,
                    constructorArguements: encodeABIAgrument
                }
                this.verifyCollectionContract(data).then(() => {
                    callback(newContractInstance, null)
                })
            })
        } catch (err) {
            callback(null, err)
        }
    }
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

    async verifyCollectionContract(data: VerifyContractDTO): Promise<any> {
        const request = await httpRequest.post("eth/verify-collection-contract", data)
        return request.data as ResponseInterface
    }

}
import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";
// Setup


interface IStragegy {
    settings: any
}

class Etherum implements IStragegy {
    settings: any = {
        apiKey: "",
        network: ""
    };
    
}

enum AlchemyNetworkType {
    Etherum,
    Arbitrum,
    Polygon
}
export class BaseAlchemy {
   
}
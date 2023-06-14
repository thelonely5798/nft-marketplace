export interface Category {
    slug: string
    collections: Collection[]
    name: string
}

export interface Collection {
    id: string
    banner: string
    name: string
    verificationStatus: string
    statsV2: StatsV2
    drop?: Drop
    windowCollectionStats: WindowCollectionStats
    slug: string
    isCategory: boolean
}

export interface StatsV2 {
    totalSupply: number
}

export interface Drop {
    stages: Stage[]
    chainData: ChainData
    id: string
}

export interface Stage {
    startTime: string
    endTime: string
    id: string
}

export interface ChainData {
    mintedItemCount: number
    totalItemCount: number
}

export interface WindowCollectionStats {
    floorPrice?: FloorPrice
    volume?: Volume
}

export interface FloorPrice {
    unit: string
    symbol: string
}

export interface Volume {
    unit: string
    symbol: string
}

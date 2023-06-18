export interface CollectionType {
    node: Node
    cursor: string
  }
  
  export interface Node {
    createdDate: string
    name: string
    slug: string
    logo: string
    isVerified: boolean
    relayId: string
    imageUrl: string
    isCategory: boolean
    statsV2: StatsV2
    windowCollectionStats: WindowCollectionStats
    id: string
    __typename: string
  }
  
  export interface StatsV2 {
    totalQuantity: string
  }
  
  export interface WindowCollectionStats {
    floorPrice: FloorPrice
    numOwners: number
    totalSupply: number
    totalListed: number
    numOfSales: string
    volumeChange: number
    volume: Volume
  }
  
  export interface FloorPrice {
    unit: string
    eth: string
    symbol: string
  }
  
  export interface Volume {
    unit: string
    eth: string
    symbol: string
  }
  
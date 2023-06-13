export interface CollectionInfo {
    __typename: string
    id: string
    isSensitiveContent: boolean
    name: string
    description: string
    slug: string
    owner: Owner
    isCategory: boolean
    imageUrl: string
    bannerImageUrl: string
    representativeAsset: RepresentativeAsset
    assetContracts: AssetContracts
    verificationStatus: string
    relayId: string
    drop: any
    discordUrl: any
    externalUrl: string
    instagramUsername: any
    mediumUsername: any
    telegramUrl: any
    twitterUsername: any
    connectedInstagramUsername: any
    connectedTwitterUsername: string
    isCollectionOffersEnabled: boolean
    metadata: any
    statsV2: StatsV2
    collectionOffers: CollectionOffers
    numOpenCriteriaOffers: string
    totalCriteriaOfferVolume: TotalCriteriaOfferVolume
    category: Category
    createdDate: string
    totalCreatorFeeBasisPoints: number
    defaultChain: DefaultChain
    connectedDiscordGuildId: any
    nativePaymentAsset: NativePaymentAsset
    inspiredBy: InspiredBy
    enabledRarities: any[]
    isVerified: boolean
  }
  
  export interface Owner {
    address: string
    displayName: string
    id: string
    config: string
    isCompromised: boolean
    user: User
    imageUrl: string
  }
  
  export interface User {
    publicUsername: string
    id: string
  }
  
  export interface RepresentativeAsset {
    assetContract: AssetContract
    id: string
  }
  
  export interface AssetContract {
    openseaVersion: any
    id: string
  }
  
  export interface AssetContracts {
    edges: Edge[]
  }
  
  export interface Edge {
    node: Node
  }
  
  export interface Node {
    __typename: string
    id: string
    blockExplorerLink: string
    chainData: ChainData
    address: string
  }
  
  export interface ChainData {
    blockExplorer: BlockExplorer
  }
  
  export interface BlockExplorer {
    name: string
    identifier: string
  }
  
  export interface StatsV2 {
    totalListed: number
    numOwners: number
    totalSupply: number
    totalQuantity: string
    totalVolume: TotalVolume
    floorPrice: FloorPrice
    hasFungibles: boolean
  }
  
  export interface TotalVolume {
    unit: string
    symbol: string
  }
  
  export interface FloorPrice {
    unit: string
    eth: string
    symbol: string
    usd: string
  }
  
  export interface CollectionOffers {
    edges: Edge2[]
  }
  
  export interface Edge2 {
    node: Node2
  }
  
  export interface Node2 {
    perUnitPriceType: PerUnitPriceType
    id: string
  }
  
  export interface PerUnitPriceType {
    unit: string
    symbol: string
  }
  
  export interface TotalCriteriaOfferVolume {
    unit: string
    symbol: string
  }
  
  export interface Category {
    slug: string
  }
  
  export interface DefaultChain {
    displayName: string
    identifier: string
  }
  
  export interface NativePaymentAsset {
    symbol: string
    id: string
  }
  
  export interface InspiredBy {
    edges: any[]
  }
  
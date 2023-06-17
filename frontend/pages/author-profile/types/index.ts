export interface AssetType {
    node: Node
    cursor: string
  }
  
  export interface Node {
    __typename: string
    relayId: string
    __isItemType: string
    orderData: OrderData
    chain: Chain
    isDelisted: boolean
    totalQuantity: string
    collection: Collection
    assetContract: AssetContract
    tokenId: string
    name: any
    animationUrl: any
    displayImageUrl: string
    imageUrl?: string
    backgroundColor: any
    decimals: number
    ownedQuantity: string
    assetEventData: AssetEventData
    bestAllTypeBid: BestAllTypeBid
    mintEvent: MintEvent
    defaultRarityData: any
    largestOwner: LargestOwner
    isCurrentlyFungible: boolean
    isListable: boolean
    verificationStatus: string
    isReportedSuspicious: boolean
    isCompromised: boolean
    ownership: Ownership
    assetCollection: AssetCollection
    lastCostEvent: LastCostEvent
    pnl: Pnl
    acceptOfferDisabled: any
    displayName: string
    isBiddingEnabled: IsBiddingEnabled
    __isNode: string
    id: string
  }
  
  export interface OrderData {
    bestAskV2: any
    bestBidV2: any
    bestAskForOwnerItemCard: any
    bestAskForOwner: any
  }
  
  export interface Chain {
    identifier: string
    displayName: string
  }
  
  export interface Collection {
    slug: string
    relayId: string
    isVerified: boolean
    isCollectionOffersEnabled: boolean
    defaultChain: DefaultChain
    id: string
    displayData: DisplayData
    enabledRarities: any[]
    name: string
    isCategory: boolean
    logo: string
    statsV2: StatsV2
    verificationStatus: string
    isCreatorFeesEnforced: boolean
    totalCreatorFeeBasisPoints: number
  }
  
  export interface DefaultChain {
    identifier: string
  }
  
  export interface DisplayData {
    cardDisplayStyle: string
  }
  
  export interface StatsV2 {
    floorPrice: FloorPrice
  }
  
  export interface FloorPrice {
    eth: string
  }
  
  export interface AssetContract {
    address: string
    id: string
    chain: string
    blockExplorerLink: string
  }
  
  export interface AssetEventData {
    lastSale: LastSale
  }
  
  export interface LastSale {
    unitPriceQuantity: UnitPriceQuantity
  }
  
  export interface UnitPriceQuantity {
    asset: Asset
    quantity: string
    id: string
  }
  
  export interface Asset {
    decimals: number
    symbol: string
    usdSpotPrice: number
    id: string
  }
  
  export interface BestAllTypeBid {
    perUnitPriceType: PerUnitPriceType
    id: string
    relayId: string
    side: string
    orderType: string
    item: Item
    maker: Maker
  }
  
  export interface PerUnitPriceType {
    unit: string
    symbol: string
    eth: string
  }
  
  export interface Item {
    __typename: string
    acceptOfferDisabled: any
    collection: Collection2
    chain: Chain2
    ownedQuantity: string
    __isItemType: string
    relayId: string
    tokenId: string
    assetContract: AssetContract2
    __isNode: string
    id: string
  }
  
  export interface Collection2 {
    statsV2: StatsV22
    id: string
  }
  
  export interface StatsV22 {
    floorPrice: FloorPrice2
  }
  
  export interface FloorPrice2 {
    eth: string
  }
  
  export interface Chain2 {
    identifier: string
  }
  
  export interface AssetContract2 {
    address: string
    id: string
  }
  
  export interface Maker {
    address: string
    id: string
  }
  
  export interface MintEvent {
    perUnitPrice: PerUnitPrice
    id: string
  }
  
  export interface PerUnitPrice {
    unit: string
    symbol: string
  }
  
  export interface LargestOwner {
    owner: Owner
    id: string
  }
  
  export interface Owner {
    address: string
    config: any
    isCompromised: boolean
    user: User
    displayName: string
    imageUrl: string
    id: string
  }
  
  export interface User {
    publicUsername: string
    id: string
  }
  
  export interface Ownership {
    isPrivate: boolean
    quantity: string
  }
  
  export interface AssetCollection {
    name: string
    slug: string
    verificationStatus: string
    isCategory: boolean
    id: string
    statsV2: StatsV23
  }
  
  export interface StatsV23 {
    floorPrice: FloorPrice3
  }
  
  export interface FloorPrice3 {
    unit: string
    symbol: string
  }
  
  export interface LastCostEvent {
    transaction: Transaction
    id: string
  }
  
  export interface Transaction {
    blockExplorerLink: string
    id: string
  }
  
  export interface Pnl {
    costPrice: CostPrice
    pnlPrice: any
  }
  
  export interface CostPrice {
    unit: string
    symbol: string
  }
  
  export interface IsBiddingEnabled {
    value: boolean
    reason: any
  }
  
  export interface Profile {
    account: Account
    campaignAnnouncementModal: CampaignAnnouncementModal[]
    collection: any
  }
  
  export interface Account {
    address: string
    bannerImageUrl: string
    displayName: string
    user: User
    metadata: Metadata
    config: any
    isCompromised: boolean
    bio: any
    names: any[]
    canViewVerificationForm: boolean
    verificationRequest: any
    relayId: string
    imageUrl: string
    connectedTwitterUsername: string
    connectedInstagramUsername: any
    shelves: any[]
    id: string
  }
  
  export interface User {
    username: string
    publicUsername: string
    id: string
    dateJoined: string
    favoriteAssetCount: number
  }
  
  export interface Metadata {
    isBanned: boolean
    isDisabled: boolean
    instagramUsername: string
    twitterUsername: any
    websiteUrl: string
  }
  
  export interface CampaignAnnouncementModal {
    campaignId: string
    title: string
    description: string
    overrideUrl: string
    ctaText: string
    ctaUrl: string
    id: string
  }
  
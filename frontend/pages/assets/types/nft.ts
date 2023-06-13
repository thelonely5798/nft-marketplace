export interface NftInterface {
    __isItemType: string
    relayId: string
    __typename: string
    chain: Chain
    decimals: number
    favoritesCount: number
    isDelisted: boolean
    isFrozen: boolean
    hasUnlockableContent: boolean
    isFavorite: boolean
    animationUrl: any
    imageUrl: string
    imageStorageUrl: string
    tokenId: string
    name: string
    authenticityMetadata: any
    creator: Creator
    assetContract: AssetContract
    backgroundColor: any
    collection: Collection
    description: string
    numVisitors: number
    isListable: boolean
    isReportedSuspicious: boolean
    isSensitiveContent: boolean
    isUnderReview: boolean
    isCompromised: boolean
    isBiddingEnabled: IsBiddingEnabled
    tradeSummary: TradeSummary
    acceptHighestOffer: AcceptHighestOffer
    traits: Traits
    defaultRarityData: DefaultRarityData
    displayImageUrl: string
    externalLink: any
    metadataStatus: string
    frozenAt: any
    tokenMetadata: string
    lastUpdatedAt: string
    totalCreatorFee: number
    ownedQuantity: string
    assetOwners: AssetOwners
    totalQuantity: string
    isCurrentlyFungible: boolean
    verificationStatus: string
    largestOwner: LargestOwner
    acceptOfferDisabled: any
    isFastPollingEnabled: boolean
    displayName: string
    isEditable: IsEditable
    id: string
    bestListings: BestListings
    bestOffers: BestOffers
  }
  
  export interface Chain {
    identifier: string
  }
  
  export interface Creator {
    address: string
    id: string
    user: User
    displayName: string
    config: string
    isCompromised: boolean
    imageUrl: string
  }
  
  export interface User {
    publicUsername: string
    id: string
  }
  
  export interface AssetContract {
    address: string
    chain: string
    blockExplorerLink: string
    id: string
    openseaVersion: any
    tokenStandard: string
  }
  
  export interface Collection {
    description: string
    isSensitiveContent: boolean
    displayData: DisplayData
    category: Category
    hidden: boolean
    imageUrl: string
    name: string
    slug: string
    verificationStatus: string
    isCategory: boolean
    numericTraits: any[]
    statsV2: StatsV2
    relayId: string
    discordUrl: string
    externalUrl: string
    instagramUsername: any
    mediumUsername: string
    telegramUrl: any
    twitterUsername: any
    connectedTwitterUsername: string
    assetContracts: AssetContracts
    enabledRarities: string[]
    inspiredBy: InspiredBy
    id: string
    openseaSellerFeeBasisPoints: number
    isCreatorFeesEnforced: boolean
    logo: string
    totalCreatorFeeBasisPoints: number
  }
  
  export interface DisplayData {
    cardDisplayStyle: string
  }
  
  export interface Category {
    slug: string
  }
  
  export interface StatsV2 {
    totalSupply: number
    hasFungibles: boolean
    floorPrice: FloorPrice
  }
  
  export interface FloorPrice {
    eth: string
  }
  
  export interface AssetContracts {
    edges: Edge[]
  }
  
  export interface Edge {
    node: Node
  }
  
  export interface Node {
    blockExplorerLink: string
    chainData: ChainData
    id: string
  }
  
  export interface ChainData {
    blockExplorer: BlockExplorer
  }
  
  export interface BlockExplorer {
    name: string
    identifier: string
  }
  
  export interface InspiredBy {
    edges: any[]
  }
  
  export interface IsBiddingEnabled {
    value: boolean
    reason: any
  }
  
  export interface TradeSummary {
    bestAsk: BestAsk
    bestBid: BestBid
  }
  
  export interface BestAsk {
    closedAt: string
    orderType: string
    priceType: PriceType
    maker: Maker
    relayId: string
    taker: any
    id: string
    dutchAuctionFinalPriceType: any
    openedAt: string
    priceFnEndedAt: any
    englishAuctionReservePriceType: any
    item: Item
    remainingQuantityType: string
    perUnitPriceType: PerUnitPriceType
    payment: Payment
    makerOwnedQuantity: string
    supportsGiftingOnPurchase: boolean
    __typename: string
  }
  
  export interface PriceType {
    usd: string
    unit: string
  }
  
  export interface Maker {
    address: string
    id: string
    relayId: string
  }
  
  export interface Item {
    __typename: string
    verificationStatus: string
    relayId: string
    chain: Chain2
    tokenId: string
    isCurrentlyFungible: boolean
    assetContract: AssetContract2
    collection: Collection2
    __isItemType: string
    __isNode: string
    id: string
    displayName: string
    animationUrl: any
    displayImageUrl: string
    imageUrl: string
    isDelisted: boolean
    backgroundColor: any
    decimals: number
    totalCreatorFee: number
    isReportedSuspicious: boolean
  }
  
  export interface Chain2 {
    identifier: string
  }
  
  export interface AssetContract2 {
    address: string
    id: string
    blockExplorerLink: string
  }
  
  export interface Collection2 {
    slug: string
    id: string
    name: string
    verificationStatus: string
    isCategory: boolean
    displayData: DisplayData2
    enabledRarities: string[]
    openseaSellerFeeBasisPoints: number
    isCreatorFeesEnforced: boolean
    isSafelisted: boolean
  }
  
  export interface DisplayData2 {
    cardDisplayStyle: string
  }
  
  export interface PerUnitPriceType {
    usd: string
    unit: string
  }
  
  export interface Payment {
    symbol: string
    relayId: string
    asset: Asset
    id: string
  }
  
  export interface Asset {
    relayId: string
    id: string
  }
  
  export interface BestBid {
    __typename: string
    id: string
    priceType: PriceType2
    perUnitPriceType: PerUnitPriceType2
    dutchAuctionFinalPriceType: any
    openedAt: string
    closedAt: string
    payment: Payment2
    relayId: string
  }
  
  export interface PriceType2 {
    unit: string
    usd: string
  }
  
  export interface PerUnitPriceType2 {
    unit: string
    usd: string
    symbol: string
  }
  
  export interface Payment2 {
    symbol: string
    id: string
    relayId: string
  }
  
  export interface AcceptHighestOffer {
    bestBid: BestBid2
  }
  
  export interface BestBid2 {
    relayId: string
    id: string
    item: Item2
    perUnitPriceType: PerUnitPriceType3
    side: string
    orderType: string
    maker: Maker2
  }
  
  export interface Item2 {
    __typename: string
    __isItemType: string
    relayId: string
    chain: Chain3
    tokenId: string
    assetContract: AssetContract3
    __isNode: string
    id: string
    acceptOfferDisabled: any
    collection: Collection3
    ownedQuantity: string
  }
  
  export interface Chain3 {
    identifier: string
  }
  
  export interface AssetContract3 {
    address: string
    id: string
  }
  
  export interface Collection3 {
    statsV2: StatsV22
    id: string
  }
  
  export interface StatsV22 {
    floorPrice: FloorPrice2
  }
  
  export interface FloorPrice2 {
    eth: string
  }
  
  export interface PerUnitPriceType3 {
    unit: string
    symbol: string
    eth: string
  }
  
  export interface Maker2 {
    address: string
    id: string
  }
  
  export interface Traits {
    edges: Edge2[]
  }
  
  export interface Edge2 {
    node: Node2
  }
  
  export interface Node2 {
    relayId: string
    displayType: any
    floatValue: any
    intValue: any
    traitType: string
    value: string
    traitCount: number
    maxValue: any
    id: string
  }
  
  export interface DefaultRarityData {
    rank: number
    rankPercentile: number
    rankCount: number
    maxRank: number
    id: string
  }
  
  export interface AssetOwners {
    edges: Edge3[]
    count: number
  }
  
  export interface Edge3 {
    node: Node3
  }
  
  export interface Node3 {
    quantity: string
    owner: Owner
    id: string
  }
  
  export interface Owner {
    address: string
    config: any
    isCompromised: boolean
    user: User2
    displayName: string
    imageUrl: string
    id: string
  }
  
  export interface User2 {
    publicUsername: string
    id: string
  }
  
  export interface LargestOwner {
    owner: Owner2
    id: string
  }
  
  export interface Owner2 {
    address: string
    id: string
  }
  
  export interface IsEditable {
    value: boolean
  }
  
  export interface BestListings {
    edges: any[]
    pageInfo: PageInfo
  }
  
  export interface PageInfo {
    endCursor: any
    hasNextPage: boolean
  }
  
  export interface BestOffers {
    edges: any[]
    pageInfo: PageInfo2
  }
  
  export interface PageInfo2 {
    endCursor: any
    hasNextPage: boolean
  }
  
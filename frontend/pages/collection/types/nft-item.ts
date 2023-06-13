import { GetCollectionAssetSearchListPaginationQueryDTO } from "~/types"

export interface NftItem {
    __typename: string
    __isItemType: string
    orderData: OrderData
    relayId: string
    chain: Chain2
    isDelisted: boolean
    totalQuantity: string
    collection: Collection2
    assetContract: AssetContract2
    tokenId: string
    name: string
    animationUrl: any
    displayImageUrl: string
    imageUrl: string
    backgroundColor: any
    decimals: number
    assetEventData: AssetEventData
    defaultRarityData: DefaultRarityData
    largestOwner: LargestOwner
    isCurrentlyFungible: boolean
    isListable: boolean
    verificationStatus: string
    isReportedSuspicious: boolean
    isCompromised: boolean
    __isNode: string
    id: string
  }
  
  export interface OrderData {
    bestAskV2: BestAskV2
    bestBidV2: any
  }
  
  export interface BestAskV2 {
    __typename: string
    id: string
    priceType: PriceType
    orderType: string
    maker: Maker
    perUnitPriceType: PerUnitPriceType
    dutchAuctionFinalPriceType: any
    openedAt: string
    closedAt: string
    payment: Payment
    item: Item
    relayId: string
    makerOwnedQuantity: string
    remainingQuantityType: string
    supportsGiftingOnPurchase: boolean
    createdDate: string
  }
  
  export interface PriceType {
    eth: string
    unit: string
    usd: string
  }
  
  export interface Maker {
    address: string
    id: string
    relayId: string
  }
  
  export interface PerUnitPriceType {
    unit: string
    usd: string
    symbol: string
  }
  
  export interface Payment {
    symbol: string
    id: string
    relayId: string
    usdPrice: string
  }
  
  export interface Item {
    __typename: string
    isCurrentlyFungible: boolean
    __isNode: string
    id: string
    __isItemType: string
    relayId: string
    chain: Chain
    tokenId: string
    assetContract: AssetContract
    displayName: string
    collection: Collection
    animationUrl: any
    displayImageUrl: string
    imageUrl: string
    isDelisted: boolean
    backgroundColor: any
    decimals: number
    totalCreatorFee: number
    verificationStatus: string
    isReportedSuspicious: boolean
  }
  
  export interface Chain {
    identifier: string
  }
  
  export interface AssetContract {
    address: string
    id: string
    blockExplorerLink: string
  }
  
  export interface Collection {
    name: string
    slug: string
    verificationStatus: string
    isCategory: boolean
    id: string
    displayData: DisplayData
    enabledRarities: string[]
    openseaSellerFeeBasisPoints: number
    isCreatorFeesEnforced: boolean
    isSafelisted: boolean
  }
  
  export interface DisplayData {
    cardDisplayStyle: string
  }
  
  export interface Chain2 {
    identifier: string
  }
  
  export interface Collection2 {
    slug: string
    relayId: string
    isVerified: boolean
    isCollectionOffersEnabled: boolean
    defaultChain: DefaultChain
    id: string
    displayData: DisplayData2
    enabledRarities: string[]
    name: string
    isCategory: boolean
    logo: string
  }
  
  export interface DefaultChain {
    identifier: string
  }
  
  export interface DisplayData2 {
    cardDisplayStyle: string
  }
  
  export interface AssetContract2 {
    address: string
    id: string
    chain: string
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
  
  export interface DefaultRarityData {
    rank: number
    rankPercentile: number
    rankCount: number
    maxRank: number
    id: string
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
  

  export const Default: GetCollectionAssetSearchListPaginationQueryDTO = {
    "count": 32,
    "cursor": null,
    "numericTraits": null,
    "owner": null,
    "paymentAssets": null,
    "priceFilter": null,
    "query": null,
    "rarityFilter": null,
    "resultModel": "ASSETS",
    "safelistRequestStatuses": null,
    "shouldShowBestBid": false,
    "sortAscending": true,
    "sortBy": "UNIT_PRICE",
    "stringTraits": null,
    "toggles": [],
    "collections" : []
  }
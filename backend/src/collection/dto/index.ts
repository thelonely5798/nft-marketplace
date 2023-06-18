export interface GetCollectionAssetSearchListPaginationQueryDTO {
    collections: string[]
    count: number
    cursor: any
    numericTraits: any
    owner: any
    paymentAssets: any
    priceFilter: any
    query: any
    rarityFilter: any
    resultModel: string
    safelistRequestStatuses: any
    shouldShowBestBid: boolean
    sortAscending: boolean
    sortBy: string
    stringTraits: any
    toggles: string[]
  }
  export interface GetPageQueryDTO {
    collection: string
  }

  export interface GetCollectionsRankingsByTrendingDTO {
    chain: any
    count: number
    cursor: any
    categories: any[]
    eligibleCount: number
    trendingCollectionsSortBy: string
    timeWindow: string
}


export interface GetCollectionsRankingsByTopDTO {
    chain: any
    count: number
    cursor: any
    sortBy: string
    topCollectionsSortBy: string
    categories: any[]
    timeWindow: string
    parents: any
    createdAfter: any
  }
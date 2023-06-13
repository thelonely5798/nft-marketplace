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
  
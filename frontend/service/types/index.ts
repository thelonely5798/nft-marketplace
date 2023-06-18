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
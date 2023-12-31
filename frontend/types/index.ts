export interface NftInterface {
  contract_address: string
  name: string
  symbol: string
  description: string
  website: string
  email: any
  twitter: string
  discord: string
  telegram: any
  github: any
  instagram: string
  medium: any
  logo_url: string
  banner_url: string
  featured_url: any
  large_image_url: any
  attributes: any
  erc_type: string
  deploy_block_number: number
  owner: string
  verified: boolean
  opensea_verified: boolean
  royalty: any
  items_total: number
  amounts_total: number
  owners_total: number
  opensea_floor_price: number
  floor_price: number
  collections_with_same_name: any
  price_symbol: string
  volume_total: number
  sales_total: number
  average_price: number
}

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



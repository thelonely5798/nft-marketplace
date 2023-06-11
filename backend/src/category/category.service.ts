import { CacheTTL } from '@nestjs/cache-manager';
import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import axios from 'axios';
import { Cache, memoryStore } from 'cache-manager';

const _ = require("lodash")
@Injectable()
export class CategoryService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) { }


  async getTrendingTagLists(slug: string) {

    const tags = await this.getTrendingCategoryTagShelvesSectionQuery(slug)
    const options = {
      method: 'POST',
      url: 'https://opensea-graphql3.p.rapidapi.com/__api/graphQL',
      headers: {
        'content-type': 'application/json',
        'X-Signed-Query': 'cfea80d19696f90f3774fd364dd4538759107fbc3ad5a0fbc8743e8180c456e9',
        'X-RapidAPI-Key': process.env.X_RapidAPI_Key,
        'X-RapidAPI-Host': 'opensea-graphql3.p.rapidapi.com'
      },
      data: {
        "id": "TrendingTagListQuery",
        "query": "query TrendingTagListQuery(\n  $categories: [CategoryV2Slug!]!\n  $tags: [TagSlug!]!\n) {\n  trendingCollectionsByCategoryTagBatched(categories: $categories, tags: $tags) {\n    collection {\n      id\n      ...HomePageCollectionCard_data_4ieMhw\n    }\n    tag {\n      slug\n      id\n    }\n  }\n}\n\nfragment HomePageCollectionCardFooter_data_4ieMhw on CollectionType {\n  windowCollectionStats(statsTimeWindow: SEVEN_DAY) {\n    floorPrice {\n      unit\n      symbol\n    }\n    volume {\n      unit\n      symbol\n    }\n  }\n}\n\nfragment HomePageCollectionCard_data_4ieMhw on CollectionType {\n  banner\n  name\n  verificationStatus\n  ...useDropState_data\n  ...HomePageCollectionCardFooter_data_4ieMhw\n  ...collection_url\n}\n\nfragment collection_url on CollectionType {\n  slug\n  isCategory\n}\n\nfragment useDropState_data on CollectionType {\n  statsV2 {\n    totalSupply\n  }\n  drop {\n    stages {\n      startTime\n      endTime\n      id\n    }\n    chainData {\n      mintedItemCount\n      totalItemCount\n    }\n    id\n  }\n}\n",
        "variables": {
          "categories": [
            slug
          ],
          "tags": tags.map(t => t.slug)
        }
      }
    }

    try {

      const response = await axios.request(options)
      const data = _.chain(response.data.data.trendingCollectionsByCategoryTagBatched)
        .groupBy('tag.slug')
        .map((value, key) => ({ slug: key, collections: value.map(v => v.collection), name: _.chain(key).capitalize().split("-").join(" ").value() }))
        .value()

      return data

    } catch (error) {
      return error.message
    }
  }
  async getTrendingCategoryTagShelvesSectionQuery(categorySlug: string) {
    const options = {
      method: 'POST',
      url: 'https://opensea-graphql3.p.rapidapi.com/__api/graphQL',
      headers: {
        'content-type': 'application/json',
        'X-Signed-Query': '585d8cdde65e1c7a81783591e03ee97cc80b74dc24b68843b7ee0f5a0429e405',
        'X-RapidAPI-Key': process.env.X_RapidAPI_Key,
        'X-RapidAPI-Host': 'opensea-graphql3.p.rapidapi.com'
      },
      data: {
        "id": "TrendingCategoryTagShelvesSectionQuery",
        "query": "query TrendingCategoryTagShelvesSectionQuery(\n  $categorySlug: CategoryV2Slug!\n) {\n  trendingTagsByCategory(category: $categorySlug) {\n    slug\n    id\n  }\n}\n",
        "variables": {
          "categorySlug": categorySlug
        }
      }
    }

    try {
      const cache = await this.cacheManager.get("Category_getTrendingCategoryTagShelvesSectionQuery_" + categorySlug)

      if (cache) {
        return cache
      }

      const response = await axios.request(options)
      const data = response.data.data.trendingTagsByCategory


      return data

    } catch (error) {
      return error.message
    }
  }
  async getCarouselQuery() {

    const options = {
      method: 'POST',
      url: 'https://opensea-graphql3.p.rapidapi.com/__api/graphQL',
      headers: {
        'content-type': 'application/json',
        'X-Signed-Query': 'b1ae81f82ee1d1a05472fbdf954561540c69fd1c45addae7f82eceef1e930f5d',
        'X-RapidAPI-Key': process.env.X_RapidAPI_Key,
        'X-RapidAPI-Host': 'opensea-graphql3.p.rapidapi.com'
      },
      data: {
        "id": "CategoryCarouselQuery",
        "query": "query CategoryCarouselQuery {\n  categoriesV2 {\n    slug\n    imageUrl\n    name\n  }\n}\n",
        "variables": {}
      }
    }

    try {
      const response = await axios.request(options)
      const data = response.data.data.categoriesV2
      return data

    } catch (error) {
      return error.message
    }
  }

  async getCategoryPageQuery(slug: string) {
    const options = {
      method: 'POST',
      url: 'https://opensea-graphql3.p.rapidapi.com/__api/graphQL',
      headers: {
        'content-type': 'application/json',
        'X-Signed-Query': '605bccd74948340483203ee9134827a7cb0f3d02aaf9e070541b6c07ba9c6cf4',
        'X-RapidAPI-Key': process.env.X_RapidAPI_Key,
        'X-RapidAPI-Host': 'opensea-graphql3.p.rapidapi.com'
      },
      data: {
        "id": "CategoryPageQuery",
        "query": "query CategoryPageQuery(\n  $categories: [CategorySlug!]\n  $collections: [CollectionSlug!]\n  $collection: CollectionSlug!\n  $categorySlug: CategoryV2Slug!\n  $doesCollectionExist: Boolean!\n) {\n  collection(collection: $collection) @include(if: $doesCollectionExist) {\n    ...CollectionEditToolbar_data\n    bannerImageUrl\n    name\n    description\n    imageUrl\n    ...CategoryHeader_data\n    id\n  }\n  categoryPageCarousel(category: $categorySlug) {\n    collection {\n      bannerImageUrl\n      id\n    }\n    overrideUrl\n    id\n  }\n  ...TrendingCollectionsList_data_34SC5f\n  ...CategoryCollectionsList_data_3ixBY8\n  ...CategoryFeaturedCarousel_data_JLpAT\n  ...CampaignAnnouncementModal_data\n}\n\nfragment AccountLink_data on AccountType {\n  address\n  config\n  isCompromised\n  user {\n    publicUsername\n    id\n  }\n  displayName\n  ...ProfileImage_data\n  ...wallet_accountKey\n  ...accounts_url\n}\n\nfragment Banner_data on CollectionType {\n  slug\n  ...HeroStageText_data\n  ...collection_url\n  externalUrl\n  ...useDropState_data\n  metadata {\n    custom {\n      isMockDrop\n      overrideName\n    }\n    hero {\n      ...PrimaryDropHeroMedia_data\n      partnerLogoUrl\n    }\n  }\n  drop {\n    ...useShouldShowReminder_data\n    landingPageReady\n    name\n    chainData {\n      totalItemCount\n    }\n    stages {\n      stageType\n      priceType {\n        unit\n        symbol\n      }\n      id\n    }\n    id\n  }\n  verificationStatus\n  owner {\n    config\n    displayName\n    ...AccountLink_data\n    id\n  }\n}\n\nfragment CampaignAnnouncementModal_data on Query {\n  campaignAnnouncementModal {\n    campaignId\n    title\n    description\n    overrideUrl\n    ctaText\n    ctaUrl\n    id\n  }\n}\n\nfragment CategoryCollectionsList_data_3ixBY8 on Query {\n  collections(parents: $collections, first: 12, sortBy: CREATED_DATE) {\n    edges {\n      node {\n        ...CollectionsList_data_3f0GYR\n        logo\n        banner\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment CategoryFeaturedCarouselSlide_data on CategoryPageCarouselType {\n  ...HeaderCollectionItemCategory_data\n  overrideUrl\n  collection {\n    slug\n    name\n    ...Banner_data\n    ...CategorySpotlightBanner_data\n    ...PrimaryDropProviderMintProgress_data\n    ...useDropState_data\n    id\n  }\n}\n\nfragment CategoryFeaturedCarousel_data_JLpAT on Query {\n  categoryPageCarousel(category: $categorySlug) {\n    ...CategoryFeaturedCarouselSlide_data\n    collection {\n      name\n      logo\n      bannerImageUrl\n      ...CategorySpotlightBanner_data\n      id\n    }\n    overrideUrl\n    ...HeaderCollectionItemCategory_data\n    id\n  }\n}\n\nfragment CategoryHeader_data on CollectionType {\n  name\n  bannerImageUrl\n  description\n}\n\nfragment CategorySpotlightBanner_data on CollectionType {\n  ...collection_url\n  assetCount\n  name\n  bannerImageUrl\n  logo\n  verificationStatus\n  owner {\n    config\n    displayName\n    ...AccountLink_data\n    id\n  }\n  statsV2 {\n    floorPrice {\n      unit\n      symbol\n    }\n  }\n  metadata {\n    hero {\n      ...PrimaryDropHeroMedia_data\n    }\n  }\n}\n\nfragment CollectionEditToolbar_data on CollectionType {\n  slug\n  drop {\n    status\n    id\n  }\n  representativeAsset {\n    assetContract {\n      openseaVersion\n      id\n    }\n    id\n  }\n  ...collection_url\n}\n\nfragment CollectionsList_ListItem_data_3f0GYR on CollectionType {\n  relayId\n  ...GlobalCollectionCard_data_3f0GYR\n}\n\nfragment CollectionsList_data_3f0GYR on CollectionType {\n  relayId\n  ...CollectionsList_ListItem_data_3f0GYR\n}\n\nfragment GlobalCollectionCard_data_3f0GYR on CollectionType {\n  logo\n  banner\n  name\n  verificationStatus\n  ...collection_url\n}\n\nfragment HeaderCollectionItemCategory_data on CategoryPageCarouselType {\n  collection {\n    slug\n    name\n    logo\n    ...collection_url\n    verificationStatus\n    statsV2 {\n      floorPrice {\n        unit\n        symbol\n      }\n    }\n    id\n  }\n  shortDescription\n  overrideUrl\n}\n\nfragment HeroMedia_data on MediaType {\n  __isMediaType: __typename\n  ...PrimaryDropsBannerImage_data\n  ... on ImageMediaType {\n    mediaType\n  }\n  ... on VideoMediaType {\n    aspectRatio\n    mediaType\n    thumbnailUrl\n    videoUrl\n  }\n  ... on MuxVideoMediaType {\n    aspectRatio\n    mediaType\n    thumbnailUrl\n    playbackId\n  }\n}\n\nfragment HeroStageText_data on CollectionType {\n  ...useDropState_data\n  drop {\n    ctaStage {\n      ...StageStartCountdown_stage\n      id\n    }\n    id\n  }\n}\n\nfragment PrimaryDropHeroMedia_data on HeroMetadataType {\n  desktopHeroMedia {\n    __typename\n    ...HeroMedia_data\n  }\n  mobileHeroMedia {\n    __typename\n    ...HeroMedia_data\n  }\n}\n\nfragment PrimaryDropProviderMintProgress_data on CollectionType {\n  relayId\n  statsV2 {\n    totalSupply\n  }\n  drop {\n    isOpenEdition\n    chainData {\n      mintedItemCount\n      totalItemCount\n    }\n    id\n  }\n}\n\nfragment PrimaryDropsBannerImage_data on MediaType {\n  __isMediaType: __typename\n  ... on ImageMediaType {\n    mediaType\n    imageUrl\n  }\n  ... on VideoMediaType {\n    mediaType\n    thumbnailUrl\n  }\n  ... on MuxVideoMediaType {\n    mediaType\n    thumbnailUrl\n  }\n}\n\nfragment ProfileImage_data on AccountType {\n  imageUrl\n}\n\nfragment StageStartCountdown_stage on DropStageType {\n  startTime\n}\n\nfragment TrendingCollectionsList_data_34SC5f on Query {\n  trendingCollections(categories: $categories, first: 12) {\n    edges {\n      node {\n        ...CollectionsList_data_3f0GYR\n        logo\n        banner\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment accounts_url on AccountType {\n  address\n  user {\n    publicUsername\n    id\n  }\n}\n\nfragment collection_url on CollectionType {\n  slug\n  isCategory\n}\n\nfragment useDropState_data on CollectionType {\n  statsV2 {\n    totalSupply\n  }\n  drop {\n    stages {\n      startTime\n      endTime\n      id\n    }\n    chainData {\n      mintedItemCount\n      totalItemCount\n    }\n    id\n  }\n}\n\nfragment useShouldShowReminder_data on DropType {\n  stages {\n    ...useUpcomingStages_data\n    startTime\n    id\n  }\n}\n\nfragment useUpcomingStages_data on DropStageType {\n  startTime\n  endTime\n}\n\nfragment wallet_accountKey on AccountType {\n  address\n}\n",
        "variables": {
          "categories": [
            slug
          ],
          "collections": [
            slug
          ],
          "collection": slug,
          "categorySlug": slug,
          "doesCollectionExist": true
        }
      }
    }

    try {
      const response = await axios.request(options)
      const data = response.data.data.categoriesV2
      return data

    } catch (error) {
      return error.message
    }
  }

  async getCategoryScrollerQuery(slug: string) {
    const options = {
      method: 'POST',
      url: 'https://opensea-graphql3.p.rapidapi.com/__api/graphQL',
      headers: {
        'content-type': 'application/json',
        'X-Signed-Query': 'ba8fa8145c794c5aa78e8c9564ec8e0d7f849edfe4284617cabe0016e6f76062',
        'X-RapidAPI-Key': process.env.X_RapidAPI_Key,
        'X-RapidAPI-Host': 'opensea-graphql3.p.rapidapi.com'
      },
      data: {
        "id": "CategoryScrollerQuery",
        "query": "query CategoryScrollerQuery(\n  $categories: [CategoryV2Slug!]!\n  $highQualityFilter: Boolean\n) {\n  trendingCollectionsByCategory(first: 7, categories: $categories, highQualityFilter: $highQualityFilter) {\n    edges {\n      node {\n        id\n        ...HomePageCollectionCard_data_3C7EJl\n      }\n    }\n  }\n}\n\nfragment HomePageCollectionCardFooter_data_3C7EJl on CollectionType {\n  windowCollectionStats(statsTimeWindow: ONE_DAY) {\n    floorPrice {\n      unit\n      symbol\n    }\n    volume {\n      unit\n      symbol\n    }\n  }\n}\n\nfragment HomePageCollectionCard_data_3C7EJl on CollectionType {\n  banner\n  name\n  verificationStatus\n  ...useDropState_data\n  ...HomePageCollectionCardFooter_data_3C7EJl\n  ...collection_url\n}\n\nfragment collection_url on CollectionType {\n  slug\n  isCategory\n}\n\nfragment useDropState_data on CollectionType {\n  statsV2 {\n    totalSupply\n  }\n  drop {\n    stages {\n      startTime\n      endTime\n      id\n    }\n    chainData {\n      mintedItemCount\n      totalItemCount\n    }\n    id\n  }\n}\n",
        "variables": {
          "categories": [slug],
          "highQualityFilter": true
        }
      }
    }
    console.log(slug)
    try {
      const response = await axios.request(options)
      const data = response.data.data.trendingCollectionsByCategory.edges
      return data.map(d => d.node)

    } catch (error) {
      return error.message
    }
  }
}

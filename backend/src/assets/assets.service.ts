import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAssetDto } from './dto/create-asset.dto';
import { UpdateAssetDto } from './dto/update-asset.dto';
import { GetPageQueryDTO } from './dto';
import axios, { HttpStatusCode } from 'axios';

@Injectable()
export class AssetsService {
  async getPageQuery(variables: GetPageQueryDTO) {
    const options = {
      method: 'POST',
      url: 'https://opensea-graphql3.p.rapidapi.com/__api/graphQL',
      headers: {
        'content-type': 'application/json',
        'X-Signed-Query': 'ddcb6b8f7bf0c531bf79ec18ccfe8e6e9573da55255cf34df8e80088f5fedab0',
        'X-RapidAPI-Key': process.env.X_RapidAPI_Key,
        'X-RapidAPI-Host': 'opensea-graphql3.p.rapidapi.com'
      },
      data: {
        "id": "AssetPageQuery",
        "query": "query AssetPageQuery(\n  $tokenId: String!\n  $contractAddress: AddressScalar!\n  $chain: ChainScalar!\n) {\n  ...AssetPage_data_3gcux1\n}\n\nfragment AcceptHighestOfferButton_asset on AssetType {\n  ...AcceptOfferButton_asset\n  ...itemEvents_dataV2\n}\n\nfragment AcceptHighestOfferButton_tradeSummary on TradeSummaryType {\n  bestBid {\n    item {\n      __typename\n      ...itemEvents_dataV2\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    perUnitPriceType {\n      unit\n      symbol\n    }\n    ...AcceptOfferButton_order\n    id\n  }\n}\n\nfragment AcceptOfferButton_asset on AssetType {\n  relayId\n  acceptOfferDisabled {\n    __typename\n  }\n  ownedQuantity(identity: {})\n  ...AcceptOfferModalContent_criteriaAsset_3z4lq0\n  ...itemEvents_dataV2\n}\n\nfragment AcceptOfferButton_order on OrderV2Type {\n  relayId\n  side\n  orderType\n  item {\n    __typename\n    ... on AssetType {\n      acceptOfferDisabled {\n        __typename\n      }\n      collection {\n        statsV2 {\n          floorPrice {\n            eth\n          }\n        }\n        id\n      }\n      chain {\n        identifier\n      }\n      ownedQuantity(identity: {})\n      ...itemEvents_dataV2\n    }\n    ... on AssetBundleType {\n      bundleCollection: collection {\n        statsV2 {\n          floorPrice {\n            eth\n          }\n        }\n        id\n      }\n      chain {\n        identifier\n      }\n      assetQuantities(first: 30) {\n        edges {\n          node {\n            asset {\n              ownedQuantity(identity: {})\n              id\n            }\n            id\n          }\n        }\n      }\n      ...itemEvents_dataV2\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  maker {\n    address\n    id\n  }\n  perUnitPriceType {\n    eth\n  }\n}\n\nfragment AcceptOfferDisabledAlert_asset on AssetType {\n  decimals\n  ownedQuantity(identity: {})\n  acceptOfferDisabled {\n    ...useAcceptOfferDisabledReason_data\n  }\n}\n\nfragment AcceptOfferModalContent_criteriaAsset_3z4lq0 on AssetType {\n  __typename\n  assetContract {\n    address\n    id\n  }\n  chain {\n    identifier\n  }\n  tokenId\n  relayId\n  ownedQuantity(identity: {})\n  isCurrentlyFungible\n  defaultRarityData {\n    rank\n    id\n  }\n  ...ItemOfferDetails_item\n  ...FloorPriceDifference_item\n  ...readOptionalCreatorFees_item\n}\n\nfragment AcceptOffersButton_asset on AssetType {\n  relayId\n  ...readOptionalCreatorFees_item\n  ...CreatorFeeInputModalContent_asset\n}\n\nfragment AcceptOffersButton_orders on OrderV2Type {\n  relayId\n  ...readOrderFees_order\n  ...CreatorFeeInputModalContent_orders\n}\n\nfragment AccountLink_data on AccountType {\n  address\n  config\n  isCompromised\n  user {\n    publicUsername\n    id\n  }\n  displayName\n  ...ProfileImage_data\n  ...wallet_accountKey\n  ...accounts_url\n}\n\nfragment AddToCartAndQuickBuyButton_order on OrderV2Type {\n  ...useIsQuickBuyEnabled_order\n  ...ItemAddToCartButton_order\n  ...QuickBuyButton_order\n}\n\nfragment AssetDetails_data on AssetType {\n  assetContract {\n    openseaVersion\n    address\n    chain\n    blockExplorerLink\n    tokenStandard\n    id\n  }\n  metadataStatus\n  tokenId\n  isFrozen\n  frozenAt\n  tokenMetadata\n  lastUpdatedAt\n  ...useItemFees_item\n}\n\nfragment AssetListButton_asset on AssetType {\n  ...CreateListingButton_item\n}\n\nfragment AssetMediaAnimation_asset on AssetType {\n  ...AssetMediaImage_asset\n  ...AssetMediaContainer_asset\n  ...AssetMediaPlaceholderImage_asset\n}\n\nfragment AssetMediaAudio_asset on AssetType {\n  backgroundColor\n  ...AssetMediaImage_asset\n}\n\nfragment AssetMediaContainer_asset on AssetType {\n  backgroundColor\n  ...AssetMediaEditions_asset_1mZMwQ\n  collection {\n    ...useIsRarityEnabled_collection\n    id\n  }\n}\n\nfragment AssetMediaContainer_asset_1LNk0S on AssetType {\n  backgroundColor\n  ...AssetMediaEditions_asset_1mZMwQ\n  collection {\n    ...useIsRarityEnabled_collection\n    id\n  }\n}\n\nfragment AssetMediaEditions_asset_1mZMwQ on AssetType {\n  decimals\n}\n\nfragment AssetMediaImage_asset on AssetType {\n  backgroundColor\n  imageUrl\n  collection {\n    displayData {\n      cardDisplayStyle\n    }\n    id\n  }\n}\n\nfragment AssetMediaPlaceholderImage_asset on AssetType {\n  collection {\n    displayData {\n      cardDisplayStyle\n    }\n    id\n  }\n}\n\nfragment AssetMediaVideo_asset on AssetType {\n  backgroundColor\n  ...AssetMediaImage_asset\n}\n\nfragment AssetMediaWebgl_asset on AssetType {\n  backgroundColor\n  ...AssetMediaImage_asset\n}\n\nfragment AssetMedia_asset on AssetType {\n  animationUrl\n  displayImageUrl\n  imageUrl\n  isDelisted\n  ...AssetMediaAnimation_asset\n  ...AssetMediaAudio_asset\n  ...AssetMediaContainer_asset_1LNk0S\n  ...AssetMediaImage_asset\n  ...AssetMediaPlaceholderImage_asset\n  ...AssetMediaVideo_asset\n  ...AssetMediaWebgl_asset\n}\n\nfragment AssetOfferModal_asset on AssetType {\n  relayId\n  chain {\n    identifier\n  }\n}\n\nfragment AssetPageMediaHeader__accountInfo_1mZMwQ on AssetType {\n  isFavorite\n  animationUrl\n  imageUrl\n  imageStorageUrl\n}\n\nfragment AssetPageMediaHeader_item on ItemType {\n  __isItemType: __typename\n  relayId\n  __typename\n  ... on AssetType {\n    chain {\n      identifier\n    }\n    decimals\n    favoritesCount\n    isDelisted\n    isFrozen\n    hasUnlockableContent\n  }\n  ... on AssetBundleType {\n    chain {\n      identifier\n    }\n    assetCount\n  }\n}\n\nfragment AssetPage_data_3gcux1 on Query {\n  nft(tokenId: $tokenId, contractAddress: $contractAddress, chain: $chain) {\n    ...AssetPageMediaHeader_item\n    ...AssetPageMediaHeader__accountInfo_1mZMwQ\n    ...asset_display_name\n    ...ContentAuthenticity_data\n    assetContract {\n      address\n      chain\n      ...CollectionLink_assetContract\n      id\n    }\n    creator {\n      address\n      user {\n        publicUsername\n        id\n      }\n      displayName\n      ...AccountLink_data\n      id\n    }\n    animationUrl\n    backgroundColor\n    collection {\n      description\n      isSensitiveContent\n      displayData {\n        cardDisplayStyle\n      }\n      category {\n        slug\n      }\n      hidden\n      imageUrl\n      name\n      slug\n      ...CollectionLink_collection\n      ...Boost_collection\n      ...Property_collection\n      ...NumericTrait_collection\n      ...SocialBar_data\n      ...useIsLiveUpdatesEnabledForCollection_collection\n      ...useIsRarityEnabled_collection\n      ...CollectionInspiredBy_data\n      id\n    }\n    decimals\n    description\n    imageUrl\n    name\n    numVisitors\n    isDelisted\n    isListable\n    isReportedSuspicious\n    isSensitiveContent\n    isUnderReview\n    isCompromised\n    isBiddingEnabled {\n      value\n      reason\n    }\n    relayId\n    tokenId\n    hasUnlockableContent\n    favoritesCount\n    tradeSummary {\n      bestAsk {\n        closedAt\n        orderType\n        priceType {\n          usd\n        }\n        maker {\n          ...wallet_accountKey\n          id\n        }\n        relayId\n        ...PrivateListingBanner_data\n        id\n      }\n      bestBid {\n        __typename\n        id\n      }\n      ...TradeStation_data\n    }\n    acceptHighestOffer: tradeSummary(excludeAccountAsMaker: true) {\n      ...TradeStation_acceptHighestOffer\n    }\n    traits(first: 100) {\n      edges {\n        node {\n          relayId\n          displayType\n          floatValue\n          intValue\n          traitType\n          value\n          ...Boost_trait\n          ...Property_trait\n          ...NumericTrait_trait\n          ...Date_trait\n          id\n        }\n      }\n    }\n    defaultRarityData {\n      ...RarityIndicator_data\n      id\n    }\n    ...AssetMedia_asset\n    ...Toolbar_asset\n    ...asset_url\n    ...itemEvents_data\n    ...AssetDetails_data\n    ownedQuantity(identity: {})\n    assetOwners(first: 1) {\n      edges {\n        node {\n          quantity\n          owner {\n            ...AccountLink_data\n            id\n          }\n          id\n        }\n      }\n      count\n    }\n    totalQuantity\n    isCurrentlyFungible\n    ...TradeStation_archetype\n    ...OffersPanel_asset\n    ...ListingsPanel_asset\n    ...SemiFungibleTradeStation_asset\n    ...OrderManager_item\n    ...ItemTrackingContext_item\n    id\n  }\n  eventActivity(archetype: {assetContractAddress: $contractAddress, tokenId: $tokenId, chain: $chain}, first: 11) {\n    edges {\n      node {\n        relayId\n        id\n      }\n    }\n  }\n  ...SemiFungibleTradeStation_bestListings_3gcux1\n  ...SemiFungibleTradeStation_bestOffers_3gcux1\n  ...CampaignAnnouncementModal_data\n}\n\nfragment Boost_collection on CollectionType {\n  numericTraits {\n    key\n    value {\n      max\n    }\n  }\n  ...collection_url\n}\n\nfragment Boost_trait on TraitType {\n  displayType\n  floatValue\n  intValue\n  traitType\n}\n\nfragment BulkPurchaseModal_orders on OrderV2Type {\n  relayId\n  item {\n    __typename\n    relayId\n    chain {\n      identifier\n    }\n    ... on AssetType {\n      collection {\n        slug\n        isSafelisted\n        id\n      }\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  payment {\n    relayId\n    symbol\n    id\n  }\n  ...useTotalPrice_orders\n  ...useFulfillingListingsWillReactivateOrders_orders\n}\n\nfragment BuyNowButton_orders on OrderV2Type {\n  ...BulkPurchaseModal_orders\n}\n\nfragment CampaignAnnouncementModal_data on Query {\n  campaignAnnouncementModal {\n    campaignId\n    title\n    description\n    overrideUrl\n    ctaText\n    ctaUrl\n    id\n  }\n}\n\nfragment CollectionInspiredBy_data on CollectionType {\n  inspiredBy(first: 2) {\n    edges {\n      node {\n        slug\n        name\n        ...collection_url\n        id\n      }\n    }\n  }\n}\n\nfragment CollectionLink_assetContract on AssetContractType {\n  address\n  blockExplorerLink\n}\n\nfragment CollectionLink_collection on CollectionType {\n  name\n  slug\n  verificationStatus\n  ...collection_url\n}\n\nfragment ContentAuthenticity_data on AssetType {\n  authenticityMetadata {\n    signedOn\n    signedBy\n    producedWith\n    walletAddress\n    id\n  }\n  imageUrl\n  creator {\n    address\n    id\n  }\n  chain {\n    identifier\n  }\n}\n\nfragment ContextualPriceListBestOfferItem_tradeSummary on TradeSummaryType {\n  bestBid {\n    perUnitPriceType {\n      unit\n      symbol\n      usd\n    }\n    id\n  }\n}\n\nfragment ContextualPriceList_tradeSummary on TradeSummaryType {\n  ...ContextualPriceListBestOfferItem_tradeSummary\n}\n\nfragment CreateListingButton_item on ItemType {\n  __isItemType: __typename\n  __typename\n  ... on AssetType {\n    ...CreateQuickSingleListingFlowModal_asset\n  }\n  ...itemEvents_dataV2\n  ...item_sellUrl\n}\n\nfragment CreateQuickSingleListingFlowModal_asset on AssetType {\n  relayId\n  chain {\n    identifier\n  }\n  ...itemEvents_dataV2\n}\n\nfragment CreatorFeeInputModalContent_asset on AssetType {\n  ...ItemOfferDetails_item\n  ...readOptionalCreatorFees_item\n  ...useItemFees_item\n}\n\nfragment CreatorFeeInputModalContent_orders on OrderV2Type {\n  ...readOrderFees_order\n  ...ServiceFeeText_orders\n}\n\nfragment Date_trait on TraitType {\n  traitType\n  floatValue\n  intValue\n}\n\nfragment EditListingButton_item on ItemType {\n  __isItemType: __typename\n  chain {\n    identifier\n  }\n  ...EditListingModal_item\n  ...itemEvents_dataV2\n}\n\nfragment EditListingButton_listing on OrderV2Type {\n  ...EditListingModal_listing\n}\n\nfragment EditListingModal_item on ItemType {\n  __isItemType: __typename\n  __typename\n  ... on AssetType {\n    tokenId\n    assetContract {\n      address\n      id\n    }\n    chain {\n      identifier\n    }\n  }\n  ... on AssetBundleType {\n    slug\n  }\n}\n\nfragment EditListingModal_listing on OrderV2Type {\n  relayId\n}\n\nfragment FloorPriceDifference_item on ItemType {\n  __isItemType: __typename\n  ... on AssetType {\n    collection {\n      statsV2 {\n        floorPrice {\n          eth\n        }\n      }\n      id\n    }\n  }\n  ... on AssetBundleType {\n    bundleCollection: collection {\n      statsV2 {\n        floorPrice {\n          eth\n        }\n      }\n      id\n    }\n  }\n}\n\nfragment ItemAddToCartButton_order on OrderV2Type {\n  maker {\n    address\n    id\n  }\n  item {\n    __typename\n    ... on AssetType {\n      isCurrentlyFungible\n    }\n    ...itemEvents_dataV2\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  openedAt\n  ...ShoppingCartContextProvider_inline_order\n}\n\nfragment ItemOfferDetails_item on ItemType {\n  __isItemType: __typename\n  __typename\n  ... on AssetType {\n    displayName\n    collection {\n      ...CollectionLink_collection\n      id\n    }\n    ...StackedAssetMedia_assets\n  }\n  ... on AssetBundleType {\n    displayName\n    bundleCollection: collection {\n      ...CollectionLink_collection\n      id\n    }\n    assetQuantities(first: 18) {\n      edges {\n        node {\n          asset {\n            ...StackedAssetMedia_assets\n            id\n          }\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment ItemTrackingContext_item on ItemType {\n  __isItemType: __typename\n  relayId\n  verificationStatus\n  chain {\n    identifier\n  }\n  ... on AssetType {\n    tokenId\n    isReportedSuspicious\n    assetContract {\n      address\n      id\n    }\n  }\n  ... on AssetBundleType {\n    slug\n  }\n}\n\nfragment ListingsPanel_asset on AssetType {\n  tokenId\n  isCurrentlyFungible\n  ownedQuantity(identity: {})\n  chain {\n    identifier\n  }\n  assetContract {\n    address\n    id\n  }\n}\n\nfragment MakeAssetOfferButton_asset on AssetType {\n  relayId\n  verificationStatus\n  isBiddingEnabled {\n    value\n    reason\n  }\n  chain {\n    identifier\n  }\n  ...AssetOfferModal_asset\n}\n\nfragment NumericTrait_collection on CollectionType {\n  numericTraits {\n    key\n    value {\n      max\n    }\n  }\n  ...collection_url\n}\n\nfragment NumericTrait_trait on TraitType {\n  floatValue\n  intValue\n  maxValue\n  traitType\n}\n\nfragment OfferModal_tradeSummary on TradeSummaryType {\n  bestAsk {\n    relayId\n    closedAt\n    payment {\n      relayId\n      id\n    }\n    id\n  }\n  ...useOfferModalAdapter_tradeData\n  ...ContextualPriceList_tradeSummary\n}\n\nfragment OffersPanel_asset on AssetType {\n  relayId\n  tokenId\n  isCurrentlyFungible\n  ownedQuantity(identity: {})\n  chain {\n    identifier\n  }\n  assetContract {\n    address\n    id\n  }\n  ...AcceptOfferDisabledAlert_asset\n}\n\nfragment OrderListItem_order on OrderV2Type {\n  relayId\n  makerOwnedQuantity\n  item {\n    __typename\n    displayName\n    ... on AssetType {\n      assetContract {\n        ...CollectionLink_assetContract\n        id\n      }\n      collection {\n        ...CollectionLink_collection\n        id\n      }\n      ...AssetMedia_asset\n      ...asset_url\n      ...useItemFees_item\n    }\n    ... on AssetBundleType {\n      assetQuantities(first: 30) {\n        edges {\n          node {\n            asset {\n              displayName\n              relayId\n              assetContract {\n                ...CollectionLink_assetContract\n                id\n              }\n              collection {\n                ...CollectionLink_collection\n                id\n              }\n              ...StackedAssetMedia_assets\n              ...AssetMedia_asset\n              ...asset_url\n              id\n            }\n            id\n          }\n        }\n      }\n    }\n    ...itemEvents_dataV2\n    ...useIsItemSafelisted_item\n    ...ItemTrackingContext_item\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  remainingQuantityType\n  ...OrderPrice\n}\n\nfragment OrderList_orders on OrderV2Type {\n  item {\n    __typename\n    ... on AssetType {\n      __typename\n      relayId\n    }\n    ... on AssetBundleType {\n      __typename\n      assetQuantities(first: 30) {\n        edges {\n          node {\n            asset {\n              relayId\n              id\n            }\n            id\n          }\n        }\n      }\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  relayId\n  ...OrderListItem_order\n  ...useFulfillingListingsWillReactivateOrders_orders\n}\n\nfragment OrderManager_item on ItemType {\n  __isItemType: __typename\n  __typename\n  chain {\n    identifier\n  }\n  tradeSummary {\n    bestAsk {\n      __typename\n      ...EditListingButton_listing\n      id\n    }\n  }\n  ... on AssetType {\n    isEditable {\n      value\n    }\n    ownedQuantity(identity: {})\n    isCurrentlyFungible\n    ...asset_edit_url\n  }\n  ...CreateListingButton_item\n  ...EditListingButton_item\n}\n\nfragment OrderPrice on OrderV2Type {\n  priceType {\n    unit\n  }\n  perUnitPriceType {\n    unit\n  }\n  dutchAuctionFinalPriceType {\n    unit\n  }\n  openedAt\n  closedAt\n  payment {\n    ...TokenPricePayment\n    id\n  }\n}\n\nfragment OrderUsdPrice on OrderV2Type {\n  priceType {\n    usd\n  }\n  perUnitPriceType {\n    usd\n  }\n  dutchAuctionFinalPriceType {\n    usd\n  }\n  openedAt\n  closedAt\n}\n\nfragment PrivateListingBanner_data on OrderV2Type {\n  taker {\n    address\n    ...AccountLink_data\n    ...wallet_accountKey\n    id\n  }\n  maker {\n    ...wallet_accountKey\n    id\n  }\n}\n\nfragment ProfileImage_data on AccountType {\n  imageUrl\n}\n\nfragment Property_collection on CollectionType {\n  ...collection_url\n  statsV2 {\n    totalSupply\n  }\n}\n\nfragment Property_trait on TraitType {\n  traitCount\n  traitType\n  value\n}\n\nfragment QuickBuyButton_order on OrderV2Type {\n  maker {\n    address\n    id\n  }\n  item {\n    __typename\n    chain {\n      identifier\n    }\n    ...itemEvents_dataV2\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  openedAt\n  relayId\n}\n\nfragment RarityIndicator_data on RarityDataType {\n  rank\n  rankPercentile\n  rankCount\n  maxRank\n}\n\nfragment SemiFungibleTradeStation_asset on AssetType {\n  ownedQuantity(identity: {})\n  ...TradeStationBuyTab_asset\n  ...TradeStationSellTab_asset\n}\n\nfragment SemiFungibleTradeStation_bestListings_3gcux1 on Query {\n  ...TradeStationBuyTab_bestListings_3gcux1\n}\n\nfragment SemiFungibleTradeStation_bestOffers_3gcux1 on Query {\n  ...TradeStationSellTab_bestOffers_3gcux1\n}\n\nfragment ServiceFeeText_orders on OrderV2Type {\n  ...readOrderFees_order\n}\n\nfragment ShoppingCartContextProvider_inline_order on OrderV2Type {\n  relayId\n  makerOwnedQuantity\n  item {\n    __typename\n    chain {\n      identifier\n    }\n    relayId\n    ... on AssetBundleType {\n      assetQuantities(first: 30) {\n        edges {\n          node {\n            asset {\n              relayId\n              id\n            }\n            id\n          }\n        }\n      }\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  maker {\n    relayId\n    id\n  }\n  priceType {\n    usd\n  }\n  payment {\n    relayId\n    id\n  }\n  remainingQuantityType\n  ...useTotalItems_orders\n  ...ShoppingCart_orders\n}\n\nfragment ShoppingCartDetailedView_orders on OrderV2Type {\n  relayId\n  item {\n    __typename\n    chain {\n      identifier\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  supportsGiftingOnPurchase\n  ...useTotalPrice_orders\n  ...OrderList_orders\n}\n\nfragment ShoppingCart_orders on OrderV2Type {\n  ...ShoppingCartDetailedView_orders\n  ...BulkPurchaseModal_orders\n}\n\nfragment SocialBar_data on CollectionType {\n  relayId\n  discordUrl\n  externalUrl\n  instagramUsername\n  mediumUsername\n  slug\n  telegramUrl\n  twitterUsername\n  connectedTwitterUsername\n  assetContracts(first: 2) {\n    edges {\n      node {\n        blockExplorerLink\n        chainData {\n          blockExplorer {\n            name\n            identifier\n          }\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment StackedAssetMedia_assets on AssetType {\n  relayId\n  ...AssetMedia_asset\n  collection {\n    logo\n    id\n  }\n}\n\nfragment TokenPricePayment on PaymentAssetType {\n  symbol\n}\n\nfragment Toolbar_asset on AssetType {\n  ...asset_url\n  ...itemEvents_data\n  assetContract {\n    address\n    id\n  }\n  collection {\n    externalUrl\n    id\n  }\n  externalLink\n  relayId\n  tokenId\n}\n\nfragment TradeStationBuyTab_asset on AssetType {\n  tradeSummary {\n    bestAsk {\n      ...TradeStationOrderPrice_order\n      id\n    }\n  }\n  ...useFulfillSemiFungibleOrders_asset\n  ...MakeAssetOfferButton_asset\n  ...itemEvents_dataV2\n}\n\nfragment TradeStationBuyTab_bestListings_3gcux1 on Query {\n  nft(tokenId: $tokenId, contractAddress: $contractAddress, chain: $chain) {\n    bestListings(first: 10, forTaker: {}) {\n      edges {\n        node {\n          ...useFulfillSemiFungibleOrders_orders\n          id\n          __typename\n        }\n        cursor\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n    id\n  }\n}\n\nfragment TradeStationOrderPrice_order on OrderV2Type {\n  ...OrderPrice\n  ...OrderUsdPrice\n}\n\nfragment TradeStationSellTab_asset on AssetType {\n  ownedQuantity(identity: {})\n  tradeSummary {\n    bestBid {\n      ...TradeStationOrderPrice_order\n      id\n    }\n  }\n  ...useFulfillSemiFungibleOrders_asset\n  ...AssetListButton_asset\n  ...itemEvents_dataV2\n}\n\nfragment TradeStationSellTab_bestOffers_3gcux1 on Query {\n  nft(tokenId: $tokenId, contractAddress: $contractAddress, chain: $chain) {\n    bestOffers(first: 10, forTaker: {}) {\n      edges {\n        node {\n          ...useFulfillSemiFungibleOrders_orders\n          id\n          __typename\n        }\n        cursor\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n    id\n  }\n}\n\nfragment TradeStation_acceptHighestOffer on TradeSummaryType {\n  bestBid {\n    relayId\n    id\n  }\n  ...AcceptHighestOfferButton_tradeSummary\n}\n\nfragment TradeStation_archetype on AssetType {\n  verificationStatus\n  chain {\n    identifier\n  }\n  largestOwner {\n    owner {\n      ...wallet_accountKey\n      id\n    }\n    id\n  }\n  isCurrentlyFungible\n  isListable\n  isBiddingEnabled {\n    value\n    reason\n  }\n  relayId\n  acceptOfferDisabled {\n    __typename\n  }\n  isFastPollingEnabled\n  ...AcceptHighestOfferButton_asset\n  ...useFulfillSemiFungibleOrders_asset\n  ...AssetOfferModal_asset\n}\n\nfragment TradeStation_bestAsk on OrderV2Type {\n  closedAt\n  dutchAuctionFinalPriceType {\n    unit\n  }\n  openedAt\n  orderType\n  priceFnEndedAt\n  englishAuctionReservePriceType {\n    unit\n  }\n  relayId\n  maker {\n    address\n    ...wallet_accountKey\n    id\n  }\n  item {\n    __typename\n    verificationStatus\n    relayId\n    chain {\n      identifier\n    }\n    ... on AssetType {\n      tokenId\n      isCurrentlyFungible\n      assetContract {\n        address\n        id\n      }\n      collection {\n        slug\n        id\n      }\n    }\n    ...itemEvents_dataV2\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n  priceType {\n    unit\n    usd\n  }\n  remainingQuantityType\n  perUnitPriceType {\n    usd\n  }\n  payment {\n    symbol\n    relayId\n    asset {\n      relayId\n      id\n    }\n    ...TokenPricePayment\n    id\n  }\n  taker {\n    ...wallet_accountKey\n    id\n  }\n  ...OrderPrice\n  ...OrderUsdPrice\n  ...AddToCartAndQuickBuyButton_order\n  ...QuickBuyButton_order\n}\n\nfragment TradeStation_bestBid on OrderV2Type {\n  ...OrderPrice\n  ...OrderUsdPrice\n  payment {\n    relayId\n    id\n  }\n  priceType {\n    unit\n  }\n  perUnitPriceType {\n    usd\n  }\n}\n\nfragment TradeStation_data on TradeSummaryType {\n  bestAsk {\n    ...TradeStation_bestAsk\n    id\n  }\n  bestBid {\n    ...TradeStation_bestBid\n    id\n  }\n  ...OfferModal_tradeSummary\n}\n\nfragment accounts_url on AccountType {\n  address\n  user {\n    publicUsername\n    id\n  }\n}\n\nfragment asset_display_name on AssetType {\n  tokenId\n  name\n}\n\nfragment asset_edit_url on AssetType {\n  assetContract {\n    address\n    chain\n    id\n  }\n  tokenId\n  collection {\n    slug\n    id\n  }\n}\n\nfragment asset_url on AssetType {\n  assetContract {\n    address\n    id\n  }\n  tokenId\n  chain {\n    identifier\n  }\n}\n\nfragment collection_url on CollectionType {\n  slug\n  isCategory\n}\n\nfragment itemEvents_data on AssetType {\n  relayId\n  assetContract {\n    address\n    id\n  }\n  tokenId\n  chain {\n    identifier\n  }\n}\n\nfragment itemEvents_dataV2 on ItemType {\n  __isItemType: __typename\n  relayId\n  chain {\n    identifier\n  }\n  ... on AssetType {\n    tokenId\n    assetContract {\n      address\n      id\n    }\n  }\n}\n\nfragment item_sellUrl on ItemType {\n  __isItemType: __typename\n  __typename\n  ... on AssetType {\n    ...asset_url\n  }\n  ... on AssetBundleType {\n    slug\n    chain {\n      identifier\n    }\n    assetQuantities(first: 18) {\n      edges {\n        node {\n          asset {\n            relayId\n            id\n          }\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment price on OrderV2Type {\n  priceType {\n    unit\n  }\n}\n\nfragment readOptionalCreatorFees_item on ItemType {\n  __isItemType: __typename\n  __typename\n  ... on AssetType {\n    collection {\n      isCreatorFeesEnforced\n      totalCreatorFeeBasisPoints\n      id\n    }\n  }\n}\n\nfragment readOrderFees_order on OrderV2Type {\n  makerFees(first: 10) {\n    edges {\n      node {\n        basisPoints\n        isOpenseaFee\n        id\n      }\n    }\n  }\n  takerFees(first: 10) {\n    edges {\n      node {\n        basisPoints\n        isOpenseaFee\n        id\n      }\n    }\n  }\n}\n\nfragment useAcceptOfferDisabledReason_data on AcceptOfferDisabledType {\n  until\n}\n\nfragment useFulfillSemiFungibleOrders_asset on AssetType {\n  relayId\n  totalQuantity\n  ownedQuantity(identity: {})\n  ...AcceptOffersButton_asset\n}\n\nfragment useFulfillSemiFungibleOrders_orders on OrderV2Type {\n  relayId\n  payment {\n    symbol\n    id\n  }\n  perUnitPriceType {\n    unit\n  }\n  remainingQuantityType\n  ...useOrdersWithValidMakerOwnedQuantity_order\n  ...useTotalPrice_orders\n  ...BuyNowButton_orders\n  ...AcceptOffersButton_orders\n}\n\nfragment useFulfillingListingsWillReactivateOrders_orders on OrderV2Type {\n  ...useTotalItems_orders\n}\n\nfragment useIsItemSafelisted_item on ItemType {\n  __isItemType: __typename\n  __typename\n  ... on AssetType {\n    collection {\n      slug\n      verificationStatus\n      id\n    }\n  }\n  ... on AssetBundleType {\n    assetQuantities(first: 30) {\n      edges {\n        node {\n          asset {\n            collection {\n              slug\n              verificationStatus\n              id\n            }\n            id\n          }\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment useIsLiveUpdatesEnabledForCollection_collection on CollectionType {\n  statsV2 {\n    hasFungibles\n  }\n}\n\nfragment useIsQuickBuyEnabled_order on OrderV2Type {\n  orderType\n  item {\n    __typename\n    ... on AssetType {\n      isCurrentlyFungible\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment useIsRarityEnabled_collection on CollectionType {\n  slug\n  enabledRarities\n}\n\nfragment useItemFees_item on ItemType {\n  __isItemType: __typename\n  __typename\n  ... on AssetType {\n    totalCreatorFee\n    collection {\n      openseaSellerFeeBasisPoints\n      isCreatorFeesEnforced\n      id\n    }\n  }\n  ... on AssetBundleType {\n    bundleCollection: collection {\n      openseaSellerFeeBasisPoints\n      totalCreatorFeeBasisPoints\n      isCreatorFeesEnforced\n      id\n    }\n  }\n}\n\nfragment useOfferModalAdapter_tradeData on TradeSummaryType {\n  bestAsk {\n    orderType\n    relayId\n    item {\n      __typename\n      verificationStatus\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n    payment {\n      relayId\n      id\n    }\n    perUnitPriceType {\n      unit\n    }\n    id\n  }\n  bestBid {\n    relayId\n    payment {\n      relayId\n      id\n    }\n    ...price\n    id\n  }\n}\n\nfragment useOrdersWithValidMakerOwnedQuantity_order on OrderV2Type {\n  makerOwnedQuantity\n  remainingQuantityType\n  side\n  perUnitPriceType {\n    unit\n  }\n  maker {\n    relayId\n    id\n  }\n}\n\nfragment useTotalItems_orders on OrderV2Type {\n  item {\n    __typename\n    relayId\n    ... on AssetBundleType {\n      assetQuantities(first: 30) {\n        edges {\n          node {\n            asset {\n              relayId\n              id\n            }\n            id\n          }\n        }\n      }\n    }\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n\nfragment useTotalPrice_orders on OrderV2Type {\n  relayId\n  perUnitPriceType {\n    usd\n    unit\n  }\n  dutchAuctionFinalPriceType {\n    usd\n    unit\n  }\n  openedAt\n  closedAt\n  payment {\n    symbol\n    ...TokenPricePayment\n    id\n  }\n}\n\nfragment wallet_accountKey on AccountType {\n  address\n}\n",
        "variables": variables
      }
    }
    try {
      const response = await axios.request(options)
      if (response.status !== HttpStatusCode.Ok) {
        throw new BadRequestException("Unhanlded Error")
      }
      const data = response.data.data
      return data

    } catch (error) {
      return error.message
    }
  }
}
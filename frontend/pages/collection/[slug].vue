<template>
    <!-- Offcanvas-area -->
    <BaseProfile />
    <!-- Offcanvas-area-end -->

    <!-- main-content -->
    <div class="main-content">
        <!-- header-area -->
        <!-- <BaseHeader /> -->
        <!-- header-area-end -->

        <!-- main-area -->
        <main>
            <!-- breadcrumb-area -->
            <section class="breadcrumb-area breadcrumb-bg" :style="{ backgroundImage: `url(${getBannerUrl()})` }">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-6 col-md-8">
                            <div class="breadcrumb-content text-center">
                                <h3 class="title"></h3>
                            </div>
                        </div>
                    </div>
                    <div class="breadcrumb-logo" :style="{ backgroundImage: `url(${collectionInfo.imageUrl})` }">

                    </div>
                </div>
            </section>

            <!-- breadcrumb-area-end -->
            <!-- browse-category-area -->
            <div class="browse-category-area pt-80 pb-50">
                <div class="container">
                    <div class="row collection-info">
                        <div class="col-xl-12">
                            <div class="row">
                                <div class="w-50">
                                    <h3 class="title">{{ collectionInfo.name }}</h3>
                                </div>
                                <div class="w-50">
                                    <ul class="icon">
                                        <li><a href="javascript:void(0)"><i class="fi-sr-pharmacy"></i></a></li>
                                        <li><a target="_blank" :href="collectionInfo.externalUrl"><i class="fi-sr-globe"></i></a></li>
                                        <li><a target="_blank" href="javascript:void(0)"><i class="fi-sr-share"></i></a></li>
                                        <li><a target="_blank" :href="'https://twitter.com/' + collectionInfo.connectedTwitterUsername"><i class="flaticon-twitter"></i></a></li>
                                    </ul>
                                </div>

                            </div>
                            <div class="row">
                                <div class="d-flex">
                                    <h6>Items: <span :style="{ color: 'var(--purple-color)' }">{{
                                        collectionInfo.statsV2?.totalSupply }}</span></h6>
                                    <span>&nbsp;&nbsp;</span>
                                    <h6>Created: <span :style="{ color: 'var(--purple-color)' }">{{
                                        dayjs(collectionInfo.createdDate).format("MMMM YYYY") }}</span></h6>
                                    <span>&nbsp;&nbsp;</span>
                                    <h6>Chain: <span :style="{ color: 'var(--purple-color)' }">{{
                                        collectionInfo.defaultChain?.displayName }}</span></h6>
                                    <span>&nbsp;&nbsp;</span>
                                    <h6>Category: <span :style="{ color: 'var(--purple-color)' }">{{
                                        collectionInfo.category?.slug.toUpperCase() }}</span></h6>
                                </div>
                            </div>
                            <div class="row">
                                <h6 class="title" :style="{ color: 'var(--purple-color)' }">By {{
                                    collectionInfo.owner?.displayName }}</h6>
                            </div>
                            <div class="row">
                                <p>{{ collectionInfo.description }}</p>
                            </div>
                            <div class="row">
                                <div class="d-flex">
                                    <h6>Total Volume: <span :style="{ color: 'var(--purple-color)' }">{{
                                        Number(Math.floor(Number(collectionInfo.statsV2?.totalVolume.unit))).toLocaleString()
                                    }} {{ collectionInfo.statsV2?.totalVolume.symbol }}</span></h6>
                                    <span>&nbsp;&nbsp;</span>
                                    <h6>Floor Price: <span :style="{ color: 'var(--purple-color)' }">{{
                                        collectionInfo.statsV2?.floorPrice.unit }} {{
        collectionInfo.statsV2?.floorPrice.symbol }}</span></h6>
                                    <span>&nbsp;&nbsp;</span>
                                    <h6>Best Offer: <span :style="{ color: 'var(--purple-color)' }">{{
                                        collectionInfo.collectionOffers?.edges[0].node.perUnitPriceType.unit }} {{
        collectionInfo.collectionOffers?.edges[0].node.perUnitPriceType.symbol }}</span>
                                    </h6>
                                    <span>&nbsp;&nbsp;</span>
                                    <h6>Owners: <span :style="{ color: 'var(--purple-color)' }">{{
                                        collectionInfo.statsV2?.numOwners }}</span></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-3 col-lg-4">
                            <aside class="browse-category-sidebar">
                                <div class="section-title mb-25">
                                    <h2 class="title">Status <img src="/img/icons/title_icon01.png" alt=""></h2>
                                </div>
                                <div class="widget category-widget">
                                    <div class="widget-inner">
                                        <ul class="sidebar-tags">
                                            <li v-for="option in statusOptions"><a
                                                    :class="{ 'active': options.toggles.includes(option.status) }"
                                                    @click="addStatus(option.status)" href="javascript:void(0)">{{
                                                        option.name }}</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="widget category-widget">
                                    <h4 class="category-widget-title">Price</h4>
                                    <div class="widget-inner">
                                        <form action="#" class="sidebar-price-filter">
                                            <div class="form-grp">
                                                <input type="text" placeholder="Us Dollar">
                                                <span class="dollar">$</span>
                                            </div>
                                            <div class="form-grp">
                                                <input type="text" placeholder="Min">
                                                <span class="to">to</span>
                                                <input type="text" placeholder="Max">
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div class="widget category-widget">
                                    <h4 class="category-widget-title">On sale in</h4>
                                    <div class="widget-inner">
                                        <form action="#" class="on-sale">
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="flexRadioDefault"
                                                    id="flexRadioDefault1">
                                                <label class="form-check-label" for="flexRadioDefault1">ETH</label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="flexRadioDefault"
                                                    id="flexRadioDefault2" checked>
                                                <label class="form-check-label" for="flexRadioDefault2">WETH</label>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div class="col-md-5 col-sm-4">
                                    <div class="section-button text-end">
                                        <a href="javascript:void(0)" @click="applyFilter()"
                                            class="btn filter-btn filter-toggle"><i class="fi-sr-filter"></i>
                                            filter</a>
                                    </div>
                                </div>
                            </aside>
                        </div>
                        <div class="col-xl-9 col-lg-8">
                            <div class="row justify-content-center">
                                <div v-for="item in getNftItems" class="col-xl-4 col-md-6 col-sm-6">
                                    <div class="top-collection-item">
                                        <div class="collection-item-top">
                                            <ul>
                                                <!-- <li class="avatar"><a href="author-profile" class="thumb"><img
                                                            src="/img/others/top_col_avatar.png" alt=""></a>By <a
                                                        href="author-profile" class="name">Jonson</a></li> -->

                                                <!-- <li class="info-dots dropdown">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                    <a href="#" class="dropdown-toggle" data-bs-toggle="dropdown"
                                                        role="button" aria-expanded="false"></a>
                                                    <ul class="dropdown-menu">
                                                        <li><a href="nft-marketplace">Artwork</a></li>
                                                        <li><a href="nft-marketplace">Action</a></li>
                                                        <li><a href="nft-marketplace">Author Action</a></li>
                                                    </ul>
                                                </li> -->
                                            </ul>
                                        </div>
                                        <div class="collection-item-thumb">
                                            <a href="market-single"><img :src="item.displayImageUrl" alt=""></a>
                                        </div>
                                        <div class="collection-item-content">
                                            <h5 class="title"><a href="market-single">{{ item.name }} </a> </h5>
                                            <h5 class="title"><a href="javascript:void(0)">Floor Price</a> <span
                                                    class="price">{{ item.orderData?.bestAskV2?.perUnitPriceType?.unit }} {{
                                                        item.orderData?.bestAskV2?.perUnitPriceType?.symbol }}</span></h5>
                                        </div>
                                        <div class="collection-item-bottom">
                                            <ul>
                                                <li class="bid"><NuxtLink  :href="getAssetsLink(item)" class="btn">place a bid</NuxtLink></li>
                                                <!-- <li class="wishlist"><a href="#">59</a></li> -->
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- browse-category-area-end -->
            <div v-if="showLoadingMore === true && pageInfo.hasNextPage === true" class="w-100 text-center">
                <BaseLoadingMore />
            </div>
            <BaseObserver @intersect="loadMore" />
            <!-- week-features-area -->
            <!-- <section class="inner-week-features-area">
                <div class="container">
                    <div class="row mb-35">
                        <div class="col-md-7 col-sm-8">
                            <div class="section-title">
                                <h2 class="title">Features of the week <img src="/img/icons/title_icon02.png" alt=""></h2>
                            </div>
                        </div>
                        <div class="col-md-5 col-sm-4">
                            <div class="section-button text-end">
                                <a href="#" class="btn filter-btn"><i class="fi-sr-filter"></i> Explore More</a>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-4 col-lg-5">
                            <div class="week-features-item">
                                <div class="features-item-top">
                                    <div class="features-avatar">
                                        <div class="features-avatar-thumb">
                                            <a href="#"><img src="/img/others/features_avatar.png" alt=""></a>
                                        </div>
                                        <div class="features-avatar-info">
                                            <h5 class="title"><a href="#">Random Abstract</a></h5>
                                            <span>Created by <a href="#">Peolu</a></span>
                                        </div>
                                    </div>
                                    <div class="features-item-wishlist">
                                        <a href="#">100</a>
                                    </div>
                                </div>
                                <ul class="features-img-wrap">
                                    <li class="grid-item"><img src="/img/others/features_img01.png" alt=""></li>
                                    <li class="grid-item"><img src="/img/others/features_img02.png" alt=""></li>
                                    <li class="grid-item"><img src="/img/others/features_img03.png" alt=""></li>
                                    <li class="grid-item"><img src="/img/others/features_img04.png" alt=""></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-5">
                            <div class="week-features-item">
                                <div class="features-item-top">
                                    <div class="features-avatar">
                                        <div class="features-avatar-thumb">
                                            <a href="#"><img src="/img/others/features_avatar02.png" alt=""></a>
                                        </div>
                                        <div class="features-avatar-info">
                                            <h5 class="title"><a href="#">Deploy Abstract</a></h5>
                                            <span>Created by <a href="#">Darkleo</a></span>
                                        </div>
                                    </div>
                                    <div class="features-item-wishlist">
                                        <a href="#">300</a>
                                    </div>
                                </div>
                                <ul class="features-img-wrap">
                                    <li class="grid-item"><img src="/img/others/s_features_img01.png" alt=""></li>
                                    <li class="grid-item"><img src="/img/others/features_img02.png" alt=""></li>
                                    <li class="grid-item"><img src="/img/others/s_features_img03.png" alt=""></li>
                                    <li class="grid-item"><img src="/img/others/s_features_img04.png" alt=""></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-5">
                            <div class="week-features-item">
                                <div class="features-item-top">
                                    <div class="features-avatar">
                                        <div class="features-avatar-thumb">
                                            <a href="#"><img src="/img/others/features_avatar03.png" alt=""></a>
                                        </div>
                                        <div class="features-avatar-info">
                                            <h5 class="title"><a href="#">Colorful Abstract</a></h5>
                                            <span>Created by <a href="#">Jonson</a></span>
                                        </div>
                                    </div>
                                    <div class="features-item-wishlist">
                                        <a href="#">190</a>
                                    </div>
                                </div>
                                <ul class="features-img-wrap">
                                    <li class="grid-item"><img src="/img/others/t_features_img01.png" alt=""></li>
                                    <li class="grid-item"><img src="/img/others/features_img02.png" alt=""></li>
                                    <li class="grid-item"><img src="/img/others/features_img03.png" alt=""></li>
                                    <li class="grid-item"><img src="/img/others/t_features_img04.png" alt=""></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section> -->
            <!-- week-features-area-end -->

        </main>
        <!-- main-area-end -->
    </div>
    <!-- main-content-end -->
</template>

<script  setup lang="ts">
import { onMounted, onBeforeMount } from "vue"
import { useNetworkStore } from "~/store/network";
import { useLoadingStore } from "~/store/loading";
import Routes from "~/constants/routes";
import { Default, NftItem } from "./types/nft-item";
import { CollectionInfo } from "./types/collection-info";
import _ from "lodash"
import { Status, useSearh } from "./helper";
import dayjs from "dayjs"

const network = useNetworkStore().getNetwork

const carouselQuery = ref([])
const loadingStore = useLoadingStore()
const route = useRoute()
const collection = ref([])
const { options, addStatus, getOptions } = useSearh()
const pageInfo = ref({ hasNextPage: false, endCursor: "" })
const showLoadingMore = ref(false)
const collectionInfo = ref<Partial<CollectionInfo>>({})
const statusOptions = [
    {
        name: "Listed",
        status: Status.IS_LISTED
    },
    {
        name: "Has offers",
        status: Status.HAS_OFFERS
    },
    {
        name: "New",
        status: Status.IS_NEW
    },
    {
        name: "On Auction",
        status: Status.ON_AUCTION
    }
]
onMounted(() => {
    const fetch = async () => {
        loadingStore.set(true)
        const response = await network.getCollectionAssetSearchListPaginationQuery({
            ...Default,
            collections: [route.params.slug.toString()],
        })
        collection.value = response.edges
        pageInfo.value = response.pageInfo

        const response1 = await network.getCollectionPageQuery({ collection: route.params.slug.toString() })
        collectionInfo.value = response1.collection

        if (pageInfo.value.hasNextPage === false) {
            showLoadingMore.value = false
        }
        return Promise.resolve(1)
    }
    Promise.all([fetch()]).then(() => {
        loadingStore.set(false)
    })

})

onMounted(() => {

    $(window).scrollTop();
})
const applyFilter = async () => {
    loadingStore.set(true)
    const response = await network.getCollectionAssetSearchListPaginationQuery({
        ...Default,
        ...getOptions(),
        collections: [route.params.slug.toString()],

    })
    setTimeout(() => {
        loadingStore.set(false)
    }, 0)
    collection.value = response.edges
}

const loadMore = async () => {
    if (!pageInfo.value.hasNextPage) return
    showLoadingMore.value = true
    const response = await network.getCollectionAssetSearchListPaginationQuery({
        ...Default,
        ...getOptions(),
        collections: [route.params.slug.toString()],
        cursor: pageInfo.value.endCursor
    })
    collection.value = [...collection.value, ...response.edges] as any
    pageInfo.value = response.pageInfo

    Promise.resolve(() => {
        showLoadingMore.value = false
    })
}

const getNftItems = computed(() => collection.value.map((c: any) => c.node) as Array<NftItem>)

const getBannerUrl = () => collectionInfo.value.bannerImageUrl?.split("?")[0] + "?auto=format&dpr=1&w=1920"

const getAssetsLink = (item: NftItem) => {
    return Routes.Assets + '/' + item.chain.identifier.toLowerCase() + '/' + item.assetContract.address   + '/' + item.tokenId
}
</script>

<style scoped lang="scss">
.active {
    color: #fff;
    background: var(--nft-gradient-color);
}

.breadcrumb-logo {
    height: 180px;
    width: 180px;
    border: 6px solid rgb(255, 255, 255);
    position: absolute;
    border-radius: 10px;
}

.collection-info {
    height: 300px;
}

.icon li a {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1.5px solid var(--icon-border-color);
    line-height: 0;
    font-size: 14px;
    color: var(--icon-color);
    transition: 0.3s ease-in;

}

.icon li a:hover {
    border-color: var(--purple-color);
    color: var(--purple-color);
}

.icon {
    display: flex;
    gap: 5px;
    justify-content: flex-end;
}</style>
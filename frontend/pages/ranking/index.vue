<template>
    <div class="main-content">
        <!-- header-area -->
        <BaseHeader />
        <!-- header-area-end -->

        <!-- main-area -->
        <main>

            <!-- breadcrumb-area -->
            <section class="breadcrumb-area breadcrumb-bg">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-6 col-md-8">
                            <div class="breadcrumb-content text-center">
                                <h3 class="title">NFT Ranking</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- breadcrumb-area-end -->

            <!-- Ranking-area -->
            <div class="activity-area">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-3 col-lg-4 order-2 order-lg-0">
                            <aside class="activity-sidebar">
                                <ul class="activity-sidebar-list">
                                    <li>
                                        <a href="#">
                                            <div class="icon"><i class="fi-sr-bug"></i></div>
                                            <p>Domain Names <span>find your website name</span></p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div class="icon"><i class="fi-sr-crown"></i></div>
                                            <p>Collectibles</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div class="icon"><i class="fi-sr-mode-landscape"></i></div>
                                            <p>Photography</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div class="icon"><i class="fi-sr-snowflake"></i></div>
                                            <p>Virtual Worlds</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div class="icon"><i class="fi-sr-tennis"></i></div>
                                            <p>Sports</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div class="icon"><i class="fi-sr-vector"></i></div>
                                            <p>Trading Cards</p>
                                        </a>
                                    </li>
                                </ul>
                            </aside>
                        </div>
                        <div class="col-xl-9 col-lg-8">
                            <div class="welcome-activity">
                                <div class="welcome-activity-img welcome-img-two">
                                    <img src="/img/others/welcome_img02.png" alt="">
                                </div>
                                <div class="welcome-activity-content">
                                    <h3 class="title">welcome to NFT Activity</h3>
                                    <p>The top NFTs on Nftmar, ranked by volume, floor price and other <a
                                            href="login-register.html">statistics.</a></p>
                                </div>
                            </div>
                            <div class="activity-table-wrap">
                                <div class="activity-table-nav">
                                    <h4 class="title">All Collection Stats</h4>
                                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                                        <li class="nav-item" role="presentation">
                                            <button @click="tab = Tabs.Top" class="nav-link active" id="nft-tab"
                                                data-bs-toggle="tab" data-bs-target="#nft" type="button" role="tab"
                                                aria-controls="nft" aria-selected="true">Top</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button @click="tab = Tabs.Trending" class="nav-link" id="month-tab"
                                                data-bs-toggle="tab" data-bs-target="#month" type="button" role="tab"
                                                aria-controls="month" aria-selected="false">Trending</button>
                                        </li>
                                    </ul>
                                    <div class="ml-auto flex">
                                        <div class="w-40">
                                            <BaseListBox :options="networkOptions" :border="false"
                                                v-model="filter.network" />
                                        </div>
                                        <div class="w-32 ml-1">
                                            <BaseListBox
                                                :options="tab === Tabs.Top ? daysOptionsByTop : daysOptionsByTrending"
                                                :border="false" v-model="filter.day" />
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-content" id="myTabContent">
                                    <div class="tab-pane fade show active" id="nft" role="tabpanel"
                                        aria-labelledby="nft-tab">
                                        <div class="activity-table-responsive">
                                            <table class="table activity-table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th style="width: 250px;" class="text-start" scope="col">Collection
                                                        </th>
                                                        <th class="w-auto" scope="col">Volume</th>
                                                        <th class="w-auto" scope="col">Total Listed</th>
                                                        <th scope="col">Floor Price</th>
                                                        <th scope="col">Sales</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="(collection, index) in collections">
                                                        <td scope="row">{{ index + 1 }}</td>
                                                        <th scope="row" class="author flex items-center">
                                                            <img height="60" width="60" :src="collection.node.imageUrl"
                                                                alt="">
                                                            <NuxtLink
                                                                :href="pathCombine([Routes.Collection, collection.node.slug])">
                                                                {{ collection.node.name }}</NuxtLink>
                                                        </th>
                                                        <td class="price">{{
                                                            _.floor(Number(collection.node.windowCollectionStats.volume.unit),
                                                                1) }} {{ collection.node.windowCollectionStats.volume.symbol }}
                                                        </td>
                                                        <td>{{ collection.node.windowCollectionStats.totalListed }}</td>
                                                        <td class="price">{{
                                                            collection.node.windowCollectionStats?.floorPrice?.unit }} {{
        collection.node.windowCollectionStats?.floorPrice?.symbol }}
                                                        </td>
                                                        <td>{{ Number(collection.node.windowCollectionStats.numOfSales) }}
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="month" role="tabpanel" aria-labelledby="month-tab">
                                        <div class="activity-table-responsive">
                                            <table class="table activity-table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th style="width: 250px;" scope="col">Collection</th>
                                                        <th class="w-auto" scope="col">Volume</th>
                                                        <th class="w-auto" scope="col">Total Listed</th>
                                                        <th scope="col">Floor Price</th>
                                                        <th scope="col">Sales</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="(collection, index) in collections">
                                                        <td scope="row">{{ index + 1 }}</td>
                                                        <th scope="row" class="author flex items-center">
                                                            <img height="60" width="60" :src="collection.node.imageUrl"
                                                                alt="">
                                                            <NuxtLink
                                                                :href="pathCombine([Routes.Collection, collection.node.slug])">
                                                                {{ collection.node.name }}</NuxtLink>
                                                        </th>
                                                        <td class="price">{{
                                                            _.floor(Number(collection.node.windowCollectionStats.volume.unit),
                                                                1) }} {{ collection.node.windowCollectionStats.volume.symbol }}
                                                        </td>
                                                        <td>{{ collection.node.windowCollectionStats.totalListed }}</td>
                                                        <td class="price">{{
                                                            collection.node.windowCollectionStats?.floorPrice?.unit }} {{
        collection.node.windowCollectionStats?.floorPrice?.symbol }}
                                                        </td>
                                                        <td>{{ Number(collection.node.windowCollectionStats.numOfSales) }}
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Ranking-end -->

        </main>
        <!-- main-area-end -->


        <!-- footer-area -->
        <footer>
            <div class="footer-top-wrap">
                <div class="container">
                    <div class="row justify-content-between">
                        <div class="col-xl-3 col-lg-4 col-md-5 col-sm-9">
                            <div class="footer-widget">
                                <div class="footer-logo mb-25">
                                    <a href="index.html"><img src="/img/logo/logo.png" alt=""></a>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus veritatis sequi doloribus
                                    fuga.</p>
                                <ul class="footer-social">
                                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="#"><i class="fab fa-pinterest-p"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-3 col-sm-6">
                            <div class="footer-widget">
                                <h4 class="fw-title">Useful Links</h4>
                                <ul class="fw-links">
                                    <li><a href="#">All NFTs</a></li>
                                    <li><a href="login-register.html">How It Works</a></li>
                                    <li><a href="create-item.html">Create</a></li>
                                    <li><a href="#">Explore</a></li>
                                    <li><a href="login-register.html">Privacy & Terms</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-3 col-sm-6">
                            <div class="footer-widget">
                                <h4 class="fw-title">Community</h4>
                                <ul class="fw-links">
                                    <li><a href="login-register.html">Help Center</a></li>
                                    <li><a href="login-register.html">Partners</a></li>
                                    <li><a href="login-register.html">Suggestions</a></li>
                                    <li><a href="blog.html">Blog</a></li>
                                    <li><a href="login-register.html">Newsletter</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6">
                            <div class="footer-widget">
                                <h4 class="fw-title">Subscribe Us</h4>
                                <form action="#" class="newsletter-form">
                                    <input type="email" placeholder="info@youmail.com">
                                    <button type="submit"><i class="flaticon-small-rocket-ship-silhouette"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="copyright-wrap">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-6">
                            <div class="copyright-text">
                                <p>All rights reserved © 2022 by <a href="#">ThemeBeyond</a></p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <ul class="copyright-link-list">
                                <li><a href="login-register.html">Privacy Policy</a></li>
                                <li><a href="login-register.html">Terms And Condition</a></li>
                                <li><a href="login-register.html">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <!-- footer-area-end -->

    </div>
</template>


<script setup lang="ts">
import { ref, reactive } from "vue"
import { GetCollectionsRankingsByTopDTO, GetCollectionsRankingsByTrendingDTO } from "~/service/types";
import { useNetworkStore } from "~/store/network";
import { CollectionType } from "./types"
import Routes from "~/constants/routes";
import _ from "lodash"
import { useLoadingStore } from "~/store/loading";
const networkOptions = [
    {
        label: "All",
        value: null
    },
    {
        label: "Etherum",
        value: "ETHEREUM"
    },
    {
        label: "Polygon",
        value: "MATIC"
    },
    {
        label: "Arbitrum",
        value: "ARBITRUM"
    },
    {
        label: "Avalanche",
        value: "AVALANCHE"
    },
    {
        label: "Solana",
        value: "SOLANA"
    },
    {
        label: "BNB Chain",
        value: "BSC"
    },
    {
        label: "Optimism",
        value: "OPTIMISM"
    },
]
const daysOptionsByTrending = [
    {
        label: "1h",
        value: {
            timeWindow: "ONE_HOUR",
            topCollectionsSortBy: "ONE_HOUR_VOLUME"
        }
    },
    {
        label: "6h",
        value: {
            timeWindow: "SIX_HOUR",
            topCollectionsSortBy: "SIX_HOUR_VOLUME"
        }
    },
    {
        label: "24h",
        value: {
            timeWindow: "ONE_DAY",
            topCollectionsSortBy: "ONE_DAY_VOLUME"
        }
    },
    {
        label: "7d",
        value: {
            timeWindow: "SEVEN_DAY",
            topCollectionsSortBy: "SEVEN_DAY_VOLUME"
        }
    },
]
const daysOptionsByTop = [
    {
        label: "1h",
        value: {
            timeWindow: "ONE_HOUR",
            topCollectionsSortBy: "ONE_HOUR_VOLUME"
        }
    },
    {
        label: "6h",
        value: {
            timeWindow: "SIX_HOUR",
            topCollectionsSortBy: "SIX_HOUR_VOLUME"
        }
    },
    {
        label: "24h",
        value: {
            timeWindow: "ONE_DAY",
            topCollectionsSortBy: "ONE_DAY_VOLUME"
        }
    },
    {
        label: "7d",
        value: {
            timeWindow: "SEVEN_DAY",
            topCollectionsSortBy: "SEVEN_DAY_VOLUME"
        }
    },
    {
        label: "30d",
        value: {
            timeWindow: "THIRTY_DAY",
            topCollectionsSortBy: "THIRTY_DAY_VOLUME"
        }
    },
]

const enum Tabs {
    Top,
    Trending
}
const tab = ref(Tabs.Top)
const network = useNetworkStore().getNetwork
const loading = useLoadingStore()
const collections = ref<Array<CollectionType>>([])
const filter = reactive({
    network: networkOptions[0],
    day: tab.value === Tabs.Top ? daysOptionsByTop[0] : daysOptionsByTrending[0]
})

const getRankingsByTop = async (data: GetCollectionsRankingsByTopDTO) => {
    toggleLoadingOverlay()
    const { rankings: { edges } } = await network.getCollectionsRankingsByTop(data)
    collections.value = edges
    toggleLoadingOverlay()
}
const getRankingsByTrending = async (data: GetCollectionsRankingsByTrendingDTO) => {
    toggleLoadingOverlay()
    const { edges } = await network.getCollectionsRankingsByTrending(data)
    collections.value = edges
    toggleLoadingOverlay()
}

onMounted(() => {
    getRankingsByTop({
        "chain": null,
        "count": 100,
        "cursor": null,
        "sortBy": filter.day.value.topCollectionsSortBy,
        "topCollectionsSortBy": filter.day.value.topCollectionsSortBy,
        "categories": [],
        "timeWindow": filter.day.value.timeWindow,
        "parents": null,
        "createdAfter": null
    }).then(()=> {
        loading.set(false)
    })
})
watch(() => filter.network, () => {
    fetch()
})

watch(() => filter.day, () => {
    fetch()
})
watch(() => tab.value, () => {
    fetch()
})

const fetch = async () => {
    if (tab.value === Tabs.Top) {
        getRankingsByTop({
            "chain": filter.network.value,
            "count": 100,
            "cursor": null,
            "sortBy": filter.day.value.topCollectionsSortBy,
            "topCollectionsSortBy": filter.day.value.topCollectionsSortBy,
            "categories": [],
            "timeWindow": filter.day.value.timeWindow,
            "parents": null,
            "createdAfter": null
        })
    }
    if (tab.value === Tabs.Trending) {
        getRankingsByTrending({
            "chain": filter.network.value,
            "count": 100,
            "cursor": null,
            "categories": [],
            "eligibleCount": 500,
            "trendingCollectionsSortBy": filter.day.value.topCollectionsSortBy,
            "timeWindow": filter.day.value.timeWindow
        })
    }
}
</script>
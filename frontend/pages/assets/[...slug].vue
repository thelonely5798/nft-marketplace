<template>
    <!-- Offcanvas-area -->
    <BaseProfile />
    <!-- Offcanvas-area-end -->

    <!-- main-content -->
    <div class="main-content">
        <!-- main-content -->
        <div class="main-content">
            <!-- header-area -->
            <BaseHeader/>
            <!-- header-area-end -->

            <!-- main-area -->
            <main style="margin-top: 150px;">

                <!-- breadcrumb-area -->
                <div class="breadcrumb-area market-single-breadcrumb-area">
                    <div class="breadcrumb-bg"></div>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-12">
                                <div class="market-single-breadcrumb">
                                    <div class="home-back-btn"><NuxtLink :href="Routes.Home">go back to home</NuxtLink></div>
                                    <nav aria-label="breadcrumb">
                                        <ol class="breadcrumb">
                                            <li class="breadcrumb-item"><a :href="Routes.Home">Home</a></li>
                                            <li class="breadcrumb-item active" aria-current="page">Product Details</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- breadcrumb-area-end -->

                <!-- market-single-area -->
                <section class="market-single-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="market-single-img">
                                    <img :src="nftInfo.displayImageUrl" alt="">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="market-single-top">
                                    <div class="market-single-title-wrap">
                                        <h2 class="title">{{ nftInfo.name }}</h2>
                                        <ul class="market-details-meta">
                                            <li>Owned by <a href="#">{{ nftInfo.assetOwners?.edges[0].node.owner.displayName
                                                || contractName(nftInfo.assetOwners?.edges[0].node.owner.address || '') }}</a></li>
                                            <li class="wishlist">{{ nftInfo.favoritesCount }} favorites</li>
                                        </ul>
                                    </div>
                                    <div class="market-single-action">
                                        <ul>
                                            <li><a href="#"><i class="fas fa-share-alt"></i></a></li>
                                            <li><a href="#"><i class="fi-sr-menu-dots"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="market-single-creator">
                                            <div class="thumb"><img :style="{ borderRadius: '50%' }"
                                                    :src="nftInfo.creator?.imageUrl" alt=""></div>
                                            <div class="info">
                                                <h5 class="title"><NuxtLink :href="Routes.AuthorProfile + '/' + nftInfo.creator?.address">{{
                                                    nftInfo.creator?.displayName || nftInfo.creator?.displayName }}</NuxtLink>
                                                </h5>
                                                <span>Creators by</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="market-single-content">
                                    <p>{{ nftInfo.description }}</p>
                                </div>
                                <div class="highest-bid-wrap">
                                    <div class="row">
                                        <h5 class="title">Current price : &nbsp; {{
                                            nftInfo.tradeSummary?.bestAsk.priceType.unit }} {{
        nftInfo.tradeSummary?.bestAsk.payment.symbol }}</h5>
                                    </div>
                                    <div class="row">
                                        <div class="col-xl-6 col-lg-12 col-md-6" v-if="!_.isEmpty(nftInfo.acceptHighestOffer?.bestBid)">
                                            <h5 class="title">Highest bid</h5>
                                            <div class="highest-bid-avatar">
                                                <div class="thumb"><img src="/img/others/heighest_avatar.png" alt=""></div>
                                                <div class="content">
                                                    <h5 class="title"><NuxtLink :href="Routes.AuthorProfile + '/' + nftInfo.acceptHighestOffer?.bestBid.maker.address">{{  contractName(String(nftInfo.acceptHighestOffer?.bestBid.maker.address)) }}</NuxtLink></h5>
                                                    <span>{{ nftInfo.acceptHighestOffer?.bestBid.perUnitPriceType.unit }}
                                                        {{   nftInfo.acceptHighestOffer?.bestBid.perUnitPriceType.symbol }}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-6 col-lg-12 col-md-6">
                                            <h5 class="title">Auction end in</h5>
                                            <div class="bid-countdown-wrap">
                                                <div class="coming-time">
                                                    <div class="time-count day"><span>{{ countDown.day }}</span><span>Day</span></div>
                                                    <div class="time-count hour"><span>{{ countDown.hour }}</span><span>Hours</span></div>
                                                    <div class="time-count min"><span>{{ countDown.minutes }}</span><span>Minute</span></div>
                                                    <div class="time-count sec"><span>{{ countDown.second }}</span><span>Second</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a href="#" class="place-bid-btn">Place a bid</a>
                            </div>
                            <div class="col-lg-6">
                                <div class="activity-table-responsive">
                                    <table class="table activity-table">
                                        <thead>
                                            <tr>
                                                <!-- <th scope="col" class="title">Description</th> -->
                                                <th scope="col">Trait Type</th>
                                                <th scope="col">Value</th>
                                                <th scope="col" class="time">Floor Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="trait in nftInfo.traits?.edges">
                                                <!-- <th scope="row" class="author">
                                                    <img src="/img/others/mp_activity_author01.png" alt="">
                                                     <a href="javascript:void(0)">{{ trait.node.id }}</a>
                                                </th> -->
                                                <td class="text-start">{{ trait.node.traitType }}</td>
                                                <td>{{ trait.node.value }}</td>
                                                <td class="text-end">2,356 ETH</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="bid-history-wrap">
                                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link active" id="bid-tab" data-bs-toggle="tab"
                                                data-bs-target="#bid" type="button" role="tab" aria-controls="bid"
                                                aria-selected="true">Bid History</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="info-tab" data-bs-toggle="tab"
                                                data-bs-target="#info" type="button" role="tab" aria-controls="info"
                                                aria-selected="false">Info</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="provenance-tab" data-bs-toggle="tab"
                                                data-bs-target="#provenance" type="button" role="tab"
                                                aria-controls="provenance" aria-selected="false">Provenance</button>
                                        </li>
                                    </ul>
                                    <div class="tab-content" id="myTabContent">
                                        <div class="tab-pane fade show active" id="bid" role="tabpanel"
                                            aria-labelledby="bid-tab">
                                            <div class="bid-history-overflow scroll">
                                                <ul class="bid-history-list">
                                                    <li>
                                                        <div class="bid-history-item">
                                                            <div class="highest-bid-avatar">
                                                                <div class="thumb"><img
                                                                        src="/img/others/heighest_avatar.png" alt=""></div>
                                                                <div class="content">
                                                                    <h5 class="title"><a href="author-profile.html">Tomas
                                                                            lindahl</a></h5>
                                                                    <span>Bid listed</span>
                                                                </div>
                                                            </div>
                                                            <div class="bid-history-info">
                                                                <span>8 hours ago</span>
                                                                <h6 class="title">25 ETH</h6>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="bid-history-item">
                                                            <div class="highest-bid-avatar">
                                                                <div class="thumb"><img
                                                                        src="/img/others/heighest_avatar02.png" alt="">
                                                                </div>
                                                                <div class="content">
                                                                    <h5 class="title"><a href="author-profile.html">David
                                                                            Michels</a></h5>
                                                                    <span>Bid listed</span>
                                                                </div>
                                                            </div>
                                                            <div class="bid-history-info">
                                                                <span>8 hours ago</span>
                                                                <h6 class="title">25 ETH</h6>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="bid-history-item">
                                                            <div class="highest-bid-avatar">
                                                                <div class="thumb"><img
                                                                        src="/img/others/heighest_avatar03.png" alt="">
                                                                </div>
                                                                <div class="content">
                                                                    <h5 class="title"><a href="author-profile.html">Jonny
                                                                            Dev</a></h5>
                                                                    <span>Bid listed</span>
                                                                </div>
                                                            </div>
                                                            <div class="bid-history-info">
                                                                <span>8 hours ago</span>
                                                                <h6 class="title">25 ETH</h6>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="bid-history-item">
                                                            <div class="highest-bid-avatar">
                                                                <div class="thumb"><img
                                                                        src="/img/others/heighest_avatar04.png" alt="">
                                                                </div>
                                                                <div class="content">
                                                                    <h5 class="title"><a href="author-profile.html">Tomas
                                                                            lindahl</a></h5>
                                                                    <span>Bid listed</span>
                                                                </div>
                                                            </div>
                                                            <div class="bid-history-info">
                                                                <span>8 hours ago</span>
                                                                <h6 class="title">25 ETH</h6>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="bid-history-item">
                                                            <div class="highest-bid-avatar">
                                                                <div class="thumb"><img
                                                                        src="/img/others/heighest_avatar05.png" alt="">
                                                                </div>
                                                                <div class="content">
                                                                    <h5 class="title"><a href="author-profile.html">Tomas
                                                                            Komai</a></h5>
                                                                    <span>Bid listed</span>
                                                                </div>
                                                            </div>
                                                            <div class="bid-history-info">
                                                                <span>8 hours ago</span>
                                                                <h6 class="title">25 ETH</h6>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="bid-history-item">
                                                            <div class="highest-bid-avatar">
                                                                <div class="thumb"><img
                                                                        src="/img/others/heighest_avatar06.png" alt="">
                                                                </div>
                                                                <div class="content">
                                                                    <h5 class="title"><a href="author-profile.html">Tomas
                                                                            Harne</a></h5>
                                                                    <span>Bid listed</span>
                                                                </div>
                                                            </div>
                                                            <div class="bid-history-info">
                                                                <span>8 hours ago</span>
                                                                <h6 class="title">25 ETH</h6>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="bid-history-item">
                                                            <div class="highest-bid-avatar">
                                                                <div class="thumb"><img
                                                                        src="/img/others/heighest_avatar.png" alt=""></div>
                                                                <div class="content">
                                                                    <h5 class="title"><a href="author-profile.html">Tomas
                                                                            lindahl</a></h5>
                                                                    <span>Bid listed</span>
                                                                </div>
                                                            </div>
                                                            <div class="bid-history-info">
                                                                <span>8 hours ago</span>
                                                                <h6 class="title">25 ETH</h6>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="info" role="tabpanel" aria-labelledby="info-tab">
                                            <div class="bid-history-overflow scroll">
                                                <ul class="bid-history-list">
                                                    <li>
                                                        <div class="bid-history-item">
                                                            <div class="highest-bid-avatar">
                                                                <div class="thumb"><img
                                                                        src="/img/others/heighest_avatar02.png" alt="">
                                                                </div>
                                                                <div class="content">
                                                                    <h5 class="title"><a href="#">Tomas lindahl</a></h5>
                                                                    <span>Bid listed</span>
                                                                </div>
                                                            </div>
                                                            <div class="bid-history-info">
                                                                <span>8 hours ago</span>
                                                                <h6 class="title">25 ETH</h6>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="bid-history-item">
                                                            <div class="highest-bid-avatar">
                                                                <div class="thumb"><img
                                                                        src="/img/others/heighest_avatar03.png" alt="">
                                                                </div>
                                                                <div class="content">
                                                                    <h5 class="title"><a href="#">Tomas lindahl</a></h5>
                                                                    <span>Bid listed</span>
                                                                </div>
                                                            </div>
                                                            <div class="bid-history-info">
                                                                <span>8 hours ago</span>
                                                                <h6 class="title">25 ETH</h6>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="bid-history-item">
                                                            <div class="highest-bid-avatar">
                                                                <div class="thumb"><img
                                                                        src="/img/others/heighest_avatar04.png" alt="">
                                                                </div>
                                                                <div class="content">
                                                                    <h5 class="title"><a href="#">Tomas lindahl</a></h5>
                                                                    <span>Bid listed</span>
                                                                </div>
                                                            </div>
                                                            <div class="bid-history-info">
                                                                <span>8 hours ago</span>
                                                                <h6 class="title">25 ETH</h6>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="bid-history-item">
                                                            <div class="highest-bid-avatar">
                                                                <div class="thumb"><img
                                                                        src="/img/others/heighest_avatar05.png" alt="">
                                                                </div>
                                                                <div class="content">
                                                                    <h5 class="title"><a href="#">Tomas lindahl</a></h5>
                                                                    <span>Bid listed</span>
                                                                </div>
                                                            </div>
                                                            <div class="bid-history-info">
                                                                <span>8 hours ago</span>
                                                                <h6 class="title">25 ETH</h6>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="bid-history-item">
                                                            <div class="highest-bid-avatar">
                                                                <div class="thumb"><img
                                                                        src="/img/others/heighest_avatar06.png" alt="">
                                                                </div>
                                                                <div class="content">
                                                                    <h5 class="title"><a href="#">Tomas lindahl</a></h5>
                                                                    <span>Bid listed</span>
                                                                </div>
                                                            </div>
                                                            <div class="bid-history-info">
                                                                <span>8 hours ago</span>
                                                                <h6 class="title">25 ETH</h6>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="bid-history-item">
                                                            <div class="highest-bid-avatar">
                                                                <div class="thumb"><img
                                                                        src="/img/others/heighest_avatar02.png" alt="">
                                                                </div>
                                                                <div class="content">
                                                                    <h5 class="title"><a href="#">Tomas lindahl</a></h5>
                                                                    <span>Bid listed</span>
                                                                </div>
                                                            </div>
                                                            <div class="bid-history-info">
                                                                <span>8 hours ago</span>
                                                                <h6 class="title">25 ETH</h6>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="bid-history-item">
                                                            <div class="highest-bid-avatar">
                                                                <div class="thumb"><img
                                                                        src="/img/others/heighest_avatar.png" alt=""></div>
                                                                <div class="content">
                                                                    <h5 class="title"><a href="#">Tomas lindahl</a></h5>
                                                                    <span>Bid listed</span>
                                                                </div>
                                                            </div>
                                                            <div class="bid-history-info">
                                                                <span>8 hours ago</span>
                                                                <h6 class="title">25 ETH</h6>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="provenance" role="tabpanel"
                                            aria-labelledby="provenance-tab">
                                            <div class="bid-history-overflow scroll">
                                                <ul class="bid-history-list">
                                                    <li>
                                                        <div class="bid-history-item">
                                                            <div class="highest-bid-avatar">
                                                                <div class="thumb"><img
                                                                        src="/img/others/heighest_avatar.png" alt=""></div>
                                                                <div class="content">
                                                                    <h5 class="title"><a href="#">Tomas lindahl</a></h5>
                                                                    <span>Bid listed</span>
                                                                </div>
                                                            </div>
                                                            <div class="bid-history-info">
                                                                <span>8 hours ago</span>
                                                                <h6 class="title">25 ETH</h6>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="bid-history-item">
                                                            <div class="highest-bid-avatar">
                                                                <div class="thumb"><img
                                                                        src="/img/others/heighest_avatar02.png" alt="">
                                                                </div>
                                                                <div class="content">
                                                                    <h5 class="title"><a href="#">Tomas lindahl</a></h5>
                                                                    <span>Bid listed</span>
                                                                </div>
                                                            </div>
                                                            <div class="bid-history-info">
                                                                <span>8 hours ago</span>
                                                                <h6 class="title">25 ETH</h6>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="bid-history-item">
                                                            <div class="highest-bid-avatar">
                                                                <div class="thumb"><img
                                                                        src="/img/others/heighest_avatar03.png" alt="">
                                                                </div>
                                                                <div class="content">
                                                                    <h5 class="title"><a href="#">Tomas lindahl</a></h5>
                                                                    <span>Bid listed</span>
                                                                </div>
                                                            </div>
                                                            <div class="bid-history-info">
                                                                <span>8 hours ago</span>
                                                                <h6 class="title">25 ETH</h6>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="bid-history-item">
                                                            <div class="highest-bid-avatar">
                                                                <div class="thumb"><img
                                                                        src="/img/others/heighest_avatar04.png" alt="">
                                                                </div>
                                                                <div class="content">
                                                                    <h5 class="title"><a href="#">Tomas lindahl</a></h5>
                                                                    <span>Bid listed</span>
                                                                </div>
                                                            </div>
                                                            <div class="bid-history-info">
                                                                <span>8 hours ago</span>
                                                                <h6 class="title">25 ETH</h6>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="bid-history-item">
                                                            <div class="highest-bid-avatar">
                                                                <div class="thumb"><img
                                                                        src="/img/others/heighest_avatar05.png" alt="">
                                                                </div>
                                                                <div class="content">
                                                                    <h5 class="title"><a href="#">Tomas lindahl</a></h5>
                                                                    <span>Bid listed</span>
                                                                </div>
                                                            </div>
                                                            <div class="bid-history-info">
                                                                <span>8 hours ago</span>
                                                                <h6 class="title">25 ETH</h6>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="bid-history-item">
                                                            <div class="highest-bid-avatar">
                                                                <div class="thumb"><img
                                                                        src="/img/others/heighest_avatar06.png" alt="">
                                                                </div>
                                                                <div class="content">
                                                                    <h5 class="title"><a href="#">Tomas lindahl</a></h5>
                                                                    <span>Bid listed</span>
                                                                </div>
                                                            </div>
                                                            <div class="bid-history-info">
                                                                <span>8 hours ago</span>
                                                                <h6 class="title">25 ETH</h6>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="bid-history-item">
                                                            <div class="highest-bid-avatar">
                                                                <div class="thumb"><img
                                                                        src="/img/others/heighest_avatar.png" alt=""></div>
                                                                <div class="content">
                                                                    <h5 class="title"><a href="#">Tomas lindahl</a></h5>
                                                                    <span>Bid listed</span>
                                                                </div>
                                                            </div>
                                                            <div class="bid-history-info">
                                                                <span>8 hours ago</span>
                                                                <h6 class="title">25 ETH</h6>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- market-single-area-end -->


            </main>
            <!-- main-area-end -->


        </div>
        <!-- main-content-end -->

    </div>
    <!-- main-content-end -->
</template>

<script setup lang="ts">
import _ from "lodash"
import Routes from "@/constants/routes"
import { useNetworkStore } from "~/store/network";
import { NftInterface } from "./types";
import { useLoadingStore } from "~/store/loading";
import dayjs from "dayjs"
import duration from "dayjs/plugin/duration"
dayjs.extend(duration)

const route = useRoute()
const nftInfo = ref<Partial<NftInterface>>({})
const network = useNetworkStore().getNetwork
const loading = useLoadingStore()
const countDown = ref({day: "", hour: "", minutes: "", second: ""})
onBeforeMount(() => {
    const chain = route.params.slug[0].toUpperCase()
    const contractAddress = route.params.slug[1]
    const tokenId = route.params.slug[2]
    const fetch = async () => {
        const body = {
            chain,
            contractAddress,
            tokenId
        }
        const response = await network.getAssetPageQuery(body)
        nftInfo.value = response.nft
    }
    Promise.all([fetch()]).then(() => {
        loading.set(false)
        setInterval(() => {
            getCountDown()
        }, 1000)
    })
})


const getCountDown = () => {


    let x = dayjs(nftInfo.value.tradeSummary?.bestAsk.closedAt)
    let y = dayjs()

    let d = dayjs.duration(x.diff(y))
    countDown.value.day =  d.asDays().toFixed(0).toString()
    countDown.value.hour =   d.get("hours").toString()
    countDown.value.minutes=   d.get("minutes").toString()
    countDown.value.second =   d.get("seconds").toString()
}
</script>
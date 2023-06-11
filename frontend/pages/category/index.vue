<template>
    <!-- Offcanvas-area -->
    <BaseProfile />
    <!-- Offcanvas-area-end -->

    <!-- main-content -->
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
                                <h3 class="title">Category</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- breadcrumb-area-end -->

            <!-- category-area -->
            <KeepAlive>
                <BaseCategory :categories="getDataForHeader()" />
            </KeepAlive>
            <!-- category-area-end -->

            <section v-for="(c, index) in category" class="top-collection-area">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="section-title mb-40">
                                <h2 class="title">Trending in {{ c.name }}<img src="/img/icons/title_icon01.png" alt="">
                                </h2>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div :class="'category-trending-tag-list-nav-' + index"></div>
                        </div>
                    </div>
                    <div :class="'row top-collection-active  trending-tag-list-active-' + index">
                        <div v-for="collection in c.collections" class="col-xl-3">
                            <div class="top-collection-item">
                                <div class="collection-item-top">
                                    <ul>
                                        <!-- <li class="avatar"><a href="author-profile.html" class="thumb"><img
                                                    src="/img/others/top_col_avatar.png" alt=""></a>By <a
                                                href="author-profile.html" class="name">{{ collection.name }}</a></li> -->
                                        <li></li>
                                        <li class="info-dots dropdown">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <a href="#" class="dropdown-toggle" data-bs-toggle="dropdown" role="button"
                                                aria-expanded="false"></a>
                                            <ul class="dropdown-menu">
                                                <li><a href="nft-marketplace.html">Artwork</a></li>
                                                <li><a href="nft-marketplace.html">Action</a></li>
                                                <li><a href="nft-marketplace.html">Author Action</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div class="collection-item-thumb">
                                    <a href="market-single.html"><img :style="{ width: '100%', height: '200px' }"
                                            :src="collection.banner" alt=""></a>
                                </div>
                                <div class="collection-item-content">
                                    <h6 class="title"><a href="market-single.html">{{ collection.name }}</a></h6>
                                    <!-- <h6 class="title"><a href="market-single.html">Floor Price</a> <span class="price">{{
                                        collection.windowCollectionStats.floorPrice?.unit }} {{
        collection.windowCollectionStats.floorPrice?.symbol }} </span></h6> -->
                                </div>
                                <div class="collection-item-bottom">
                                    <ul>
                                        <li class="bid"><a href="market-single.html" class="btn">Explore</a></li>
                                        <li class="wishlist"><a href="login-register.html">59</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <!-- main-area-end -->

    </div>
    <!-- main-content-end -->
</template>

<script  setup lang="ts">
import { onMounted, onBeforeMount } from "vue"
import { useNetworkStore } from "~/store/network";
import { Category } from "./types"
import { useLoadingStore } from "~/store/loading";
import Routes from "~/constants/routes";
import { Collection } from "./types";


const network = useNetworkStore().getNetwork

const category = ref<Array<Category>>([])
const loadingStore = useLoadingStore()
const route = useRoute()
const carouselQuery = ref([])

onBeforeMount(async () => {
    $('#preloader').delay(0).fadeIn();
    Promise.all([
        getCarouselQuery(),
        getCategoryByTrendingTagList()
    ])
})
onMounted(async () => {
    nextTick(() => {
    })
})
const activeSlick = () => {
    category.value.forEach((value, index) => {
        $('.trending-tag-list-active-' + index).slick({
            dots: false,
            infinite: true,
            speed: 1000,
            autoplay: true,
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev"><i class="fi-sr-arrow-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fi-sr-arrow-right"></i></button>',
            appendArrows: ".category-trending-tag-list-nav-" + index,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                    }
                },
            ]
        });
    })
}
const getCategoryByTrendingTagList = async () => {
    category.value = carouselQuery.value.map((d: any) => ({
        slug: d.slug,
        name: d.name,
        collections: []
    }))


    const promises = category.value.map(async (c) => async function() {
        c.collections = await getCategoryScrollerQuery(c.slug)
    }())
    console.log(promises)
    Promise.all(promises).then(() => {
        activeSlick()
        loadingStore.set(false)
    })
}

const getCarouselQuery = async () => {
    const cache = sessionStorage.getItem("getCarouselQuery")
    if (cache) {
        const data = JSON.parse(cache)
        carouselQuery.value = data
        return
    }
    const data = await network.getCarouselQuery()
    carouselQuery.value = data

    sessionStorage.setItem("getCarouselQuery", JSON.stringify(carouselQuery.value))
}
const getDataForHeader = () => {
    return carouselQuery.value.map((value: any) => ({
        href: Routes.Category + value.slug,
        name: value.name
    }))
}

const getCategoryScrollerQuery = async (slug: string): Promise<Array<Collection>> => {
    const data = await network.getCategoryScrollerQuery(slug) as Array<Collection>
    return data
}
</script>

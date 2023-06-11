<template>
    <!-- header-area -->
    <header>
        <div class="menu-area">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="mobile-nav-toggler"><i class="fas fa-bars"></i></div>
                        <div class="menu-wrap">
                            <nav class="menu-nav">
                                <div class="logo"><a :href="Routes.Home"><img src="img/logo/naftmak.svg" alt=""></a></div>
                                <div class="header-form">
                                    <form action="#">
                                        <button><i class="flaticon-search"></i></button>
                                        <input type="text" placeholder="Search Artwork">
                                    </form>
                                </div>
                                <div class="navbar-wrap main-menu d-none d-lg-flex">
                                    <ul class="navigation">
                                        <li :class="isActive(Routes.Home)"><a :href="Routes.Home">Home</a></li>
                                        <li :class="isActive(Routes.NftMarketplace)"><a
                                                :href="Routes.NftMarketplace">Explore</a></li>
                                        <li :class="isActive(Routes.Category)"><a
                                                :href="Routes.Category">Collection</a></li>
                                        <!-- <li class="menu-item-has-children"><a href="/#">Pages</a>
                                                    <ul class="submenu">
                                                        <li :class="isActive(Routes.Activity)"><a :href="Routes.Activity">Activity</a></li>
                                                        <li :class="isActive(Routes.Collection)"><a :href="Routes.Collection">Category</a></li>
                                                        <li :class="isActive(Routes.AuthorProfile)"><a :href="Routes.Ranking">Ranking</a></li>
                                                        <li :class="isActive(Routes.AuthorProfile)"><a href="/creators">Creators</a></li>
                                                        <li :class="isActive(Routes.AuthorProfile)"><a href="/market-single">Market Single</a></li>
                                                        <li :class="isActive(Routes.NftLiveBidding)"><a :href="Routes.NftLiveBidding">Live Bidding</a></li>
                                                        <li :class="isActive(Routes.CreateNft)"><a :href="Routes.CreateNft">Create Item</a></li>
                                                        <li :class="isActive(Routes.AuthorProfile)"><a :href="Routes.AuthorProfile">Author Profile</a></li>
                                                        <li><a :href="Routes.Login">Login & Register</a></li>
                                                    </ul>
                                                </li> -->
                                        <li class="menu-item-has-children"><a href="#">{{ network.getName() }}</a>
                                            <ul class="submenu">
                                                <li><a @click="networkStore.setNetwork(NetworkType.Etherum)"
                                                        href="#">Etherum</a></li>
                                                <li><a @click="networkStore.setNetwork(NetworkType.Arbitrum)"
                                                        href="#">Arbitrum</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div class="header-action d-none d-md-block" v-if="!userStore.getConnect">
                                    <ul>
                                        <li class="header-btn"><a :href="Routes.Login" class="btn">Wallet Connect</a></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <!-- Mobile Menu  -->
                        <div class="mobile-menu">
                            <nav class="menu-box">
                                <div class="close-btn"><i class="fas fa-times"></i></div>
                                <div class="nav-logo"><a href="/"><img src="img/logo/logo.png" alt="" title=""></a>
                                </div>
                                <div class="menu-outer">
                                    <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header-->
                                </div>
                                <div class="social-links">
                                    <ul class="clearfix">
                                        <li><a href="/#"><span class="fab fa-twitter"></span></a></li>
                                        <li><a href="/#"><span class="fab fa-facebook-f"></span></a></li>
                                        <li><a href="/#"><span class="fab fa-pinterest-p"></span></a></li>
                                        <li><a href="/#"><span class="fab fa-instagram"></span></a></li>
                                        <li><a href="/#"><span class="fab fa-youtube"></span></a></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div class="menu-backdrop"></div>
                        <!-- End Mobile Menu -->
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!-- header-area-end -->
</template>


<script setup lang="ts" >
import { computed } from "vue"
import Routes from "@/constants/routes"
import { useNetworkStore } from "~/store/network";
import { Arbitrum } from "~/service/arbitrum";
import { Etherum } from "~/service/etherum";
import { NetworkType } from "~/service";
import { useUserStore } from "~/store/user";
const route = useRoute()

const isActive = (path: string) => {
    return route.path === path ? "active" : ""
}


const networkStore = useNetworkStore()
const network = networkStore.getNetwork

const userStore = useUserStore()
</script>
<template>
    <!-- Offcanvas-area -->
    <BaseProfile/>
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
                                <h3 class="title">Registration & Sign In</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- breadcrumb-area-end -->

            <!-- welcome-area -->
            <section class="login-welcome-area">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="login-welcome-wrap">
                                <div class="login-welcome-content">
                                    <h2 class="title">welcome to NFT Activity</h2>
                                    <p>The top NFTs on Nftmar, ranked by volume, floor price and other <a
                                            href="login-register">statistics.</a></p>
                                </div>
                                <div class="welcome-rating">
                                    <img src="/img/icons/three_star.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="signup-form-wrap">
                                <h4 class="title">Sign up</h4>
                                <form action="#">
                                    <div class="form-grp">
                                        <label for="fName">First name</label>
                                        <input type="text" id="fName">
                                    </div>
                                    <div class="form-grp">
                                        <label for="lName">Last name</label>
                                        <input type="text" id="lName">
                                    </div>
                                    <div class="form-grp">
                                        <label for="email">Email address</label>
                                        <input type="email" id="email">
                                    </div>
                                    <div class="form-grp">
                                        <label for="cPassword">Create Password</label>
                                        <input type="password" id="cPassword">
                                    </div>
                                    <div class="form-grp">
                                        <label for="rPassword">Re Password</label>
                                        <input type="password" id="rPassword">
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                        <label class="form-check-label" for="flexCheckDefault">Allow to all tearms &
                                            condition</label>
                                    </div>
                                    <div class="form-btn-wrap">
                                        <button class="btn signup">sign up</button>
                                        <button class="btn login">log in</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="another-way-signup">
                                <h4 class="title">Another way to sign up</h4>
                                <p>The top NFTs on Nftmar, ranked by volume, floor price and other.</p>
                                <ul class="another-way-list">
                                    <li @click="connectNetwork()"><a href="javascript:void(0)"><img
                                                src="/img/icons/signup_icon01.png" alt="">MetaMask
                                            <span>Popular</span></a></li>
                                    <li><a href="#"><img src="/img/icons/signup_icon02.png" alt="">Coinbase Wallet</a>
                                    </li>
                                    <li><a href="#"><img src="/img/icons/signup_icon03.png" alt="">Wallet Connect</a>
                                    </li>
                                    <li><a href="#"><img src="/img/icons/signup_icon04.png" alt="">Fortmatic</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- welcome-area-end -->

        </main>
        <!-- main-area-end -->
    </div>
    <!-- main-content-end -->
</template>

<script setup lang="ts">
import { IConnectFactory, ConnectType } from "@/service/connect"
import Web3 from "web3"
import { NetworkType } from "~/service";
import { useNetworkStore } from "~/store/network";
import { NetworkChainID } from "@/constants/chainId"
import { useLoadingStore } from "~/store/loading";

const loadingStore = useLoadingStore()
loadingStore.set(false)
const connectNetwork = async () => {
    IConnectFactory.getConnect(ConnectType.MetaMask).then(async () => {
       
    })

}
</script>
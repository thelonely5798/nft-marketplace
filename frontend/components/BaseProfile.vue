<template>
    <div class="offcanvas-wrapper">
        <div class="menu-trigger"><i class="fi-sr-angle-small-left"></i></div>
        <div class="menu-close"><i class="fi-sr-angle-small-right"></i></div>
        <div class="offcanvas-inner scroll">
            <div class="author-profile text-center mb-30">
                <div class="author-img">
                    <img src="/img/others/author_img.png" alt="">
                </div>
                <div class="author-content">
                    <h4 class="title">{{ contractName(userStore.getAddress) }}</h4>
                    <p>Super Author</p>
                    <a :href="Routes.AuthorProfile" class="btn">View Profile</a>
                </div>
            </div>
            <div class="sidebar-slider text-center mb-25">
                <div class="sidebar-active">
                    <div class="sidebar-img">
                        <a href="market-single"><img src="/img/others/sidebar_img01.png" alt=""></a>
                    </div>
                    <div class="sidebar-img">
                        <a href="market-single"><img src="/img/others/sidebar_img02.png" alt=""></a>
                    </div>
                    <div class="sidebar-img">
                        <a href="market-single"><img src="/img/others/sidebar_img03.png" alt=""></a>
                    </div>
                </div>
            </div>
            <div class="overview">
                <div class="overview-title">
                    <h4 class="title">Overview</h4>
                </div>
                <div class="overview-item-wrap">
                    <div class="overview-item">
                        <div class="overview-icon">
                            <i class="fi-sr-box-alt"></i>
                        </div>
                        <div class="overview-content">
                            <h4 class="title">Open project</h4>
                            <span>820</span>
                        </div>
                        <a href="nft-marketplace"><i class=" fi-sr-angle-small-right"></i></a>
                    </div>
                    <div class="overview-item">
                        <div class="overview-icon">
                            <i class="fi-sr-mountains"></i>
                        </div>
                        <div class="overview-content">
                            <h4 class="title">Successful Completed</h4>
                            <span>546</span>
                        </div>
                        <a href="nft-marketplace"><i class=" fi-sr-angle-small-right"></i></a>
                    </div>
                    <div class="overview-item">
                        <div class="overview-icon">
                            <i class=" fi-sr-hourglass-end"></i>
                        </div>
                        <div class="overview-content">
                            <h4 class="title">trending</h4>
                            <span>32</span>
                        </div>
                        <a href="nft-marketplace"><i class=" fi-sr-angle-small-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="offcanvas-overly"></div>
</template>

<script setup lang="ts">
import Routes from '~/constants/routes';
import { useUserStore } from '~/store/user';

const userStore = useUserStore()
</script>
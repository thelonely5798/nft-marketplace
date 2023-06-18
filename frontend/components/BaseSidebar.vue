<template>
    <!-- sidebar -->
    <div class="sidebar">
        <div class="sidebar-logo mb-25">
            <a :href="Routes.Home"><img src="/img/logo/logo.png" alt=""></a>
        </div>
        <div class="sidebar-icon">
            <ul>
                <li :class="isActive(Routes.Home)"><a :href="Routes.Home"><i class="fi-sr-apps-delete"></i></a></li>
                <!-- <li :class="isActive(Routes.NftLiveBidding)"><a :href="Routes.NftLiveBidding"><i class="fi-sr-book-alt"></i></a></li> -->
                <li :class="isActive(Routes.Category)"><a :href="Routes.Category"><i class="fi-sr-butterfly"></i></a></li>
                <li :class="isActive(Routes.CreateNft)"><a :href="Routes.CreateNft"><i class="fi-sr-camping"></i></a></li>
                <li :class="isActive(Routes.Ranking)"><a :href="Routes.Ranking"><i class="fi-sr-crown"></i></a></li>
                <!-- <li :class="isActive(Routes.NftMarketplace)"><a :href="Routes.NftMarketplace"><i class="fi-sr-shop"></i></a> </li> -->
                <li :class="isActive(Routes.AuthorProfile)"><a :href="Routes.AuthorProfile"><i class="fi-sr-settings"></i></a></li>
                <li ><a href="#" id="btnFullscreen"><i class="fi-sr-tool-marquee"></i></a></li>
            </ul>
        </div>
    </div>
    <!-- sidebar-end -->
</template>



<script setup lang="ts">
import Routes from '~/constants/routes';

const route = useRoute()

const isActive = (path: string)=> {
    return route.path === path ? "active" : ""
}
</script>
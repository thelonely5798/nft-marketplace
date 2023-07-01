<template>
    <!-- Offcanvas-area -->
    <BaseProfile />
    <!-- Offcanvas-area-end -->

    <!-- main-content -->
    <div class="main-content">

        <!-- main-area -->
        <main>

            <!-- breadcrumb-area -->
            <section class="breadcrumb-area breadcrumb-bg breadcrumb-bg-two">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-6 col-md-8">
                            <div class="breadcrumb-content text-center">
                                <h3 class="title">Authors Profile</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- breadcrumb-area-end -->

    
            <!-- category-area-end -->

            <!-- author-profile-area -->
            <div class="author-profile-area">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-xl-3 col-lg-4 col-md-6 order-2 order-lg-0">
                            <aside class="author-profile-wrap">
                                <div class="author-profile-thumb">
                                    <img :src="account.imageUrl" alt="">
                                </div>
                                <div class="author-info">
                                    <h5 class="title">{{ account.displayName }}<img src="/img/icons/star.svg" alt=""></h5>
                                    <span>@ marketplace</span>
                                    <p>Myself Olivia_ ipsum dolor amet this consectetur adipisicing elit. Quis non fugit
                                        totam laborio.</p>
                                </div>
                                <ul class="author-collection">
                                    <li>
                                        <p>Collected</p>
                                        <span>{{ totalCount }}</span>
                                    </li>
                                    <li>
                                        <p>Creation</p>
                                        <span>235</span>
                                    </li>
                                </ul>
                                <div class="author-social">
                                    <h6 class="title">Follow Social Media :</h6>
                                    <ul>
                                        <li><a href="#">
                                                <div class="icon"><i class="fab fa-facebook-f"></i></div> Facebook /
                                                @joys_Aoi
                                            </a></li>
                                        <li><a href="#">
                                                <div class="icon"><i class="fab fa-facebook-messenger"></i></div> Messenger
                                                / @joys_Avi
                                            </a></li>
                                        <li><a href="#">
                                                <div class="icon"><i class="fab fa-whatsapp"></i></div> Whatsapp / @joys_Avi
                                            </a></li>
                                        <li><a href="#">
                                                <div class="icon"><i class="fab fa-youtube"></i></div> Youtube / @joys_Avi
                                            </a></li>
                                    </ul>
                                </div>
                            </aside>
                        </div>
                        <div class="col-xl-9 col-lg-8">
                            <div class="author-product-meta flex justify-between">
                                <ul class="w-full">
                                    <li class="active"><a href="#">All nft</a></li>
                                    <li><a href="#">Virtual Worlds</a></li>
                                    <li><a href="#">Collectibles</a></li>
                                    <li><a href="#">Music</a></li>
                                    <li style="margin-left: auto;">
                                        <button type="button" @click="openDialog = true"
                                            class=" h-auto w-auto justify-center rounded-md bg-purple-500	 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-600 sm:ml-3 sm:w-auto">Create
                                            Collection</button>
                                    </li>
                                </ul>

                            </div>
                            <div class="row justify-content-center">
                                <div v-for="nft in collected" class="col-xl-4 col-md-6 col-sm-6">
                                    <div class="top-collection-item">
                                        <div class="collection-item-thumb">
                                            <a href="javascript:void(0)"><img :src="nft.node.imageUrl" alt=""></a>
                                        </div>
                                        <div class="collection-item-content">
                                            <h5 class="title"><NuxtLink :href="Routes.AuthorProfile + '/' + nft.node.displayName">{{ nft.node.displayName }}</NuxtLink> </h5>
                                        </div>
                                        <div class="collection-item-bottom">
                                            <ul>
                                                <li class="bid"><a href="#" class="btn">Listing</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>Highest bid

            </div>
            <!-- author-profile-area-end -->
        </main>
        <div v-if="pageInfo.hasNextPage" class="w-100 text-center">
            <BaseLoadingMore />
        </div>
        <BaseObserver @intersect="loadMore" />
    </div>

    <Teleport to="body">
        <BaseDialog title="Create Collection" :open="openDialog" :on-cancel="() => openDialog = false" :on-submit="deploy">



            <div class="mb-6">
                <label for="email" class="block mb-2 text-lg font-medium text-gray-900">Name</label>
                <input v-model="createCollectionForm.name" type="email" id="email"
                    class="bg-white border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="My Collection Name" required>
            </div>
            <div class="mb-6">
                <label for="password" class="block mb-2 text-lg font-medium text-gray-900">Token
                    symbol</label>
                <p class="text-gray-900">The token symbol is shown on the block explorer when others view your smart
                    contract.</p>
                <input v-model="createCollectionForm.symbol" type="text" id="password"
                    class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="ECM" required>
            </div>
            <div class="mb-6">
                <label for="confirm_password"
                    class="block mb-2 text-sm font-medium text-gray-900">Chain</label>
                <BaseListBox :options="networkOptions" />
            </div>
            <div class="flex items-start mb-6">
                <div class="flex items-center h-5">
                    <input id="remember" type="checkbox" value=""
                        class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                        required>
                </div>
                <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the
                    <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and
                        conditions</a>.</label>
            </div>
        </BaseDialog>
    </Teleport>
    <!-- main-content-end -->
</template>
<script setup lang="ts">
import { useLoadingStore } from '~/store/loading';
import { MessageTypeEnum, useToast } from '~/store/toast';
import Collection from "@/contracts/build/contracts/Collection.json"
import Web3 from 'web3';
import _ from "lodash"
import { useNetworkStore } from '~/store/network';
import { useUserStore } from '~/store/user';
import { AssetType, Profile, Account } from "./types"
import Routes from 'constants/routes';
import { NuxtLink } from '.nuxt/components';

const networkOptions = [
    {
        label: "Etherum Testnet",
        value: "etherum"
    },
]

const createCollectionForm = reactive({
    name: "",
    symbol: ""
})
const loadingStore = useLoadingStore()
const network = useNetworkStore().getNetwork
const openDialog = ref(false)

const toast = useToast()
const user = useUserStore()
const pageInfo = ref({ hasNextPage: false, endCursor: "" })
const totalCount = ref(0)

const collected = ref<Array<AssetType>>([])
const account = ref<Partial<Account>>({ address: "", bannerImageUrl: "/img/others/author_profile.png" })

user.$subscribe((mutation, state) => {
    if (!_.isEmpty(state.address)) {
        Promise.all([
            getNftsByAccount(state.address),
            getProfile(state.address)
        ]).then(() => {
            loadingStore.set(false)

        })
    }
})

const deploy = () => {
    if (_.isEmpty(createCollectionForm.name) || _.isEmpty(createCollectionForm.symbol)) {
        toast.show({ message: "Field is not empty", type: MessageTypeEnum.SUCCESS })
        return
    }
    toggleLoadingOverlay()
    network.createCollection(createCollectionForm, (res: any, err: any) => {
        openDialog.value = false
        toggleLoadingOverlay()
        setTimeout(() => {
            toast.show({ message: "Create collection successful", type: MessageTypeEnum.SUCCESS })
        }, 500)
    })

}

const getNftsByAccount = async (address: string, cursor: string = "") => {
    const { edges, pageInfo: _pageInfo, totalCount: _totalCount } = await network.getNftsByAccount(address, cursor)
    collected.value = [...collected.value, ...edges] as Array<AssetType>
    pageInfo.value = _pageInfo
    totalCount.value = _totalCount
}
const loadMore = async () => {
    getNftsByAccount(user.getAddress, pageInfo.value.endCursor)
}

const getProfile = async (address: string) => {
    const response = await network.getProfile(address) as Profile
    account.value = response.account
}
</script>
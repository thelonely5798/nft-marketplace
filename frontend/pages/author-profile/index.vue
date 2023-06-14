<template>
    <!-- Offcanvas-area -->
    <BaseProfile />
    <!-- Offcanvas-area-end -->

    <!-- main-content -->
    <div class="main-content">
        <BaseHeader />

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

            <!-- category-area -->
            <div class="category-area">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <ul class="category-list">
                                <li class="active"><a href="/"><img src="/img/icons/cat_001.png" alt=""> All</a></li>
                                <li><a href="nft-marketplace"><img src="/img/icons/cat_01.png" alt=""> Games</a></li>
                                <li><a href="nft-marketplace"><img src="/img/icons/cat_02.png" alt=""> Art</a></li>
                                <li><a href="nft-marketplace"><img src="/img/icons/cat_03.png" alt=""> Trading Cards</a>
                                </li>
                                <li><a href="nft-marketplace"><img src="/img/icons/cat_04.png" alt=""> Music</a></li>
                                <li><a href="nft-marketplace"><img src="/img/icons/cat_05.png" alt=""> Domain Names</a></li>
                                <li><a href="nft-marketplace"><img src="/img/icons/cat_06.png" alt=""> Memes</a></li>
                                <li><a href="nft-marketplace"><img src="/img/icons/cat_07.png" alt=""> Collectibles</a></li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
            <!-- category-area-end -->

            <!-- author-profile-area -->
            <div class="author-profile-area">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-xl-3 col-lg-4 col-md-6 order-2 order-lg-0">
                            <aside class="author-profile-wrap">
                                <div class="author-profile-thumb">
                                    <img src="/img/others/author_profile.png" alt="">
                                </div>
                                <div class="author-info">
                                    <h5 class="title">Olivia Jenar <img src="/img/icons/star.svg" alt=""></h5>
                                    <span>@ marketplace</span>
                                    <p>Myself Olivia_ ipsum dolor amet this consectetur adipisicing elit. Quis non fugit
                                        totam laborio.</p>
                                </div>
                                <ul class="author-collection">
                                    <li>
                                        <p>Collection</p>
                                        <span>201</span>
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
                                    <li class="active"><a href="author-profile">All nft</a></li>
                                    <li><a href="author-profile">Virtual Worlds</a></li>
                                    <li><a href="author-profile">Collectibles</a></li>
                                    <li><a href="author-profile">Music</a></li>
                                    <li style="margin-left: auto;">
                                        <button type="button" @click="openDialog = true"
                                            class=" h-auto w-auto justify-center rounded-md bg-purple-500	 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-600 sm:ml-3 sm:w-auto">Create
                                            Collection</button>
                                    </li>
                                </ul>

                            </div>
                            <div class="row justify-content-center">
                                <div class="col-xl-4 col-md-6 col-sm-6">
                                    <div class="top-collection-item">
                                        <div class="collection-item-top">
                                            <ul>
                                                <li class="avatar"><a href="author-profile" class="thumb"><img
                                                            src="/img/others/top_col_avatar.png" alt=""></a>By <a
                                                        href="author-profile" class="name">Jonson</a></li>
                                                <li class="info-dots dropdown">
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
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="collection-item-thumb">
                                            <a href="market-single"><img src="/img/others/top_collection01.jpg" alt=""></a>
                                        </div>
                                        <div class="collection-item-content">
                                            <h5 class="title"><a href="market-single">Action Collection</a> <span
                                                    class="price">5.4 ETH</span></h5>
                                        </div>
                                        <div class="collection-item-bottom">
                                            <ul>
                                                <li class="bid"><a href="market-single" class="btn">place a bid</a></li>
                                                <li class="wishlist"><a href="login-register">59</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-md-6 col-sm-6">
                                    <div class="top-collection-item">
                                        <div class="collection-item-top">
                                            <ul>
                                                <li class="avatar"><a href="author-profile" class="thumb"><img
                                                            src="/img/others/top_col_avatar.png" alt=""></a>By <a
                                                        href="author-profile" class="name">Jonson</a></li>
                                                <li class="info-dots dropdown">
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
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="collection-item-thumb">
                                            <a href="market-single"><img src="/img/others/top_collection05.jpg" alt=""></a>
                                        </div>
                                        <div class="collection-item-content">
                                            <h5 class="title"><a href="market-single">Pie Collection</a> <span
                                                    class="price">5.4 ETH</span></h5>
                                        </div>
                                        <div class="collection-item-bottom">
                                            <ul>
                                                <li class="bid"><a href="market-single" class="btn">place a bid</a></li>
                                                <li class="wishlist"><a href="#">59</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-md-6 col-sm-6">
                                    <div class="top-collection-item">
                                        <div class="collection-item-top">
                                            <ul>
                                                <li class="avatar"><a href="author-profile" class="thumb"><img
                                                            src="/img/others/top_col_avatar.png" alt=""></a>By <a
                                                        href="author-profile" class="name">Jonson</a></li>
                                                <li class="info-dots dropdown">
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
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="collection-item-thumb">
                                            <a href="market-single"><img src="/img/others/top_collection06.jpg" alt=""></a>
                                        </div>
                                        <div class="collection-item-content">
                                            <h5 class="title"><a href="market-single">Artwork Collection</a> <span
                                                    class="price">5.4 ETH</span></h5>
                                        </div>
                                        <div class="collection-item-bottom">
                                            <ul>
                                                <li class="bid"><a href="market-single" class="btn">place a bid</a></li>
                                                <li class="wishlist"><a href="#">59</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-md-6 col-sm-6">
                                    <div class="top-collection-item">
                                        <div class="collection-item-top">
                                            <ul>
                                                <li class="avatar"><a href="author-profile" class="thumb"><img
                                                            src="/img/others/top_col_avatar.png" alt=""></a>By <a
                                                        href="author-profile" class="name">Jonson</a></li>
                                                <li class="info-dots dropdown">
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
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="collection-item-thumb">
                                            <a href="market-single"><img src="/img/others/top_collection07.jpg" alt=""></a>
                                        </div>
                                        <div class="collection-item-content">
                                            <h5 class="title"><a href="market-single">Action Collection</a> <span
                                                    class="price">5.4 ETH</span></h5>
                                        </div>
                                        <div class="collection-item-bottom">
                                            <ul>
                                                <li class="bid"><a href="market-single" class="btn">place a bid</a></li>
                                                <li class="wishlist"><a href="#">59</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-md-6 col-sm-6">
                                    <div class="top-collection-item">
                                        <div class="collection-item-top">
                                            <ul>
                                                <li class="avatar"><a href="author-profile" class="thumb"><img
                                                            src="/img/others/top_col_avatar.png" alt=""></a>By <a
                                                        href="author-profile" class="name">Jonson</a></li>
                                                <li class="info-dots dropdown">
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
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="collection-item-thumb">
                                            <a href="market-single"><img src="/img/others/top_collection08.jpg" alt=""></a>
                                        </div>
                                        <div class="collection-item-content">
                                            <h5 class="title"><a href="market-single">Artwork Collection</a> <span
                                                    class="price">5.4 ETH</span></h5>
                                        </div>
                                        <div class="collection-item-bottom">
                                            <ul>
                                                <li class="bid"><a href="market-single" class="btn">place a bid</a></li>
                                                <li class="wishlist"><a href="#">59</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-md-6 col-sm-6">
                                    <div class="top-collection-item">
                                        <div class="collection-item-top">
                                            <ul>
                                                <li class="avatar"><a href="author-profile" class="thumb"><img
                                                            src="/img/others/top_col_avatar.png" alt=""></a>By <a
                                                        href="author-profile" class="name">Jonson</a></li>
                                                <li class="info-dots dropdown">
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
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="collection-item-thumb">
                                            <a href="market-single"><img src="/img/others/top_collection09.jpg" alt=""></a>
                                        </div>
                                        <div class="collection-item-content">
                                            <h5 class="title"><a href="market-single">NFT Collection</a> <span
                                                    class="price">5.4 ETH</span></h5>
                                        </div>
                                        <div class="collection-item-bottom">
                                            <ul>
                                                <li class="bid"><a href="market-single" class="btn">place a bid</a></li>
                                                <li class="wishlist"><a href="#">59</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- author-profile-area-end -->
        </main>
        <!-- main-area-end -->
    </div>

    <Teleport to="body">
        <BaseDialog title="Create Collection" :open="openDialog" :on-cancel="() => openDialog = false"
            :on-submit="() => openDialog = false">


            <form>

                <div class="mb-6">
                    <label for="email" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Name</label>
                    <input type="email" id="email"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="My Collection Name" required>
                </div>
                <div class="mb-6">
                    <label for="password"
                        class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Token symbol</label>
                        <p class="text-gray-900">The token symbol is shown on the block explorer when others view your smart contract.</p>
                    <input type="text" id="password"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="ECM" required>
                </div>
                <div class="mb-6">
                    <label for="confirm_password"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Chain</label>
                        <BaseListBox/>
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
                <button type="submit"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>

    </BaseDialog>
</Teleport>
<!-- main-content-end --></template>
<script setup lang="ts">
import { useLoadingStore } from '~/store/loading';

const loadingStore = useLoadingStore()
const openDialog = ref(true)
loadingStore.set(false)
</script>
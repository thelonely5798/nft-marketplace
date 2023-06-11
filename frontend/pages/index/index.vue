<template>
    <!-- Scroll-top -->
    <button class="scroll-top scroll-to-target" data-target="html">
        <i class="fas fa-angle-up"></i>
    </button>
    <!-- Scroll-top-end-->



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
          
            <div class="banner-bg">
                <!-- banner-area -->
                <div class="banner-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 col-md-8">
                                <div class="banner-content">
                                    <h2 class="title">Buy and sell digital art <br> <span>NFT</span> collection</h2>
                                    <p>Everything you need to build, host, scale amazing dapps free by creating account
                                        today</p>
                                    <a href="login-register" class="banner-btn">Let’s get started <i
                                            class="fi-sr-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- banner-area-end -->

                <!-- top-seller-area -->
                <div class="top-seller-area">
                    <div class="container">
                        <div class="top-seller-wrap">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="section-title mb-40">
                                        <h2 class="title">Top Seller <img src="img/icons/title_icon01.png" alt=""></h2>
                                    </div>
                                </div>
                            </div>
                            <div class="row justify-content-center">
                                <div v-for="seller in topSeller" class="col-xl-3 col-lg-4 col-sm-6">
                                    <div class="top-seller-item">
                                        <div class="top-seller-img">
                                            <img src="img/others/top-seller-img.jpg" alt="">
                                        </div>
                                        <div class="top-seller-content">
                                            <h5 class="title"><a href="author-profile">{{
                                                contractName(seller.account_address) }}</a></h5>
                                            <p>{{ seller.volume }} <span>Eth</span></p>
                                            <ul class="icon">
                                                <li><a href="collections"><i class="fi-sr-pharmacy"></i></a></li>
                                                <li><a href="login-register"><i class="fi-sr-share"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- top-seller-area-end -->
            </div>

            <!-- top-collection-area -->
            <section class="top-collection-area">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="section-title mb-40">
                                <h2 class="title">Top collections <img src="img/icons/title_icon01.png" alt=""></h2>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="top-collection-nav"></div>
                        </div>
                    </div>
                    <div class="row top-collection-active">
                        <div v-for="nft in getTopCollections" class="col-xl-3">
                            <div class="top-collection-item">
                                <div class="collection-item-top">
                                    <ul>
                                        <li class="avatar"><a href="author-profile" class="thumb"><img :src="nft.logo_url"
                                                    alt=""></a>By <a href="author-profile" class="name">{{
                                                        contractName(nft.contract_address) }}</a></li>
                                        <li class="info-dots dropdown">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <a href="#" class="dropdown-toggle" data-bs-toggle="dropdown" role="button"
                                                aria-expanded="false"></a>
                                            <ul class="dropdown-menu">
                                                <li><a href="nft-marketplace">Artwork</a></li>
                                                <li><a href="nft-marketplace">Action</a></li>
                                                <li><a href="nft-marketplace">Author Action</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div class="collection-item-thumb">
                                    <a href="market-single"><img :style="{ width: '100%', height: '200px' }"
                                            :src="nft.banner_url" alt=""></a>
                                </div>
                                <div class="collection-item-content">
                                    <h5 class="title"><a href="market-single">{{ nft.name }}</a> <span class="price">{{
                                        _.floor(nft.floor_price, 2) }}
                                            ETH</span></h5>
                                </div>
                                <div class="collection-item-bottom">
                                    <ul>
                                        <li class="bid"><a href="javscript:void" class="btn">place a bid</a></li>
                                        <li class="wishlist"><a href="login-register">59</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- top-collection-area-end -->

            <div class="area-bg">
                <!-- week-features-area -->
                <section class="week-features-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="section-title mb-35">
                                    <h2 class="title">Features of the week <img src="img/icons/title_icon02.png" alt="">
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xl-4 col-lg-5">
                                <div class="week-features-item">
                                    <div class="features-item-top">
                                        <div class="features-avatar">
                                            <div class="features-avatar-thumb">
                                                <a href="author-profile"><img src="img/others/features_avatar.png"
                                                        alt=""></a>
                                            </div>
                                            <div class="features-avatar-info">
                                                <h5 class="title"><a href="nft-marketplace">Deploy Abstract</a></h5>
                                                <span>Created by <a href="author-profile">Konx</a></span>
                                            </div>
                                        </div>
                                        <div class="features-item-wishlist">
                                            <a href="#">100</a>
                                        </div>
                                    </div>
                                    <ul class="features-img-wrap">
                                        <li class="grid-item"><img src="img/others/features_img01.png" alt=""></li>
                                        <li class="grid-item"><img src="img/others/features_img02.png" alt=""></li>
                                        <li class="grid-item"><img src="img/others/features_img03.png" alt=""></li>
                                        <li class="grid-item"><img src="img/others/features_img04.png" alt=""></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-5">
                                <div class="week-features-item">
                                    <div class="features-item-top">
                                        <div class="features-avatar">
                                            <div class="features-avatar-thumb">
                                                <a href="author-profile"><img src="img/others/features_avatar02.png"
                                                        alt=""></a>
                                            </div>
                                            <div class="features-avatar-info">
                                                <h5 class="title"><a href="nft-marketplace">Random Abstract</a></h5>
                                                <span>Created by <a href="author-profile">Tanuok</a></span>
                                            </div>
                                        </div>
                                        <div class="features-item-wishlist">
                                            <a href="#">300</a>
                                        </div>
                                    </div>
                                    <ul class="features-img-wrap">
                                        <li class="grid-item"><img src="img/others/s_features_img01.png" alt=""></li>
                                        <li class="grid-item"><img src="img/others/features_img02.png" alt=""></li>
                                        <li class="grid-item"><img src="img/others/s_features_img03.png" alt=""></li>
                                        <li class="grid-item"><img src="img/others/s_features_img04.png" alt=""></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-5">
                                <div class="week-features-item">
                                    <div class="features-item-top">
                                        <div class="features-avatar">
                                            <div class="features-avatar-thumb">
                                                <a href="author-profile"><img src="img/others/features_avatar03.png"
                                                        alt=""></a>
                                            </div>
                                            <div class="features-avatar-info">
                                                <h5 class="title"><a href="nft-marketplace">Colorful Abstract</a></h5>
                                                <span>Created by <a href="author-profile">Jonson</a></span>
                                            </div>
                                        </div>
                                        <div class="features-item-wishlist">
                                            <a href="#">190</a>
                                        </div>
                                    </div>
                                    <ul class="features-img-wrap">
                                        <li class="grid-item"><img src="img/others/t_features_img01.png" alt=""></li>
                                        <li class="grid-item"><img src="img/others/features_img02.png" alt=""></li>
                                        <li class="grid-item"><img src="img/others/features_img03.png" alt=""></li>
                                        <li class="grid-item"><img src="img/others/t_features_img04.png" alt=""></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- week-features-area-end -->

                <!-- sell-nfts-area -->
                <section class="sell-nfts-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="section-title mb-45">
                                    <h2 class="title">Create And Sell Your NFTs <img src="img/icons/title_icon03.png"
                                            alt=""></h2>
                                </div>
                            </div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-xl-3 col-lg-4 col-md-6">
                                <div class="sell-nfts-item">
                                    <img src="img/icons/nfts_01.png" alt="" class="icon">
                                    <span class="step-count">go step 1</span>
                                    <h5 class="title">Create And Sell</h5>
                                    <p>Wallet that is functional for NFT purchasing. You have Coinbase account at this
                                        point.</p>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6">
                                <div class="sell-nfts-item">
                                    <img src="img/icons/nfts_02.png" alt="" class="icon">
                                    <span class="step-count">go step 2</span>
                                    <h5 class="title">Create Collection</h5>
                                    <p>Wallet that is functional for NFT purchasing. You have Coinbase account at this
                                        point.</p>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6">
                                <div class="sell-nfts-item">
                                    <img src="img/icons/nfts_03.png" alt="" class="icon">
                                    <span class="step-count">go step 3</span>
                                    <h5 class="title">Add Your NFTs</h5>
                                    <p>Wallet that is functional for NFT purchasing. You have Coinbase account at this
                                        point.</p>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6">
                                <div class="sell-nfts-item">
                                    <img src="img/icons/nfts_04.png" alt="" class="icon">
                                    <span class="step-count">go step 4</span>
                                    <h5 class="title">List Them For Sale</h5>
                                    <p>Wallet that is functional for NFT purchasing. You have Coinbase account at this
                                        point.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- sell-nfts-area-end -->
            </div>

            <!-- explore-products-area -->
            <section class="explore-products-area">
                <div class="container">
                    <div class="row mb-35">
                        <div class="col-md-7 col-sm-8">
                            <div class="section-title">
                                <h2 class="title">Explore Product <img src="img/icons/title_icon01.png" alt=""></h2>
                            </div>
                        </div>
                        <div class="col-md-5 col-sm-4">
                            <div class="section-button text-end">
                                <a href="#" class="btn filter-btn filter-toggle"><i class="fi-sr-filter"></i> filter</a>
                            </div>
                        </div>
                    </div>
                    <div class="filter-category-wrap">
                        <div class="row">
                            <div class="col-12">
                                <ul class="category-list">
                                    <li class="active"><a href="index"><img src="img/icons/cat_001.png" alt=""> All</a></li>
                                    <li><a href="nft-marketplace"><img src="img/icons/cat_01.png" alt=""> Games</a></li>
                                    <li><a href="nft-marketplace"><img src="img/icons/cat_02.png" alt=""> Art</a></li>
                                    <li><a href="nft-marketplace"><img src="img/icons/cat_03.png" alt=""> Trading Cards</a>
                                    </li>
                                    <li><a href="nft-marketplace"><img src="img/icons/cat_04.png" alt=""> Music</a></li>
                                    <li><a href="nft-marketplace"><img src="img/icons/cat_05.png" alt=""> Domain Names</a>
                                    </li>
                                    <li><a href="nft-marketplace"><img src="img/icons/cat_06.png" alt=""> Memes</a></li>
                                    <li><a href="nft-marketplace"><img src="img/icons/cat_07.png" alt=""> Collectibles</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div class="top-collection-item">
                                <div class="collection-item-top">
                                    <ul>
                                        <li class="avatar"><a href="author-profile" class="thumb"><img
                                                    src="img/others/top_col_avatar.png" alt=""></a>By <a
                                                href="author-profile" class="name">Jonson</a></li>
                                        <li class="info-dots dropdown">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <a href="#" class="dropdown-toggle" data-bs-toggle="dropdown" role="button"
                                                aria-expanded="false"></a>
                                            <ul class="dropdown-menu">
                                                <li><a href="nft-marketplace">Artwork</a></li>
                                                <li><a href="nft-marketplace">Action</a></li>
                                                <li><a href="nft-marketplace">Author Action</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div class="collection-item-thumb">
                                    <a href="market-single"><img src="img/others/top_collection01.jpg" alt=""></a>
                                </div>
                                <div class="collection-item-content">
                                    <h5 class="title"><a href="market-single">NFT Collection</a> <span class="price">5.4
                                            ETH</span></h5>
                                </div>
                                <div class="collection-item-bottom">
                                    <ul>
                                        <li class="bid"><a href="market-single" class="btn">place a bid</a></li>
                                        <li class="wishlist"><a href="login-register">59</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div class="top-collection-item">
                                <div class="collection-item-top">
                                    <ul>
                                        <li class="avatar"><a href="author-profile" class="thumb"><img
                                                    src="img/others/top_col_avatar.png" alt=""></a>By <a
                                                href="author-profile" class="name">Jonson</a></li>
                                        <li class="info-dots dropdown">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <a href="#" class="dropdown-toggle" data-bs-toggle="dropdown" role="button"
                                                aria-expanded="false"></a>
                                            <ul class="dropdown-menu">
                                                <li><a href="nft-marketplace">Artwork</a></li>
                                                <li><a href="nft-marketplace">Action</a></li>
                                                <li><a href="nft-marketplace">Author Action</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div class="collection-item-thumb">
                                    <a href="market-single"><img src="img/others/top_collection05.jpg" alt=""></a>
                                </div>
                                <div class="collection-item-content">
                                    <h5 class="title"><a href="market-single">Colorful Abstract</a> <span class="price">5.4
                                            ETH</span></h5>
                                </div>
                                <div class="collection-item-bottom">
                                    <ul>
                                        <li class="bid"><a href="market-single" class="btn">place a bid</a></li>
                                        <li class="wishlist"><a href="login-register">59</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div class="top-collection-item">
                                <div class="collection-item-top">
                                    <ul>
                                        <li class="avatar"><a href="author-profile" class="thumb"><img
                                                    src="img/others/top_col_avatar.png" alt=""></a>By <a
                                                href="author-profile" class="name">Jonson</a></li>
                                        <li class="info-dots dropdown">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <a href="#" class="dropdown-toggle" data-bs-toggle="dropdown" role="button"
                                                aria-expanded="false"></a>
                                            <ul class="dropdown-menu">
                                                <li><a href="nft-marketplace">Artwork</a></li>
                                                <li><a href="nft-marketplace">Action</a></li>
                                                <li><a href="nft-marketplace">Author Action</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div class="collection-item-thumb">
                                    <a href="nft-marketplace"><img src="img/others/top_collection06.jpg" alt=""></a>
                                </div>
                                <div class="collection-item-content">
                                    <h5 class="title"><a href="nft-marketplace">The Girl Firefly</a> <span class="price">5.4
                                            ETH</span></h5>
                                </div>
                                <div class="collection-item-bottom">
                                    <ul>
                                        <li class="bid"><a href="market-single" class="btn">place a bid</a></li>
                                        <li class="wishlist"><a href="login-register">59</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div class="top-collection-item">
                                <div class="collection-item-top">
                                    <ul>
                                        <li class="avatar"><a href="author-profile" class="thumb"><img
                                                    src="img/others/top_col_avatar.png" alt=""></a>By <a
                                                href="author-profile" class="name">Jonson</a></li>
                                        <li class="info-dots dropdown">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <a href="#" class="dropdown-toggle" data-bs-toggle="dropdown" role="button"
                                                aria-expanded="false"></a>
                                            <ul class="dropdown-menu">
                                                <li><a href="nft-marketplace">Artwork</a></li>
                                                <li><a href="nft-marketplace">Action</a></li>
                                                <li><a href="nft-marketplace">Author Action</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div class="collection-item-thumb">
                                    <a href="market-single"><img src="img/others/top_collection07.jpg" alt=""></a>
                                </div>
                                <div class="collection-item-content">
                                    <h5 class="title"><a href="market-single">Forest Princess</a> <span class="price">5.4
                                            ETH</span></h5>
                                </div>
                                <div class="collection-item-bottom">
                                    <ul>
                                        <li class="bid"><a href="market-single" class="btn">place a bid</a></li>
                                        <li class="wishlist"><a href="login-register">59</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div class="top-collection-item">
                                <div class="collection-item-top">
                                    <ul>
                                        <li class="avatar"><a href="author-profile" class="thumb"><img
                                                    src="img/others/top_col_avatar.png" alt=""></a>By <a
                                                href="author-profile" class="name">Jonson</a></li>
                                        <li class="info-dots dropdown">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <a href="#" class="dropdown-toggle" data-bs-toggle="dropdown" role="button"
                                                aria-expanded="false"></a>
                                            <ul class="dropdown-menu">
                                                <li><a href="nft-marketplace">Artwork</a></li>
                                                <li><a href="nft-marketplace">Action</a></li>
                                                <li><a href="nft-marketplace">Author Action</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div class="collection-item-thumb">
                                    <a href="market-single"><img src="img/others/top_collection08.jpg" alt=""></a>
                                </div>
                                <div class="collection-item-content">
                                    <h5 class="title"><a href="market-single">NFT Painting</a> <span class="price">5.4
                                            ETH</span></h5>
                                </div>
                                <div class="collection-item-bottom">
                                    <ul>
                                        <li class="bid"><a href="market-single" class="btn">place a bid</a></li>
                                        <li class="wishlist"><a href="login-register">59</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div class="top-collection-item">
                                <div class="collection-item-top">
                                    <ul>
                                        <li class="avatar"><a href="author-profile" class="thumb"><img
                                                    src="img/others/top_col_avatar.png" alt=""></a>By <a
                                                href="author-profile" class="name">Jonson</a></li>
                                        <li class="info-dots dropdown">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <a href="#" class="dropdown-toggle" data-bs-toggle="dropdown" role="button"
                                                aria-expanded="false"></a>
                                            <ul class="dropdown-menu">
                                                <li><a href="nft-marketplace">Artwork</a></li>
                                                <li><a href="nft-marketplace">Action</a></li>
                                                <li><a href="nft-marketplace">Author Action</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div class="collection-item-thumb">
                                    <a href="market-single"><img src="img/others/top_collection09.jpg" alt=""></a>
                                </div>
                                <div class="collection-item-content">
                                    <h5 class="title"><a href="market-single">Colorful Abstract</a> <span class="price">5.4
                                            ETH</span></h5>
                                </div>
                                <div class="collection-item-bottom">
                                    <ul>
                                        <li class="bid"><a href="market-single" class="btn">place a bid</a></li>
                                        <li class="wishlist"><a href="login-register">59</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div class="top-collection-item">
                                <div class="collection-item-top">
                                    <ul>
                                        <li class="avatar"><a href="author-profile" class="thumb"><img
                                                    src="img/others/top_col_avatar.png" alt=""></a>By <a
                                                href="author-profile" class="name">Jonson</a></li>
                                        <li class="info-dots dropdown">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <a href="#" class="dropdown-toggle" data-bs-toggle="dropdown" role="button"
                                                aria-expanded="false"></a>
                                            <ul class="dropdown-menu">
                                                <li><a href="nft-marketplace">Artwork</a></li>
                                                <li><a href="nft-marketplace">Action</a></li>
                                                <li><a href="nft-marketplace">Author Action</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div class="collection-item-thumb">
                                    <a href="market-single"><img src="img/others/top_collection10.jpg" alt=""></a>
                                </div>
                                <div class="collection-item-content">
                                    <h5 class="title"><a href="market-single">Bid Collection</a> <span class="price">5.4
                                            ETH</span></h5>
                                </div>
                                <div class="collection-item-bottom">
                                    <ul>
                                        <li class="bid"><a href="market-single" class="btn">place a bid</a></li>
                                        <li class="wishlist"><a href="login-register">59</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div class="top-collection-item">
                                <div class="collection-item-top">
                                    <ul>
                                        <li class="avatar"><a href="author-profile" class="thumb"><img
                                                    src="img/others/top_col_avatar.png" alt=""></a>By <a
                                                href="author-profile" class="name">Jonson</a></li>
                                        <li class="info-dots dropdown">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <a href="#" class="dropdown-toggle" data-bs-toggle="dropdown" role="button"
                                                aria-expanded="false"></a>
                                            <ul class="dropdown-menu">
                                                <li><a href="nft-marketplace">Artwork</a></li>
                                                <li><a href="nft-marketplace">Action</a></li>
                                                <li><a href="nft-marketplace">Author Action</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div class="collection-item-thumb">
                                    <a href="market-single"><img src="img/others/top_collection11.jpg" alt=""></a>
                                </div>
                                <div class="collection-item-content">
                                    <h5 class="title"><a href="market-single">NFT Collection</a> <span class="price">5.4
                                            ETH</span></h5>
                                </div>
                                <div class="collection-item-bottom">
                                    <ul>
                                        <li class="bid"><a href="market-single" class="btn">place a bid</a></li>
                                        <li class="wishlist"><a href="login-register">59</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- explore-products-area-end -->

            <!-- latest-news -->
            <section class="latest-news-area">
                <div class="container">
                    <div class="row">
                        <div class="col-md-7">
                            <div class="section-title mb-45">
                                <h2 class="title">Latest News Update <img src="img/icons/title_icon01.png" alt=""></h2>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-xl-4 col-md-6 col-sm-9">
                            <div class="latest-news-item">
                                <div class="latest-news-thumb">
                                    <img src="img/blog/news_thumb01.png" alt="">
                                </div>
                                <div class="latest-news-content">
                                    <ul class="latest-news-meta">
                                        <li><i class="flaticon-user"></i><a href="blog">Admin</a></li>
                                        <li><i class="fi-sr-calendar"></i> Jan 12, 2022</li>
                                    </ul>
                                    <h4 class="title"><a href="blog-details">Top 5 Most Popular NFT Games world most
                                            powerful ?</a></h4>
                                    <a href="blog-details" class="btn">read more</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-6 col-sm-9">
                            <div class="latest-news-item">
                                <div class="latest-news-thumb">
                                    <img src="img/blog/news_thumb02.png" alt="">
                                </div>
                                <div class="latest-news-content">
                                    <ul class="latest-news-meta">
                                        <li><i class="flaticon-user"></i><a href="blog">Admin</a></li>
                                        <li><i class="fi-sr-calendar"></i> Jan 19, 2022</li>
                                    </ul>
                                    <h4 class="title"><a href="blog-details">NFTs, rare digital items worlds crypto
                                            collectibles</a></h4>
                                    <a href="blog-details" class="btn">read more</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-6 col-sm-9">
                            <div class="latest-news-item">
                                <div class="latest-news-thumb">
                                    <img src="img/blog/news_thumb03.png" alt="">
                                </div>
                                <div class="latest-news-content">
                                    <ul class="latest-news-meta">
                                        <li><i class="flaticon-user"></i><a href="blog">Admin</a></li>
                                        <li><i class="fi-sr-calendar"></i> Jan 19, 2022</li>
                                    </ul>
                                    <h4 class="title"><a href="blog-details">Crypto enthusiasts on a single platform to
                                            create</a></h4>
                                    <a href="blog-details" class="btn">read more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- latest-news-end -->

            <!-- design-ways-area -->
            <section class="design-ways-area">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                            <div class="design-ways-item">
                                <div class="overlay-icon"><i class="flaticon-download"></i></div>
                                <div class="icon"><i class="flaticon-download"></i></div>
                                <div class="content">
                                    <h3 class="title">Free</h3>
                                    <p>Only two download</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                            <div class="design-ways-item">
                                <div class="overlay-icon"><i class="flaticon-download-1"></i></div>
                                <div class="icon"><i class="flaticon-download-1"></i></div>
                                <div class="content">
                                    <h3 class="title">Unlimited</h3>
                                    <p>Personal & commercial use</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                            <div class="design-ways-item">
                                <div class="overlay-icon"><i class="flaticon-help"></i></div>
                                <div class="icon"><i class="flaticon-help"></i></div>
                                <div class="content">
                                    <h3 class="title">Support</h3>
                                    <p>You can download</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                            <div class="design-ways-item">
                                <div class="overlay-icon"><i class="flaticon-repairing-service"></i></div>
                                <div class="icon"><i class="flaticon-repairing-service"></i></div>
                                <div class="content">
                                    <h3 class="title">Private</h3>
                                    <p>Personal data collection</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- design-ways-area-end -->

            <!-- testimonial-area -->
            <section class="testimonial--area">
                <div class="container">
                    <div class="testimonial-shape-wrap">
                        <div class="row justify-content-center">
                            <div class="col-xl-8 col-lg-9 col-md-10">
                                <div class="testimonial-active">
                                    <div class="testimonial--item text-center">
                                        <div class="testimonial-rating">
                                            <img src="img/others/star.png" alt="">
                                        </div>
                                        <div class="testimonial--content">
                                            <p>“ What even is an NFT? NFT stands for non-fungible token, which basically
                                                means that it's one kind digital asset that belongs to you and you only. The
                                                most popular NFTs right include artwork and music, include videos and even
                                                tweets “</p>
                                            <div class="testimonial--avatar--info">
                                                <h5 class="title">Alexandra Pilot</h5>
                                                <a href="contact" class="see-all">See All Reviews</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="testimonial--item text-center">
                                        <div class="testimonial-rating">
                                            <img src="img/others/star.png" alt="">
                                        </div>
                                        <div class="testimonial--content">
                                            <p>“ What even is an NFT? NFT stands for non-fungible token, which basically
                                                means that it's one kind digital asset that belongs to you and you only. The
                                                most popular NFTs right include artwork and music, include videos and even
                                                tweets “</p>
                                            <div class="testimonial--avatar--info">
                                                <h5 class="title">Alexandra Pilot</h5>
                                                <a href="contact" class="see-all">See All Reviews</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="testimonial--item text-center">
                                        <div class="testimonial-rating">
                                            <img src="img/others/star.png" alt="">
                                        </div>
                                        <div class="testimonial--content">
                                            <p>“ What even is an NFT? NFT stands for non-fungible token, which basically
                                                means that it's one kind digital asset that belongs to you and you only. The
                                                most popular NFTs right include artwork and music, include videos and even
                                                tweets “</p>
                                            <div class="testimonial--avatar--info">
                                                <h5 class="title">Alexandra Pilot</h5>
                                                <a href="contact" class="see-all">See All Reviews</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- testimonial-area-end -->

        </main>
        <!-- main-area-end -->


    </div>
    <!-- main-content-end -->
</template>


<script setup lang="ts">
import { Fragment } from "vue";
import { ref, onMounted, nextTick, } from "vue"
import { Network } from "~/service";
import { Etherum } from "~/service/etherum";
import { NftInterface } from "~/types"
import * as _ from 'lodash'
import { useNetworkStore } from "@/store/network"
import { useLoadingStore } from "~/store/loading";
const topCollections = ref<Array<NftInterface>>([])
const topSeller = ref<Array<any>>([])


const networkStore = useNetworkStore()
const network = networkStore.getNetwork
const loadingStore = useLoadingStore()

onBeforeMount(() => {
    Promise.all([fetchTopCollections(), fetchTopSeller()]).then(async() => {
        $('.top-collection-active').not('.slick-initialized').slick({
            dots: false,
            infinite: true,
            speed: 1000,
            autoplay: true,
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev"><i class="fi-sr-arrow-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fi-sr-arrow-right"></i></button>',
            appendArrows: ".top-collection-nav",
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

        await  nextTick()
        loadingStore.set(false)
        console.log(loadingStore.isLoading)
    })
})



async function fetchTopCollections() {
    const request = await network.getCollectionsByTradingVolume()
    topCollections.value = request.data as Array<NftInterface>
}

async function fetchTopSeller() {
    const request = await network.getTopSeller()
    topSeller.value = _.take(request.data as Array<any>, 4) as Array<NftInterface> as Array<any>
}
const getTopCollections = computed(() => topCollections.value)


</script>


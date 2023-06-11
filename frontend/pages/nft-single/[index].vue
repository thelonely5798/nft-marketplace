<template>
    <!-- Offcanvas-area -->
    <BaseProfile />
    <!-- Offcanvas-area-end -->

    <!-- main-content -->
    <div class="main-content">
        <!-- main-content -->
        <div class="main-content">
            <!-- header-area -->
            <header>
                <div class="menu-area market-single-header">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="mobile-nav-toggler"><i class="fas fa-bars"></i></div>
                                <div class="menu-wrap">
                                    <nav class="menu-nav">
                                        <div class="logo"><a :href="Routes.Home"><img src="img/logo/naftmak.svg" alt=""></a>
                                        </div>
                                        <div class="header-form">
                                            <form action="#">
                                                <button><i class="flaticon-search"></i></button>
                                                <input type="text" placeholder="Search Artwork">
                                            </form>
                                        </div>
                                        <div class="navbar-wrap main-menu d-none d-lg-flex">
                                            <ul class="navigation">
                                                <li><a :href="Routes.Home">Home</a></li>
                                                <li><a :href="Routes.NftMarketplace">Explore</a></li>
                                                <li><a href="collections.html">Collection</a></li>
                                                <li class="active menu-item-has-children"><a href="#">Pages</a>
                                                    <ul class="submenu">
                                                        <li><a href="activity.html">Activity</a></li>
                                                        <li><a href="category.html">Category</a></li>
                                                        <li><a href="ranking.html">Ranking</a></li>
                                                        <li><a href="creators.html">Creators</a></li>
                                                        <li class="active"><a href="market-single.html">Market Single</a>
                                                        </li>
                                                        <li><a href="nft-live-bidding.html">Live Bidding</a></li>
                                                        <li><a href="create-item.html">Create Item</a></li>
                                                        <li><a href="author-profile.html">Author Profile</a></li>
                                                        <li><a href="login-register.html">Login & Register</a></li>
                                                    </ul>
                                                </li>
                                                <li class="menu-item-has-children"><a href="#">Blog</a>
                                                    <ul class="submenu">
                                                        <li><a href="blog.html">Our Blog</a></li>
                                                        <li><a href="blog-details.html">Blog Details</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="header-action d-none d-md-block">
                                            <ul>
                                                <li class="header-btn"><a href="connect-wallets.html" class="btn">Wallet
                                                        Connect</a></li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                                <!-- Mobile Menu  -->
                                <div class="mobile-menu">
                                    <nav class="menu-box">
                                        <div class="close-btn"><i class="fas fa-times"></i></div>
                                        <div class="nav-logo"><a :href="Routes.Home"><img src="img/logo/logo.png" alt=""
                                                    title=""></a>
                                        </div>
                                        <div class="menu-outer">
                                            <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header-->
                                        </div>
                                        <div class="social-links">
                                            <ul class="clearfix">
                                                <li><a href="#"><span class="fab fa-twitter"></span></a></li>
                                                <li><a href="#"><span class="fab fa-facebook-f"></span></a></li>
                                                <li><a href="#"><span class="fab fa-pinterest-p"></span></a></li>
                                                <li><a href="#"><span class="fab fa-instagram"></span></a></li>
                                                <li><a href="#"><span class="fab fa-youtube"></span></a></li>
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

            <!-- main-area -->
            <main>

                <!-- breadcrumb-area -->
                <div class="breadcrumb-area market-single-breadcrumb-area">
                    <div class="breadcrumb-bg"></div>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-12">
                                <div class="market-single-breadcrumb">
                                    <div class="home-back-btn"><a :href="Routes.Home">go back to home</a></div>
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
                                    <img src="img/others/market_details_img.png" alt="">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="market-single-top">
                                    <div class="market-single-title-wrap">
                                        <h2 class="title">Anatomy Science Club</h2>
                                        <ul class="market-details-meta">
                                            <li>Owned by <a href="#">B14484</a></li>
                                            <li class="wishlist">6 favorites</li>
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
                                            <div class="thumb"><img src="img/others/mp_avatar01.png" alt=""></div>
                                            <div class="info">
                                                <h5 class="title"><a href="author-profile.html">David Michels</a></h5>
                                                <span>Creators by</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="market-single-creator">
                                            <div class="thumb"><img src="img/others/mp_avatar02.png" alt=""></div>
                                            <div class="info">
                                                <h5 class="title"><a href="author-profile.html">MR. Tartos</a></h5>
                                                <span>Collection by</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="market-single-content">
                                    <p>What even is an NFT? NFT stands for non-fungible token, which basically means that
                                        it's one-of-kind digital asset that belongs to you and you only. The most popular
                                        NFTs right now include artwork and music also include videos.</p>
                                </div>
                                <div class="highest-bid-wrap">
                                    <div class="row">
                                        <div class="col-xl-6 col-lg-12 col-md-6">
                                            <h5 class="title">Highest bid</h5>
                                            <div class="highest-bid-avatar">
                                                <div class="thumb"><img src="img/others/heighest_avatar.png" alt=""></div>
                                                <div class="content">
                                                    <h5 class="title"><a href="author-profile.html">Tomas lindahl</a></h5>
                                                    <span>3.005wETH</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-6 col-lg-12 col-md-6">
                                            <h5 class="title">Auction has ended</h5>
                                            <div class="bid-countdown-wrap">
                                                <div class="coming-time" data-countdown="2022/05/16"></div>
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
                                                <th scope="col" class="title">Description</th>
                                                <th scope="col">Floor Price</th>
                                                <th scope="col">Owners</th>
                                                <th scope="col" class="time">Assets</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row" class="author">
                                                    <img src="img/others/mp_activity_author01.png" alt=""> <a
                                                        :href="Routes.NftMarketplace">Trading Pet</a>
                                                </th>
                                                <td>+5486%</td>
                                                <td>-965%</td>
                                                <td>2,356 ETH</td>
                                            </tr>
                                            <tr>
                                                <th scope="row" class="author">
                                                    <img src="img/others/mp_activity_author02.png" alt=""> <a
                                                        :href="Routes.NftMarketplace">Trading Craft</a>
                                                </th>
                                                <td>+5486%</td>
                                                <td>-965%</td>
                                                <td>2,356 ETH</td>
                                            </tr>
                                            <tr>
                                                <th scope="row" class="author">
                                                    <img src="img/others/mp_activity_author03.png" alt=""> <a
                                                        :href="Routes.NftMarketplace">Trading Cards</a>
                                                </th>
                                                <td>+5486%</td>
                                                <td>-965%</td>
                                                <td>2,356 ETH</td>
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
                                                                <div class="thumb"><img src="img/others/heighest_avatar.png"
                                                                        alt=""></div>
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
                                                                        src="img/others/heighest_avatar02.png" alt=""></div>
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
                                                                        src="img/others/heighest_avatar03.png" alt=""></div>
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
                                                                        src="img/others/heighest_avatar04.png" alt=""></div>
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
                                                                        src="img/others/heighest_avatar05.png" alt=""></div>
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
                                                                        src="img/others/heighest_avatar06.png" alt=""></div>
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
                                                                <div class="thumb"><img src="img/others/heighest_avatar.png"
                                                                        alt=""></div>
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
                                                                        src="img/others/heighest_avatar02.png" alt=""></div>
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
                                                                        src="img/others/heighest_avatar03.png" alt=""></div>
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
                                                                        src="img/others/heighest_avatar04.png" alt=""></div>
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
                                                                        src="img/others/heighest_avatar05.png" alt=""></div>
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
                                                                        src="img/others/heighest_avatar06.png" alt=""></div>
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
                                                                        src="img/others/heighest_avatar02.png" alt=""></div>
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
                                                                <div class="thumb"><img src="img/others/heighest_avatar.png"
                                                                        alt=""></div>
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
                                                                <div class="thumb"><img src="img/others/heighest_avatar.png"
                                                                        alt=""></div>
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
                                                                        src="img/others/heighest_avatar02.png" alt=""></div>
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
                                                                        src="img/others/heighest_avatar03.png" alt=""></div>
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
                                                                        src="img/others/heighest_avatar04.png" alt=""></div>
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
                                                                        src="img/others/heighest_avatar05.png" alt=""></div>
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
                                                                        src="img/others/heighest_avatar06.png" alt=""></div>
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
                                                                <div class="thumb"><img src="img/others/heighest_avatar.png"
                                                                        alt=""></div>
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
<!-- main-content-end --></template>

<script setup lang="ts">
import Routes from "@/constants/routes"

</script>
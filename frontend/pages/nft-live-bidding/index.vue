<template>
		<!-- Scroll-top -->
        <button class="scroll-top scroll-to-target" data-target="html">
            <i class="fas fa-angle-up"></i>
        </button>
        <!-- Scroll-top-end-->

        <!-- Offcanvas-area -->
        <BaseProfile/>
        <!-- Offcanvas-area-end -->

        <!-- main-content -->
        <div class="main-content">
            <!-- header-area -->
            <BaseHeader/>
            <!-- header-area-end -->

            <!-- main-area -->
            <main>

                <!-- breadcrumb-area -->
                <section class="breadcrumb-area breadcrumb-bg">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-6 col-md-8">
                                <div class="breadcrumb-content text-center">
                                    <h3 class="title">NFT Live Bidding</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- breadcrumb-area-end -->

                <!-- category-area -->
                <BaseCategory/>
                <!-- category-area-end -->

                <!-- explore-products-area -->
                <section class="inner-explore-products">
                    <div class="container">
                        <div class="explore-product-filter">
                            <div class="section-title mb-45">
                                <h2 class="title">Live Bidding <img src="/img/icons/title_icon01.png" alt=""></h2>
                            </div>
                            <div class="filter-wrap">
                                <form action="#">
                                    <div class="filter-item">
                                        <label class="title">FILTER BY:</label>
                                        <label class="switch">
                                            <input type="checkbox">
                                            <span class="button"></span>
                                        </label>
                                    </div>
                                    <div class="filter-item">
                                        <label class="title">Has list price:</label>
                                        <label class="switch">
                                            <input type="checkbox" checked>
                                            <span class="button"></span>
                                        </label>
                                    </div>
                                    <div class="filter-item">
                                        <label class="title">Has open offer</label>
                                        <label class="switch">
                                            <input type="checkbox">
                                            <span class="button"></span>
                                        </label>
                                    </div>
                                    <div class="filter-item">
                                        <label class="title">Owned by creator</label>
                                        <label class="switch">
                                            <input type="checkbox">
                                            <span class="button"></span>
                                        </label>
                                    </div>
                                    <div class="filter-item">
                                        <label class="title">Has sold</label>
                                        <label class="switch">
                                            <input type="checkbox">
                                            <span class="button"></span>
                                        </label>
                                    </div>
                                    <button class="btn filter-btn"><i class="fi-sr-filter"></i> filter</button>
                                </form>
                            </div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                <div class="top-collection-item">
                                    <div class="collection-item-top">
                                        <ul>
                                            <li class="avatar"><a href="author-profile" class="thumb"><img src="/img/others/top_col_avatar.png" alt=""></a>By <a href="author-profile" class="name">Jonson</a></li>
                                            <li class="info-dots dropdown">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <a href="#" class="dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false"></a>
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
                                        <h5 class="title"><a href="market-single">NFT Collection</a> <span class="price">5.4 ETH</span></h5>
                                    </div>
                                    <div class="collection-item-bottom">
                                        <ul>
                                            <li class="bid"><a href="market-single" class="btn">place a bid</a></li>
                                            <li class="wishlist"><a href="#">59</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                <div class="top-collection-item">
                                    <div class="collection-item-top">
                                        <ul>
                                            <li class="avatar"><a href="author-profile" class="thumb"><img src="/img/others/top_col_avatar.png" alt=""></a>By <a href="author-profile" class="name">Jonson</a></li>
                                            <li class="info-dots dropdown">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <a href="#" class="dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false"></a>
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
                                        <h5 class="title"><a href="market-single">Pie Collection</a> <span class="price">5.4 ETH</span></h5>
                                    </div>
                                    <div class="collection-item-bottom">
                                        <ul>
                                            <li class="bid"><a href="market-single" class="btn">place a bid</a></li>
                                            <li class="wishlist"><a href="#">59</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                <div class="top-collection-item">
                                    <div class="collection-item-top">
                                        <ul>
                                            <li class="avatar"><a href="author-profile" class="thumb"><img src="/img/others/top_col_avatar.png" alt=""></a>By <a href="author-profile" class="name">Jonson</a></li>
                                            <li class="info-dots dropdown">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <a href="#" class="dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false"></a>
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
                                        <h5 class="title"><a href="market-single">Craft Collection</a> <span class="price">5.4 ETH</span></h5>
                                    </div>
                                    <div class="collection-item-bottom">
                                        <ul>
                                            <li class="bid"><a href="market-single" class="btn">place a bid</a></li>
                                            <li class="wishlist"><a href="#">59</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                <div class="top-collection-item">
                                    <div class="collection-item-top">
                                        <ul>
                                            <li class="avatar"><a href="author-profile" class="thumb"><img src="/img/others/top_col_avatar.png" alt=""></a>By <a href="author-profile" class="name">Jonson</a></li>
                                            <li class="info-dots dropdown">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <a href="#" class="dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false"></a>
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
                                        <h5 class="title"><a href="market-single">Artwork Collection</a> <span class="price">5.4 ETH</span></h5>
                                    </div>
                                    <div class="collection-item-bottom">
                                        <ul>
                                            <li class="bid"><a href="market-single" class="btn">place a bid</a></li>
                                            <li class="wishlist"><a href="#">59</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                <div class="top-collection-item">
                                    <div class="collection-item-top">
                                        <ul>
                                            <li class="avatar"><a href="author-profile" class="thumb"><img src="/img/others/top_col_avatar.png" alt=""></a>By <a href="author-profile" class="name">Jonson</a></li>
                                            <li class="info-dots dropdown">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <a href="#" class="dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false"></a>
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
                                        <h5 class="title"><a href="market-single">NFT Collection</a> <span class="price">5.4 ETH</span></h5>
                                    </div>
                                    <div class="collection-item-bottom">
                                        <ul>
                                            <li class="bid"><a href="market-single" class="btn">place a bid</a></li>
                                            <li class="wishlist"><a href="#">59</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                <div class="top-collection-item">
                                    <div class="collection-item-top">
                                        <ul>
                                            <li class="avatar"><a href="author-profile" class="thumb"><img src="/img/others/top_col_avatar.png" alt=""></a>By <a href="author-profile" class="name">Jonson</a></li>
                                            <li class="info-dots dropdown">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <a href="#" class="dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false"></a>
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
                                        <h5 class="title"><a href="market-single">Pet Collection</a> <span class="price">5.4 ETH</span></h5>
                                    </div>
                                    <div class="collection-item-bottom">
                                        <ul>
                                            <li class="bid"><a href="market-single" class="btn">place a bid</a></li>
                                            <li class="wishlist"><a href="#">59</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                <div class="top-collection-item">
                                    <div class="collection-item-top">
                                        <ul>
                                            <li class="avatar"><a href="author-profile" class="thumb"><img src="/img/others/top_col_avatar.png" alt=""></a>By <a href="author-profile" class="name">Jonson</a></li>
                                            <li class="info-dots dropdown">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <a href="#" class="dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false"></a>
                                                <ul class="dropdown-menu">
                                                    <li><a href="nft-marketplace">Artwork</a></li>
                                                    <li><a href="nft-marketplace">Action</a></li>
                                                    <li><a href="nft-marketplace">Author Action</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="collection-item-thumb">
                                        <a href="market-single"><img src="/img/others/top_collection10.jpg" alt=""></a>
                                    </div>
                                    <div class="collection-item-content">
                                        <h5 class="title"><a href="market-single">NFT Collection</a> <span class="price">5.4 ETH</span></h5>
                                    </div>
                                    <div class="collection-item-bottom">
                                        <ul>
                                            <li class="bid"><a href="market-single" class="btn">place a bid</a></li>
                                            <li class="wishlist"><a href="#">59</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                <div class="top-collection-item">
                                    <div class="collection-item-top">
                                        <ul>
                                            <li class="avatar"><a href="author-profile" class="thumb"><img src="/img/others/top_col_avatar.png" alt=""></a>By <a href="author-profile" class="name">Jonson</a></li>
                                            <li class="info-dots dropdown">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <a href="#" class="dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false"></a>
                                                <ul class="dropdown-menu">
                                                    <li><a href="nft-marketplace">Artwork</a></li>
                                                    <li><a href="nft-marketplace">Action</a></li>
                                                    <li><a href="nft-marketplace">Author Action</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="collection-item-thumb">
                                        <a href="market-single"><img src="/img/others/top_collection11.jpg" alt=""></a>
                                    </div>
                                    <div class="collection-item-content">
                                        <h5 class="title"><a href="market-single">Action Collection</a> <span class="price">5.4 ETH</span></h5>
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
                </section>
                <!-- explore-products-area-end -->

            </main>
            <!-- main-area-end -->
        </div>
        <!-- main-content-end -->

</template>
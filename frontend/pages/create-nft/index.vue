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
                                <h3 class="title">Create Item</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- breadcrumb-area-end -->

            <!-- create-item-area -->
            <div class="create-item-area">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-xl-3 col-lg-4 col-md-6">
                            <aside class="create-item-sidebar">
                                <h4 class="title">Preview item</h4>
                                <div class="top-collection-item mb-0">
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
                                        <a href="market-single"><img src="img/others/top_collection06.jpg" alt=""></a>
                                    </div>
                                    <div class="collection-item-content">
                                        <h5 class="title"><a href="market-single">NFT Collection</a> <span class="price">5.4
                                                ETH</span></h5>
                                    </div>
                                    <div class="collection-item-bottom">
                                        <ul>
                                            <li class="bid"><a href="market-single" class="btn">place a bid</a></li>
                                            <li class="wishlist"><a href="#">59</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </aside>
                        </div>
                        <div class="col-xl-9 col-lg-8">
                            <div class="method-wrap">
                                <h4 class="title">Select method</h4>
                                <ul class="method-list">
                                    <li><a href="#" class="active"><i class="flaticon-tag"></i> Fixed Price</a></li>
                                    <li><a href="#"><i class="flaticon-timer"></i> Time Auctions</a></li>
                                    <li><a href="#"><i class="flaticon-add-user"></i> Open For Bids</a></li>
                                </ul>
                            </div>
                            <form action="#" class="create-item-form">
                                <div class="form-grp">
                                    <label for="file">Upload file</label>
                                    <input id="file" type="file">
                                </div>
                                <div class="form-grp">
                                    <label for="price">Price</label>
                                    <input id="price" type="text" placeholder="Enter price for one item (ETH)">
                                </div>
                                <div class="form-grp">
                                    <label for="title">Title</label>
                                    <input id="title" type="text" placeholder="Enter price for one item (ETH)">
                                </div>
                                <div class="form-grp">
                                    <label for="desc">Description</label>
                                    <textarea name="message" id="desc"
                                        placeholder="e.g. This is very limited item"></textarea>
                                </div>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="form-grp">
                                            <label for="royalties">Royalties</label>
                                            <input id="royalties" type="text" placeholder="(10%)">
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-grp">
                                            <label for="size">Size</label>
                                            <input id="size" type="text" placeholder="e.g. Size">
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" class="btn">Create Item</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <!-- create-item-area-end -->

        </main>
        <!-- main-area-end -->
</div>
<!-- main-content-end --></template>
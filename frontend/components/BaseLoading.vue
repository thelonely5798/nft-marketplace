<template>
    <!-- preloader -->
    <div id="preloader">
        <div id="loading-center">
            <div id="loading-center-absolute">
                <div class="object" id="object_one"></div>
                <div class="object" id="object_two"></div>
                <div class="object" id="object_three"></div>
            </div>
        </div>
    </div>
    <!-- preloader-end -->
</template>


<script lang="ts" setup>

import { ref, onMounted } from "vue"
import $ from "jquery"
import { useLoadingStore } from "~/store/loading";

const loadingStore = useLoadingStore()

loadingStore.$subscribe((mutation, state) => {
    if (state.loading === false) {
            $('#preloader').delay(0).fadeOut();
    }
    if (state.loading === true) {
            $('#preloader').delay(0).fadeIn();
    }
})
</script>
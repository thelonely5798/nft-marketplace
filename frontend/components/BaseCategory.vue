<template>
    <div class="category-area">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <ul class="category-list">
                        <li class="active"><a href="index"><img src="/img/icons/cat_001.png" alt=""> All</a></li>
                        <li v-for="(category, index) in props.categories">
                            <NuxtLink :href="category.href"><img :src="'/img/icons/cat_0' + (index + 1) + '.png'" alt="">{{
                                category.name }}</NuxtLink>
                        </li>                     
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">

interface Category {
    href: string
    name: string
}
const props = defineProps({
    categories: Array<Category>
})
</script>
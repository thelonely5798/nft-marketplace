<template>
    <div class="loading-overlay bg-gray-500 bg-opacity-75 transition-opacity">
        <BaseLoadingMore />
    </div>
</template>
<style scoped>
.loading-overlay {
    display: none;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9998;
    align-items: center;
    justify-content: center;
}

.loading-overlay.is-active {
    display: flex;
}

.code {
    font-family: monospace;
    /*   font-size: .9em; */
    color: #dd4a68;
    background-color: rgb(238, 238, 238);
    padding: 0 3px;
}
</style>
<template>
  <div>
    <BaseSidebar />
    <BaseLoading />
    <NuxtPage />
    <BaseFooter />
    <BaseLoadingOverlay/>
    <BaseToast v-for="(notification, index) in getNotifications" :messageType="notification.type" :index="index"
      :message="notification.message" />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeMount } from "vue"
import { useNetworkStore } from "./store/network";
import { NetworkType } from "./service";
import { ConnectType, IConnectFactory } from "./service/connect";
import { useRoute } from 'vue-router';
import { useLoadingStore } from "@/store/loading"
import { useToast } from "./store/toast";

const route = useRoute();
const network = useNetworkStore().getNetwork
const { getNotifications } = useToast()

onBeforeMount(() => {
  const main = document.createElement("script")
  main.src = "/js/main.js"
  document.body.append(main)

  ///
  if (network.getNetworkType() == NetworkType.Etherum ||
    network.getNetworkType() === NetworkType.Polygon ||
    network.getNetworkType() == NetworkType.Arbitrum) {
    IConnectFactory.getConnect(ConnectType.MetaMask)
  }
})



watch(() => route.path, (newId, oldId) => {
  const loadingStore = useLoadingStore()
  loadingStore.set(true)
});

</script>

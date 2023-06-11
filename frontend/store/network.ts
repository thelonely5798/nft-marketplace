import { defineStore } from 'pinia'
import { Network, NetworkStrategy, NetworkType } from "@/service/index"
import { Etherum } from '~/service/etherum'
import { Arbitrum } from '~/service/arbitrum'


interface State {
    network: Network
}

interface Getters {
    getNetwork(): Network
}

interface Actions {
    setNetwork(network: NetworkType): () => void
}

const initNetwork = (): Network => {
    const localNetwork = sessionStorage.getItem("network") as any
    if (!localNetwork) {
        return new Network(new Etherum())
    }
    if (localNetwork === String(NetworkType.Etherum)) {
        return new Network(new Etherum())
    }

    if (localNetwork === String(NetworkType.Etherum)) {
        return new Network(new Etherum())
    }

    if (localNetwork === String(NetworkType.Arbitrum)) {
        return new Network(new Arbitrum())
    }
    return new Network(new Etherum())
}
export const useNetworkStore = defineStore<'network', State, Getters, Actions>('network', {
    state: () => {
        return {
            network: initNetwork()
        }
    },
    // could also be defined as
    // state: () => ({ count: 0 })
    actions: {
        setNetwork(network: NetworkType) {
            if (network === NetworkType.Etherum) {
                this.network.setNetwork(new Etherum())
                sessionStorage.setItem("network", NetworkType.Etherum as any)
            }
            if (network === NetworkType.Arbitrum) {
                this.network.setNetwork(new Arbitrum())
                sessionStorage.setItem("network", NetworkType.Arbitrum as any)
            }
            if (network === NetworkType.Polygon) {
                this.network.setNetwork(new Etherum())
                sessionStorage.setItem("network", NetworkType.Polygon as any)
            }
            window.location.reload()
        }
    },
    getters: {
        getNetwork(state: State) {
            return state.network
        },
    }
})

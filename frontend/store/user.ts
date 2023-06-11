import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => {
    return { address: "", connected: false }
  },
  actions: {
    setAddress(address: string) {
      this.address = address
    },
    setConnected(connected: boolean) {
      this.connected = connected
    }
  },
  getters: {
    getAddress(state): string {
      return state.address
    },
    getConnect(state) { 
      return state.connected
    }
  }
})
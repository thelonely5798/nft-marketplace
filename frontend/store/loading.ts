import { defineStore } from 'pinia'

export const useLoadingStore = defineStore('loading', {
  state: () => {
    return { loading: true }
  },
  actions: {
    toggle() {
        this.loading = !this.loading
    },
    set(isLoading: boolean) {
      this.loading = isLoading
    }
  },
  getters: {
    isLoading(state) {
      return state.loading
    }
  }
})
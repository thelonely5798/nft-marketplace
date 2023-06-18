import { acceptHMRUpdate, defineStore } from 'pinia'

import { watch } from 'vue';
import dayjs from "dayjs"

export enum MessageTypeEnum {
  SUCCESS = "SUCESS",
  ERROR = "ERROR",
  WARNING = "WARNING",
}
export interface INotification {
  message: string
  type: MessageTypeEnum,
  duration?: number,
  timer?: any
}
export const useToast = defineStore('toast', () => {
  const notifications = ref<INotification[]>([])

  const show = (notification: INotification) => {
    notifications.value.push({...notification, timer: dayjs()})
  }

  const deleteMessage = () => {
    notifications.value.shift()
  }
 
  const getNotifications = computed(() => {
    return notifications.value
  })
  return { show, deleteMessage, getNotifications, notifications }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useToast, import.meta.hot))
}
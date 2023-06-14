<template>
    <div>
        <div id="toast-success"
            class="flex items-center p-4 mb-4 w-full max-w-xs   top-5 right-1.5 mr-5 fixed text-gray-500 bg-gray-800 rounded-lg animate__fadeInRight"
            :style="{ marginBottom: `calc(70px * ${index})`, zIndex: 999 }" role="alert">
            <div v-if="messageType === 'success'"
                class="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-green-500 bg-green-500 rounded-lg ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" class="w-6 h-6">
                    <path fill-rule="evenodd"
                        d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                        clip-rule="evenodd" />
                </svg>

                <span class="sr-only">Check icon</span>
            </div>

            <div v-if="messageType === 'error'"
                class="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-red-500 bg-red-100 rounded-lg bg-red-800 dark:text-red-200">
                <svg aria-hidden="true" class="w-5 h-5" fill="#fff" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                </svg>
                <span class="sr-only">Error icon</span>
            </div>

            <div class="ml-3 text-sm font-normal text-white">{{ message }}</div>
        </div>
    </div>
</template>

<script lang="ts">
import { useToast, MessageTypeEnum } from '~/store/toast';
import 'animate.css';

class Timer {
    constructor(timer: number, callback: () => void) {
        window.setTimeout(callback, timer)
    }
}

export default defineNuxtComponent({
    props: {
        message: {
            type: String,
        },
        duration: {
            type: String
        },
        timer: {
            type: Number
        },
        index: Number,
        messageType: String
    },
    setup() {
        const { getNotifications, deleteMessage } = useToast()
        return {
            getNotifications,
            deleteMessage
        }
    },
    mounted() {
        new Timer(1500, () => {
            this.deleteMessage()
        })
    },

})
</script>

<style scoped lang="scss"></style>
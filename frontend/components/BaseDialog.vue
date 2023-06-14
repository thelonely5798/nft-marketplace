<template>
  <TransitionRoot as="template" :show="open" @close="onCancel()">
    <Dialog as="div" class="relative z-10">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
        leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <TransitionChild as="template" enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel
              class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div class="bg-white px-4 pb-2 pt-2 sm:p-2 sm:pb-2">
                <div class="w-100">
                  <div class="mt-3 text-start sm:ml-4 sm:mt-0 sm:text-start">
                    <DialogTitle as="h1" class="text-base text-xl font-semibold leading-6 text-gray-900">{{ title }}
                    </DialogTitle>
                    <div class="mt-2">
                      <slot></slot>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button type="button"
                  class=" h-auto w-auto justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                  @click="onCancel()">{{ okText }}</button>
                <button type="button"
                  class=" h-auto w-auto justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                  @click="onSubmit()">{{ cancelText }}</button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { emit } from 'process';


const props = defineProps({
  okText: {
    type: String,
    default: "Submit"
  },
  cancelText: {
    type: String,
    default: "Cancel"
  },
  onSubmit: Function,
  onCancel: Function,
  open: Boolean,
  title: String
})

const { open, onCancel, onSubmit, title } = toRefs(props)
</script>
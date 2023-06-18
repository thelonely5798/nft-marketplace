<template>
  <div :class="[border && 'border border-gray-300 rounded', 'w-100 h-100']">
    <Listbox v-model="selectedOption">
      <div class="relative mt-1">
        <ListboxButton
          :class="['relative w-full cursor-default rounded-lg py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm', ...classes]">
          <span class="block truncate text-gray-900">{{ selectedOption?.label }}</span>
          <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
          </span>
        </ListboxButton>

        <transition leave-active-class="transition duration-100 ease-in" leave-from-class="opacity-100"
          leave-to-class="opacity-0">
          <ListboxOptions
            class="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md bg-gray-50 py-1  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            <ListboxOption v-slot="{ active, selected }" v-for="option in options" :key="option.label" :value="option"
              as="template">
              <li :class="[
                active ? 'bg-amber-100 text-amber-900' : 'text-gray-900',
                'relative cursor-default select-none py-2 pl-10 pr-4 hover:cursor-pointer',
              ]">
                <span :class="[
                  selected ? 'font-medium' : 'font-normal',
                  'block truncate',
                  'ml-7'
                ]">{{ option.label }}</span>
                <span v-if="selected" class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                  <CheckIcon class="h-5 w-5" aria-hidden="true" />
                </span>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
  </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue'
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'
import _ from "lodash"
interface ListBoxOption {
  value: any
  label: string
}


const props = defineProps({
  options: Array<ListBoxOption>,
  border: {
    type: Boolean,
    default: true
  },
  classes: {
    type: Array,
    default: ["bg-white"]
  },
  modelValue: {
    type: Object
  }
})
const emit = defineEmits(['update:modelValue'])
const { options, classes } = toRefs(props)


const selectedOption = ref(_.isEmpty(options?.value) ? { label: "", value: "" } : options?.value[0])

watch(()=> selectedOption.value, () => {
  emit("update:modelValue", selectedOption.value)
})
</script>
  
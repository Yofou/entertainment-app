<template>
  <input 
    v-model="value" 
    class="placeholder:text-white/50 bg-[transparent] border-b border-b-grey-300 pr-4 pb-[17px] text-white hover:border-b-white focus:outline-none mb-6 caret-red"
    :type="props.type"
    :placeholder="placeholder"
  />
</template>

<script lang="ts" setup>
import { useVModel } from "@vueuse/core";
type Emits = { (event: "update:modelValue", payload: string): void };
const emit = defineEmits<Emits>();

type Props = { 
  modelValue: string, 
  placeholder?: string,
  type: 'text' | 'email'
};
const props = defineProps<Props>();

const value = useVModel(props, "modelValue", emit);
</script>

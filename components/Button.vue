<template>
  <button @click="onClick" class="text-body-m bg-red hover:bg-white hover:text-grey-900 transition-colors p-4 rounded-[6px]">
    <slot />
  </button>
</template>

<script lang="ts" setup>
  const onClick = () => {
    console.log("clicked");
  };
</script>

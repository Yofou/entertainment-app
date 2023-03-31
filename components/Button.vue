<template>
  <button @click="onClick">
    <slot />
  </button>
</template>

<script lang="ts" setup>
  const onClick = () => {
    console.log("clicked");
  };
</script>

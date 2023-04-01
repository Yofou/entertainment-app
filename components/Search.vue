<template>
  <input v-model="value" type="text">
</template>

<script lang="ts" setup>
  const value = ref('')

  onMounted(() => {
    alert(
      'hello world'  
    )
  })
</script>

<template>
  <main class="w-full h-full flex flex-col gap-[82px] items-center">
    <img class="mt-[70px]" src="/auth.svg" alt="">
    <form class="flex w-full max-w-[400px] flex-col bg-grey-600 p-8 rounded-[20px] text-white" ref="form">
      <h2 class="text-heading-l mb-10">Sign up</h2>

      <Input v-model="email" type="email" placeholder="Email Address" />
      <Input v-model="password" type="text" placeholder="Password" />
      <Input v-model="password" type="text" placeholder="Repeat Password" />

      <Button class="mt-10 mb-4">Login to your account</Button>

      <p class="text-body-m text-center">
        Already have an account? <a class="text-red" href="/signin">Sign in</a> 
      </p>
    </form>
  </main>
</template>

<script lang="ts" setup>
  import { ref } from "vue"
  import { useFocusTrap } from "@vueuse/integrations/useFocusTrap"
  const email = ref('')
  const password = ref('')
  
  const form = ref()
  useFocusTrap(form, { immediate: true })
</script>

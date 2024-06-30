<template>
  <div class="min-h-screen flex flex-col bg-bgbright dark:bg-bgdark dark:text-white">
    <div class="p-10 flex-grow flex flex-col items-center justify-center mb-14 text-center">
      <img
        src="/logo.svg"
        class="h-28"
      >
      <h1 class="text-4xl font-medium tracking-wider mb-4 mt-12">
        {{ error.statusCode }}
      </h1>
      <p class="lg:w-2/3 leading-relaxed text-xl text-gray-400 dark:text-gray-500">
        {{ error.statusMessage }}
      </p>
      <button
        class="mt-10 btn"
        @click="handleError"
      >
        Back to Home
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps({
  error: Object as () => NuxtError,
})

const handleError = () => clearError({ redirect: '/' })
</script>

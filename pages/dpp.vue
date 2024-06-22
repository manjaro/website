<template>
  <section class="text-gray-600 body-font dark:text-gray-400">
    <div class="container px-5 pt-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h1 class="text-2xl font-medium title-font mb-4 text-gray-900 dark:text-gray-200 tracking-widest">
          Device Partner Program
        </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed">
          Design and market your hardware device together with Manjaro.
        </p>
        <NuxtImg
          src="/construction.png"
          alt=""
          width="200"
          class="object-contain h-52 pt-8 grayscale place-self-center"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
useHead({
  title: 'Device Partner Program' + ' – manjaro.org',
})
</script>

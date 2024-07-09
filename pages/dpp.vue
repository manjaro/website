<template>
  <section class="max-w-screen-xl mx-auto">
    <div class="container pt-12 mx-auto px-6 xl:px-12">
      <div class="flex flex-col text-center mb-14">
        <h1 class="text-3xl font-medium mb-4">
          Device Partner Program
        </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-gray-700 dark:text-gray-400">
          Design and market your hardware device together with Manjaro.
        </p>
      </div>
      <div class="flex flex-col mx-auto mt-16 p-10 max-w-max border dark:border-gray-600 rounded-3xl shadow-md text-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="currentColor"
          class="text-accent"
          viewBox="0 0 16 16"
        >
          <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9z" />
          <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1zm1.038 3.018a6 6 0 0 1 .924 0 6 6 0 1 1-.924 0M0 3.5c0 .753.333 1.429.86 1.887A8.04 8.04 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5M13.5 1c-.753 0-1.429.333-1.887.86a8.04 8.04 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1" />
        </svg>
        <h2 class="tracking-wide text-2xl font-bold text-slate-700 dark:text-slate-200 pt-8 pb-3">
          Coming Soon
        </h2>
        <h3 class="text-gray-500 dark:text-gray-300 tracking-wide font-semibold">
          Watch This Space
        </h3>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
useHead({
  title: 'Device Partner Program',
})
useServerSeoMeta({
  ogTitle: 'Manjaro Device Partner Program',
  description: 'Design and market your hardware device together with Manjaro.',
})
</script>

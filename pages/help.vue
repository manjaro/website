<template>
  <section class="body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
          Help Resources
        </h2>
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 dark:text-white">
          Get Help for Your Manjaro Install
        </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
          We offer various free means to solve problems and professional support.
        </p>
      </div>
      <div class="flex flex-wrap">
        <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6">
          <h2 class="text-lg sm:text-xl dark:text-white font-medium title-font mb-2">
            Documentation
          </h2>
          <p class="leading-relaxed text-base mb-4">
            Browse the documentation to get started with Manjaro or read up on advanced topics.
          </p>
          <NuxtLink
            href="https://docs.manjaro.org"
            target="_blank"
            class="text-indigo-500 inline-flex items-center"
          >Learn More
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </NuxtLink>
        </div>
        <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
          <h2 class="text-lg sm:text-xl dark:text-white font-medium title-font mb-2">
            Forum
          </h2>
          <p class="leading-relaxed text-base mb-4">
            The official Manjaro Forum is a longstanding institution for user-to-user help.
          </p>
          <NuxtLink
            href="https://forum.manjaro.org"
            target="_blank"
            class="text-indigo-500 inline-flex items-center"
          >Visit the Forum
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </NuxtLink>
        </div>
        <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
          <h2 class="text-lg sm:text-xl dark:text-white font-medium title-font mb-2">
            Arch Wiki
          </h2>
          <p class="leading-relaxed text-base mb-4">
            This Wiki is a formidable resource for learning about the Arch based Manjaro too.
          </p>
          <NuxtLink
            href="https://wiki.archlinux.org"
            target="_blank"
            class="text-indigo-500 inline-flex items-center"
          >Visit the Wiki
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </NuxtLink>
        </div>
        <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
          <h2 class="text-lg sm:text-xl dark:text-white font-medium title-font mb-2">
            Professional Support
          </h2>
          <p class="leading-relaxed text-base mb-4">
            The Manjaro company offers reliable professional support for businesses and institutions.
          </p>
          <NuxtLink
            href="/enterprise"
            class="text-indigo-500 inline-flex items-center"
          >Learn More
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
useHead({
  title: 'Help' + ' – manjaro.org',
})
</script>

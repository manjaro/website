<template>
  <section class="body-font">
    <div class="px-4 pt-8 mx-auto md:max-w-full lg:max-w-screen-xl">
      <div class="flex flex-col text-center w-full mb-12">
        <h2 class="text-xs text-primary tracking-widest font-medium title-font mb-1">
          Help Resources
        </h2>
        <h1 class="text-3xl font-medium title-font mb-4">
          Get Help for Your Manjaro Install
        </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-700 dark:text-gray-400">
          We offer various free means to solve problems and professional support.
        </p>
      </div>
      <div class="mx-auto flex flex-wrap max-w-[1200px] xl:max-w-max xl:px-4">
        <div class="flex flex-col xl:w-1/4 md:w-1/2 px-8 py-6">
          <div class="p-4 w-60 mb-6 self-center">
            <NuxtImg
              class="shadow"
              src="help/wiki.webp"
              width="300px"
            />
          </div>
          <h2 class="text-lg sm:text-xl font-medium title-font mb-2">
            Documentation
          </h2>
          <p class="leading-relaxed text-base mb-4 text-gray-700 dark:text-gray-300">
            Browse our documentation to get started with Manjaro or read up on advanced topics.
          </p>
          <NuxtLink
            href="https://wiki.manjaro.org/"
            target="_blank"
            class="text-primary inline-flex items-center"
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
        <div class="flex flex-col xl:w-1/4 md:w-1/2 px-8 py-6 md:border-l-2 border-gray-200 border-opacity-60">
          <div class="p-4 w-60 mb-6 self-center">
            <NuxtImg
              class="shadow"
              src="help/forum.webp"
              width="300px"
            />
          </div>
          <h2 class="text-lg sm:text-xl font-medium title-font mb-2">
            Forum
          </h2>
          <p class="leading-relaxed text-base mb-4 text-gray-700 dark:text-gray-300">
            The official Manjaro Forum is a longstanding institution for user-to-user help.
          </p>
          <NuxtLink
            href="https://forum.manjaro.org"
            target="_blank"
            class="text-primary inline-flex items-center"
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
        <div class="flex flex-col xl:w-1/4 md:w-1/2 px-8 py-6 xl:border-l-2 border-gray-200 border-opacity-60">
          <div class="p-4 w-60 mb-6 self-center">
            <NuxtImg
              class="shadow"
              src="help/arch-wiki.webp"
              width="300px"
            />
          </div>
          <h2 class="text-lg sm:text-xl font-medium title-font mb-2">
            Arch Wiki
          </h2>
          <p class="leading-relaxed text-base mb-4 text-gray-700 dark:text-gray-300">
            This Wiki is a formidable resource for learning about the Arch based Manjaro too.
          </p>
          <NuxtLink
            href="https://wiki.archlinux.org"
            target="_blank"
            class="text-primary inline-flex items-center"
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
        <div class="flex flex-col xl:w-1/4 md:w-1/2 px-8 py-6 md:border-l-2 border-gray-200 border-opacity-60">
          <div class="p-4 w-60 mb-6 self-center">
            <NuxtImg
              src="/help/support.webp"
              width="300px"
            />
          </div>
          <h2 class="text-lg sm:text-xl font-medium title-font mb-2">
            Professional Support
          </h2>
          <p class="leading-relaxed text-base mb-4 text-gray-700 dark:text-gray-300">
            The Manjaro company offers reliable professional support for businesses.
          </p>
          <NuxtLink
            href="/enterprise"
            class="text-primary inline-flex items-center"
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

<template>
  <section class="max-w-screen-xl mx-auto">
    <div class="container pt-12 mx-auto px-6 xl:px-12">
      <div class="flex flex-col text-center mb-14">
        <h1 class="text-3xl font-medium mb-4">
          {{ $t('products.title') }}
        </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-gray-700 dark:text-gray-400">
          {{ $t('products.description') }}
        </p>
      </div>
      <div class="pb-8 mx-auto lg:pb-14">
        <div class="flex flex-col overflow-hidden border dark:border-gray-800 dark:bg-gray-900 rounded shadow-sm lg:flex-row">
          <div class="relative lg:w-1/2">
            <NuxtImg
              src="/x86.webp"
              alt=""
              width="600"
              class="object-cover w-full lg:absolute h-80 lg:h-full"
            />
            <svg
              class="absolute top-0 right-0 hidden h-full text-bgbright dark:text-gray-900 lg:inline-block"
              viewBox="0 0 20 110"
              fill="currentColor"
            >
              <polygon points="17,0 21,0 22,112 1,112" />
            </svg>
          </div>
          <div class="flex flex-col justify-center p-8 lg:p-16 lg:pl-10 lg:w-1/2">
            <div>
              <p class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-accent uppercase rounded-full">
                {{ $t('products.x86_title') }}
              </p>
            </div>
            <h5 class="mb-3 text-3xl font-bold leading-none">
              {{ $t('products.x86_subtitle') }}
            </h5>
            <p class="mb-5 text-gray-700 dark:text-gray-400">
              {{ $t('products.x86_description') }}
            </p>
            <div class="flex items-center">
              <NuxtLink
                href="/products/download/x86"
                aria-label=""
                class="btn btn-primary"
              >
                {{ $t('common.download') }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <div class="pb-8 mx-auto lg:pb-14">
        <div class="flex flex-row overflow-hidden border dark:border-gray-800 dark:bg-gray-900 rounded shadow-sm">
          <div class="flex flex-col justify-center p-8 lg:p-6 lg:pl-10 lg:w-1/2">
            <div>
              <p class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-accent uppercase rounded-full">
                {{ $t('products.arm_title') }}
              </p>
            </div>
            <h5 class="mb-2 text-xl font-bold leading-none sm:text-xl">
              {{ $t('products.arm_subtitle') }}
            </h5>
            <p class="mb-5 text-gray-700 dark:text-gray-400">
              {{ $t('products.arm_description') }}
            </p>
            <div class="flex items-center">
              <NuxtLink
                href="/products/download/arm"
                aria-label=""
                class="btn btn-primary btn-sm"
              >
                {{ $t('common.download') }}
              </NuxtLink>
            </div>
          </div>
          <div class="relative justify-center w-1/2 place-items-center">
            <div class="flex w-full h-full absolute">
              <NuxtImg
                src="/arm.webp"
                alt=""
                width="500"
                class="object-cover w-full grayscale"
              />
            </div>
            <svg
              class="absolute top-0 left-0 hidden h-full text-bgbright dark:text-gray-900 lg:inline-block"
              viewBox="0 0 20 104"
              fill="currentColor"
            >
              <polygon points="0,0 0,104 14,0" />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="container pt-12 mx-auto px-6 xl:px-12">
      <div class="flex flex-col text-center mb-14">
        <h1 class="text-3xl font-medium mb-4">
          {{ $t('products.devices_title') }}
        </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-gray-700 dark:text-gray-400">
          {{ $t('products.devices_description') }}
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-8 mx-auto lg:pb-14 gap-10">
        <div
          v-for="device in devices"
          :key="device._path"
          class="relative w-full md:w-auto flex flex-col place-content-start border dark:border-gray-800 rounded shadow-sm sm:mx-auto p-8 dark:bg-gray-900"
        >
          <div
            v-if="device.coming"
            class="absolute right-0 top-0 text-warning dark:text-yellow-600 border-l-2 border-b-2 bg-gray-50 border-gray-200 dark:bg-gray-900 dark:border-gray-950 font-semibold tracking-wider uppercase p-2"
          >
            {{ $t('products.coming_soon') }}
          </div>
          <div class="self-center">
            <NuxtImg
              :src="`/products/devices/${device._path?.split('/').pop()}.webp`"
              alt=""
              width="500"
              class="object-contain h-52"
            />
          </div>
          <div class="flex flex-col pt-12 flex-grow">
            <div>
              <p class="inline-block px-3 mb-3 text-xs font-semibold tracking-wider text-accent uppercase rounded-full bg-teal-accent-400">
                {{ device.make }}
              </p>
            </div>
            <h5 class="mb-6 text-3xl font-bold leading-none">
              {{ device.name }}
            </h5>
            <div class="flex-grow self-stretch">
              <p class="mb-6 text-gray-700 dark:text-gray-400">
                <ContentRenderer
                  class="prose text-[15px]"
                  :value="device"
                />
              </p>
            </div>
          </div>
          <div class="">
            <NuxtLink
              :href="device.url"
              target="_blank"
              aria-label=""
              class="btn btn-primary"
            >
              {{ $t('products.more_info') }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
useHead({
  title: t('navbar.products'),
})
useServerSeoMeta({
  ogTitle: t('products.devices_description'),
  description: t('products.devices_description'),
})

const { data: devices } = await useAsyncData('/products/devices',
  () => queryContent('/products/devices').sort({ pos: 1 }).find())
</script>

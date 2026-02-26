<template>
  <section>
    <div class="container px-5 pt-12 mx-auto">
      <div class="flex flex-col text-center w-full mb-16">
        <h1 class="text-3xl font-medium mb-4">
          {{ $t('partners.title') }}
        </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-gray-700 dark:text-gray-400">
          {{ $t('partners.description') }}
        </p>
      </div>
      <div class="flex flex-col items-center pb-20">
        <h2 class="text-lg tracking-wide pb-10">
          {{ $t('partners.hardware_title') }}
        </h2>
        <div class="flex flex-wrap gap-10 justify-center text-gray-600 dark:text-gray-400">
          <div class="max-w-80 border rounded-2xl overflow-hidden">
            <NuxtLink
              href="https://slimbook.com/"
              target="_blank"
            >
              <figure class="pt-10 pb-6 px-14 h-40 flex place-items-center bg-gray-100 dark:bg-gray-200">
                <NuxtImg
                  class="object-scale-down"
                  src="/partners/slimbook.webp"
                  width="400px"
                  alt="SLIMBOOK logo"
                />
              </figure>
            </NuxtLink>
            <div class="p-5 text-sm space-y-2">
              <p>{{ $t('partners.bios.slimbook_p1') }}</p>
              <p>{{ $t('partners.bios.slimbook_p2') }}</p>
            </div>
          </div>
          <div class="max-w-80 border rounded-2xl overflow-hidden">
            <NuxtLink
              href="https://orangepi.com/"
              target="_blank"
            >
              <figure class="pt-10 pb-6 px-14 h-40 flex place-items-center bg-gray-100 dark:bg-gray-200">
                <NuxtImg
                  class="object-scale-down"
                  src="/partners/orangepi.webp"
                  width="400px"
                  alt="Orange Pi logo"
                />
              </figure>
            </NuxtLink>
            <div class="p-5 text-sm space-y-2">
              <p>{{ $t('partners.bios.orangepi_p1') }}</p>
              <p>{{ $t('partners.bios.orangepi_p2') }}</p>
              <p>{{ $t('partners.bios.orangepi_p3') }}</p>
            </div>
          </div>
          <div class="max-w-80 border rounded-2xl overflow-hidden">
            <NuxtLink
              href="https://starlabs.systems/?partner=manjaro"
              target="_blank"
            >
              <figure class="pt-10 pb-6 px-14 h-40 flex place-items-center bg-gray-100 dark:bg-gray-200">
                <NuxtImg
                  class="object-scale-down"
                  src="/partners/starlabs.webp"
                  width="400px"
                  alt="Star Labs logo"
                />
              </figure>
            </NuxtLink>
            <div class="p-5 text-sm space-y-2">
              <p>{{ $t('partners.bios.starlabs_p1') }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center pb-20">
        <h2 class="text-lg tracking-wide pb-10">
          {{ $t('partners.infra_title') }}
        </h2>
        <div class="flex flex-wrap gap-10 justify-center text-gray-600 dark:text-gray-400">
          <div class="max-w-80 border rounded-2xl overflow-hidden">
            <NuxtLink
              href="https://cdn77.com"
              target="_blank"
            >
              <figure class="pt-10 pb-6 px-14 h-40 flex place-items-center bg-gray-100 dark:bg-gray-200">
                <NuxtImg
                  class="object-scale-down"
                  src="/partners/cdn77.webp"
                  width="400px"
                  alt="CDN77 logo"
                />
              </figure>
            </NuxtLink>
            <div class="p-5 text-sm space-y-2">
              <p>{{ $t('partners.bios.cdn77_p1') }}</p>
              <p>{{ $t('partners.bios.cdn77_p2') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

useHead({
  title: t('partners.meta_title'),
})
useServerSeoMeta({
  ogTitle: t('partners.meta_og_title'),
  description: t('partners.meta_description'),
})
</script>

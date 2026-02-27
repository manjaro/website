<template>
  <div class="max-w-screen-xl mx-auto">
    <IsoBreadcrumbs current="x86" />
    <section class="text-gray-600 body-font dark:text-gray-400">
      <div class="container px-5 pt-8 mx-auto">
        <div class="flex flex-col text-center w-full mb-14">
          <h1 class="text-2xl font-medium title-font mb-4 text-gray-900 dark:text-gray-200 tracking-widest">
            {{ $t('download.x86_title') }}
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed">
            {{ $t('download.x86_subtitle') }}
          </p>
        </div>
      </div>
      <div class="container mx-auto pb-10 px-5 flex justify-center items-center">
        <div class="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20">
          <IsoCard
            v-for="(iso, title) of isos.official"
            :key="title"
            :desktop-id="title.toString()"
            :iso-data="iso"
            :show-details="title == latestDetailCard"
            @details-toggled="handleDetailsClick"
          />
        </div>
      </div>

      <div class="container px-5 pt-16 mx-auto">
        <div class="flex flex-col text-center w-full mb-14">
          <h1 class="text-2xl font-medium title-font mb-4 text-gray-900 dark:text-gray-200 tracking-widest">
            {{ $t('download.community_title') }}
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed">
            {{ $t('download.community_subtitle') }}
          </p>
        </div>
      </div>
      <div class="container mx-auto pb-10 px-5 flex justify-center items-center">
        <div class="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20">
          <IsoCard
            v-for="(iso, title) of isos.community"
            :key="title"
            :desktop-id="title.toString()"
            :iso-data="iso"
            :show-details="title == latestDetailCard"
            @details-toggled="handleDetailsClick"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

useHead({
  title: t('download.meta_x86_title'),
})
useServerSeoMeta({
  ogTitle: t('download.meta_x86_og_title'),
  description: t('download.meta_x86_description'),
})

const { data } = await useFetch('https://gitlab.manjaro.org/api/v4/projects/12597/repository/files/file-info.json/raw', {
  query: { ref: 'master' },
})
const isos = JSON.parse(data?.value as string)

const latestDetailCard = ref('')

const handleDetailsClick = (title: string, enabled: boolean) => {
  if (enabled) {
    latestDetailCard.value = title
  }
  else if (latestDetailCard.value === title) {
    latestDetailCard.value = ''
  }
}
</script>

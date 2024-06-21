<template>
  <section class="text-gray-600 body-font dark:text-gray-400">
    <div class="container px-5 pt-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-14">
        <h1 class="text-2xl font-medium title-font mb-4 text-gray-900 dark:text-gray-200 tracking-widest">
          Official x86 Images
        </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed">
          Provided by the Manjaro Team
        </p>
      </div>
    </div>
    <div class="container mx-auto pb-10 px-5 flex justify-center items-center">
      <div class="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20">
        <IsoCard
          v-for="(iso, title) of isos.official"
          :key="title"
          :desktop-id="title"
          :desktop-data="getDesktopData(title)"
          :iso-data="iso"
        />
      </div>
    </div>

    <div class="container px-5 pt-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-14">
        <h1 class="text-2xl font-medium title-font mb-4 text-gray-900 dark:text-gray-200 tracking-widest">
          Community Images
        </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed">
          Maintained by Manjaro Community Members
        </p>
      </div>
    </div>
    <div class="container mx-auto pb-10 px-5 flex justify-center items-center">
      <div class="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20">
        <IsoCard
          v-for="(iso, title) of isos.community"
          :key="title"
          :desktop-id="title"
          :desktop-data="getDesktopData(title)"
          :iso-data="iso"
        />
      </div>
    </div>

    <div class="container px-5 pt-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-14">
        <NuxtLink href="/download-arm">
          <p class="lg:w-2/3 mx-auto leading-relaxed">
            Click here for ARM images
          </p>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import desktops from '~/assets/desktops.json'

useHead({
  title: 'Download' + ' – manjaro.org',
})

const { data } = await useFetch('https://gitlab.manjaro.org/api/v4/projects/12597/repository/files/file-info.json/raw', {
  query: { ref: 'master' },
})
const isos = JSON.parse(data?.value as string)

const getDesktopData = (title: string) => {
  return desktops[title]
}
</script>

<template>
  <section class="text-gray-600 body-font dark:text-gray-400">
    <div class="container px-5 pt-16 mx-auto">
      <div class="flex flex-col text-center w-full mb-14">
        <h1 class="text-2xl font-medium title-font mb-4 text-gray-900 dark:text-gray-200 tracking-widest">
          ARM Images
        </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed">
          Provided by the Manjaro ARM Team
        </p>
      </div>
    </div>
    <div class="container mx-auto pb-10 flex justify-center items-center">
      <select
        v-model="selectedDevice"
        class="select select-bordered w-full max-w-xs"
      >
        <option
          v-for="(device, deviceName) of isos.arm"
          :key="deviceName"
          :value="deviceName"
        >
          {{ deviceName }}
        </option>
      </select>
    </div>
    <div class="container mx-auto pb-10 px-5 flex justify-center items-center">
      <div class="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20">
        <IsoCard
          v-for="(iso, title) of isos.arm[selectedDevice]"
          :key="title"
          :desktop-id="title"
          :desktop-data="getDesktopData(title)"
          :iso-data="iso"
          :show-details="title == latestDetailCard"
          @details-toggled="handleDetailsClick"
        />
      </div>
    </div>

    <div class="container px-5 pt-20 mx-auto flex w-full mb-12 justify-center">
      <NuxtLink href="/download">
        <div class="btn btn-ghost leading-relaxe font-normal tracking-widerd">
          Click here for X86 images
        </div>
      </NuxtLink>
    </div>
    <div class="hidden">
      <!-- Forces NuxtImg file creation for conditionally rendered cards. -->
      <NuxtImg
        :src="'/desktops/phosh.webp'"
        width="400"
      />
      <NuxtImg
        :src="'/desktops/plasma-mobile.webp'"
        width="400"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import desktops from '~/assets/desktops.json'

useHead({
  title: 'Download ARM' + ' – manjaro.org',
})

const { data } = await useFetch('https://gitlab.manjaro.org/api/v4/projects/12597/repository/files/file-info.json/raw', {
  query: { ref: 'master' },
})
const isos = JSON.parse(data?.value as string)

const getDesktopData = (title: string) => {
  return desktops[title]
}

const selectedDevice = ref('Generic')
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

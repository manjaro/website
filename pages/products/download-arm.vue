<template>
  <div class="max-w-screen-xl mx-auto">
    <div class="mx-auto pt-6 px-6 breadcrumbs text-gray-600 dark:text-gray-500">
      <ul>
        <li>
          <NuxtLink
            class="flex gap-1.5"
            href="/products"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-bag"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
            </svg>
            Products
          </NuxtLink>
        </li>
        <li>ARM Download</li>
      </ul>
    </div>
    <section class="text-gray-600 body-font dark:text-gray-400">
      <div class="container px-5 pt-8 mx-auto">
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
          <ClientOnly fallback-tag="span">
            <IsoCard
              v-for="(iso, title) of isos.arm[selectedDevice]"
              :key="title"
              :desktop-id="title"
              :desktop-data="getDesktopData(title)"
              :iso-data="iso"
              :show-details="title == latestDetailCard"
              @details-toggled="handleDetailsClick"
            />
          </ClientOnly>
        </div>
      </div>

      <div class="container px-5 pt-20 mx-auto flex w-full mb-12 justify-center">
        <NuxtLink href="/products/download">
          <div class="btn btn-ghost leading-relaxe font-normal tracking-widerd">
            Click here for X86 images
          </div>
        </NuxtLink>
      </div>
      <div class="hidden">
        <!-- Forces NuxtImg file creation for conditionally rendered cards. -->
        <NuxtImg
          :src="'/desktops/mate.webp'"
          width="400"
        />
        <NuxtImg
          :src="'/desktops/minimal.webp'"
          width="400"
        />
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
  </div>
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

const route = useRoute()
const router = useRouter()

const getActiveDevice = () => {
  if (route.query.device) {
    for (const device in isos.arm) {
      if (device === route.query.device) {
        return device
      }
    }
  }

  return 'Generic'
}

const selectedDevice = ref(getActiveDevice())
const latestDetailCard = ref('')

// When the selection changes, update the query.
watch(selectedDevice, (selectedDevice) => {
  router.push({
    path: '/products/download-arm',
    query: { device: selectedDevice },
  })
})

// When the query changes, update the selection.
watch(() => route.query.device, (device) => {
  selectedDevice.value = device
},
)

const handleDetailsClick = (title: string, enabled: boolean) => {
  if (enabled) {
    latestDetailCard.value = title
  }
  else if (latestDetailCard.value === title) {
    latestDetailCard.value = ''
  }
}
</script>

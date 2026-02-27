<template>
  <div class="max-w-screen-xl mx-auto">
    <IsoBreadcrumbs current="ARM" />
    <section class="text-gray-600 body-font dark:text-gray-400">
      <div class="container px-5 pt-8 mx-auto">
        <div class="flex flex-col text-center w-full mb-14">
          <h1 class="text-2xl font-medium title-font mb-4 text-gray-900 dark:text-gray-200 tracking-widest">
            {{ $t('download.arm_title') }}
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed">
            {{ $t('download.arm_subtitle') }}
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
              :desktop-id="title.toString()"
              :iso-data="iso"
              :show-details="title == latestDetailCard"
              @details-toggled="handleDetailsClick"
            />
          </ClientOnly>
        </div>
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
const { t } = useI18n()

useHead({
  title: t('download.meta_arm_title'),
})
useServerSeoMeta({
  ogTitle: t('download.meta_arm_og_title'),
  description: t('download.meta_arm_description'),
})

const { data } = await useFetch('https://gitlab.manjaro.org/api/v4/projects/12597/repository/files/file-info.json/raw', {
  query: { ref: 'master' },
})
const isos = JSON.parse(data?.value as string)

const route = useRoute()
const router = useRouter()

const getActiveDevice = () => {
  const deviceQuery = route.query.device
  if (deviceQuery) {
    const deviceStr = Array.isArray(deviceQuery) ? deviceQuery[0] : deviceQuery
    for (const device in isos.arm) {
      if (device === deviceStr) {
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
    path: '/products/download/arm',
    query: { device: selectedDevice },
  })
})

// When the query changes, update the selection.
watch(() => route.query.device, (device) => {
  if (device) {
    selectedDevice.value = Array.isArray(device) ? device[0]! : device
  }
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

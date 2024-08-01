<template>
  <div class="card max-w-80 bg-base-100 shadow-xl">
    <figure
      v-if="!showDetails"
      class="relative"
    >
      <NuxtImg
        :src="'/desktops/' + desktopId + '.webp'"
        alt="Desktop image"
        width="400"
        class="relative object-cover h-[180px]"
      />
    </figure>
    <div
      v-if="dateFromLink!=='' && showDetails"
      class="absolute  right-2 bg-primary text-primary-content text-xs font-semibold px-2 py-1 rounded-full shadow-md"
    >
      {{ dateFromLink || '-' }}
    </div>
    <div
      v-if="!showDetails"
      class="card-body"
    >
      <h2 class="card-title">
        {{ desktopData.name }}
      </h2>
      <p>{{ desktopData.description }}</p>
      <div class="flex flex-row mt-4 card-actions">
        <NuxtLink :href="getDownloadLink()">
          <button class="btn btn-primary">
            Download
          </button>
        </NuxtLink>
        <button
          v-if="!isoData.custom"
          class="btn"
          @click="enableDetails"
        >
          More
        </button>
      </div>
    </div>
    <div
      v-if="showDetails"
      class="card-body"
    >
      <h2 class="card-title">
        {{ desktopData.name }}
      </h2>
      <p class="flex justify-center pb-2">
        <span class="grid grid-cols-1 self-center gap-8 pt-2">
          <div
            v-if="isoData.minimal !== undefined"
            class="flex relative justify-center"
          >
            <input
              type="checkbox"
              class="toggle toggle-primary"
              :checked="fullImage"
              @click="toggleFullImage"
            >
            <div class="font-bold absolute left-5">
              Minimal
            </div>
            <div class="font-bold absolute right-14">
              Full
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <button class="btn btn-secondary">
              <NuxtLink :href="getDetailEntry('torrent')">
                Torrent
              </NuxtLink>
            </button>
            <button class="btn btn-primary">
              <NuxtLink :href="getDetailEntry('image')">
                Image
              </NuxtLink>
            </button>
            <button
              v-if="getDetailEntry('signature')"
              class="btn btn-accent"
            >
              <NuxtLink :href="getDetailEntry('signature')">
                Signature
              </NuxtLink>
            </button>
            <button class="btn btn-info">
              <NuxtLink :href="getDetailEntry('checksum')">
                Checksum
              </NuxtLink>
            </button>
          </div>
          <div class="flex justify-center tracking-tight text-sm gap-2 items-center">
            <div class="text-gray-500 dark:text-gray-600">
              Download provided by
            </div>
            <div class="bg-gray-300 dark:bg-gray-600 p-1 px-2 rounded-lg">
              <NuxtLink
                href="https://cdn77.com"
                target="_blank"
              >
                <img
                  class="h-4"
                  src="/partners/cdn77.webp"
                >
              </NuxtLink>
            </div>
          </div>
        </span>
      </p>
      <div class="flex flex-row card-actions">
        <button
          class="btn"
          @click="disableDetails"
        >
          Back
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  desktopId: { type: String, required: true },
  desktopData: { type: Object, required: true },
  isoData: { type: Object, required: true },
  showDetails: { type: Boolean, required: true },
})
const emit = defineEmits(['details-toggled'])

function getDownloadLink() {
  if (props.isoData.custom) {
    return props.isoData.custom
  }
  return props.isoData.image
}

const showDetailsRef = ref(props.showDetails)
const fullImage = ref(true)
const dateFromLink = ref('')

const enableDetails = () => {
  showDetailsRef.value = true
  emit('details-toggled', props.desktopId, true)
}
const disableDetails = () => {
  showDetailsRef.value = false
  emit('details-toggled', props.desktopId, false)
}

function toggleFullImage() {
  fullImage.value = !fullImage.value
}

const getDetailEntry = (entry: string) => {
  if (fullImage.value) {
    return props.isoData[entry]
  }
  if (props.isoData.minimal) {
    return props.isoData.minimal[entry]
  }
  return props.isoData[entry]
}

if (props.isoData?.image) {
  const datePattern = /(\d{6})/
  const match = props.isoData.image.match(datePattern)

  if (match) {
    const dateStr = match[1]
    const year = parseInt(dateStr.slice(0, 2), 10)
    const month = parseInt(dateStr.slice(2, 4), 10) - 1
    const day = parseInt(dateStr.slice(4, 6), 10)

    const dateObj = new Date(2000 + year, month, day)

    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }

    dateFromLink.value = dateObj.toLocaleDateString(undefined, options)
  }
}
</script>

<template>
  <div class="card max-w-80 bg-base-100 shadow-xl">
    <figure
      v-if="!showDetails"
      class="relative"
    >
      <div class="absolute inset-0 bg-gray-800 z-0" />
      <NuxtImg
        :src="'/desktops/' + desktopId + '.webp'"
        alt="Desktop image"
        width="400"
        class="relative object-cover h-40 z-1"
      />
    </figure>
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
          @click="toggleDetails"
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
      <p class="flex justify-center">
        <span class="grid grid-cols-1 self-center gap-8 pt-2">
          <div class="flex relative justify-center">
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
            <button class="btn btn-accent">
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
                <NuxtImg
                  height="20px"
                  src="/partners/cdn77.webp"
                />
              </NuxtLink>
            </div>
          </div>
        </span>
      </p>
      <div class="flex flex-row mt-4 card-actions">
        <button
          class="btn"
          @click="toggleDetails"
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
  isoData: { type: Object, required: true } },
)

function getDownloadLink() {
  if (props.isoData.custom) {
    return props.isoData.custom
  }
  if (props.isoData.minimal) {
    return props.isoData.minimal.image
  }
  return props.isoData.image
}

const showDetails = ref(false)
const fullImage = ref(false)

function toggleDetails() {
  showDetails.value = !showDetails.value
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
</script>

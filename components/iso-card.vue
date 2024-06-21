<template>
  <div class="card max-w-80 bg-base-100 shadow-xl">
    <div v-if="!showDetails">
      <figure>
        <NuxtImg
          :src="'/desktops/' + desktopId + '.webp'"
          alt="Desktop image"
          width="400"
          class="object-scale-down h-40"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">
          {{ desktopData.name }}
        </h2>
        <p>{{ desktopData.description }}</p>
        <div class="flex flex-row space-x-5 mt-4">
          <div class="card-actions justify-end">
            <NuxtLink :href="getDownloadLink()">
              <button class="btn btn-primary">
                Download
              </button>
            </NuxtLink>
          </div>
          <div
            v-if="!isoData.custom"
            class="card-actions justify-end"
          >
            <button
              class="btn"
              @click="toggleDetails"
            >
              More
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showDetails">
      <div class="card-body">
        <h2 class="card-title">
          {{ desktopData.name }}
        </h2>
        <div class="flex flex-row space-x-2 justify-center pt-4">
          <div class="font-bold">
            Minimal
          </div>
          <input
            type="checkbox"
            class="toggle toggle-primary"
            :checked="fullImage"
            @click="toggleFullImage"
          >
          <div class="font-bold">
            Full
          </div>
        </div>
        <div class="flex grid grid-cols-2 gap-4 pt-8">
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
        <div class="flex flex-row space-x-5 mt-8">
          <div class="card-actions justify-end">
            <button
              class="btn"
              @click="toggleDetails"
            >
              Back
            </button>
          </div>
        </div>
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

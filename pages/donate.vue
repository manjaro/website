<template>
  <div class="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl px-4 pt-10">
    <div class="grid grid-rows-2 gap-6 md:grid-cols-2 md:grid-rows-1">
      <div class="w-full mb-4 md:mb-0 rounded">
        <img
          src="/donate/header.jpg"
          alt="Manjaro contributors"
        >
        <div class="py-8 prose dark:prose-invert">
          <h2>{{ $t('donate.title') }}</h2>
          <p>{{ $t('donate.p1') }}</p>
          <p>{{ $t('donate.p2') }}</p>
          <p>{{ $t('donate.p3') }}</p>
          <p>{{ $t('donate.p4') }}</p>
        </div>
      </div>
      <div
        class="w-full bg-white text-gray-900 max-h-[800px]"
        data-theme="light"
      >
        <div class="rounded shadow-2xl md:py-4 pb-4 h-full pt-2 relative">
          <div class="inline-flex pt-2 justify-center w-full font-bold">
            <div class="flex items-center pr-8">
              <input
                v-model="arch"
                type="radio"
                input-id="arch1"
                name="arches"
                value="x86"
                class="radio radio-accent"
                checked
              >
              <label
                for="arch1"
                class="ml-2"
              >x86</label>
            </div>
            <div class="flex items-center">
              <input
                v-model="arch"
                type="radio"
                input-id="arch2"
                name="arches"
                value="arm"
                class="radio radio-accent"
              >
              <label
                for="arch2"
                class="ml-2"
              >ARM</label>
            </div>
          </div>
          <div
            v-if="arch == 'x86'"
            class="py-4 flex flex-row justify-center items-center space-x-4"
          >
            <div>
              {{ $t('donate.currency') }}
            </div>
            <select
              v-model="selectedCurrency"
              class="select select-bordered"
            >
              <option
                v-for="option in currencies"
                :key="option.value"
                :value="option.value"
              >
                {{ option.name }}
              </option>
            </select>
          </div>
          <div>
            <iframe
              class="w-full focus:outline-none overflow-hidden min-h-[700px]"
              scrolling="yes"
              :src="getIframeSrc()"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const { t } = useI18n()

useHead({
  title: t('donate.meta_title'),
})
useServerSeoMeta({
  ogTitle: t('donate.meta_og_title'),
  description: t('donate.meta_description'),
})

const arch = defineModel({ type: String, default: 'x86' })

const selectedCurrency = ref('eu')
const currencies = ref([
  { name: 'Euro', value: 'eu' },
  { name: 'Dollar', value: 'us' },
  { name: 'Pound', value: 'uk' },
])

const getIframeSrc = () => {
  const url_prefix = 'https://opencollective.com/embed/manjaro'
  const url_suffix = '/donate?hideHeader=true&hideFAQ=true&hideSteps=true'
  let url_mid = ''

  if (arch.value == 'arm') {
    url_mid = '-arm'
  }
  else {
    if (selectedCurrency.value == 'us') {
      url_mid = '-us'
    }
    else if (selectedCurrency.value == 'uk') {
      url_mid = '-uk'
    }
  }

  return url_prefix + url_mid + url_suffix
}
</script>

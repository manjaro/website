<template>
  <div class="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl px-4 pt-10">
    <div class="grid grid-rows-2 gap-6 md:grid-cols-2 md:grid-rows-1">
      <div class="w-full mb-4 md:mb-0 rounded">
        <img
          src="/donate/header.jpg"
          alt="Manjaro contributors"
        >
        <div class="py-8 prose dark:prose-invert">
          <h2>How We Use Donations</h2>
          <p>Manjaro, like many other open-source projects, relies on the generosity of its community through donations and corporate sponsorships to support its growth and development.</p>
          <p>These donations are essential in covering the various expenses incurred in the operations of the project such as server costs, software development tools, infrastructure expenses, training, flying people to events or conferences and the salaries of key developers. With the help of these donations, Manjaro is able to secure the necessary financial stability that allows the project to continuously improve and remain active.</p>
          <p>Moreover, being a volunteer-driven project, donations play a crucial role in compensating the hard work and dedication of Manjaro's developers and maintainers.</p>
          <p>By providing them with the necessary support, donations help to ensure that the project remains well-supported and actively maintained. In conclusion, donations are an essential part of the Manjaro project's long-term sustainability and growth. They help to keep the project accessible and of high-quality, ensuring that it remains a valuable resource for its users.</p>
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
              >X86</label>
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
              Currency:
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

useHead({
  title: 'Donate',
})
useServerSeoMeta({
  ogTitle: 'Donate to Manjaro',
  description: 'Help the Manjaro project with a financial contribution.',
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

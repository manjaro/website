<script setup>
const { locales, locale, setLocale } = useI18n()

const isOpen = ref(false)
const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const currentLocaleCode = computed(() => {
  return locales.value.find(l => l.code === locale.value)?.code.toUpperCase() || 'EN'
})

const changeLanguage = (code) => {
  setLocale(code)
  isOpen.value = false
}
</script>

<template>
  <div class="relative inline-block text-left">
    <div
      type="button"
      class=" flex justify-between items-center gap-2 inline-block"
      @click="toggleDropdown"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
        />
      </svg>
      <span>{{ currentLocaleCode }}</span>
      <svg
        class="h-4 w-4 ml-1 transition-transform"
        :class="{ 'rotate-180': isOpen }"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>

    <!-- Dropdown menu -->
    <ul
      v-show="isOpen"
      class="absolute right-0 mt-2 w-40 bg-base-100 dark:bg-gray-800 shadow rounded-md py-1 z-10"
    >
      <li
        v-for="lang in locales"
        :key="lang.code"
      >
        <button
          class="w-full text-left px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 flex justify-between items-center"
          :class="{ 'font-bold': locale === lang.code }"
          @click="changeLanguage(lang.code)"
        >
          {{ lang.name }}
          <span
            v-if="locale === lang.code"
            class="badge badge-xs badge-primary"
          />
        </button>
      </li>
    </ul>
  </div>
</template>

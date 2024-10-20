<template>
  <nav class="dark:bg-gray-900">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <NuxtLink
        href="/"
        class="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <img
          src="/logo.svg"
          class="h-8"
          alt="Manjaro Logo"
        >
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Manjaro</span>
      </NuxtLink>
      <details
        id="dropdown"
        class="dropdown dropdown-end md:hidden"
      >
        <span class="sr-only">Open main menu</span>
        <summary
          tabindex="0"
          role="button"
          class="btn btn-ghost btn-circle"
        >
          <svg
            class="w-5 h-5 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </summary>
        <div class="menu menu-lg dropdown-content mt-1 mr-3 z-[1] p-2 pb-5 shadow bg-base-100">
          <ul
            tabindex="0"
          >
            <li>
              <NuxtLink
                href="/products"
                :class="getDropdownLinkStyle('products')"
                :aria-current="getAriaCurrent('products')"
                @click="hideDropDownMenu"
              >
                Products
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                href="/enterprise"
                :class="getDropdownLinkStyle('enterprise')"
                :aria-current="getAriaCurrent('enterprise')"
                @click="hideDropDownMenu"
              >
                Enterprise
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                href="/help"
                :class="getDropdownLinkStyle('help')"
                :aria-current="getAriaCurrent('help')"
                @click="hideDropDownMenu"
              >
                Help
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                href="/news"
                :class="getDropdownLinkStyle('news')"
                :aria-current="getAriaCurrent('news')"
                @click="hideDropDownMenu"
              >
                News
              </NuxtLink>
            </li>
          </ul>
          <div class="divider" />
          <div class="self-center">
            <div class="flex gap-3 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
              </svg>
              <input
                ref="checkbox"
                type="checkbox"
                class="toggle"
                :checked="colorMode.value == 'dark'"
                @click="toggleTheme"
              >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286" />
              </svg>
            </div>
          </div>
        </div>
      </details>

      <div
        class="hidden w-full md:w-auto md:flex"
      >
        <div class="flex gap-6 items-center">
          <ul
            class="font-medium flex flex-col md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-4 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
          >
            <li>
              <NuxtLink
                href="/products"
                class="px-2"
                :class="getLinkStyle('products')"
                :aria-current="getAriaCurrent('products')"
              >Products</NuxtLink>
            </li>
            <li>
              <NuxtLink
                href="/enterprise"
                class="px-2"
                :class="getLinkStyle('enterprise')"
                :aria-current="getAriaCurrent('enterprise')"
              >
                Enterprise</NuxtLink>
            </li>
            <li>
              <NuxtLink
                href="/help"
                class="px-2"
                :class="getLinkStyle('help')"
                :aria-current="getAriaCurrent('help')"
              >
                Help</NuxtLink>
            </li>
            <li>
              <NuxtLink
                href="/news"
                class="px-2"
                :class="getLinkStyle('news')"
                :aria-current="getAriaCurrent('news')"
              >
                News</NuxtLink>
            </li>
          </ul>
          <button
            class="btn btn-sm btn-ghost"
            @click="toggleTheme"
          >
            <svg
              v-show="colorMode.value == 'light'"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
            </svg>
            <svg
              v-show="colorMode.value == 'dark'"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
const checkbox = ref(null)

const toggleTheme = () => {
  if (colorMode.value == 'light') {
    colorMode.preference = 'dark'
  }
  else {
    colorMode.preference = 'light'
  }
}

const hideDropDownMenu = () => {
  document.getElementById('dropdown')!.removeAttribute('open')
}

const onScroll = () => {
  hideDropDownMenu()
}
const onClick = (event: Event) => {
  if (!document.getElementById('dropdown')!.contains(event.target)) {
    // Click was outside the dropdown, close it
    hideDropDownMenu()
  }
}

onMounted(() => {
  checkbox.value!.checked = colorMode.value === 'dark'
  window.addEventListener('scroll', onScroll)
  window.addEventListener('click', onClick)
})

const getLinkStyle = (name: string) => {
  const routeName = useRoute().name
  if (!routeName) {
    return ''
  }
  const path = routeName.split('-')
  let ret = 'hover:text-accent dark:hover:text-accent'
  if (path[0] == name) {
    if (path.length == 1) {
      ret = 'cursor-default'
    }
    ret += ' relative after:absolute after:w-4/6 after:h-[2.7px] after:left-0 after:right-0 after:-bottom-1 after:mx-auto after:bg-accent-800 dark:after:bg-accent-200 after:rounded-full'
  }
  return ret
}
const getDropdownLinkStyle = (name: string) => {
  const routeName = useRoute().name
  if (!routeName) {
    return ''
  }

  const path = routeName.split('-')
  let ret = ''
  if (path[0] == name) {
    if (path.length == 1) {
      ret = 'btn-disabled'
    }
    ret += ' text-accent-300 font-semibold dark:text-accent'
  }
  return ret
}
const getAriaCurrent = (name: string) => {
  const routeName = useRoute().name
  if (!routeName) {
    return 'false'
  }
  const path = routeName.split('-')
  if (path[0] == name && path.length == 1) {
    return 'page'
  }
  return 'false'
}
</script>

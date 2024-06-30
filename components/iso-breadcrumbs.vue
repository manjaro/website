<template>
  <nav
    class="mx-auto pt-6 px-4 text-gray-600 dark:text-gray-500"
    aria-label="Breadcrumb"
  >
    <ol class="inline-flex flex-wrap items-center mb-3 sm:mb-0">
      <li>
        <NuxtLink
          class="inline-flex items-center px-2 py-2 gap-2 text-center rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:hover:bg-gray-800 dark:focus:ring-gray-700"
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="13"
        height="13"
        fill="currentColor"
        class="text-gray-300 dark:text-gray-600 mx-1"
        viewBox="0 0 16 16"
      >
        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
      </svg>
      <li>
        <NuxtLink
          href="/products"
          class="inline-flex items-center px-2 py-2 gap-1.5 text-center rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:hover:bg-gray-800 dark:focus:ring-gray-700"
        >
          Download
        </NuxtLink>
      </li>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="13"
        height="13"
        fill="currentColor"
        class="text-gray-300 dark:text-gray-600 mx-1"
        viewBox="0 0 16 16"
      >
        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
      </svg>
      <li>
        <div class="dropdown">
          <div
            tabindex="0"
            role="button"
            class="inline-flex items-center px-2 py-2 gap-1.5 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 dark:focus:ring-gray-700"
          >
            {{ current }}
          </div>
          <ul
            tabindex="0"
            class="dropdown-content menu bg-base-100 rounded-box z-[1] w-24 p-2 shadow"
          >
            <li>
              <NuxtLink
                :class="getDropStyle('arm')"
                href="/products/download/arm"
              >
                ARM
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                class="tracking-widest"
                :class="getDropStyle('x86')"
                href="/products/download/x86"
              >
                x86
              </NuxtLink>
            </li>
          </ul>
        </div>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
const props = defineProps({
  current: { type: String, required: true } },
)

const getDropStyle = (arch: string) => {
  if (arch == props.current.toLowerCase()) {
    return 'btn-disabled font-bold'
  }
  return ''
}
</script>

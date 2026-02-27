<template>
  <div>
    <div class="px-4 pt-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div class="grid gap-12 row-gap-8 lg:grid-cols-2 pb-20">
        <div class="place-self-center">
          <NuxtImg
            class="h-56 sm:h-96 object-contain"
            width="400"
            src="/enterprise/services.png"
            alt=""
          />
        </div>
        <div class="flex flex-col justify-center">
          <div class="max-w-xl mb-6">
            <h2 class="text-3xl lg:text-4xl font-medium mb-4">
              {{ $t('enterprise.title') }}
            </h2>
            <p class="text-base text-gray-700 dark:text-gray-400 md:text-lg">
              {{ $t('enterprise.hero_description') }}
            </p>
          </div>
          <div class="grid gap-8 row-gap-8 sm:grid-cols-2">
            <div>
              <div class="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50 dark:bg-gray-800">
                <svg
                  class="w-10 h-10 text-accent"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 class="mb-2 font-semibold leading-5">
                {{ $t('enterprise.feature_creators_title') }}
              </h6>
              <p class="text-gray-800 dark:text-gray-300">
                {{ $t('enterprise.feature_creators_p') }}
              </p>
            </div>
            <div>
              <div class="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50 dark:bg-gray-800">
                <svg
                  class="w-10 h-10 text-accent"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 class="mb-2 font-semibold leading-5">
                {{ $t('enterprise.feature_corporate_title') }}
              </h6>
              <i18n-t
                keypath="enterprise.feature_corporate_p"
                tag="p"
                class="text-gray-900 dark:text-gray-300"
              >
                <template #company>
                  <i>Manjaro GmbH&nbsp;&&nbsp;Co.&nbsp;KG</i>
                </template>
              </i18n-t>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-20">
      <div class="grid gap-10 lg:grid-cols-2 place-content-center">
        <div class="flex items-center justify-center -mx-4 lg:pl-8 lg:order-last">
          <div class="flex flex-col items-end px-3">
            <NuxtImg
              class="object-scale-down mb-6 rounded shadow-lg dark:shadow-slate-800 h-28 sm:h-36 xl:h-44 w-28 sm:w-36 xl:w-44 p-4"
              width="400px"
              src="/enterprise/gnome-calendar.webp"
              alt="Zscaler logo"
            />
            <NuxtImg
              class="object-scale-down w-24 h-24 rounded shadow-lg dark:shadow-slate-800 sm:h-32 xl:h-40 sm:w-32 xl:w-40 p-4"
              width="400px"
              src="/enterprise/ollama-logo.webp"
              alt="SentinelOne logo"
            />
          </div>
          <div class="px-3">
            <NuxtImg
              class="object-scale-down w-36 h-36 rounded shadow-lg dark:shadow-slate-800 sm:h-48 xl:h-60 sm:w-48 xl:w-60 p-8"
              width="400px"
              src="/enterprise/freeoffice-logo.webp"
              alt="Microsoft 365 logo"
            />
          </div>
        </div>
        <div class="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
          <div class="max-w-xl">
            <p class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-primary uppercase">
              {{ $t('enterprise.integrate_header') }}
            </p>
            <h2 class="text-2xl font-medium mb-4">
              {{ $t('enterprise.integrate_title') }}
            </h2>
            <div class="text-base text-gray-700 dark:text-gray-300 md:text-lg">
              <p class="pb-3">
                {{ $t('enterprise.integrate_p1') }}
              </p>
              <p>
                {{ $t('enterprise.integrate_p2') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="py-12 lg:py-16 lg:pt-20">
      <div class="bg-slate-100 dark:bg-slate-900">
        <div class="px-4 py-8 lg:py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <p class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-primary uppercase">
              {{ $t('enterprise.solutions_header') }}
            </p>
            <h2 class="text-2xl font-medium mb-4">
              {{ $t('enterprise.solutions_title') }}
            </h2>
            <p class="text-base text-gray-700 dark:text-gray-400 md:text-lg">
              {{ $t('enterprise.solutions_description') }}
            </p>
          </div>
          <div class="grid max-w-screen-lg gap-8 row-gap-10 mx-auto md:grid-cols-2">
            <div class="flex flex-col max-w-md sm:mx-auto sm:flex-row">
              <div class="mr-4">
                <div class="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50 dark:bg-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    class="text-accent"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6zm11.386 3.785-1.806-2.41-.776 2.413zm-3.633.004.961-2.989H4.186l.963 2.995zM5.47 5.495 8 13.366l2.532-7.876zm-1.371-.999-.78-2.422-1.818 2.425zM1.499 5.5l5.113 6.817-2.192-6.82zm7.889 6.817 5.123-6.83-2.928.002z" />
                  </svg>
                </div>
              </div>
              <div>
                <h6 class="mb-3 text-lg font-semibold leading-5">
                  {{ $t('enterprise.service_full_title') }}
                </h6>
                <p class="mb-3">
                  {{ $t('enterprise.service_full_description') }}
                </p>
              </div>
            </div>
            <div class="flex flex-col max-w-md sm:mx-auto sm:flex-row">
              <div class="mr-4">
                <div class="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50 dark:bg-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    class="text-accent"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h6 class="mb-3 text-lg font-semibold leading-5">
                  {{ $t('enterprise.service_conversions_title') }}
                </h6>
                <p class="mb-3">
                  {{ $t('enterprise.service_conversions_description') }}
                </p>
              </div>
            </div>
            <div class="flex flex-col max-w-md sm:mx-auto sm:flex-row">
              <div class="mr-4">
                <div class="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50 dark:bg-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    class="text-accent"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                  </svg>
                </div>
              </div>
              <div>
                <h6 class="mb-3 text-lg font-semibold leading-5">
                  {{ $t('enterprise.service_aftermarket_title') }}
                </h6>
                <p class="mb-3">
                  {{ $t('enterprise.service_aftermarket_description') }}
                </p>
              </div>
            </div>
            <div class="flex flex-col max-w-md sm:mx-auto sm:flex-row">
              <div class="mr-4">
                <div class="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50 dark:bg-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    class="text-accent"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.318 2.687C5.234 2.271 6.536 2 8 2s2.766.27 3.682.687C12.644 3.125 13 3.627 13 4c0 .374-.356.875-1.318 1.313C10.766 5.729 9.464 6 8 6s-2.766-.27-3.682-.687C3.356 4.875 3 4.373 3 4c0-.374.356-.875 1.318-1.313M13 5.698V7c0 .374-.356.875-1.318 1.313C10.766 8.729 9.464 9 8 9s-2.766-.27-3.682-.687C3.356 7.875 3 7.373 3 7V5.698c.271.202.58.378.904.525C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777A5 5 0 0 0 13 5.698M14 4c0-1.007-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1s-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4v9c0 1.007.875 1.755 1.904 2.223C4.978 15.71 6.427 16 8 16s3.022-.289 4.096-.777C13.125 14.755 14 14.007 14 13zm-1 4.698V10c0 .374-.356.875-1.318 1.313C10.766 11.729 9.464 12 8 12s-2.766-.27-3.682-.687C3.356 10.875 3 10.373 3 10V8.698c.271.202.58.378.904.525C4.978 9.71 6.427 10 8 10s3.022-.289 4.096-.777A5 5 0 0 0 13 8.698m0 3V13c0 .374-.356.875-1.318 1.313C10.766 14.729 9.464 15 8 15s-2.766-.27-3.682-.687C3.356 13.875 3 13.373 3 13v-1.302c.271.202.58.378.904.525C4.978 12.71 6.427 13 8 13s3.022-.289 4.096-.777c.324-.147.633-.323.904-.525" />
                  </svg>
                </div>
              </div>
              <div>
                <h6 class="mb-3 text-lg font-semibold leading-5">
                  {{ $t('enterprise.service_cloud_title') }}
                </h6>
                <p class="mb-3">
                  {{ $t('enterprise.service_cloud_description') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      id="contact-us"
      class="px-4 pb-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24"
    >
      <div class="max-w-xl mb-6 md:mx-auto sm:text-center lg:max-w-2xl">
        <p class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-primary uppercase">
          {{ $t('enterprise.contact_header') }}
        </p>
        <h2 class="text-2xl font-medium">
          {{ $t('enterprise.contact_title') }}
        </h2>
      </div>
      <div class="flex justify-center">
        <div class="rounded shadow-sm dark:shadow-slate-800 md:text-center max-w-md">
          <div class="relative">
            <NuxtImg
              class="object-cover h-64 rounded-t"
              width="500px"
              src="/enterprise/office.jpg"
              alt=""
            />
            <div class="absolute inset-0 bg-gray-800 bg-opacity-10 dark:bg-opacity-40" />
          </div>
          <div class="px-6 py-8 border border-t-0 dark:border-gray-700 rounded-b sm:px-8">
            <p class="mb-5">
              {{ $t('enterprise.contact_description') }}
            </p>
            <div class="flex justify-center gap-4">
              <button
                class="btn btn-primary"
              >
                <NuxtLink
                  href="mailto:info@manjaro.org"
                  target="_blank"
                >
                  {{ $t('enterprise.email') }}
                </NuxtLink>
              </button>
              <button
                class="btn btn-outline"
              >
                <NuxtLink
                  href="tel:00493022012303"
                  target="_blank"
                >
                  {{ $t('enterprise.phone') }}
                </NuxtLink>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

useHead({
  title: t('enterprise.meta_title'),
})
useServerSeoMeta({
  ogTitle: t('enterprise.meta_og_title'),
  description: t('enterprise.meta_description'),
})
</script>

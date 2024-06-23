<template>
  <section class="text-gray-600 body-font dark:text-gray-400">
    <div class="container px-5 pt-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-14">
        <h1 class="text-2xl font-medium title-font mb-4 text-gray-900 dark:text-gray-200 tracking-widest">
          Install Media
        </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed">
          Live ISOs with the latest software are regularly released. A new Manjaro system can be installed easily from these.
        </p>
      </div>
      <div class="px-4 pb-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-14">
        <div class="flex flex-col max-w-screen-lg overflow-hidden border dark:border-2 dark:border-gray-800 rounded shadow-sm lg:flex-row sm:mx-auto">
          <div class="relative lg:w-1/2">
            <NuxtImg
              src="/x86.webp"
              alt=""
              width="600"
              class="object-cover w-full lg:absolute h-80 lg:h-full"
            />
            <svg
              class="absolute top-0 right-0 hidden h-full text-bgbright dark:text-bgdark lg:inline-block"
              viewBox="0 0 19.7 104"
              fill="currentColor"
            >
              <polygon points="17,0 20,0 20,104 1,104" />
            </svg>
          </div>
          <div class="flex flex-col justify-center p-8 lg:p-16 lg:pl-10 lg:w-1/2">
            <div>
              <p class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-accent uppercase rounded-full bg-teal-accent-400">
                x86 Architecture
              </p>
            </div>
            <h5 class="mb-3 text-3xl font-bold leading-none sm:text-4xl">
              For Workstations and Laptops
            </h5>
            <p class="mb-5 text-gray-800 dark:text-gray-500">
              The standard version of Manjaro. This image is suitable for most personal computers.
            </p>
            <div class="flex items-center">
              <NuxtLink
                href="/download"
                aria-label=""
                class="btn btn-primary"
              >
                Download
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <div class="px-4 pb-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20">
        <div class="flex flex-row max-w-screen-lg overflow-hidden border dark:border-2 dark:border-gray-800 rounded shadow-sm lg:flex-row sm:mx-auto">
          <div class="flex flex-col justify-center p-8 lg:p-6 lg:pl-10 lg:w-1/2">
            <div>
              <p class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-accent uppercase rounded-full bg-teal-accent-400">
                ARM Architecture
              </p>
            </div>
            <h5 class="mb-3 text-xl font-bold leading-none sm:text-xl">
              For Phones and Embedded
            </h5>
            <p class="mb-5 text-gray-800 dark:text-gray-500">
              For a selection of embedded and mobile devices.
            </p>
            <div class="flex items-center">
              <NuxtLink
                href="/download-arm"
                aria-label=""
                class="btn btn-primary btn-sm"
              >
                Download
              </NuxtLink>
            </div>
          </div>
          <div class="justify-center lg:w-1/2 grayscale">
            <NuxtImg
              src="/arm.webp"
              alt=""
              width="500"
              class="object-cover w-full lg:h-56 sm:h-64"
            />
            <svg
              class="absolute top-0 left-0 hidden h-full text-bgbright dark:text-bgdark lg:inline-block"
              viewBox="0 0 20 104"
              fill="currentColor"
            >
              <polygon points="0,0 0,104 14,0" />
            </svg>
          </div>
        </div>
      </div>

      <div class="flex flex-col text-center w-full mb-20">
        <h1 class="text-2xl font-medium title-font mb-4 text-gray-900 dark:text-gray-200 tracking-widest">
          Devices
        </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed">
          Our hardware partners offer attractive devices with Manjaro preinstalled.
        </p>
        <NuxtImg
          src="/construction.png"
          alt=""
          width="200"
          class="object-contain h-52 pt-8 grayscale place-self-center"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
useHead({
  title: 'Products' + ' – manjaro.org',
})
</script>

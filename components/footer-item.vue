<template>
  <div class="dark:bg-gray-900">
    <div class="px-4 pt-16  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 pt-28">
      <div class="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
        <div class="md:max-w-md lg:col-span-2">
          <a
            href="/"
            aria-label="Go home"
            title="Manjaro"
            class="inline-flex items-center"
          >
            <img
              src="/logo.svg"
              class="h-8"
              alt="Manjaro Logo"
            >
            <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 dark:text-gray-400">Manjaro</span>
          </a>
          <div class="mt-4 lg:max-w-sm">
            <p class="text-sm text-gray-800 dark:text-gray-400">
              The Manjaro project is backed up by Manjaro GmbH & Co. KG, an open source driven company.
            </p>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-8 row-gap-8 lg:col-span-4 md:grid-cols-4">
          <div>
            <p class="font-semibold tracking-wide text-gray-800 dark:text-gray-400">
              People
            </p>
            <ul class="mt-2 space-y-2">
              <li>
                <a
                  href="/team"
                  class="text-gray-600 dark:text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >Team</a>
              </li>
              <li>
                <a
                  href="/"
                  class="text-gray-600 dark:text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >Donate</a>
              </li>
              <li>
                <a
                  href="/"
                  class="text-gray-600 dark:text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >Contribute</a>
              </li>
            </ul>
          </div>
          <div>
            <p class="font-semibold tracking-wide text-gray-800 dark:text-gray-400">
              Commercial
            </p>
            <ul class="mt-2 space-y-2">
              <li>
                <a
                  href="/"
                  class="text-gray-600 dark:text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >Customers</a>
              </li>
              <li>
                <a
                  href="/"
                  class="text-gray-600 dark:text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >Partners</a>
              </li>
              <li>
                <a
                  href="/"
                  class="text-gray-600 dark:text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <p class="font-semibold tracking-wide text-gray-800 dark:text-gray-400">
              Status
            </p>
            <ul class="mt-2 space-y-2">
              <li>
                <a
                  href="/"
                  class="text-gray-600 dark:text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >Servers</a>
              </li>
              <li>
                <a
                  href="/"
                  class="text-gray-600 dark:text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >Packages</a>
              </li>
              <li>
                <a
                  href="/"
                  class="text-gray-600 dark:text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >Mailing
                  Lists</a>
              </li>
            </ul>
          </div>
          <div>
            <p class="font-semibold tracking-wide text-gray-800 dark:text-gray-400">
              Legal
            </p>
            <ul class="mt-2 space-y-2">
              <li>
                <a
                  href="/"
                  class="text-gray-600 dark:text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >Privacy
                  Police</a>
              </li>
              <li>
                <a
                  href="/"
                  class="text-gray-600 dark:text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >Terms
                  Of Use</a>
              </li>
              <li>
                <a
                  href="/"
                  class="text-gray-600 dark:text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >Imprint</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="flex flex-col justify-between pt-5 pb-10 border-t sm:flex-row">
        <p class="text-sm text-gray-600">
          © Copyright {{ get_year() }} Manjaro GmbH & Co. KG. All rights reserved.
        </p>
        <div class="flex items-center mt-4 space-x-4 sm:mt-0">
          <NuxtLink
            href="https://x.com/ManjaroLinux"
            target="_blank"
            class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              class="h-5"
            >
              <path
                d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"
              />
            </svg>
          </NuxtLink>
          <NuxtLink
            href="https://youtube.com/@manjaro-linux"
            target="_blank"
            class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            <svg
              viewBox="0 0 18 18"
              fill="currentColor"
              class="h-6"
            >
              <path
                d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"
              />
            </svg>
          </NuxtLink>
          <NuxtLink
            href="https://linkedin.com/company/manjaro-linux"
            target="_blank"
            class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              class="h-5"
            >
              <path
                d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
              />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const get_year = () => {
  return new Date().getFullYear()
}
</script>

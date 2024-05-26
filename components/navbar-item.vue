<template>
  <nav class="bg-background border-gray-200 dark:bg-gray-900">
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
      <div class="dropdown dropdown-end md:hidden">
        <span class="sr-only">Open main menu</span>
        <div
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
        </div>
        <ul
          tabindex="0"
          class="menu dropdown-content mt-1 mr-3 z-[1] p-2 shadow bg-base-100"
        >
          <li>
            <NuxtLink href="/products">
              Products
            </NuxtLink>
          </li>
          <li>
            <NuxtLink href="/enterprise">
              Enterprise
            </NuxtLink>
          </li>
          <li>
            <NuxtLink href="/help">
              Help
            </NuxtLink>
          </li>
          <li>
            <NuxtLink href="/news">
              News
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div
        id="navbar-default"
        class="hidden w-full md:block md:w-auto"
      >
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li>
            <NuxtLink
              href="/products"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-accent md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              aria-current="page"
            >Products</NuxtLink>
          </li>
          <li>
            <NuxtLink
              href="/enterprise"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-accent md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Enterprise</NuxtLink>
          </li>
          <li>
            <NuxtLink
              href="/help"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-accent md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Help</NuxtLink>
          </li>
          <li>
            <NuxtLink
              href="/news"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-accent md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              News</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

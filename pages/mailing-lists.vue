<template>
  <div class="max-w-screen-sm mx-auto pt-10">
    <div class="flex flex-col items-center">
      <img
        src="/mailing-lists.jpg"
        alt="Mail"
        width="400px"
      >
      <div class="py-8 prose dark:prose-invert">
        <h2>Mailing Lists</h2>
        <ul>
          <li>
            <NuxtLink
              href="https://lists.manjaro.org/pipermail/manjaro-dev"
              target="_blank"
            >
              Development
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              href="https://lists.manjaro.org/pipermail/manjaro-packages/"
              target="_blank"
            >
              Packages
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              href="https://lists.manjaro.org/pipermail/manjaro-security"
              target="_blank"
            >
              Security
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              href="https://lists.manjaro.org/pipermail/manjaro-general"
              target="_blank"
            >
              General
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              href="https://lists.manjaro.org/pipermail/manjaro-testing"
              target="_blank"
            >
              Testing
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              href="https://lists.manjaro.org/pipermail/manjaro-mirrors"
              target="_blank"
            >
              Mirrors
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Mailing Lists' + ' – manjaro.org',
})
</script>

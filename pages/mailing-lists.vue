<template>
  <div class="max-w-screen-sm mx-auto pt-10">
    <div class="flex flex-col items-center">
      <NuxtImg
        src="/mailing-lists.jpg"
        alt="Mail"
        width="400px"
      />
      <div class="py-8 prose dark:prose-invert">
        <h2>{{ $t('mailing_lists.title') }}</h2>
        <ul>
          <li>
            <NuxtLink
              href="https://lists.manjaro.org/pipermail/manjaro-dev"
              target="_blank"
            >
              {{ $t('mailing_lists.dev') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              href="https://lists.manjaro.org/pipermail/manjaro-packages/"
              target="_blank"
            >
              {{ $t('mailing_lists.packages') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              href="https://lists.manjaro.org/pipermail/manjaro-security"
              target="_blank"
            >
              {{ $t('mailing_lists.security') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              href="https://lists.manjaro.org/pipermail/manjaro-general"
              target="_blank"
            >
              {{ $t('mailing_lists.general') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              href="https://lists.manjaro.org/pipermail/manjaro-testing"
              target="_blank"
            >
              {{ $t('mailing_lists.testing') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              href="https://lists.manjaro.org/pipermail/manjaro-mirrors"
              target="_blank"
            >
              {{ $t('mailing_lists.mirrors') }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

useHead({
  title: t('mailing_lists.meta_title'),
})
</script>

<template>
  <div class="max-w-screen-sm mx-auto">
    <div class="prose prose-a:prose-headings:no-underline dark:prose-invert px-6">
      <ContentRenderer :value="data!" />
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

useHead({
  title: t('contribute.meta_title'),
})
useServerSeoMeta({
  ogTitle: t('contribute.meta_og_title'),
  description: t('contribute.meta_description'),
})

const route = useRoute()
const { data } = await useAsyncData(`${route.path}`, () => queryContent(route.path).findOne())

if (!data.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found', fatal: true })
}
</script>

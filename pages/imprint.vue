<template>
  <div class="max-w-screen-sm mx-auto">
    <div class="prose prose-a:prose-headings:no-underline dark:prose-invert px-6">
      <ContentRenderer :value="data!" />
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Imprint',
})

const route = useRoute()
const { data } = await useAsyncData(`${route.path}`, () => queryContent(route.path).findOne())

if (!data.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found', fatal: true })
}
</script>

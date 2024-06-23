<template>
  <div class="max-w-screen-sm mx-auto px-6">
    <article>
      <div class="py-10">
        <NuxtImg
          :src="imgPath"
          alt="Header image"
          width="600px"
        />
      </div>
      <h1 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-400">
        {{ data!.title }}
      </h1>
      <section class="prose dark:prose-invert">
        <ContentRenderer :value="data" />
      </section>
    </article>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { data } = await useAsyncData(`news-item-${route.path}`, () => queryContent(route.path).findOne())

if (!data.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found', fatal: true })
}

const imgPath = route.path + '/' + data.value.image

useHead({
  title: data.value.title + ' | Manjaro News',
})
</script>

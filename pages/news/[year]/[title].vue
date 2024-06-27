<template>
  <article class="max-w-screen-sm mx-auto px-6 pt-12">
    <div class="pb-8">
      <NuxtImg
        :src="imgPath"
        alt="Header image"
        width="600px"
      />
    </div>
    <h1 class="mb-6 text-3xl font-semibold tracking-tight">
      {{ data!.title }}
    </h1>
    <p class="mb-5 text-gray-800 dark:text-gray-300">
      {{ data!.description }}
    </p>
    <div class="pb-2 flex items-center text-gray-500">
      {{ useDateFormat(data!.date, 'MMMM DD, YYYY').value }}, by
      <NuxtImg
        v-if="authorPicture"
        class="mx-2 w-9 h-9 rounded-full object-cover"
        :src="authorPicture"
        width="50px"
        alt="Author portrait"
      />
      {{ author.name }}
    </div>
    <section class="text-gray-900 dark:text-gray-200 prose dark:prose-invert">
      <ContentRenderer :value="data" />
    </section>
  </article>
</template>

<script setup lang="ts">
import { useDateFormat } from '@vueuse/core'

const route = useRoute()
const { data } = await useAsyncData(`news-item-${route.path}`, () => queryContent(route.path).findOne())

if (!data.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found', fatal: true })
}

const imgPath = route.path + '/' + data.value.image
const author = getAuthors(data.value.authors)[0]
const authorPicture = getAuthorPicture(data.value.authors[0])

useHead({
  title: data.value.title + ' | Manjaro News',
})
</script>

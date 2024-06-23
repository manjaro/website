<template>
  <section>
    <div class="py-12 px-4 mx-auto max-w-screen-xl lg:px-6 body-font">
      <div class="flex flex-col text-center w-full mb-14">
        <h1 class="text-3xl font-medium mb-4">
          News and Announcements
        </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-gray-700 dark:text-gray-400">
          Articles about development and organization of the Manjaro project
        </p>
      </div>
      <div class="grid gap-8 lg:grid-cols-2">
        <div
          v-for="item of data"
          :key="item.id"
          class="p-5"
        >
          <article class="p-6 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div class="flex justify-between items-center mb-5 text-gray-500">
              <span class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800 capitalize">
                <svg
                  class="mr-1 w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                ><path
                  fill-rule="evenodd"
                  d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                  clip-rule="evenodd"
                /><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" /></svg>
                {{ item.kind }}
              </span>
              <span class="text-sm">{{ useTimeAgo(item.date).value }}</span>
            </div>
            <div class="pb-5">
              <NuxtLink :href="item._path">
                <NuxtImg
                  :src="getImagePath(item._path!, item.image!)"
                  width="500"
                /></NuxtLink>
            </div>
            <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-200">
              <NuxtLink :href="item._path">
                {{ item.title }}
              </NuxtLink>
            </h2>
            <p class="mb-5 text-gray-700 dark:text-gray-300">
              {{ item.description }}
            </p>
            <div class="flex justify-between items-center">
              <div class="flex items-center space-x-4">
                <img
                  class="w-7 h-7 rounded-full"
                  :src="'/team/' + getAuthors(item.authors)[0].id + '.' + getAuthors(item.authors)[0].image"
                  alt="Jese Leos avatar"
                >
                <span class="font-medium">
                  {{ getAuthors(item.authors)[0].name }}
                </span>
              </div>
              <NuxtLink
                :href="item._path"
                class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
              >
                Read more
                <svg
                  class="ml-2 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                ><path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                /></svg>
              </NuxtLink>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useTimeAgo } from '@vueuse/core'
import team from '~/assets/team/current.json'

const getAuthors = (ids) => {
  const ret = team.filter(obj => obj.id == ids[0])
  return ret
}

useHead({
  title: 'News' + ' – manjaro.org',
})

const getImagePath = (path: string, file: string) => {
  return path + '/' + file
}

const props = defineProps({ pageNumber: { type: Number, required: true } })
const postsPerPage = 10

const allPostsCountResponse = await useAsyncData('news-items-all',
  () => queryContent('/news').count())

const allPostsCount = allPostsCountResponse.data.value!
const totalPages = Math.ceil(allPostsCount / postsPerPage)

if (props.pageNumber < 1 || props.pageNumber > totalPages) {
  showError({ statusCode: 404, statusMessage: 'Page Not Found', fatal: true })
}

const { data } = await useAsyncData(`news-items-list-${props.pageNumber}`, () =>
  queryContent('/news')
    .sort({ date: -1 })
    .skip((props.pageNumber - 1) * postsPerPage)
    .limit(postsPerPage)
    .find(),
)
</script>

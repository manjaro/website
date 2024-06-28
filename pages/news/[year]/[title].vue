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
    <div class="pb-2 flex flex-row items-center text-gray-500">
      {{ useDateFormat(data!.date, 'MMMM DD, YYYY').value }}, by&nbsp;
      <span
        class="flex items-center cursor-pointer"
        onclick="author_modal.showModal()"
      >
        <NuxtImg
          v-if="authorPicture"
          class="mx-2 w-9 h-9 rounded-full object-cover"
          :src="authorPicture"
          width="50px"
          alt="Author portrait"
        />
        {{ author.name }}
      </span>
    </div>
    <section class="text-gray-900 dark:text-gray-200 prose dark:prose-invert">
      <ContentRenderer :value="data" />
    </section>
    <dialog
      id="author_modal"
      class="modal"
    >
      <div class="modal-box relative">
        <div class="flex items-center gap-10">
          <NuxtImg
            v-if="authorPicture"
            class="rounded-full object-cover"
            :src="authorPicture"
            width="150px"
            alt="Author portrait"
          />
          <div>
            <h3 class="text-lg font-bold">
              {{ author.name }}
            </h3>
            <p class="pt-1 pb-3 capitalize text-gray-500 dark:text-gray-400 tracking-wide">
              {{ author.role }}
            </p>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              {{ author.description }}
            </p>
            <TeamSocial
              v-if="author.social.x || author.social.github || author.social.forum"
              class="pt-4"
              :member="author"
            />
          </div>
        </div>
        <form method="dialog">
          <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
      </div>
      <form
        method="dialog"
        class="modal-backdrop"
      >
        <button>close</button>
      </form>
    </dialog>
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

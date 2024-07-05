<template>
  <div class="max-w-screen-xl mx-auto">
    <nav
      class="mx-auto pt-6 px-4 text-gray-600 dark:text-gray-500"
      aria-label="Breadcrumb"
    >
      <ol class="inline-flex flex-wrap items-center mb-3 sm:mb-0">
        <li>
          <NuxtLink
            class="inline-flex items-center px-2 py-2 gap-2 text-center rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:hover:bg-gray-800 dark:focus:ring-gray-700"
            href="/news"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="text-gray-500"
              viewBox="0 0 16 16"
            >
              <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5z" />
              <path d="M2 3h10v2H2zm0 3h4v3H2zm0 4h4v1H2zm0 2h4v1H2zm5-6h2v1H7zm3 0h2v1h-2zM7 8h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2z" />
            </svg>
            News
          </NuxtLink>
        </li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="13"
          fill="currentColor"
          class="text-gray-300 dark:text-gray-600 mx-1"
          viewBox="0 0 16 16"
        >
          <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
        </svg>
        <li class="inline-flex items-center px-2 py-2 gap-1.5 text-center">
          {{ data!.title }}
        </li>
      </ol>
    </nav>
    <article class="max-w-screen-sm mx-auto px-6 pt-4 md:pt-6">
      <div class="pb-8">
        <NuxtImg
          :src="imgPath"
          alt="Header image"
          width="600px"
        />
      </div>
      <h1 class="mb-8 text-3xl font-semibold tracking-tight">
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
      <section class="pt-4 text-gray-900 dark:text-gray-200 prose prose-a:prose-headings:no-underline dark:prose-invert">
        <ContentRenderer :value="data!" />
      </section>
      <dialog
        id="author_modal"
        class="modal"
      >
        <div class="modal-box relative">
          <div class="flex items-center gap-10">
            <NuxtImg
              v-if="authorPicture"
              class="h-[150px] w-[150px] rounded-full object-cover"
              :src="authorPicture"
              width="150px"
              alt="Author portrait"
            />
            <div class="min-h-28">
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
  </div>
</template>

<script setup lang="ts">
import { useDateFormat } from '@vueuse/core'

const route = useRoute()
const { data } = await useAsyncData(`news-item-${route.path}`, () => queryContent(route.path).findOne())

if (!data.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found', fatal: true })
}

const imgPath = route.path.replace(/\/$/, '') + '/' + data.value.image
const author = getAuthors(data.value.authors)[0]
const authorPicture = getAuthorPicture(data.value.authors[0])

useHead({
  title: data.value.title + ' | Manjaro News',
  titleTemplate: '',
})
useServerSeoMeta({
  ogTitle: data.value.title,
  description: data.value.description,
  ogImage: 'https://manjaro.org' + imgPath,
  twitterCard: 'summary_large_image',
  twitterImage: 'https://manjaro.org' + imgPath,
})
</script>

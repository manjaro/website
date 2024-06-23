<template>
  <section class="text-gray-600 body-font dark:text-gray-400">
    <div class="container px-5 pt-12 mx-auto">
      <div class="flex flex-col text-center w-full mb-16">
        <h1 class="text-2xl font-medium title-font mb-4 text-gray-900 dark:text-gray-200 tracking-widest">
          Former Members
        </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed">
          The following people were part of the Manjaro Team in the past and helped it prosper. We want to thank them a lot for that.
        </p>
      </div>
      <div class="flex flex-wrap -m-4">
        <div
          v-for="member of sortedTeam"
          :key="member.id"
          class="p-4 lg:w-1/2"
        >
          <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center sm:text-left">
            <NuxtImg
              alt="team"
              class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
              :src="getPicture(member.id, member.image)"
            />
            <div class="flex-grow sm:pl-8">
              <h2 class="title-font font-medium text-lg text-gray-900 dark:text-gray-200">
                {{ member.name }}
              </h2>
              <h3 class="text-gray-500 mb-3 capitalize">
                {{ member.role }}
              </h3>
              <p class="mb-4 prose">
                {{ member.description }}
              </p>
              <span class="inline-flex">
                <a class="text-gray-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
                <a class="ml-2 text-gray-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </a>
                <a class="ml-2 text-gray-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="lg:w-2/3 mx-auto leading-relaxed text-base text-center pt-20">
      <NuxtLink href="/team">
        Current team members
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import team from '~/assets/team/former.json'

useHead({
  title: 'Former Team Members' + ' – manjaro.org',
})

const sortedTeam = team.sort((a, b) => a.pos - b.pos)
const getPicture = (user_id: string, file_type: string) => {
  if (file_type) {
    return '/team/' + user_id + '.' + file_type
  }
  else {
    return '/team/jaro-avatar.png'
  }
}
</script>

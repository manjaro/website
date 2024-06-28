<template>
  <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center sm:text-left">
    <NuxtImg
      alt="team"
      width="300px"
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
        <NuxtLink
          v-if="member.social.x"
          :href="member.social.x"
          class="text-gray-500"
        >
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            class="w-6 h-6"
            viewBox="0 0 23 23"
          >
            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
          </svg>
        </NuxtLink>
        <NuxtLink
          v-if="member.social.github"
          :href="member.social.github"
          class="ml-2 text-gray-500"
        >
          <svg
            fill="currentColor"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="0.1"
            class="w-6 h-6"
            viewBox="0 0 20 20"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
          </svg>
        </NuxtLink>
        <NuxtLink
          v-if="member.social.forum"
          :href="member.social.forum"
          class="ml-2 text-gray-500"
        >
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
        </NuxtLink>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  member: { type: Object, required: true },
})

const getPicture = (user_id: string, file_type: string) => {
  if (file_type) {
    return '/team/' + user_id + '.' + file_type
  }
  else {
    return '/team/jaro-avatar.png'
  }
}
</script>

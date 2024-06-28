<template>
  <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center sm:text-left">
    <div class="flex-shrink-0 w-48 h-48 sm:mb-0 mb-4">
      <NuxtImg
        v-if="member.image"
        alt="team"
        width="300px"
        class="rounded-lg w-full h-full object-cover object-center"
        :src="'/team/' + member.id + '.' + member.image"
      />
      <div
        v-if="!member.image"
        class="flex justify-center w-full h-full text-gray-400 bg-gray-200 dark:text-gray-600 dark:bg-gray-900 rounded-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 16"
          class="w-[80%]"
        >
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
        </svg>
      </div>
    </div>
    <div class="flex-grow sm:pl-8 min-h-32">
      <h2 class="title-font font-medium text-lg text-gray-900 dark:text-gray-200">
        {{ member.name }}
      </h2>
      <h3 class="text-gray-500 mb-3 capitalize">
        {{ member.role }}
      </h3>
      <p class="prose">
        {{ member.description }}
      </p>
      <TeamSocial
        v-if="member.social.x || member.social.github || member.social.forum"
        class="mt-4"
        :member="member"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  member: { type: Object, required: true },
})
</script>

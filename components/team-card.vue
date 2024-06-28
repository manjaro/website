<template>
  <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center sm:text-left">
    <NuxtImg
      alt="team"
      width="300px"
      class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
      :src="getPicture(member.id, member.image)"
    />
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

const getPicture = (user_id: string, file_type: string) => {
  if (file_type) {
    return '/team/' + user_id + '.' + file_type
  }
  else {
    return '/team/jaro-avatar.png'
  }
}
</script>

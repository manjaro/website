<template>
  <section class="text-gray-600 body-font dark:text-gray-400">
    <div class="container px-5 pt-12 mx-auto">
      <div class="flex flex-col text-center w-full mb-16">
        <h1 class="text-2xl font-medium title-font mb-4 text-gray-900 dark:text-gray-200 tracking-widest">
          Core Team
        </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed">
          Manjaro is built by a community of developers and designers. The Core Team facilitates this process.
        </p>
      </div>
      <div class="flex flex-wrap -m-4">
        <div
          v-for="member of sortedTeam"
          :key="member.id"
          class="p-4 lg:w-1/2"
        >
          <TeamCard :member="member" />
        </div>
      </div>
    </div>
    <div class="lg:w-2/3 mx-auto leading-relaxed text-base text-center pt-20">
      <NuxtLink href="/team/former">
        Former team members
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import team from '~/assets/team/current.json'

useHead({
  title: 'Team' + ' – manjaro.org',
})

const sortedTeam = team.sort((a, b) => a.pos - b.pos)
</script>

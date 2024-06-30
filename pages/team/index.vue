<template>
  <section class="max-w-screen-xl mx-auto">
    <div class="mx-auto pt-12 px-4">
      <div class="flex flex-col text-center mb-10">
        <h1 class="text-3xl font-medium mb-4">
          Core Team
        </h1>
        <p class="max-w-[480px] mx-auto leading-relaxed text-gray-700 dark:text-gray-400">
          Manjaro is built by a community of developers and designers. The Core Team facilitates this process.
        </p>
      </div>
      <div class="mx-auto max-xl:max-w-[850px]">
        <div class="mx-auto flex flex-wrap">
          <div
            v-for="member of sortedTeam"
            :key="member.id"
            class="p-4 xl:w-1/2"
          >
            <TeamCard :member="member" />
          </div>
        </div>
      </div>
    </div>
    <div class="container px-5 pt-20 mx-auto flex w-full mb-12 justify-center">
      <NuxtLink href="/team/former">
        <div class="btn btn-ghost leading-relaxed font-normal tracking-wider">
          Former team members
        </div>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import team from '~/assets/team/current.json'

useHead({
  title: 'Team',
})
useServerSeoMeta({
  ogTitle: 'The Manjaro Team',
  description: 'Get to know the people behind Manjaro.',
})

const sortedTeam = team.sort((a, b) => a.pos - b.pos)
</script>

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/eslint', '@nuxtjs/tailwindcss', '@nuxt/image'],
  eslint: {
    checker: true,
    config: {
      stylistic: true,
    },
  },
})

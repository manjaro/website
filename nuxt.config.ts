// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
  ],
  eslint: {
    checker: true,
    config: {
      stylistic: true,
    },
  },
})

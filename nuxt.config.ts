// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/eslint', '@nuxtjs/tailwindcss', '@nuxt/image', '@nuxtjs/color-mode'],
  eslint: {
    checker: true,
    config: {
      stylistic: true,
    },
  },
  colorMode: {
    preference: 'system',
    dataValue: 'theme', // for daisyUI
  },
})

import type { NitroConfig } from 'nitropack'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@nuxtjs/sitemap',
    'nuxt-umami',
  ],
  site: {
    url: 'https://manjaro.org/',
    name: 'Manjaro – The Linux for People and Organizations',
  },
  sitemap: {
    strictNuxtContentPaths: true,
    exclude: ['/products/devices/**'],

  },
  eslint: {
    checker: true,
    config: {
      stylistic: true,
    },
  },
  umami: {
    id: '9f30d602-fae7-4a19-a411-0a9ed75e4ddc',
    host: 'https://umami.manjaro.org',
    autoTrack: true,
    ignoreLocalhost: true,
    domains: ['manjaro.org'],
    // customEndpoint: '/api/getdata',
  },
  colorMode: {
    preference: 'system',
    dataValue: 'theme', // for daisyUI
  },
  routeRules: {
    '/news/page/1': { redirect: { to: '/news' } },
    '/products/download': { redirect: { to: '/products', statusCode: 302 } },
    '/download': { redirect: { to: '/products', statusCode: 302 } },
  },
  hooks: {
    async 'nitro:config'(nitroConfig) { await setDownloadRedirects(nitroConfig) },
  },
})

// Creates redirects for our official downloads. These are needed by GNOME Boxes and other software depending on libosinfo.
// Links are registered at https://gitlab.com/libosinfo/osinfo-db/-/blob/4c64cef/data/os/manjaro.org/manjaro-rolling.xml.in
const setDownloadRedirects = async (nitroConfig: NitroConfig) => {
  const rules = nitroConfig!.routeRules
  const resp = await fetch('https://gitlab.manjaro.org/api/v4/projects/12597/repository/files/file-info.json/raw?ref=master')
  const isos = await resp.json()

  const add = (desktop: string) => {
    rules!['/download/' + desktop] = { redirect: { to: isos.official[desktop].image, statusCode: 302 } }
  }
  add('gnome')
  add('plasma')
  add('xfce')
}

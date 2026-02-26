<template>
  <div>
    <div class="lg:min-h-[520px] bg-primary px-4 flex">
      <div class="px-4 sm:px-10 max-w-7xl mx-auto py-12 text-white place-self-center">
        <div class="grid md:grid-cols-2 justify-center items-center gap-y-10 gap-x-14">
          <div class="max-lg:mt-8 h-full place-self-center md:order-last">
            <NuxtImg
              src="desktops.webp"
              alt="Gnome, KDE desktops"
              width="700px"
            />
          </div>
          <div>
            <h1 class="text-3xl lg:text-4xl font-bold mb-6 sm:mb-3 lg:mb-6 !leading-[45px] lg:!leading-[55px] sm:font-s">
              {{ $t('home.hero_title') }}
            </h1>
            <p class="text-base leading-relaxed tracking-wider">
              {{ $t('home.hero_subtitle') }}
            </p>
            <div class="flex flex-wrap gap-y-4 gap-x-8 mt-8">
              <NuxtLink href="/products/download/x86">
                <button class="btn lg:btn-lg flex gap-5">
                  <div>{{ $t('common.download') }}</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                  </svg>
                </button>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="px-4 sm:px-10 mt-14 md:mt-20">
      <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 lg:gap-14 xl:gap-20 place-items-center">
        <div class="md:order-last">
          <NuxtImg
            src="branch.webp"
            alt="Manjaro branches"
            width="550px"
          />
        </div>
        <div>
          <h2 class="text-2xl lg:text-3xl font-semibold mb-6">
            {{ $t('home.robust_title') }}
          </h2>
          <p class="pb-2">
            {{ $t('home.robust_p') }}
          </p>
          <i18n-t
            keypath="home.cascading_stability"
            tag="p"
          >
            <template #stability>
              <span class="font-semibold">{{ $t('home.stability') }}</span>
            </template>
          </i18n-t>
        </div>
      </div>
    </div>

    <div class="px-4 sm:px-10 pt-14 md:pt-24 xl:pt-28">
      <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 lg:gap-14 xl:gap-20 place-items-center">
        <div>
          <NuxtImg
            src="company.webp"
            alt="Skyscrapers"
            width="800px"
            class="max-h-[350px] object-cover"
          />
        </div>
        <div>
          <div>
            <h2 class="text-2xl lg:text-3xl font-semibold mb-6">
              {{ $t('home.enterprise_title') }}
            </h2>
            <p>
              {{ $t('home.enterprise_p') }}
            </p>
          </div>
          <NuxtLink href="/enterprise">
            <button class="flex items-center px-5 py-4 mt-8 btn">
              {{ $t('common.learn_more') }}
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
useHead({
  title: t('home.welcome'),
  titleTemplate: t('home.hero_title'),
})
</script>

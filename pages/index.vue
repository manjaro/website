<template>
  <div>
    <div class="lg:min-h-[560px] bg-primary px-4 sm:px-10">
      <div class="max-w-7xl w-full mx-auto py-16 text-white">
        <div class="grid lg:grid-cols-2 justify-center items-center gap-10">
          <div>
            <h1 class="md:text-5xl text-4xl font-bold mb-6 md:!leading-[55px]">
              Manjaro Linux Empowering People and
              Organizations
            </h1>
            <p class="text-base leading-relaxed">
              Manjaro takes the raw power and flexibility
              of Arch Linux and makes it more accessible to a wider audience. Manjaro gives you the freedom to customize
              your system while also providing stable foundations.
            </p>
            <div class="flex flex-wrap gap-y-4 gap-x-8 mt-8">
              <NuxtLink href="/download">
                <button
                  class="btn"
                >
                  Download
                </button>
              </NuxtLink>
            </div>
          </div>
          <div class="max-lg:mt-12 h-full">
            <NuxtImg
              src="desktops.png"
              alt="Gnome, KDE desktops"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="px-4 sm:px-10 mt-28">
      <div class="max-w-7xl w-full mx-auto grid md:grid-cols-2 gap-10 place-items-center">
        <div>
          <h2 class="md:text-4xl text-3xl font-semibold mb-6">
            Robust with Rolling Releases
          </h2>
          <p>
            Experience a combination of the latest software for your enjoyment, your development, your creation needs,
            and well-tested updates. We follow an approach of <b>cascading stability</b> to let you pick the version of
            Manjaro that fits your needs.
          </p>
        </div>
        <div class="h-full">
          <NuxtImg
            src="branch.png"
            alt="feature"
            class="h-full"
          />
        </div>
      </div>
    </div>

    <div class="px-4 sm:px-10 mt-28 py-10">
      <div class="max-w-7xl w-full mx-auto">
        <div class="grid md:grid-cols-2 items-center gap-10">
          <div class="w-full h-full">
            <NuxtImg
              src="company.jpg"
              alt="Premium Benefits"
              class="w-full h-full object-cover"
            />
          </div>
          <div>
            <div class="text-background">
              <h2 class="md:text-4xl text-3xl font-semibold mb-6">
                Enterprise Grade
              </h2>
              <p>
                Manjaro comes in different versions suitable for home but also business use. The Manjaro company provides first-class services to provide businesses with the means to make efficient use of their IT infrastructure leveraging Manjaro Linux.
              </p>
            </div>
            <NuxtLink href="/enterprise">
              <button
                class="flex items-center px-5 py-4 mt-8 btn"
              >
                Learn More
              </button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Manjaro' + ' – manjaro.org',
})
</script>

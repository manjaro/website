<template>
  <div>
    <div class="lg:min-h-[520px] bg-primary px-4 flex">
      <div class="px-4 sm:px-10 max-w-7xl mx-auto py-12 text-white place-self-center">
        <div class="grid lg:grid-cols-2 justify-center items-center gap-14">
          <div class="max-lg:mt-12 h-full place-self-center lg:order-last">
            <NuxtImg
              src="desktops.png"
              alt="Gnome, KDE desktops"
              width="700px"
            />
          </div>
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
        </div>
      </div>
    </div>

    <div class="px-4 sm:px-10 mt-14 md:mt-20">
      <div class="max-w-7xl w-full mx-auto grid md:grid-cols-2 gap-10 place-items-center">
        <div class="h-full md:order-last">
          <NuxtImg
            src="branch.png"
            alt="feature"
            width="300px"
            class="h-full"
          />
        </div>
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
      </div>
    </div>

    <div class="px-4 sm:px-10 mt-14 md:mt-28">
      <div class="max-w-7xl w-full mx-auto grid md:grid-cols-2 gap-10 place-items-center">
        <div class="w-full h-full">
          <NuxtImg
            src="company.jpg"
            height="500px"
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
</template>

<script setup lang="ts">
useHead({
  title: 'Manjaro' + ' – manjaro.org',
})
</script>

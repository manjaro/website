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
              Manjaro Linux Empowering People and Organizations
            </h1>
            <p class="text-base leading-relaxed tracking-wider">
              Taking the raw power and flexibility of Arch Linux and making it more accessible for a greater audience.
            </p>
            <div class="flex flex-wrap gap-y-4 gap-x-8 mt-8">
              <NuxtLink href="/download">
                <button
                  class="btn lg:btn-lg flex gap-5"
                >
                  <div>Download</div>
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
      <div class="max-w-7xl w-full mx-auto grid md:grid-cols-2 gap-10 place-items-center">
        <div class="h-full md:order-last">
          <NuxtImg
            src="branch.webp"
            alt="Manjaro branches"
            width="300px"
            class="h-full"
          />
        </div>
        <div>
          <h2 class="md:text-4xl text-3xl font-semibold mb-6">
            Robust with Rolling Releases
          </h2>
          <p class="pb-2">
            Experience a combination of the latest software for your enjoyment, your development, your creation needs,
            and well-tested updates.
          </p>
          <p>
            We follow an approach of <span class="font-semibold">cascading stability</span> to let you pick the version of
            Manjaro that fits your needs.
          </p>
        </div>
      </div>
    </div>

    <div class="px-4 sm:px-10 mt-14 md:mt-28">
      <div class="max-w-7xl w-full mx-auto grid md:grid-cols-2 gap-10 place-items-center">
        <div class="w-full h-full">
          <NuxtImg
            src="company.webp"
            alt="Skyscrapers"
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
              Manjaro comes in different versions suitable for home but also business use. We offer first-class services to provide businesses with the means to make efficient use of their IT infrastructure leveraging Manjaro Linux.
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

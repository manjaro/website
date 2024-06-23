<template>
  <section>
    <div class="container px-5 pt-12 mx-auto">
      <div class="flex flex-col text-center w-full mb-16">
        <h1 class="text-3xl font-medium mb-4">
          Partners and Sponsors
        </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-gray-700 dark:text-gray-400">
          We are grateful for the partnerships with the following companies.
        </p>
      </div>
      <div class="flex flex-col items-center pb-20">
        <h2 class="text-lg tracking-wide pb-10">
          Hardware Partners
        </h2>
        <div class="flex flex-wrap gap-10 justify-center text-gray-600 dark:text-gray-400">
          <div class="max-w-80 border rounded-2xl overflow-hidden">
            <NuxtLink
              href="https://slimbook.com/"
              target="_blank"
            >
              <figure class="pt-10 pb-6 px-14 h-40 flex place-items-center bg-gray-100 dark:bg-gray-200">
                <NuxtImg
                  class="object-scale-down"
                  src="/partners/slimbook.webp"
                  width="400px"
                  alt="SLIMBOOK logo"
                />
              </figure>
            </NuxtLink>
            <div class="p-5 text-sm space-y-2">
              <p>We are SLIMBOOK, your best and most reliable source of Linux hardware out there! All our models are fully configurable in storage and RAM size and even CPU in most models, name your needs and we'll have you covered. We take special pride in our excellent pre and after sales support team that will solve all your doubts and issues in no time, that is, if there are any issues at all.</p>
              <p>Manjaro is a state of the art Linux distribution with a talented group behind it, we just love how well optimized this masterpiece of software is and how our computers breezes through it. This alone and our love for GNU/Linux calls for a strong partnership with Manjaro to assist and help them deliver an even better end user experience and increase their visibility on this crowded Linux ecosystem.</p>
            </div>
          </div>
          <div class="max-w-80 border rounded-2xl overflow-hidden">
            <NuxtLink
              href="https://orangepi.com/"
              target="_blank"
            >
              <figure class="pt-10 pb-6 px-14 h-40 flex place-items-center bg-gray-100 dark:bg-gray-200">
                <NuxtImg
                  class="object-scale-down"
                  src="/partners/orangepi.webp"
                  width="400px"
                  alt="Orange Pi logo"
                />
              </figure>
            </NuxtLink>
            <div class="p-5 text-sm space-y-2">
              <p>Orange Pi is an open source product brand of Shenzhen Xunlong Software Co., Ltd, which focuses on providing open source hardware, open source software and OEM/ODM services for individuals and enterprises worldwide. Orange Pi's products have high performance and excellent experience.</p>
              <p>Orange Pi not only produces and sells open source hardware and open source software, but also attaches importance to the service and dissemination of supporting courses and the community communication and exchange of users.</p>
              <p>The partnership with Manjaro is an important step in our continued exploration of open source, through which we will bring new operational experiences to our users.</p>
            </div>
          </div>
          <div class="max-w-80 border rounded-2xl overflow-hidden">
            <NuxtLink
              href="https://starlabs.systems/?partner=manjaro"
              target="_blank"
            >
              <figure class="pt-10 pb-6 px-14 h-40 flex place-items-center bg-gray-100 dark:bg-gray-200">
                <NuxtImg
                  class="object-scale-down"
                  src="/partners/starlabs.webp"
                  width="400px"
                  alt="Star Labs logo"
                />
              </figure>
            </NuxtLink>
            <div class="p-5 text-sm space-y-2">
              <p>Our partnership with Manjaro is beneficial not to just us, but our users as well. With our aligned interest of making open-source software more accessible, the combination of Manjaro and Star Labs hardware creates an unheard-of experience - seamless access to cutting-edge hardware and software. Manjaro is eager and dedicated to continually improving and adding more features, and continue to excel with the delivery of these. We’ve worked together and will continue to do so, for many hardware related aspects.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center pb-20">
        <h2 class="text-lg tracking-wide pb-10">
          Infrastructure Support
        </h2>
        <div class="flex flex-wrap gap-10 justify-center text-gray-600 dark:text-gray-400">
          <div class="max-w-80 border rounded-2xl overflow-hidden">
            <NuxtLink
              href="https://cdn77.com"
              target="_blank"
            >
              <figure class="pt-10 pb-6 px-14 h-40 flex place-items-center bg-gray-100 dark:bg-gray-200">
                <NuxtImg
                  class="object-scale-down"
                  src="/partners/cdn77.webp"
                  width="400px"
                  alt="CDN77 logo"
                />
              </figure>
            </NuxtLink>
            <div class="p-5 text-sm space-y-2">
              <p>CDN77’s network is a powerful mixture of strategically located PoPs and cache servers deployed directly inside the networks of every major and hard-to-reach ISP. The network topology consists of upstreams to 15 TIER 1 transit providers, more than 300 PNIs, and direct local access to 3000+ ISPs. The massive network scale, together with cutting-edge video engineering and stellar client service, make CDN77 a CDN of choice for many highly trafficked global websites and applications, such as Udemy, ESL Gaming, European Space Agency and many others.</p>
              <p>We are happy to support Manjaro by offering most of their download offerings and packages through our global network.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
useHead({
  title: 'Partners' + ' – manjaro.org',
})
</script>

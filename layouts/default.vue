<template>
  <div class="min-h-screen flex flex-col bg-bgbright dark:bg-bgdark dark:text-white">
    <NavbarItem />
    <div class="flex-grow">
      <slot />
    </div>
    <FooterItem />
  </div>
</template>

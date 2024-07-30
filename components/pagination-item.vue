<template>
  <div
    v-if="ttlPage > 1"
    class="flex p-5 justify-center"
  >
    <div class="join">
      <button
        v-for="page in pageNumbers"
        :key="page"
        :class="{ 'btn-primary': page === currentPage, 'btn-disabled': page === '...' }"
        class="join-item btn no-animation"
        @click="handlePageChange(page)"
      >
        {{ page }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ totalItem?: number, itemPerPage?: number }>(), {
  totalItem: 1,
  itemPerPage: 1,
})

const currentPage = defineModel({ type: Number, default: 1 })
const ttlPage = computed(() => Math.ceil(props.totalItem / props.itemPerPage))

const pageNumbers = computed(() => {
  if (ttlPage.value > 5) {
    if (currentPage.value < 3) {
      return [1, 2, 3, '...', ttlPage.value]
    }
    else if (currentPage.value + 1 >= ttlPage.value) {
      return [1, '...', ttlPage.value - 2, ttlPage.value - 1, ttlPage.value]
    }
    return [1, '...', currentPage.value - 1, currentPage.value, currentPage.value + 1, '...', ttlPage.value]
  }
  else {
    return Array.from({ length: ttlPage.value }, (_, i) => i + 1)
  }
})

const handlePageChange = (page: number | string) => {
  if (typeof page === 'number') {
    currentPage.value = page
  }
}
</script>

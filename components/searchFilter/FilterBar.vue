<template>
    <div v-if="categories.length > 1" class="w-full flex max-w-[1200px] flex-wrap gap-1 mb-10">
        <p v-for="(category, index) in categories" ref="filterNames" :key="category"
            :class="{ 'bg-[#00b14f]/10 tc-green': activeFilter[index] }"
            class="transition-all duration-300 ease-in-out lg:text-[14px] xl:text-base font-medium hover:bg-green-100 hover:text-green-600 cursor-pointer p-2 rounded"
            @click="selectFilter(index, category)">
            <font-awesome v-if="index == 0" icon="fa-solid fa-fire" />
            {{ category.toUpperCase() }}
        </p>
    </div>
</template>

<script setup>
const categoryMeals   = useLocalStorage('categoryMeals', () => { })
const selected_filter = useLocalStorage('selected_filter', () => 'Hot Selling')
const filterNames     = ref([])
const activeFilter    = ref([])
const categories      = computed(() => {
    return ['Hot Selling', ...(categoryMeals.value ? Object.values(JSON.parse(categoryMeals.value)).map(item => item?.name || 'Unknown') : [])]
})

watchEffect(() => {
    if (filterNames.value?.length > 0) {
        activeFilter.value = [true, ...new Array(filterNames.value.length - 1).fill(false)]
    }
})

const selectFilter = (index, filter) => {
      // Reset all filters to false
    activeFilter.value        = activeFilter.value.map(() => false);
    activeFilter.value[index] = true
    selected_filter.value     = filter
}
</script>

<style scoped></style>
<template>
    <div v-if="categories.length > 1" class="w-full flex gap-1 mb-10">
        <p ref="filterNames" v-for="(category, index) in categories" :key="category"
            :class="{ 'bg-[#00b14f]/10 tc-green': activeFilter[index] }"
            class="transition-all duration-300 ease-in-out text-[13px] tf-spartan font-medium hover:bg-[#00b14f]/10 hover:text-[var(--green-color)] cursor-pointer p-2 rounded"
            @click="selectFilter(index, category)">
            <font-awesome v-if="index == 0" icon="fa-solid fa-fire" />
            {{ category.toUpperCase() }}
        </p>
    </div>
</template>

<script setup>
const saved = useState('saved', ()=> false)
const categoryMeals = useState('categoryMeals', () => { })
const selected_filter = useState('selected_filter', ()=>'Hot Selling')
const filterNames = ref([])
const activeFilter = ref([])
const categories = computed(() => {
    return ['Hot Selling', ...Object.values(categoryMeals.value ?? []).map(item => item.name)] ?? []
})

watchEffect(()=>{
    if(filterNames.value.length > 0){
        activeFilter.value = [true, ...new Array(filterNames.value.length - 1).fill(false)]
    } 
})

const selectFilter = (index, filter) => {
    // Reset all filters to false
    activeFilter.value = activeFilter.value.map(item => item = false);
    activeFilter.value[index] = true
    selected_filter.value = filter
}
</script>

<style scoped></style>
<template>
    <div class="grid grid-cols-4 w-full content-center gap-8 pb-5">
        <div v-if="isLoading" class="col-span-4 flex  items-center justify-center">
            <img src="https://order.makimuraramen.com/assets/loading-C8RNs0gu.gif" alt=""
                class="object-contain w-[150px]">
        </div>
        <div v-for="meal in meals" :key="meal.name" class="h-[360px]">
            <div
                class="group relative rounded-lg shadow-2xl h-full hover:-top-1 p-2 hover:pt-0 flex flex-col items-center text-center justify-between border gap-2 transition-all duration-100 ease-in-out">
                <div v-if="selected_filter == 'Hot Selling'" class="absolute right-0 pr-2 flex space-x-1 tc-green">
                    <font-awesome icon="fa-solid fa-fire" />
                    <font-awesome icon="fa-solid fa-fire" />
                    <font-awesome icon="fa-solid fa-fire" />
                </div>
                <div class="w-full h-[192px] flex items-center justify-center overflow-hidden">
                    <img class="h-full object-contain transform group-hover:scale-110 transition-all duration-100 ease-in-out"
                        :src="meal.image_small ?? 'https://order.makimuraramen.com/assets/pic1-BJG-xmCB.jpg'" alt="">
                </div>
                <h1 class="font-bold tf-spartan text-[#00b14f] hover:text-[#00b14f]/70 cursor-pointer" @click="navigateTo(`/product-detail/${meal.slug}`)">{{ meal.name }}</h1>
                <h1 class="font-bold tf-spartan">₱{{ meal.price }}</h1>
                <button class="w-full rounded-xl bg-main p-3 text-white tf-bebas btn-slide font-bold"
                    @click="increaseOrder(meal.name, meal.price, meal.name, meal.image_small)"><span><span>Add to cart</span></span></button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useOrder } from '#imports';
const { increaseOrder } = useOrder()

const hotSelling = useState('hotSelling', () => []);
const selected_filter = useState('selected_filter', () => 'Hot Selling')
const branchGlobal = useState('branch', () => null)
const dateGlobal = useState('dated', () => null)
const intervalGlobal = useState('interval', () => null)
const meals = ref([])
const isLoading = ref(true)
let abortController = null

watchEffect(async () => {
    meals.value = [];

    // Cancel the previous fetch request if one exists
    if (abortController) {
        abortController.abort()  // Abort the previous request
    }

    // Create a new AbortController to cancel this request later if needed
    abortController = new AbortController()

    // Start the loading state
    isLoading.value = true;

    try {
        // Perform the fetch request
        let req;

        if (selected_filter.value === 'Hot Selling' && Object.values(hotSelling.value ?? []).length > 0) {
            meals.value = Object.values(hotSelling.value);
            isLoading.value = false;
        } else if (selected_filter.value !== 'Hot Selling') {
            // Make the API request using the AbortController signal
            req = await $fetch(`https://bio.makimuraramen.com/api/products/branch/${branchGlobal.value}?category=${selected_filter.value.toLowerCase().split(' ').join('-')}&date=${dateGlobal.value}&branch_interval_id=${intervalGlobal.value}`, {
                signal: abortController.signal  // Pass the abort signal to the fetch request
            });
            isLoading.value = false;
            meals.value = Object.values(req ?? []);
        }


    } catch {
        // Silently handle fetch abort errors
    }
});
</script>

<style scoped></style>
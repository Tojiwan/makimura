<template>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  max-w-[1200px] content-center gap-8 pb-5">
        <div v-if="isLoading" class="col-span-4 flex items-center justify-center">
            <img src="https://order.makimuraramen.com/assets/loading-C8RNs0gu.gif" alt=""
                class="object-contain w-[150px]">
        </div>
        <div v-for="meal in meals" :key="meal.name" class="h-[390px]">
            <div
                class="group relative rounded-lg shadow-2xl h-full hover:-top-2 pt-3 p-5 xl:p-10 flex flex-col items-center text-center justify-between border gap-2 transition-all duration-100 ease-in-out">
                <div v-if="selected_filter == 'Hot Selling'" class="absolute right-0 pr-2 flex space-x-1 tc-green">
                    <font-awesome icon="fa-solid fa-fire" />
                    <font-awesome icon="fa-solid fa-fire" />
                    <font-awesome icon="fa-solid fa-fire" />
                </div>
                <!-- Updated image container -->
                <div class="w-full h-[220px] flex items-center justify-center relative overflow-hidden">
                    <img class="h-full object-contain transform group-hover:scale-110 group-hover:z-10 transition-transform duration-300 ease-in-out"
                        :src="meal.image_small ?? 'https://order.makimuraramen.com/assets/pic1-BJG-xmCB.jpg'" alt="">
                </div>
                <div class="flex flex-col items-center gap-2">
                    <h1 class="font-bold tf-spartan text-xl text-main hover:text-main/70 cursor-pointer"
                        @click="navigateTo(`/product-detail/${meal.slug}`)">{{ meal.name }}</h1>
                    <h1 class="font-bold tf-spartan">₱{{ meal.price }}</h1>
                </div>
                <button class="w-full btn-slide rounded-xl bg-main/95 hover:bg-main p-3 text-white text-base xl:text-sm font-medium"
                    @click="increaseOrder(meal.name, meal.price, meal.name, meal.image_small)">
                    <span><span>Add to cart</span></span>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useOrder } from '#imports';
const { increaseOrder } = useOrder()

const hotSelling      = useLocalStorage('hotSelling', []);
const selected_filter = useLocalStorage('selected_filter', 'Hot Selling')
const branchGlobal    = useLocalStorage('branch', null)
const dateGlobal      = useLocalStorage('dated', null)
const intervalGlobal  = useLocalStorage('interval', null)
const meals           = ref([])
const isLoading       = ref(true)
let   abortController = null

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
            meals.value     = Object.values(hotSelling.value);
            isLoading.value = false;
        } else if (selected_filter.value !== 'Hot Selling') {
              // Make the API request using the AbortController signal
            req = await $fetch(`https://bio.makimuraramen.com/api/products/branch/${branchGlobal.value}?category=${selected_filter.value.toLowerCase().split(' ').join('-')}&date=${dateGlobal.value}&branch_interval_id=${intervalGlobal.value}`, {
                signal: abortController.signal  // Pass the abort signal to the fetch request
            });
            isLoading.value = false;
            meals.value     = Object.values(req ?? []);
        }


    } catch {
          // Silently handle fetch abort errors
    }
});
</script>

<style scoped></style>
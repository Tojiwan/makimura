<template>
    <div class="flex flex-col">
        <button class=" absolute top-4 left-4 z-10 bg-main text-white rounded-full w-10 h-10 flex items-center justify-center
            shadow-lg" @click="navigateTo('/payment')">
            <font-awesome :icon="['fas', 'x']" />
        </button>
        <img class="border-b object-cover h-40 w-full" :src="meal_details.image_small" alt="">
        <section class="p-4 space-y-4">
            <div class="flex justify-between font-bold">
                <h1>{{ meal_details.name }}</h1>
                <h1>{{ meal_details.price }}</h1>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <hr>
            <div class="flex justify-between">
                <h1 class="font-bold">Note to Makimura</h1>
                <p class="rounded-full bg-gray-200 px-2">Optional</p>
            </div>
            <textarea id="" name=""
                class="w-full border rounded-lg p-3 outline-0 focus:ring focus:ring-1 ring-[#00b14f] focus:border-[#00b14f]"
                placeholder="Add your request (subject to Makimura's discretion)"/>
            <div class="w-full flex items-center justify-center">
                <div class="rounded-full flex items-center justify-between h-8 w-[150px]">
                    <button class="bg-main/70 rounded-full w-8 h-8 flex items-center justify-center"
                        @click.stop="count > 0 ? count-- : count = count">
                        <font-awesome icon="fa-solid fa-minus" />
                    </button>

                    <span class="font-semibold">{{ count }}</span>

                    <button class="bg-main rounded-full w-8 h-8 flex items-center justify-center" @click.stop="count++">
                        <font-awesome icon="fa-solid fa-plus" style="color: #ffffff;" />
                    </button>
                </div>
            </div>
        </section>

        <!-- remove/update button -->
        <div
            class="flex items-center justify-center p-3 px-5 absolute bottom-0 w-full bg-white border rounded-t-2xl shadow-[rgba(0,0,0,0.2)_0px_0px_10px_1px]">
            <button v-if="count === 0" class="p-3 w-full rounded-full text-white font-bold bg-red-500"
                @click="remove_order">Remove</button>
            <button v-else class="p-3 w-full rounded-full text-white font-bold bg-[#1FA530]"
                @click="update_order">Update Item</button>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
definePageMeta({
  layout: false
});
const route         = useRoute()
const selected_meal = route.params.meal
const orders        = useLocalStorage('order', () => []);
const hotSelling    = useLocalStorage('hotSelling', () => []);
const count         = ref(0)
const meal_details  = computed(() => {
    return { ...Object.values(orders.value).find(item => item.name == selected_meal.split('-').join(' ')), ...Object.values(hotSelling.value).find(item => item.slug == selected_meal.toLowerCase()) }
})

watchEffect(() => {
    if (meal_details.value) {
        count.value = meal_details.value.count
    }
})

const update_order = () => {
    orders.value[meal_details.value.name].count = count.value
    navigateTo('/payment')
}
const remove_order = () => {
    const { [meal_details.value.name]: removed, ...newArray } = orders.value
    orders.value                                              = newArray
    navigateTo('/payment')
}
</script>

<style scoped></style>
<template>
    <div class="tf-spartan mb-20">
        <Banner :title="'Product Detail'" />
        <section class="px-6 lg:px-10 xl:px-8 xl:mx-24 mt-20 bg-white flex">
            <img :src="meal.image_small" alt="">
            <div class="flex flex-col gap-10">
                <h1 class="text-4xl tf-bebas font-bold">{{ meal.name }}</h1>
                <div v-html="meal.description" />
                <div class="grid grid-cols-[7rem,1fr] gap-4">
                    <div class="flex flex-col">
                        Price
                        <p class="text-xl">₱929.00</p>
                    </div>
                    <div class="flex flex-col">
                        Quantity
                        <OrderAddV2 :meal="meal" />
                    </div>
                </div>
                <div class="flex gap-3">
                    <button class="p-3 rounded-lg button--calypso border-0" style=""
                        @click.stop="increaseOrder(meal.name, meal.price, meal.name, meal.image_small)">
                        <span class="flex gap-3 items-center">Add To Cart
                            <font-awesome :icon="['fas', 'bag-shopping']" />
                        </span>
                    </button>
                    <button class="p-3 rounded-lg button--calypso !border border-[var(--green-color)]" style="
                        --button-bg: white;
                        --circle-color: var(--green-color);
                        --t-color: var(--green-color);
                        "
                        @click.stop="increaseOrder(meal.name, meal.price, meal.name, meal.image_small); navigateTo('/payment')">
                        <span class="flex gap-3 items-center">Buy now <font-awesome
                                :icon="['fas', 'cart-shopping']" /></span>
                    </button>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useOrder } from '#imports';
const { increaseOrder } = useOrder();
const route             = useRoute();
const meal              = ref({});
onMounted(async () => {

    meal.value = await $fetch(
        `https://bio.makimuraramen.com/api/product/${route.params.meal}`
    ).catch((err)=>{
        if(err.response.status === 404){
            throw createError({
                statusCode   : 404,
                statusMessage: 'Product not found',
                fatal        : true
            })
        }
        
    })
});
</script>

<style lang="scss" scoped></style>

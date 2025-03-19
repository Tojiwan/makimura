<template>
    <div>
        <Banner :title="'Product Detail'" />
        <section class="px-6 lg:px-10 xl:px-8 xl:mx-24 mt-20 bg-white flex">
            <img :src="meal.image_small" alt="">
            <div class="flex flex-col">
                <h1 class="text-3xl tf-spartan">{{ meal.name }}</h1>
                <p>{{ meal.name }}</p>
                <div class="grid grid-cols-2">
                    <div class="flex flex-col">
                        <h2>Price</h2>
                        <p>₱929.00</p>
                    </div>
                    <div class="flex flex-col">
                        <h2>Quantity</h2>
                        <OrderAddV2 :meal="meal" />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
const route = useRoute()
const meal = ref({})
onMounted(async()=>{
    meal.value = await $fetch(`https://bio.makimuraramen.com/api/product/${route.params.meal}`)
})
</script>

<style lang="scss" scoped>

</style>
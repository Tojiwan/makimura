<template>
    <Banner :title="'Shop Cart'" />
    <div class="flex w-full items-center justify-center">
        <div class=" w-[750px] py-[100px] bg-white">
            <h1 class="font-bold text-xl tf-bebas flex">Cart<span class="text-main">[{{ count }}]</span></h1>
            <div class=" max-h-[500px] lg:max-h-[650px] overflow-y-auto">
                <div v-for="order in orders" :key="order.name" class="border-b p-5 gap-10 flex relative">
                    <div
                        class="absolute right-5 bg-main h-[25px] w-[25px] text-white flex items-center justify-center rounded-lg cursor-pointer">
                        <font-awesome :icon="['fas', 'x']" @click="remove_order(order.name)" />
                    </div>
                    <img :src="order.img ?? 'https://order.makimuraramen.com/assets/pic1-BJG-xmCB.jpg'" alt=""
                        class="w-[80px] h-[80px]">
                    <div class="flex flex-col justify-evenly w-full">
                        <h1 class="text-base font-bold tf-bebas ">{{ order.name }}</h1>
                        <div class="flex justify-between">
                            <OrderAddV2 :meal="order" />
                            <p class="mt-auto text-lg tf-bebas ">₱{{ (order.price * order.count).toLocaleString() }}.00</p>
                        </div>
                    </div>
                </div>
            </div>
            <h1 class="font-bold tf-bebas">BILL DETAILS</h1>
            <div class="flex justify-between">
                <p class="text-base">item total</p>
                <p class="text-base">₱{{ total_price.toLocaleString() }}.00</p>
            </div>
            <hr class="my-2">
            <div class="flex justify-between">
                <h6 class="font-bold text-lg tf-bebas">TOTAL</h6>
                <p class="text-base">₱{{ total_price.toLocaleString() }}.00</p>
            </div>
            <button class="button--calypso w-full bg-main text-white p-3 my-2 font-bold rounded-lg"
                @click="navigateTo('/payment')"><span><span>Order Now</span></span></button>
        </div>
    </div>
</template>

<script setup>
const isMobile = useMediaQuery('(max-width: 768px)')

watchEffect(()=>{
    if(isMobile.value) navigateTo('/payment')
})

const orders = useLocalStorage('order', {});
const count = computed(() => {
    return Object.values(orders.value).length;
});
const total_price = computed(() => {
    if (Object.values(orders.value).length) {
        return Object.values(orders.value ?? []).map(item => item.price * item.count).reduce((sum, item) => sum + item)
    }
    return 0
})
const remove_order = (meal) => {
    const { [meal]: _, ...newArray } = orders.value
    orders.value = newArray
}
</script>

<style scoped></style>
<template>
    <Banner :title="'Shop Cart'" />
    <div class="flex justify-center items-center flex-col">
        <div class="px-6 lg:py-[100px] lg:px-10 xl:px-8 xl:mx-24 pt-0 bg-white flex flex-col  justify-center w-[50%]">
            <h1 class="font-bold text-xl tf-spartan">Cart({{ count }})</h1>
            <div class="max-h-[500px] lg:max-h-[650px] overflow-y-auto">
                <div v-for="order in orders" :key="order.name" class="border-b p-5 flex relative">
                    <div class="absolute right-5 bg-main h-[25px] w-[25px] text-white flex items-center justify-center rounded-lg cursor-pointer">
                        <font-awesome :icon="['fas', 'x']" @click="remove_order(order.name)"/>
                    </div>
                    <img :src="order.img ?? 'https://order.makimuraramen.com/assets/pic1-BJG-xmCB.jpg'" alt="" class="w-[80px] h-[80px]">
                    <div class="flex flex-col justify-evenly w-full">
                        <h1 class="tf-spartan font-bold">{{ order.name }}</h1>
                        <div class="flex justify-between">
                            <OrderAddV2 :meal="order"/>
                            <p>₱{{ (order.price*order.count).toLocaleString() }}.00</p>
                        </div>
                    </div>
                </div>
            </div>
            <h1 class="font-bold text-xl tf-spartan">BILL DETAILS</h1>
            <div class="flex justify-between">
                <p>item total</p>
                <p>₱{{ total_price.toLocaleString() }}.00</p>
            </div>
            <hr class="my-2">
            <div class="flex justify-between">
                <p class="font-bold text-lg tf-spartan">TOTAL</p>
                <p>₱{{ total_price.toLocaleString() }}.00</p>
            </div>
            <button @click="navigateTo('/payment')" class=" w-full bg-main text-white p-3 my-2 font-bold rounded-lg"><span><span>Order Now</span></span></button>
        </div>
    </div>
</template>

<script setup>
const orders = useState('order', () => ({}));
const count = computed(() => {
  return Object.values(orders.value).length;
});
const total_price = computed(()=>{
    if(Object.values(orders.value).length){
        return Object.values(orders.value ?? []).map(item => item.price*item.count).reduce((sum,item)=> sum+item)
    }
    return 0
})
const remove_order = (meal) => {
    const newArray = { ...orders.value }
    delete newArray[meal]
    orders.value = newArray
}
</script>

<style scoped></style>
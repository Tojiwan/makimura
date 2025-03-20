<template>
    <div
        class="text-black absolute top-[132%] cursor-[unset] right-0 border shadow-2xl z-50 bg-white max-h-[400px] w-[350px] rounded-lg flex flex-col">
        <div class="overflow-y-auto grow">
            <div v-for="order in orders" :key="order.name" class="border-b p-5 flex relative">
                <div class="absolute right-5 bg-main h-[25px] w-[25px] text-white flex items-center justify-center rounded-lg cursor-pointer"
                    @click="remove_order(order.name)">
                    <font-awesome :icon="['fas', 'x']" />
                </div>
                <img :src="order.img ?? 'https://order.makimuraramen.com/assets/pic1-BJG-xmCB.jpg'" alt=""
                    class="w-[80px] h-[80px] mr-3">
                <div class="flex flex-col justify-evenly w-full">
                    <h1 class="tf-spartan font-bold">{{ order.name }}</h1>
                    <div class="flex justify-between w-[80%]">
                        <p class="tf-spartan">₱{{ order.price }}</p>
                        <p class="tf-spartan">x{{ order.count }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="p-2">
            <button class="w-full bg-main p-2 text-white rounded-lg "
                @click="navigateTo('/cart'); isCartOpen = !isCartOpen">View Cart</button>
        </div>
    </div>
</template>

<script setup>
const orders = useState('order', () => ({}));
const remove_order = (meal) => {
    const { [meal]: _, ...newArray } = orders.value;
    orders.value = newArray;
}
const isCartOpen = useState('isCartOpen', () => false)
</script>

<style scoped></style>
<template>
    <transition name="slide-up">
        <div v-if="count && price" class="fixed bottom-0 flex w-full p-5 bg-white">
            <NuxtLink to="/payment"
                class="flex justify-between p-3 space-x-2 text-base font-bold text-white rounded-full bg-main grow ">
                <p>Basket - {{ count }} Items</p>
                <p>₱{{ price }}.00</p>
            </NuxtLink>
            <div v-if="isHeaderFixed" class="w-[50px] h-[50px]"/>
        </div>
    </transition>
</template>

<script setup>
import { NuxtLink } from '#components';
import { useScrollHandler } from '#imports';

const { isHeaderFixed } = useScrollHandler()
const order = useLocalStorage('order', []);
const total_price = useState('total_price', () => 0)
const count = computed(() => {
    return Object.values(order.value).reduce((sum, item) => sum + (item.count || 0), 0);
});
const price = computed(() => {
    return Object.values(order.value).reduce((total, item) => parseInt(total) + parseInt(parseInt(item.price) * parseInt(item.count) || 0), 0).toLocaleString('en-US');
});

watchEffect(() => {
    total_price.value = Object.values(order.value).reduce((total, item) => parseInt(total) + parseInt(parseInt(item.price) * parseInt(item.count) || 0), 0);
});
</script>


<style scoped></style>
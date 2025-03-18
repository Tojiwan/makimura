<template>
    <transition name="slide-up">
        <div v-if="count && price" class="fixed bottom-0 w-full bg-white p-5">
            <NuxtLink to="/payment" class="bg-main text-white font-bold flex justify-between rounded-full p-3">
                <p>Basket - {{ count }} Items</p>
                <p>₱{{ price }}.00</p>
            </NuxtLink>
        </div>
    </transition>
</template>

<script setup>
import { NuxtLink } from '#components';

const order = useState('order', () => []);
const total_price = useState('total_price', () => 0)
const count = computed(() => {
    return Object.values(order.value).reduce((sum, item) => sum + (item.count || 0), 0);
});
const price = computed(() => {
    total_price.value = Object.values(order.value).reduce((total, item) => parseInt(total) + parseInt(parseInt(item.price) * parseInt(item.count) || 0), 0).toLocaleString('en-US');
    return total_price.value
})
</script>


<style scoped></style>
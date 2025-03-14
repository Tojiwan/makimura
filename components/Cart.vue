<template>
    <transition name="slide-up">
        <div v-if="count && price" class="fixed bottom-0 w-full bg-white p-5">
            <div class="bg-[#EE2737] text-white font-bold flex justify-between rounded-full p-3">
                <p>Basket - {{ count }} Items</p>
                <p>₱{{ price }}</p>
            </div>
        </div>
    </transition>
</template>

<script setup>
const order = useState('order', () => []);
const count = computed(() => {
    return Object.values(order.value).reduce((sum, item) => sum + (item.count || 0), 0);
});
const price = computed(() => {
    return Object.values(order.value).reduce((total, item) => parseInt(total) + parseInt(parseInt(item.price) * parseInt(item.count) || 0), 0);
})
</script>


<style scoped>
/* Transition for sliding up */
.slide-up-enter-active,
.slide-up-leave-active {
    transition: transform 0.3s ease-in-out, opacity 0.3s;
}

.slide-up-enter-from,
.slide-up-leave-to {
    transform: translateY(100%);
    opacity: 0;
}

.slide-up-enter-to,
.slide-up-leave-from {
    transform: translateY(0);
    opacity: 1;
}
</style>
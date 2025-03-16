<template>
    <transition name="slide-up">
        <div v-if="count && price" class="fixed bottom-0 w-full bg-white p-5">
            <div class="bg-[#EE2737] text-white font-bold flex justify-between rounded-full p-3">
                <p>Basket - {{ count }} Items</p>
                <p>₱{{ price }}.00</p>
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
    return Object.values(order.value).reduce((total, item) => parseInt(total) + parseInt(parseInt(item.price) * parseInt(item.count) || 0), 0).toLocaleString('en-US');
})
</script>


<style scoped>
</style>
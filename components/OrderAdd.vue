<template>
    <div>
        <button v-if="order.some(item => meal.name in item)" @click="decreaseOrder(meal.name)"
            class="bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center">
            <font-awesome icon="fa-solid fa-minus" style="color: #000;" />
        </button>

        <span v-if="order.some(item => meal.name in item)" class="font-semibold">{{order.find(item => meal.name in
            item)[meal.name] }}</span>

        <button @click="increaseOrder(meal.name)"
            class="bg-[#EE2737] rounded-full w-8 h-8 flex items-center justify-center">
            <font-awesome icon="fa-solid fa-plus" style="color: #ffffff;" />
        </button>
    </div>
</template>

<script setup>
import { useOrder } from '#imports';
const { increaseOrder, decreaseOrder } = useOrder()

const { meal } = defineProps(['meal'])
const order = useState('order', () => [])
</script>

<style lang="scss" scoped></style>
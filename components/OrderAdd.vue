<template>
    <div @click="countClicked()" class="rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer h-10"
        :class="[order.some(item => meal.name in item) ? 'border rounded-full ' : '', showBorder ? 'bg-white w-[100px]' : 'bg-[#EE2737] text-white w-10']">
        <button v-if="showBorder" @click="decreaseOrder(meal.name)"
            class="bg-gray-300 rounded-full w-full h-full flex items-center justify-center">
            <font-awesome icon="fa-solid fa-minus" style="color: #000;" />
        </button>

        <span v-if="order.some(item => meal.name in item)" class="font-semibold">{{order.find(item => meal.name in
            item)[meal.name].count}}</span>
        <span v-else-if="showBorder" class="font-semibold">0</span>

        <button v-if="showBorder || !order.some(item => meal.name in item)"
            @click="increaseOrder(meal.name, meal.price, meal.name); addClicked()"
            class="bg-[#EE2737] rounded-full w-full h-full flex items-center justify-center">
            <font-awesome icon="fa-solid fa-plus" style="color: #ffffff;" />
        </button>
    </div>
</template>

<script setup>
import { useOrder } from '#imports';
const { increaseOrder, decreaseOrder } = useOrder()

const { meal } = defineProps(['meal'])
const order = useState('order', () => [])

const showBorder = ref(false)
let time
let delay = 2500
const addClicked = () => {
    showBorder.value = true
    clearTimeout(time)
    time = setTimeout(() => {
        showBorder.value = false
    }, delay);
}

const countClicked = () => {
    showBorder.value = true
    clearTimeout(time)
    time = setTimeout(() => {
        showBorder.value = false
    }, delay);
}
</script>

<style lang="scss" scoped></style>
<template>
    <div @click="showTempBorder"
        class="rounded-full flex items-center justify-center transition-width duration-300 cursor-pointer h-10" :class="{
            'border border-[#00b14f] bg-white w-[100px]': showBorder,
            'bg-main text-white w-10': !showBorder
        }">
        <button v-if="showBorder" @click.stop="decreaseOrder(meal.name); showTempBorder()"
            class="rounded-full w-full h-full flex items-center justify-center">
            <font-awesome class="text-gray-500" icon="fa-solid fa-minus" />
        </button>

        <span v-if="orderCount !== null" class="font-semibold">{{ orderCount }}</span>
        <span v-else-if="showBorder" class="font-semibold">0</span>

        <button v-if="showBorder || orderCount === null"
            @click.stop="increaseOrder(meal.name, meal.price, meal.name, meal.image_small); showTempBorder()"
            class="rounded-full w-full h-full flex items-center justify-center">
            <font-awesome :class="showBorder ? 'text-gray-500' : 'text-white'" icon="fa-solid fa-plus" />
        </button>
    </div>
</template>

<script setup>
import { useOrder } from '#imports';

const { increaseOrder, decreaseOrder } = useOrder();
const order = useState('order', () => ({}));

const props = defineProps(['meal']);

const showBorder = ref(false);
let timeoutId = null;
const delay = 2500;

// **Computed property for meal count**
const orderCount = computed(() => (order.value[props.meal.name] ? order.value[props.meal.name].count : null));

// **Handles the temporary border visibility**
const showTempBorder = () => {

    if (orderCount.value === null) {
        showBorder.value = false;
    }
    else {
        showBorder.value = true;
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            showBorder.value = false;
        }, delay);
    }
};
</script>

<style scoped></style>

<template>
    <div class="flex items-center justify-center h-10 duration-300 rounded-full cursor-pointer transition-width"
        :class="{
            'border border-[#00b14f] bg-white w-[100px]': showBorder,
            'bg-main text-white w-10': !showBorder
        }" @click="showTempBorder">
        <button v-if="showBorder" class="flex items-center justify-center w-full h-full rounded-full"
            @click.stop="decreaseOrder(meal.name); showTempBorder()">
            <font-awesome class="text-gray-500" icon="fa-solid fa-minus" />
        </button>

        <span v-if="orderCount !== null" class="flex items-center justify-center w-10 h-10 font-semibold">{{ orderCount }}</span>
        <span v-else-if="showBorder" class="flex items-center justify-center w-10 h-10 font-semibold">0</span>

        <button v-if="showBorder || orderCount === null"
            class="flex items-center justify-center w-full h-full rounded-full"
            @click="increaseOrder(meal.name, meal.price, meal.name, meal.image_small); showTempBorder()">
            <font-awesome :class="showBorder ? 'text-gray-500' : 'text-white'" icon="fa-solid fa-plus" />
        </button>
    </div>
</template>

<script setup>
import { useOrder } from '#imports';

const { increaseOrder, decreaseOrder } = useOrder();
const order                            = useLocalStorage('order', {});

const props = defineProps({
  meal: {
    type    : Object,
    required: true
  }
});

const showBorder = ref(false);
let   timeoutId  = null;
const delay      = 2500;

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

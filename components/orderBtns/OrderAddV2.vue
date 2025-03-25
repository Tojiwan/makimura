<template>
<div class="text-[13px] w-[100px] bg-gray-100 p-2 rounded-lg flex justify-between">
    <button class="flex items-center justify-center bg-white h-[20px] w-[20px]" @click.stop="decreaseOrder(meal.name)">
        <font-awesome icon="fa-solid fa-minus"/>
    </button>

    <input v-model="count_input" type="text" class="w-[30px] font-bold tf-bebas  grow outline-0 text-center bg-transparent">

    <button class="flex items-center justify-center bg-white h-[20px] w-[20px]" @click.stop="increaseOrder(meal.name, meal.price, meal.name, meal.image_small)">
        <font-awesome icon="fa-solid fa-plus"/>
    </button>
</div>

</template>

<script setup>
import { useOrder } from '#imports';
const { increaseOrder, decreaseOrder } = useOrder();
const { meal }                         = defineProps({
  meal: {
    type    : Object,
    required: true
  }
})
const count_input = ref(0)
const order       = useLocalStorage('order', {});
watchEffect(()=>{
    if(Object.values(order.value).length > 0 && order.value[meal.name]){
        count_input.value = order.value[meal.name].count ?? 0
    }
    else{
        count_input.value = 0
    }
})
</script>

<style lang="scss" scoped></style>
<template>
<div class="text-[13px] bg-gray-100 p-2 rounded-lg flex gap-2">
    <button @click.stop="decreaseOrder(meal.name)" class="bg-white h-[20px] w-[20px]">
        <font-awesome icon="fa-solid fa-minus"></font-awesome>
    </button>

    <input v-model="count_input" type="text" class="w-[20px] text-center bg-transparent">

    <button @click.stop="increaseOrder(meal.name, meal.price, meal.name, meal.image_small)" class="bg-white h-[20px] w-[20px]">
        <font-awesome icon="fa-solid fa-plus"></font-awesome>
    </button>
</div>

</template>

<script setup>
import { useOrder } from '#imports';
const { increaseOrder, decreaseOrder } = useOrder();
const { meal } = defineProps(['meal'])
const count_input = ref(0)
const order = useState('order', () => {});
watchEffect(()=>{
    console.log(Object.values(order.value));
    
    if(Object.values(order.value).length > 0){
        count_input.value = order.value[meal.name].count
    }
    else{
        count_input.value = 0
    }
})
</script>

<style lang="scss" scoped></style>
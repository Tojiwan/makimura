<template>
    <div class="absolute flex items-center justify-center p-5 bg-black/70 h-full w-full top-0 left-0 z-50"
        :class="[BDMenuOpen ? 'block' : 'hidden']">
        <div class="h-full w-full bg-white rounded-lg p-3 flex flex-col items-start">
            <font-awesome :icon="['fas', 'x']" class="text-gray-500 cursor-pointer" @click="BDMenuOpen = !BDMenuOpen" />
            <h1 class="self-center">Branch & Delivery</h1>
            <div class="w-full h-full flex flex-col p-10 self-center">
                <select name="pickup-type" ref="pickup-type" id="pickup-type">
                    <option value="" disabled>Pickup or Delivery</option>
                    <option value="pickup" selected>Pickup</option>
                    <option value="delivery">Delivery</option>
                </select>
                <select name="branches" ref="selBranch" id="branches" @change="loadSLots">
                    <option value="" disabled selected>Select a branch</option>
                    <option v-for="branch in branches" :key="branch.id" :value="branch.slug">{{
                        branch.name }}</option>
                </select>
                <input :min="today" type="date" name="date" ref="date" id="date" @focusout="loadSLots">
                <select ref="interval" name="interval" id="interval">
                    <option value="" disabled selected>Select a slot</option>
                    <option v-for="slot in slots" :key="slot.id" :value="slot.id">{{ slot.start_time }} - {{
                        slot.end_time }} - {{ slot.categories[0].name }} {{ slot.categories[0].pivot.slots }} available
                    </option>
                </select>
                <button @click="saveOptions">save</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useBranchDelivery } from '#imports';

const { getBranch, getIntervals, getHotMeals, getCategoryMeals } = useBranchDelivery()
const branches = ref([])
const slots = ref([])
const selBranch = ref(null)
const date = ref(null)
const today = ref('');
const interval = ref(null)

onMounted(async () => {
    const now = new Date();
    today.value = now.toISOString().split('T')[0];
    branches.value = await getBranch()
})

const BDMenuOpen = useState('BDMenuOpen', () => true) // change to false later

const loadSLots = async () => {
    slots.value = await getIntervals(date.value.value, selBranch.value.value)
}

const hotMeals = useState('hotMeals', () => []);
const saveOptions = async () => {
    if (selBranch.value.value.trim().length != 0 && date.value.value.trim().length != 0 && interval.value.value.trim().length != 0) {
        BDMenuOpen.value = false
        
        hotMeals.value = await getHotMeals(selBranch.value.value, date.value.value, interval.value.value)
        await getCategoryMeals(selBranch.value.value, date.value.value, interval.value.value)

    }
}
</script>

<style scoped>
* {
    outline: none;
}
</style>
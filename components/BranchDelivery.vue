<template>
    <div class="fixed flex items-center justify-center p-5 bg-black/70 h-full w-full top-0 left-0 z-50"
        :class="[BDMenuOpen ? 'block' : 'hidden']">
        <div class="h-full w-full bg-white rounded-lg p-3 flex flex-col items-start">
            <font-awesome v-if="saved" :icon="['fas', 'x']" class="text-gray-500 cursor-pointer" @click="BDMenuOpen = !BDMenuOpen" />
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
                <input v-model="date" :min="today" type="date" name="date" id="date" @focusout="loadSLots">
                <select ref="interval" name="interval" id="interval">
                    <option value="" disabled selected>Select a slot</option>
                    <option v-for="slot in slots" :key="slot.id" :value="slot.id">{{ slot.start_time }} - {{
                        slot.end_time }} - {{ slot.categories[0].name }} {{ slot.categories[0].pivot.slots }} available
                    </option>
                </select>
                <button @click="saveOptions">save</button>
                <button @click="clearOptions">clear</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useBranchDelivery } from '#imports';

const { getBranch, getIntervals, getHotSelling, getCategoryMeals } = useBranchDelivery()

// ref elements
const selBranch = ref(null);
const date = ref(null);
const interval = ref(null);
const saved = ref(false)

// global variables
const branchGlobal = useState('branch',()=>null)
const dateGlobal = useState('dated',()=>null)
const intervalGlobal = useState('interval',()=>null)

// variables
const branches = ref([]);
const slots = ref([]);
const today = ref('');

onMounted(async () => {
    const now = new Date();
    today.value = now.toISOString().split('T')[0];
    date.value = today.value;  // Initialize date with today
    branches.value = await getBranch();
});


const BDMenuOpen = useState('BDMenuOpen', () => true) // change to false later

const loadSLots = async () => {
    slots.value = await getIntervals(date.value, selBranch.value.value)
}

const hotSelling = useState('hotSelling', () => []);
const categoryMeals = useState('categoryMeals', () => {});
const saveOptions = async () => {
    if (selBranch.value.value.trim().length != 0 && date.value.trim().length != 0 && interval.value.value.trim().length != 0) {
        BDMenuOpen.value = false

        branchGlobal.value = selBranch.value.value
        dateGlobal.value = date.value
        intervalGlobal.value = interval.value.value
        
        hotSelling.value = await getHotSelling(selBranch.value.value, date.value, interval.value.value)
        categoryMeals.value = await getCategoryMeals(selBranch.value.value, date.value, interval.value.value)
        
        saved.value = true;
    }
}

const clearOptions = ()=>{
    selBranch.value.value = ""
    interval.value.value = ""
    saved.value = false

    branchGlobal.value = selBranch.value.value
    dateGlobal.value = date.value
    intervalGlobal.value = interval.value.value
}
</script>

<style scoped>
* {
    outline: none;
}
</style>
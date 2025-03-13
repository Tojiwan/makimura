<template>
    <div class="absolute flex items-center justify-center p-5 bg-black/70 h-full w-full top-0 left-0" :class="[ BDMenuOpen ? 'block' : 'hidden' ]">
        <div class="h-full w-full bg-white rounded-lg p-3 flex flex-col items-start">
            <font-awesome :icon="['fas', 'x']" class="text-gray-500 cursor-pointer" @click="BDMenuOpen = !BDMenuOpen"/>
            <h1 class="self-center">Branch & Delivery</h1>
            <div class="w-full h-full flex flex-col p-10 self-center">
                <select name="pickup-type" ref="pickup-type" id="pickup-type">
                    <option value="" disabled>Pickup or Delivery</option>
                    <option value="pickup" selected>Pickup</option>
                    <option value="delivery" >Delivery</option>
                </select>
                <select name="branches" id="branches">
                    <option value="" disabled selected>Select a branch</option>
                    <option v-for="branch in branches" :key="branch.id" :value="branch.slug">{{ branch.name }}</option>
                </select>
                <calendar-date class="cally bg-base-100 border border-base-300 shadow-lg rounded-box">
  <svg aria-label="Previous" class="fill-current size-4" slot="previous" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M15.75 19.5 8.25 12l7.5-7.5"></path></svg>
  <svg aria-label="Next" class="fill-current size-4" slot="next" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path></svg>
  <calendar-month></calendar-month>
</calendar-date>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useBranchDelivery } from '#imports';

const { getBranch, getIntervals } = useBranchDelivery()
const branches = ref([])

onMounted(async () => {
    branches.value = await getBranch()
})

const BDMenuOpen = useState('BDMenuOpen', ()=>true) // change to false later
</script>

<style scoped>
    *{
        outline: none;
    }
</style>
<template>
    <div class="sticky top-10 z-20 flex w-full">
		<button class="ml-auto bg-[#EE2737] text-white rounded-md p-2 w-[35px] h-[35px] flex items-center justify-center" @click="BDMenuOpen = !BDMenuOpen"><font-awesome icon="fas location-dot" /></button>
    </div>
</template>

<script setup>
const BDMenuOpen = useState('BDMenuOpen', () => true)

</script>

<style scoped>

</style>
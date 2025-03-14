<template>
	<div class="p-6 bg-white flex flex-col items-center justify-center" :class="{ 'pb-20':count > 0}">
		<BranchDelivery />
		<h1 class="tf-bebas text-4xl font-bold -tracking-[4px]">FROM OUR MENU</h1>
		<button class="" @click="BDMenuOpen = !BDMenuOpen">Change Branch</button>
		<hotselling />
		<product :id="category.slug" v-for="category in categoryMeals" :category="category" />
		<Cart />
	</div>
</template>

<script setup>
const BDMenuOpen = useState('BDMenuOpen', () => true)
const order = useState('order', () => []);
const count = computed(() => {
    return Object.values(order.value).reduce((sum, item) => sum + (item.count || 0), 0);
});

const categoryMeals = useState('categoryMeals', () => { });

</script>

<style scoped>

</style>
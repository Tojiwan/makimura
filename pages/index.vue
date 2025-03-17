<template>
	<NavBar />
	<div class="p-6 pt-0 bg-white flex flex-col items-center justify-center" :class="{ 'pb-20': count > 0 }">
		<h1 class="tf-bebas text-4xl font-bold -tracking-[4px]">FROM OUR MENU</h1>
		<BranchDelivery />
		<SearchFilter v-if="isMobile" />
		<hotselling v-if="isMobile" />
		<product v-if="isMobile" v-for="category in categoryMeals" :category="category" />
		<Cart v-if="isMobile" />
	</div>
</template>

<script setup>
const isMobile = useMediaQuery('(max-width: 768px)')
const order = useState('order', () => []);
const count = computed(() => {
	return Object.values(order.value).reduce((sum, item) => sum + (item.count || 0), 0);
});

const categoryMeals = useState('categoryMeals', () => { });

</script>

<style scoped></style>
<template>
	<div class="px-6 lg:px-10 xl:px-8 xl:mx-24 pt-0 bg-white flex flex-col items-center justify-center"
		:class="{ 'pb-20': count > 0 || !isMobile }">
		<h1 class="tf-bebas text-4xl font-bold -tracking-[4px]">FROM OUR MENU</h1>
		<button v-if="!isMobile" @click="BDMenuOpen = true"
			class="ml-auto tc-green border border-[var(--green-color)] p-2 rounded-lg hover:bg-[var(--green-color)] hover:text-white font-medium tf-spartan mt-10">Select
			Branch & Delivery</button>
		<BranchDelivery />

		<!-- desktop components -->
		<div class="w-full" v-if="!isMobile">
			<FilterBar />
			<MealCards />
		</div>

		<!-- mobile only components -->
		<div class="w-full flex flex-col" v-if="isMobile">
			<SearchFilter />
			<Hotselling />
			<Product v-for="category in categoryMeals" :category="category" />
		</div>
		<Cart v-if="isMobile" />
	</div>
</template>

<script setup>
import MealCards from '~/components/productCards/MealCards.vue';
const BDMenuOpen = useState('BDMenuOpen', () => true)

const isMobile = useMediaQuery('(max-width: 768px)')
const order = useState('order', () => []);
const count = computed(() => {
	return Object.values(order.value).reduce((sum, item) => sum + (item.count || 0), 0);
});

const categoryMeals = useState('categoryMeals', () => { });

</script>

<style scoped></style>
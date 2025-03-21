<template>
	<div class="px-6 lg:px-10 xl:px-8 xl:mx-24 pt-0 bg-white flex flex-col items-center justify-center"
		:class="{ 'pb-20': count > 0 || !isMobile }">
		<h2 class="tf-bebas font-medium">FROM OUR MENU</h2>
		<button v-if="!isMobile"
			class="ml-auto tc-green border border-[var(--green-color)] p-2 rounded-lg hover:bg-[var(--green-color)] hover:text-white font-medium tf-spartan mt-10 mb-5"
			@click="BDMenuOpen = true">Select
			Branch & Delivery</button>
		<BranchDelivery />

		<!-- desktop components -->
		<div v-if="!isMobile" class="w-full">
			<FilterBar />
			<MealCards />
		</div>

		<!-- mobile only components -->
		<div v-if="isMobile" class="w-full flex flex-col">
			<SearchFilter />
			<Hotselling />
			<Product v-for="category in categoryMeals" :key="category.name" :category="category" />
		</div>
		<Cart v-if="isMobile" />
	</div>
</template>

<script setup>
const BDMenuOpen = useLocalStorage('BDMenuOpen', true);

const isMobile = useMediaQuery('(max-width: 768px)')
const order = useLocalStorage('order', []);
const count = computed(() => {
	return Object.values(order.value).reduce((sum, item) => sum + (item.count || 0), 0);
});

const categoryMeals = useLocalStorage('categoryMeals', []);

</script>

<style scoped></style>
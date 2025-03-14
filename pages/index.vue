<template>
	<div :class="{ 'pb-20':count > 0}">
		<BranchDelivery />
		<hotselling />
		<product :id="category.slug" v-for="category in categoryMeals" :category="category" />
		<Cart />
	</div>
</template>

<script setup>
const order = useState('order', () => []);
const count = computed(() => {
    return Object.values(order.value).reduce((sum, item) => sum + (item.count || 0), 0);
});

const categoryMeals = useState('categoryMeals', () => { });

</script>

<style scoped>

</style>
<template>
	<div>
		<BranchDelivery />
		<hotselling />
		<product :id="category.slug" v-for="category in categoryMeals" :category="category" />
		<Cart />
	</div>
</template>

<script setup>

const categoryMeals = useState('categoryMeals', () => { });

</script>

<style scoped>

</style>
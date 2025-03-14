<template>
	<div>
		<BranchDelivery />
		<hotselling />
		<product :id="category.slug" v-for="category in categoryMeals" :category="category" />
	</div>
</template>

<script setup>

const categoryMeals = useState('categoryMeals', () => { });

</script>

<style scoped>

</style>
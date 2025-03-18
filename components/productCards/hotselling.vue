<template>
	<img v-if="filteredSelling.length === 0 && Object.values(hotSelling).length === 0" src="https://order.makimuraramen.com/assets/loading-C8RNs0gu.gif" alt="" class="object-contain  w-[150px] self-center">
	<section v-if="filteredSelling.length > 0" class="w-full">
		<h1 v-if="hotSelling.length !== 0" id="hot-selling" class="mr-auto font-semibold text-xl mb-4">Hot Selling</h1>
		<div class="rounded-lg">
			<div class="grid grid-cols-2 gap-4">
				<div v-for="(meal, index) in filteredSelling" :key="meal.id"
					class="bg-white drop-shadow-lg border p-4 flex flex-col rounded-lg">
					<div class="flex space-x-1 mb-2 tc-green">
						<font-awesome icon="fa-solid fa-fire"/>
						<font-awesome icon="fa-solid fa-fire"/>
						<font-awesome icon="fa-solid fa-fire"/>
					</div>
					<div class="relative">
						<img class="w-[150px] h-[150px] rounded-[20px] object-contain" :src="meal.image_small ?? 'https://order.makimuraramen.com/assets/pic1-BJG-xmCB.jpg'" alt="">
						<OrderAdd :meal="meal" class="absolute flex items-center space-x-2 mt-2 bottom-0 right-0" />
					</div>
					<p class="mt-2 font-medium text-start tf-spartan">{{ meal.name }}</p>
					<p class="font-bold text-sm text-start">₱{{ meal.price }}</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
const hotSelling = useState('hotSelling', () => [])
const search_query = useState('search_query')
const filteredSelling = computed(()=>{

	return (Object.values(hotSelling.value).filter(item => item.name.toLowerCase().includes(search_query.value.toLowerCase())));
})
</script>

<style scoped></style>

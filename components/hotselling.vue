<template>
	<section class="p-6 bg-[#F2F2F2]">
		<h1 class="font-semibold text-xl mb-4">Hot Selling</h1>
		<div class="rounded-lg">
			<div class="grid grid-cols-2 gap-4">
				<div v-for="(meal, index) in hotSelling" :key="meal.id"
					class="bg-white p-4 flex flex-col rounded-lg">
					<div class="flex space-x-1 mb-2">
						<font-awesome icon="fa-solid fa-fire" style="color: #EE2737;" />
						<font-awesome icon="fa-solid fa-fire" style="color: #EE2737;" />
						<font-awesome icon="fa-solid fa-fire" style="color: #EE2737;" />
					</div>
					<div class="relative">
						<img class="w-[150px] h-[150px] rounded-[20px] object-contain" :src="meal.image" alt="">
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

const hotSelling = useState('hotSelling', () => []);
</script>

<style scoped></style>

<template>
	<section class="p-6 bg-[#F2F2F2]">
		<h1 class="font-semibold text-xl mb-4">Hot Selling</h1>
		<div class="rounded-lg">
			<div class="grid grid-cols-2 gap-4">
				<div v-for="(meal, index) in hotSelling" :key="meal.id"
					class="bg-white p-4 flex flex-col justify-center rounded-lg">
					<div class="flex space-x-1 mb-2">
						<font-awesome icon="fa-solid fa-fire" style="color: #EE2737;" />
						<font-awesome icon="fa-solid fa-fire" style="color: #EE2737;" />
						<font-awesome icon="fa-solid fa-fire" style="color: #EE2737;" />
					</div>

					<div class="relative">
						<img class="w-[150px] h-[150px] rounded-[20px] object-contain" :src="meal.image" alt="">
						<div class="absolute flex items-center space-x-2 mt-2 bottom-0 right-0">
							<button v-if="order.some(item => meal.name in item)" @click="decreaseOrder(meal.name)"
								class="bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center">
								<font-awesome icon="fa-solid fa-minus" style="color: #000;" />
							</button>

							<span v-if="order.some(item => meal.name in item)" class="font-semibold">{{order.find(item => meal.name in item)[meal.name] }}</span>

							<button @click="increaseOrder(meal.name)"
								class="bg-[#EE2737] rounded-full w-8 h-8 flex items-center justify-center">
								<font-awesome icon="fa-solid fa-plus" style="color: #ffffff;" />
							</button>
						</div>
					</div>
					<p class="mt-2 font-medium text-start">{{ meal.name }}</p>
					<p class="font-bold text-sm text-start">₱{{ meal.price }}</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import { useOrder } from '#imports';
const { increaseOrder, decreaseOrder } = useOrder()

const hotSelling = useState('hotSelling', () => []);
const order = useState('order', () => [])
</script>

<style scoped></style>

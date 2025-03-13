<template>
	<section class="p-6 bg-[#F2F2F2]">
		<h1 class="font-semibold text-xl mb-4">{{ props.category.name }}</h1>
		<div class="rounded-lg">
			<div class="flex flex-col space-y-4">
				<div v-for="(meal, index) in meals" :key="meal.id" class="bg-white p-4 flex items-start rounded-lg">
					<img class="w-[150px] h-[150px] rounded-[20px] object-contain" :src="meal.image" alt="">

					<div class="flex flex-col flex-grow justify-between ml-4 h-full truncate">
						<div>
							<p class="mt-2 font-medium">{{ meal.name }}</p>
							<p class="font-bold text-sm">
								Descriptionasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdadasdasdasdasdas</p>
							<p class="font-bold text-sm">₱{{ meal.price }}</p>
						</div>

						<div class="flex justify-end space-x-2 mt-[30px]">
							<button v-if="order.some(item => meal.name in item)" @click="decreaseOrder(meal.name)"
								class="bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center">
								<font-awesome icon="fa-solid fa-minus" style="color: #000;" />
							</button>

							<span v-if="order.some(item => meal.name in item)" class="font-semibold">{{order.find(item =>
								meal.name in item)[meal.name] }}</span>

							<button @click="increaseOrder(meal.name)"
								class="bg-[#EE2737] rounded-full w-8 h-8 flex items-center justify-center">
								<font-awesome icon="fa-solid fa-plus" style="color: #ffffff;" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>

	</section>
</template>

<script setup>
import { useOrder } from '#imports';

const { increaseOrder, decreaseOrder } = useOrder()

const props = defineProps(['category'])

const order = useState('order', () => [])
const branchGlobal = useState('branch', () => null)
const dateGlobal = useState('dated', () => null)
const intervalGlobal = useState('interval', () => null)

const meals = ref([])

onMounted(async () => {
	const req = await $fetch(`https://bio.makimuraramen.com/api/products/branch/${branchGlobal.value}?category=${props.category.slug}&date=${dateGlobal.value}&branch_interval_id=${intervalGlobal.value}`)
	meals.value = Object.values(req)
})
</script>

<style scoped></style>
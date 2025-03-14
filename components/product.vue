<template>
	<section class="w-full py-3">
		<h1 class="font-semibold text-xl mb-4">{{ props.category.name }}</h1>
		<div class="rounded-lg">
			<div class="flex flex-col space-y-4">
				<div v-for="(meal, index) in meals" :key="index" class="bg-white drop-shadow-lg border p-4 flex items-center rounded-lg">
					<img class="w-[120px] h-[120px] rounded-[20px] object-contain" :src="meal.image_small ?? 'https://order.makimuraramen.com/assets/pic1-BJG-xmCB.jpg'" alt="">

					<div class="flex flex-col flex-grow justify-between ml-4 h-full truncate">
						<div class="space-y-2">
							<p class="mt-2 font-medium">{{ meal.name }}</p>
							<p class="font-bold text-sm font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, quibusdam obcaecati natus maiores labore rem? Ex quia assumenda sunt quidem veritatis, quam cumque necessitatibus modi aliquam pariatur quod eos minus?</p>
							<p class="font-bold text-sm">₱{{ meal.price }}</p>
						</div>
						<OrderAdd class="ml-auto" :meal="meal"/>
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
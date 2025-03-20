<template>
	<img v-if="filteredProduct.length === 0 && meals.length === 0" src="https://order.makimuraramen.com/assets/loading-C8RNs0gu.gif" alt=""
		class="object-contain w-[150px] self-center">
	<section v-if="filteredProduct.length > 0" class="w-full py-3">
		<h1 :id="props.category.slug" class="font-semibold text-xl mb-4">{{ props.category.name }}</h1>
		<div class="rounded-lg">
			<div class="flex flex-col space-y-4">
				<div v-for="(meal) in filteredProduct" :key="meal.id"
					class="bg-white drop-shadow-lg border p-4 flex items-center rounded-lg">
					<img class="w-[120px] h-[120px] rounded-[20px] object-contain"
						:src="meal.image_small ?? 'https://order.makimuraramen.com/assets/pic1-BJG-xmCB.jpg'" alt="">

					<div class="flex flex-col flex-grow justify-between ml-4 h-full truncate">
						<div class="space-y-2">
							<p class="mt-2 font-medium">{{ meal.name }}</p>
							<p class="font-bold text-sm font-normal">Lorem ipsum dolor sit amet consectetur adipisicing
								elit. Consectetur, quibusdam obcaecati natus maiores labore rem? Ex quia assumenda sunt
								quidem veritatis, quam cumque necessitatibus modi aliquam pariatur quod eos minus?</p>
							<p class="font-bold text-sm">₱{{ meal.price }}</p>
						</div>
						<OrderAdd class="ml-auto" :meal="meal" />
					</div>
				</div>
			</div>
		</div>

	</section>
</template>

<script setup>
const props = defineProps({
  category: {
	type: Object,
	required: true
  }
})

const branchGlobal = useLocalStorage('branch', null)
const dateGlobal = useLocalStorage('dated', null)
const intervalGlobal = useLocalStorage('interval', null)

const meals = ref([])

onMounted(async () => {
	const req = await $fetch(`https://bio.makimuraramen.com/api/products/branch/${branchGlobal.value}?category=${props.category.slug}&date=${dateGlobal.value}&branch_interval_id=${intervalGlobal.value}`)
	meals.value = Object.values(req)
})

const search_query = useState('search_query')
const filteredProduct = computed(()=>{
	return (Object.values(meals.value).filter(item => item.name.toLowerCase().includes(search_query.value.toLowerCase())));
})
</script>

<style scoped></style>
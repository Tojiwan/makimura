<template>
	<section class="p-6 bg-[#F1F1F1]">
		<h1 class="font-semibold text-xl mb-4">Hot Selling</h1>
		<div class="rounded-lg">
			<div class="grid grid-cols-2 gap-4">
				<div v-for="(item, index) in items" :key="index" class="bg-white p-4 flex flex-col justify-center rounded-lg">
					<div class="flex space-x-1 mb-2">
						<font-awesome icon="fa-solid fa-fire" style="color: #EE2737;" />
						<font-awesome icon="fa-solid fa-fire" style="color: #EE2737;" />
						<font-awesome icon="fa-solid fa-fire" style="color: #EE2737;" />
					</div>

					<img class="w-[150px] h-[150px] rounded-[20px] object-contain" src="/public/6762c39f9d19d.png"
						alt="">
					<p class="mt-2 font-medium text-start">Item Name</p>
					<p class="font-bold text-sm text-start">Price</p>

					<div class="flex items-center space-x-2 mt-2">
						<button v-if="item.count > 0" @click="decreaseOrder(index)"
							class="bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center">
							<font-awesome icon="fa-solid fa-minus" style="color: #000;" />
						</button>

						<span v-if="item.count > 0" class="font-semibold">{{ item.count }}</span>

						<button @click="increaseOrder(index)"
							class="bg-[#EE2737] rounded-full w-8 h-8 flex items-center justify-center">
							<font-awesome icon="fa-solid fa-plus" style="color: #ffffff;" />
						</button>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			items: [{ count: 0 }]
		};
	},
	methods: {
		increaseOrder(index) {
			this.items[index].count++;
		},
		decreaseOrder(index) {
			if (this.items[index].count > 0) {
				this.items[index].count--;
			}
		}
	}
};
</script>

<style scoped></style>

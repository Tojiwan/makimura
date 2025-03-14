<template>
	<section class="p-6 bg-[#F2F2F2]">
		<h1 class="font-semibold text-xl mb-4">Party Platter</h1>
		<div class="rounded-lg">
			<div class="flex flex-col space-y-4">
				<div v-for="(item, index) in items" :key="index" class="bg-white p-4 flex items-center rounded-lg">
					<img class="w-[120px] h-[120px] rounded-[20px] object-contain" src="/public/6762c39f9d19d.png" alt="">

					<div class="flex flex-col flex-grow justify-between ml-4 h-full truncate">
						<div class="space-y-2">
							<p class="mt-2 font-medium">Item Name</p>
							<p class="font-bold text-sm font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, quibusdam obcaecati natus maiores labore rem? Ex quia assumenda sunt quidem veritatis, quam cumque necessitatibus modi aliquam pariatur quod eos minus?</p>
							<p class="font-bold text-sm">1202</p>
						</div>

						<div class="flex justify-end space-x-2 mt-[30px]">
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
		</div>

	</section>
</template>

<script>
export default {
	data() {
		return {
			items: [{ count: 0 },
			{ count: 0 },
			{ count: 0 },
			{ count: 0 }]
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
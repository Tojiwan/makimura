<template>
	<div class="w-full">
		<div class="bg-white space-y-4">
			<h1 class="text-[20px] font-black tf-bebas">YOUR ORDER</h1>
			<div class="flex items-center justify-start gap-2">
				<div class="bg-[#cacf7a] w-[6px] h-[6px] rounded-full"/>
				<div class="bg-[#00b14f] w-[53px] h-[4px] rounded-full"/>
			</div>
			<div class="max-h-[500px] overflow-y-auto border border-gray-300">
				<table class="w-full tf-spartan">
					<thead class="bg-[#222222] text-white text-center sticky top-0">
						<tr>
							<th class="p-4 text-[15px]">IMAGE</th>
							<th class="p-4 text-[15px]">PRODUCT NAME</th>
							<th class="p-4 text-[15px]">PRICE</th>
							<th class="p-4 text-[15px]">QUANTITY</th>
							<th class="p-4 text-[15px]">TOTAL</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="order in orders" :key="order.name"
							class="border-b border-gray-300 text-center">
							<td class="p-4 w-1/5">
								<img :src="order.img" alt="Takoyaki" class="w-24 h-auto rounded-md mx-auto" >
							</td>
							<td class="p-4 text-[15px] border border-gray-300 w-1/5">{{ order.name }}</td>
							<td class="p-4 text-[15px] border border-gray-300 w-1/5">₱{{
								(order.price * 1).toLocaleString() }}.00</td>
							<td class="p-4 text-[15px] border border-gray-300 w-1/5">{{ order.count }}</td>
							<td class="p-4 text-[15px] border border-gray-300 w-1/5">₱{{
								(order.price * order.count).toLocaleString() }}.00</td>
						</tr>
					</tbody>
				</table>
			</div>

		</div>
	</div>
</template>


<script setup>
const orders = useState('order', () => ({}));
</script>

<style scoped></style>
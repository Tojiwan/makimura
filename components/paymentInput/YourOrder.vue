<template>
	<div class="w-full">
		<div class="bg-white space-y-4">
			<h1 class="text-[20px] font-black tf-bebas">YOUR ORDER</h1>
			<div class="flex items-center justify-start gap-2">
				<div class="bg-[#cacf7a] w-[6px] h-[6px] rounded-full"></div>
				<div class="bg-[#00b14f] w-[53px] h-[4px] rounded-full"></div>
			</div>
			<table class="w-full border border-gray-300 tf-spartan">
				<thead class="bg-[#222222] text-white text-center">
					<tr>
						<th class="p-4 text-[15px]">IMAGE</th>
						<th class="p-4 text-[15px]">PRODUCT NAME</th>
						<th class="p-4 text-[15px]">PRICE</th>
						<th class="p-4 text-[15px]">QUANTITY</th>
						<th class="p-4 text-[15px]">TOTAL</th>
					</tr>
				</thead>
				<tbody>
					<tr class="border-b border-gray-300 text-center">
						<td class="p-4">
							<img src="/public/6762c39f9d19d.png" alt="Takoyaki" class="w-24 h-auto rounded-md mx-auto" />
						</td>
						<td class="p-4 text-[15px] border border-gray-300">Takoyaki</td>
						<td class="p-4 text-[15px] border border-gray-300">₱99.00</td>
						<td class="p-4 text-[15px] border border-gray-300">1</td>
						<td class="p-4 text-[15px] border border-gray-300">₱99.00</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>


<script setup>

</script>

<style scoped></style>
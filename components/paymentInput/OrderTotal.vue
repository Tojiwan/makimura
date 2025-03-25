<template>
	<div class="w-full">
		<div class="bg-white space-y-4">
			<h1 class="text-[20px] font-black tf-bebas">ORDER TOTAL</h1>
			<div class="flex items-center justify-start gap-2">
				<div class="bg-[#cacf7a] w-[6px] h-[6px] rounded-full"/>
				<div class="bg-[#00b14f] w-[53px] h-[4px] rounded-full"/>
			</div>
			<table class="w-full border border-gray-300 tf-spartan">
				<tbody>
					<tr>
						<td class="p-4 text-[15px] border border-gray-300">Order Subtotal</td>
						<td class="p-4 text-[15px] border border-gray-300">₱{{ total_price.toLocaleString() }}.00</td>
					</tr>
					<tr>
						<td class="p-4 text-[15px] border border-gray-300">Total</td>
						<td class="p-4 text-[15px] border border-gray-300">₱{{ total_price.toLocaleString() }}.00</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script setup>
const orders      = useLocalStorage('order', {});
const total_price = computed(()=>{
    if(Object.values(orders.value ?? []).length > 0){
        return Object.values(orders.value ?? []).map(item => item.price*item.count).reduce((sum,item)=> sum+item)
    }
    return 0
})
</script>

<style lang="scss" scoped></style>

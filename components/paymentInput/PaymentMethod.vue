<template>
	<div>
		<div class="space-y-[20px]">
			<h1 class="text-[20px] font-black tf-bebas">
				Payment Method
			</h1>
			<div class="flex items-center justify-start gap-2">
				<div class="bg-[#cacf7a] w-[6px] h-[6px] rounded-full" />
				<div class="bg-[#00b14f] w-[53px] h-[4px] rounded-full" />
			</div>

			<div class="flex flex-col items-center justify-start gap-5 tf-spartan">
				<div class="w-full space-y-4">
					<h3 class="font-semibold text-gray-400">E-wallet | Credit Card</h3>
					<div>
						<div class="w-full flex items-center space-x-3 pb-2">
							<font-awesome :icon="['fab', 'cc-visa']" class="text-[40px] text-blue-600" />
							<div class="flex-1">
								<p class="text-lg font-semibold">Visa</p>
								<p class="text-gray-500">**** **** **** 1234</p>
							</div>
							<input type="radio" name="payment" class="w-5 h-5 accent-black">
						</div>
						<hr class="border-t-2 border-gray-300">
					</div>

					<div>
						<div class="w-full flex items-center space-x-3 pb-2">
							<font-awesome :icon="['fab', 'cc-mastercard']" class="text-[40px] text-red-500" />
							<div class="flex-1">
								<p class="text-lg font-semibold">Mastercard</p>
								<p class="text-gray-500">**** **** **** 1234</p>
							</div>
							<input type="radio" name="payment" class="w-5 h-5 accent-black">
						</div>
						<hr class="border-t-2 border-gray-300">
					</div>

					<div>
						<div class="w-full flex items-center space-x-3 pb-2">
							<img src="/public/gcash.png" class="w-[50px] h-[50px] object-contain" alt="">
							<div class="flex-1">
								<p class="text-lg font-semibold">GCash</p>
								<p class="text-gray-500">+63 9123 4567 890</p>
							</div>
							<input type="radio" name="payment" class="w-5 h-5 accent-black">
						</div>
						<hr class="border-t-2 border-gray-300">
					</div>
				</div>

				<div class="w-full space-y-4">
					<h3 class="font-semibold text-gray-400">Cash</h3>
					<div>
						<div class="w-full flex items-center space-x-3 pb-2">
							<font-awesome :icon="['far', 'money-bill-1']" class="text-[40px] text-green-600" />
							<div class="flex-1">
								<p class="text-lg font-semibold">Cash</p>
							</div>
							<input type="radio" name="payment" class="w-5 h-5 accent-black">
						</div>
						<hr class="border-t-2 border-gray-300">
					</div>
				</div>
			</div>

			<button
				class="relative px-6 py-3 rounded-md text-[14px] font-medium leading-[1.5] inline-flex items-center justify-center transition-all duration-500 text-black bg-[#F3F3F3] hover:bg-[#00b14f] overflow-hidden group"
				type="submit" name="btnPlaceOrder">
				<span
					class="relative z-10 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-0">Place
					Order Now</span>
				<span
					class="absolute inset-0 flex items-center justify-center text-white w-full translate-x-full transition-all duration-300 group-hover:translate-x-0">Place
					Order Now</span>
			</button>
		</div>
	</div>
</template>

<script setup>

</script>

<style scoped></style>

<template>
	<div class="bg-white p-6 space-y-5">
		<!-- <div class="flex justify-start items-center gap-5">
			<button class="px-3 py-1 bg-[#EE2737] rounded-full text-white flex justify-center items-center">
				Delivery
			</button>
			<button class="px-3 py-1 rounded-full text-[#EE2737] flex justify-center items-center">
				Pickup
			</button>
		</div> -->
		<h1 class="font-semibold tf-bebas">Billing & Shipping Address</h1>
		<div class="flex flex-col justify-center items-center space-y-4 tf-spartan">

			<input type="text" placeholder="First Name" required
				class="w-full h-[50px] border border-gray-400 p-4 rounded-md focus:border-[#ee2737] focus:ring-1 focus:ring-[#ee2737] placeholder-[#AEAEAE] placeholder:text-[15px] font-semibold">
			<input type="text" placeholder="Last Name" required
				class="w-full h-[50px] border border-gray-400 p-4 rounded-md focus:border-[#ee2737] focus:ring-1 focus:ring-[#ee2737] placeholder-[#AEAEAE] placeholder:text-[15px] font-semibold">
			<input type="text" placeholder="Apartment, suite, unit, etc." required
				class="w-full h-[50px] border border-gray-400 p-4 rounded-md focus:border-[#ee2737] focus:ring-1 focus:ring-[#ee2737] placeholder-[#AEAEAE] placeholder:text-[15px] font-semibold">
			<input type="text" placeholder="Postcode / Zip" required
				class="w-full h-[50px] border border-gray-400 p-4 rounded-md focus:border-[#ee2737] focus:ring-1 focus:ring-[#ee2737] placeholder-[#AEAEAE] placeholder:text-[15px] font-semibold">
			<input type="text" placeholder="Email" required
				class="w-full h-[50px] border border-gray-400 p-4 rounded-md focus:border-[#ee2737] focus:ring-1 focus:ring-[#ee2737] placeholder-[#AEAEAE] placeholder:text-[15px] font-semibold">
			<input type="text" placeholder="Phone" required
				class="w-full h-[50px] border border-gray-400 p-4 rounded-md focus:border-[#ee2737] focus:ring-1 focus:ring-[#ee2737] placeholder-[#AEAEAE] placeholder:text-[15px] font-semibold">
		</div>

		<h1 class="font-semibold tf-bebas">Location</h1>

		<div class="flex flex-col items-center space-y-4 w-full">
			<div class="flex items-center w-full justify-between">
				<font-awesome icon="fa-solid fa-location-dot" style="color: #ee2737" />
				<h1 class="flex-1 text-center truncate tf-spartan">Location</h1>
				<button>
					<font-awesome :icon="['fas', 'chevron-right']" style="color: #ee2737" />
				</button>
			</div>

			<div class="bg-gray-200 w-full rounded-md">
				<button class="p-4 text-[12px] w-full">
					<p class="tf-spartan">
						Add address details and delivery instructions
						<span class="text-[#EE2737] ml-4">Add</span>
					</p>
				</button>
			</div>
		</div>

		<div class="space-y-4">
			<div class="flex items-center justify-between">
				<h1 class="font-semibold tf-bebas">Order Summary</h1>
				<button @click="navigateTo('/')" class="tf-bebas"><span class="text-[#EE2737] font-semibold">Add
						items</span></button>
			</div>

			<div class="space-y-4">
				<div class="flex flex-col space-y-4 max-h-[250px] overflow-scroll">
					<div v-for="order in orders" :key="order.name" class="flex justify-between items-start tf-spartan">
						<h1 class="w-10">{{ order.count }}x</h1>
						<div class="flex-1">
							<h1 class="font-medium">{{ order.name }}</h1>
							<button class="text-sm text-[#EE2737]">Edit</button>
						</div>
						<p class="font-semibold">{{ (order.price * order.count).toLocaleString() }}.00</p>
					</div>
				</div>
				<hr class="border-1 border-gray-400" />

				<h1 class="text-[#666666] tf-bebas">People also ordered</h1>
				<section class="w-full flex gap-4 overflow-x-auto pb-5">
					<div v-for="meal in hotSelling" :key="meal.name"
						class="flex  items-center justify-between text-wrap border min-w-[200px] bg-white p-4 rounded-[15px] shadow-lg tf-spartan">
						<div class="text-sm">
							<h1 class="font-medium">{{ meal.name }}</h1>
							<p class="font-semibold">{{ meal.price.toLocaleString() }}.00</p>
						</div>
						<img class="h-[80px] w-[80px] object-contain" :src="meal.image_small" alt="Product Image" />
					</div>
				</section>


				<hr class="border-1 border-gray-400" />

				<div class="grid grid-cols-2 gap-y-2 w-full tf-spartan">
					<h3>Subtotal</h3>
					<p class="text-right">₱{{ price }}.00</p>
					<h3>Delivery Fee</h3>
					<p class="text-right">₱140.00</p>
					<h3>Applicable Fees</h3>
					<p class="text-right">₱20.00</p>
				</div>

				<div class="space-y-4">
					<div class="flex items-center justify-between">
						<h1 class="font-semibold tf-bebas">Payment Method</h1>
						<button><span class="text-[#EE2737] font-semibold tf-bebas">See all</span></button>
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
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
const orders = useState('order', () => []);
const total_price = useState('total_price', () => 0)
const hotSelling = useState('hotSelling', () => [])
const price = computed(() => {
	total_price.value = Object.values(orders.value).reduce((total, item) => parseInt(total) + parseInt(parseInt(item.price) * parseInt(item.count) || 0), 0).toLocaleString('en-US');
	return total_price.value
})
</script>

<style scoped></style>
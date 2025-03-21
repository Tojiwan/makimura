<template>
	<!-- <NavBar /> -->
	<div class="bg-white p-6 space-y-5">
		<!-- <div class="flex justify-start items-center gap-5">
			<button class="px-3 py-1 bg-main rounded-full text-white flex justify-center items-center">
				Delivery
			</button>
			<button class="px-3 py-1 rounded-full text-[#00b14f] flex justify-center items-center">
				Pickup
			</button>
		</div> -->
		<h1 class="font-semibold tf-bebas text-[20px]">Billing & Shipping Address</h1>
		<div class="flex flex-col justify-center items-center space-y-4 tf-spartan">

			<input type="text" placeholder="First Name" required
				class="w-full h-[50px] border border-gray-400 p-4 rounded-md focus:border-[#00b14f] focus:ring-1 focus:ring-[#00b14f] placeholder-[#AEAEAE] placeholder:text-[15px] font-semibold">
			<input type="text" placeholder="Last Name" required
				class="w-full h-[50px] border border-gray-400 p-4 rounded-md focus:border-[#00b14f] focus:ring-1 focus:ring-[#00b14f] placeholder-[#AEAEAE] placeholder:text-[15px] font-semibold">
			<!-- <input type="text" placeholder="Apartment, suite, unit, etc." required
				class="w-full h-[50px] border border-gray-400 p-4 rounded-md focus:border-[#00b14f] focus:ring-1 focus:ring-[#00b14f] placeholder-[#AEAEAE] placeholder:text-[15px] font-semibold"> -->
			<input type="text" placeholder="Postcode / Zip" required
				class="w-full h-[50px] border border-gray-400 p-4 rounded-md focus:border-[#00b14f] focus:ring-1 focus:ring-[#00b14f] placeholder-[#AEAEAE] placeholder:text-[15px] font-semibold">
			<input type="text" placeholder="Email" required
				class="w-full h-[50px] border border-gray-400 p-4 rounded-md focus:border-[#00b14f] focus:ring-1 focus:ring-[#00b14f] placeholder-[#AEAEAE] placeholder:text-[15px] font-semibold">
			<input type="text" placeholder="Phone" required
				class="w-full h-[50px] border border-gray-400 p-4 rounded-md focus:border-[#00b14f] focus:ring-1 focus:ring-[#00b14f] placeholder-[#AEAEAE] placeholder:text-[15px] font-semibold">
		</div>

		<h1 class="font-semibold tf-bebas text-[20px]">Location</h1>

		<div class="flex flex-col items-center space-y-4 w-full">
			<div class="flex items-center w-full justify-between min-w-0 space-x-3">
				<font-awesome icon="fa-solid fa-location-dot" style="color: #00b14f" class="flex-shrink-0" />
				<div class="flex flex-col flex-1 items-start justify-center min-w-0">
					<h1 class="text-left truncate px-4 tf-spartan w-full">
						Near Guagua-Santa Rita-Porac Road
					</h1>
					<p class="text-left truncate px-4 tf-spartan w-full text-gray-400">
						Becuran, Santa Rita, Pampanga
					</p>
				</div>
				<button class="flex-shrink-0">
					<font-awesome :icon="['fas', 'chevron-right']" style="color: #00b14f" />
				</button>
			</div>

			<div class="bg-gray-200 w-full rounded-md">
				<NuxtLink to="/editLocation">
					<button class="p-4 text-[12px] w-full">
						<p class="tf-spartan">
							Add address details and delivery instructions
							<span class="text-[#00b14f] ml-4">Add</span>
						</p>
					</button>
				</NuxtLink>
			</div>
		</div>

		<div class="space-y-4">
			<div class="flex items-center justify-between">
				<h1 class="font-semibold tf-bebas text-[20px]">Order Summary</h1>
				<button class="tf-bebas text-[20px]" @click="navigateTo('/')"><span class="text-[#00b14f] font-semibold">Add
						items</span></button>
			</div>

			<div class="space-y-4">
				<div class="flex flex-col space-y-4 max-h-[250px] overflow-y-auto">
					<div v-for="order in orders" :key="order.name" class="flex justify-between items-start tf-spartan">
						<h1 class="w-10">{{ order.count }}x</h1>
						<div class="flex-1">
							<h1 class="font-medium">{{ order.name }}</h1>
							<button class="text-sm text-[#00b14f]"
								@click="navigateTo(`/edit/${order.name.split(' ').join('-')}`)">Edit</button>
						</div>
						<p class="font-semibold">{{ (order.price * order.count).toLocaleString() }}.00</p>
					</div>
				</div>
				<hr class="border-1 border-gray-400" >
				<div v-if="filteredMeals.length > 0" class="space-y-4">
					<h1 class="text-[#666666] tf-bebas text-[20px]">People also ordered</h1>
					<section class="w-full flex gap-4 overflow-x-auto pb-5">
						<div v-for="meal in filteredMeals"
							:key="meal.name" class="cursor-pointer flex items-center justify-between text-wrap border min-w-[200px] bg-white p-4 rounded-[15px] shadow-lg tf-spartan"
							@click.stop="increaseOrder(meal.name, meal.price, meal.name, meal.image_small)">
							<div class="text-sm">
								<h1 class="font-medium">{{ meal.name }}</h1>
								<p class="font-semibold">{{ meal.price.toLocaleString() }}</p>
							</div>
							<img class="h-[80px] w-[80px] object-contain" :src="meal.image_small" alt="Product Image" >
						</div>
					</section>
					<hr class="border-1 border-gray-400" >
				</div>

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
						<h1 class="font-semibold tf-bebas text-[20px]">Payment Method</h1>
						<!-- <button><span class="text-[#00b14f] font-semibold tf-bebas text-[20px]">See all</span></button> -->
					</div>

					<div class="flex flex-col items-center justify-start gap-5 tf-spartan">
						<div class="w-full space-y-4">
							<h3 class="font-semibold text-gray-400">E-wallet | Credit Card</h3>
							<div>
								<label for="Visa" class="w-full flex items-center space-x-3 pb-2">
									<font-awesome :icon="['fab', 'cc-visa']" class="text-[40px] text-blue-600" />
									<div class="flex-1">
										<p class="text-[18px] font-semibold">Visa</p>
										<p class="text-gray-500">**** **** **** 1234</p>
									</div>
									<input type="radio" id="Visa" name="payment" class="w-5 h-5 accent-black">
								</label>
								<hr class="border-t-2 border-gray-300">
							</div>

							<div>
								<label for="Mastercard" class="w-full flex items-center space-x-3 pb-2">
									<font-awesome :icon="['fab', 'cc-mastercard']" class="text-[40px] text-red-500" />
									<div class="flex-1">
										<p class="text-[18px] font-semibold">Mastercard</p>
										<p class="text-gray-500">**** **** **** 1234</p>
									</div>
									<input type="radio" id="Mastercard" name="payment" class="w-5 h-5 accent-black">
								</label>
								<hr class="border-t-2 border-gray-300">
							</div>

							<div>
								<label for="Gcash" class="w-full flex items-center space-x-3 pb-2">
									<img src="/public/gcash.png" class="w-[50px] h-[50px] object-contain" alt="">
									<div class="flex-1">
										<p class="text-[18px] font-semibold">GCash</p>
										<p class="text-gray-500">+63 9123 4567 890</p>
									</div>
									<input type="radio" id="Gcash" name="payment" class="w-5 h-5 accent-black">
								</label>
								<hr class="border-t-2 border-gray-300">
							</div>
						</div>

						<div class="w-full space-y-4">
							<h3 class="font-semibold text-gray-400">Cash</h3>
							<label>
								<div for="Cash" class="w-full flex items-center space-x-3 pb-2">
									<font-awesome :icon="['far', 'money-bill-1']" class="text-[40px] text-green-600" />
									<div class="flex-1">
										<p class="text-[18px] font-semibold">Cash</p>
									</div>
									<input type="radio" id="Cash" name="payment" class="w-5 h-5 accent-black">
								</div>
								<hr class="border-t-2 border-gray-300">
							</label>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- <button
			class="w-full text-white bg-main relative px-6 py-3 rounded-md text-[14px] font-medium leading-[1.5] inline-flex items-center justify-center  overflow-hidden group"
			type="submit" name="btnPlaceOrder">
			Order Now
		</button> -->

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
</template>

<script setup>
const { increaseOrder } = useOrder();
const orders = useLocalStorage('order', []);
const total_price = useState('total_price', () => 0)
const hotSelling = useLocalStorage('hotSelling', [])
const price = computed(() => {
	return Object.values(orders.value).reduce((total, item) => parseInt(total) + parseInt(parseInt(item.price) * parseInt(item.count) || 0), 0).toLocaleString('en-US'); 
})
watchEffect(() => {
	total_price.value = price.value
})
const filteredMeals = computed(() => {
	return Object.values(hotSelling.value).filter(meal => !(meal.name in orders.value));
});
</script>

<style scoped></style>
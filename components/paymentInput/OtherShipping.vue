<template>
	<div class="w-full space-y-[20px]">
		<!-- Toggle Button -->
		<button @click="show = !show"
			class="bg-[#F3F3F3] hover:bg-[#00b14f] hover:text-[white] transition-all duration-500 ease-in-out font-semibold py-2 px-4 rounded-md flex items-center justify-between w-[50%]">
			Ship to a different address
			<font-awesome :icon="['fas', show ? 'chevron-up' : 'chevron-down']" class="ml-2" />
		</button>

		<!-- Smooth Transition -->
		<transition name="fade-slide">
			<div v-show="show" class="bg-white tf-spartan overflow-hidden">
				<p class="mb-4 text-[15px]">
					If you have shopped with us before, please enter your details in the boxes below. If you are a new customer, please proceed to the Billing & Shipping section.
				</p>

				<!-- Input Fields -->
				<div class="space-y-[20px]">
					<div class="flex justify-between items-center gap-8 tf-spartan">
						<input type="text" placeholder="First Name" required class="h-[50px] border border-gray-300 px-5 text-[15px] font-normal text-black transition-all duration-300 ease-in-out bg-white w-full focus:border-[#00b14f] focus:ring-[#00b14f] outline-none placeholder-[#666] rounded-[6px]" />
						<input type="text" placeholder="Last Name" required class="h-[50px] border border-gray-300 px-5 text-[15px] font-normal text-black transition-all duration-300 ease-in-out bg-white w-full focus:border-[#00b14f] focus:ring-[#00b14f] outline-none placeholder-[#666] rounded-[6px]" />
					</div>

					<div>
						<input type="text" placeholder="Address" class="h-[50px] border border-gray-300 px-5 text-[15px] font-normal text-black transition-all duration-300 ease-in-out bg-white w-full focus:border-[#00b14f] focus:ring-[#00b14f] outline-none placeholder-[#666] rounded-[6px]" />
					</div>

					<div class="flex justify-between items-center gap-8 tf-spartan">
						<input type="text" placeholder="Apartment, suite, unit etc." class="h-[50px] border border-gray-300 px-5 text-[15px] font-normal text-black transition-all duration-300 ease-in-out bg-white w-full focus:border-[#00b14f] focus:ring-[#00b14f] outline-none placeholder-[#666] rounded-[6px]" />
						<input type="text" placeholder="Town / City" required class="h-[50px] border border-gray-300 px-5 text-[15px] font-normal text-black transition-all duration-300 ease-in-out bg-white w-full focus:border-[#00b14f] focus:ring-[#00b14f] outline-none placeholder-[#666] rounded-[6px]" />
					</div>

					<div class="flex justify-between items-center gap-8 tf-spartan">
						<input type="text" placeholder="Province" required class="h-[50px] border border-gray-300 px-5 text-[15px] font-normal text-black transition-all duration-300 ease-in-out bg-white w-full focus:border-[#00b14f] focus:ring-[#00b14f] outline-none placeholder-[#666] rounded-[6px]" />
						<input type="text" placeholder="Postcode / Zip" required class="h-[50px] border border-gray-300 px-5 text-[15px] font-normal text-black transition-all duration-300 ease-in-out bg-white w-full focus:border-[#00b14f] focus:ring-[#00b14f] outline-none placeholder-[#666] rounded-[6px]" />
					</div>

					<div class="flex justify-between items-center gap-8 tf-spartan">
						<input type="email" placeholder="Email" required class="h-[50px] border border-gray-300 px-5 text-[15px] font-normal text-black transition-all duration-300 ease-in-out bg-white w-full focus:border-[#00b14f] focus:ring-[#00b14f] outline-none placeholder-[#666] rounded-[6px]" />
						<input type="text" placeholder="Phone" required class="h-[50px] border border-gray-300 px-5 text-[15px] font-normal text-black transition-all duration-300 ease-in-out bg-white w-full focus:border-[#00b14f] focus:ring-[#00b14f] outline-none placeholder-[#666] rounded-[6px]" />
					</div>
				</div>
			</div>
		</transition>

		<textarea placeholder="Notes about your order, e.g. special notes for delivery"
		class="border border-gray-300 px-5 py-2 text-[15px] font-normal transition-all duration-300 ease-in-out bg-white w-full focus:border-[#00b14f] focus:ring-[#00b14f] outline-none rounded-[6px] resize-none w-full h-[140px]"></textarea>
		
	</div>
</template>

<script setup>
import { ref } from 'vue';

const show = ref(false);
</script>

<style scoped>
.input-style {
	height: 50px;
	border: 1px solid #ccc;
	padding: 10px 15px;
	font-size: 15px;
	font-weight: normal;
	color: black;
	background: white;
	width: 100%;
	border-radius: 6px;
	outline: none;
}

.fade-slide-enter-active, .fade-slide-leave-active {
	transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-slide-enter-from, .fade-slide-leave-to {
	opacity: 0;
	transform: translateY(-10px);
}
</style>

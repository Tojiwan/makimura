<template>
	<div>
		<div class="space-y-[20px]">
			<h1 class="text-[20px] font-black tf-bebas tracking-tighter">
				Payment Method
			</h1>
			<div class="flex items-center justify-start gap-2">
				<div class="bg-[#cacf7a] w-[6px] h-[6px] rounded-full"></div>
				<div class="bg-[#EE2737] w-[53px] h-[4px] rounded-full"></div>
			</div>

			<div class="input-group input-black">
				<select v-model="selectedPaymentType"
					class="h-[50px] border border-gray-300 px-5 text-[15px] font-normal text-black transition-all duration-300 ease-in-out bg-white w-full focus:border-[#ee2737] focus:ring-[#ee2737] placeholder-[#666] rounded-[6px] outline-none"
					required @change="updatePaymentMethods">
					<option disabled value="">Select Payment Type</option>
					<option v-for="payment in PaymentType" :key="payment.id" :value="payment.id">
						{{ payment.name }}
					</option>
				</select>
			</div>

			<div class="input-group input-black m-t20">
				<select v-model="selectedPaymentMethod"
					class="h-[50px] border border-gray-300 px-5 text-[15px] font-normal text-black transition-all duration-300 ease-in-out bg-white w-full focus:border-[#ee2737] focus:ring-[#ee2737] placeholder-[#666] rounded-[6px] outline-none"
					required>
					<option disabled value="">Select Payment Method</option>
					<option v-for="method in PaymentMethod" :key="method.id" :value="method.id">
						{{ method.name }}
					</option>
				</select>
			</div>

			<button
				class="relative px-6 py-3 rounded-md text-[14px] font-medium leading-[1.5] inline-flex items-center justify-center transition-all duration-500 text-black bg-[#F3F3F3] hover:bg-[#ee2737] overflow-hidden group"
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
import { ref, onMounted } from "vue";

const PaymentType = ref([]);
const PaymentMethod = ref([]);
const selectedPaymentType = ref("");
const selectedPaymentMethod = ref("");

const fetchPaymentType = async () => {
	try {
		const response = await fetch(
			"https://bio.makimuraramen.com/api/payment-methods"
		);
		const data = await response.json();
		PaymentType.value = data.map((m) => ({
			id: m.id,
			name: m.name,
			methods: m.payment_methods,
		}));
	} catch (error) {
		console.error("Error fetching PaymentType:", error);
	}
};

const updatePaymentMethods = () => {
	const selectedType = PaymentType.value.find(
		(type) => type.id === selectedPaymentType.value
	);
	PaymentMethod.value = selectedType ? selectedType.methods : [];
};

onMounted(fetchPaymentType);
</script>

<style scoped></style>

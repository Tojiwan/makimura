<template>
	<div>
		<Delivery v-if="isSmallScreen" />
		<Banner v-if="!isMobile" :title="'Shop Checkout'" />

		<div v-if="!isSmallScreen">
			<div
				class="md:flex md:justify-between md:gap-6 p-5 md:p-10 lg:flex lg:justify-between lg:gap-6 p-5 lg:p-10">
				<div class="lg:w-full md:w-full space-y-6">
					<BillingAddress />
					<OtherShipping />
				</div>

				<div class="lg:w-full md:w-full space-y-6">
					<YourOrder />
					<OrderTotal />
					<PaymentMethod />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const isSmallScreen = useMediaQuery('(max-width: 768px)')

// const handleResize = () => {
// 	if (typeof window !== 'undefined') {
// 		isSmallScreen.value = window.innerWidth < 1024
// 	}
// }

// onMounted(() => {
// 	handleResize()
// 	window.addEventListener('resize', handleResize)
// })

// onUnmounted(() => {
// 	window.removeEventListener('resize', handleResize)
// })
const isMobile = useMediaQuery('(max-width: 768px)')

</script>
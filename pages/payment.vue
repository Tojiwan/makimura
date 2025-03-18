<template>
	<div>
		<Delivery v-if="isSmallScreen" />
		<NavBar v-else />
		
		<div>
			<div v-if="isSmallScreen">
				<SmallScreenComponent />
			</div>

			<div v-else>
				<div class="md:flex md:justify-between md:gap-6 p-5 md:p-10 lg:flex lg:justify-between lg:gap-6 p-5 lg:p-10">
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
	</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const isSmallScreen = ref(false)

const handleResize = () => {
	if (typeof window !== 'undefined') {
		isSmallScreen.value = window.innerWidth < 1024
	}
}

onMounted(() => {
	handleResize()
	window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
	window.removeEventListener('resize', handleResize)
})
</script>
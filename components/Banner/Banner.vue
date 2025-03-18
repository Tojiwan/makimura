<template>
	<!-- <section>
		<div class="relative bg-gray-900 bg-opacity-90 text-center bg-cover bg-center py-20">

			<div class="container mx-auto px-6">
				<div class="space-y-4 text-white">
					<h1 class="text-4xl font-bold">Shop Checkout</h1>

					<nav aria-label="breadcrumb">
						<ul class="flex items-center justify-center space-x-2 text-lg">
							<li>
								<a href="/" class="text-gray-300 hover:text-white transition">Home</a>
							</li>
							<font-awesome :icon="['fas', 'chevron-right']" class="text-white" />
							<li class="text-white">Shop Checkout</li>
						</ul>
					</nav>
				</div>
			</div>
		</div> -->

	<section class="relative h-[450px] w-full bg-cover bg-center bg-fixed flex items-center justify-center">

		<div class="bg-gray-800 bg-opacity-90 w-full min-h-[450px] flex items-center justify-center">
			<div class="container mx-auto text-center text-white">
				<h1 class="text-[60px] font-medium mb-4 tf-bebas tracking-tighter">{{ title }}</h1>

				<nav aria-label="breadcrumb"
					class="w-[220px] h-[50px] bg-main rounded-[10px] flex items-center justify-center mx-auto">
					<ul class="flex items-center space-x-3 text-lg">
						<li>
							<NuxtLink to="/" class="text-white text-[15px]">Home</NuxtLink>
						</li>
						<li>
							<font-awesome :icon="['fas', 'chevron-right']" class="text-white text-[15px]" />
						</li>
						<li class="text-white text-[15px]">{{ title }}</li>
					</ul>
				</nav>

			</div>
		</div>

	</section>
</template>

<script setup>
const { title } = defineProps(['title'])

</script>

<style scoped></style>
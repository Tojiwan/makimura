<template>
	<div class="space-y-[20px] pb-[50px]">
		<h1 class="text-[20px] font-black tf-bebas">BILLING &amp; SHIPPING ADDRESS</h1>
		<div class="flex items-center justify-start gap-2">
			<div class="bg-[#cacf7a] w-[6px] h-[6px] rounded-full"></div>
			<div class="bg-[#00b14f] w-[53px] h-[4px] rounded-full"></div>
		</div>
		<div class="flex justify-between items-center gap-8 tf-spartan">
			<input name="dzFirstName" required type="text"
				class="h-[50px] border border-gray-300 px-5 text-[15px] font-normal text-black transition-all duration-300 ease-in-out bg-white w-full focus:border-[#00b14f] focus:ring-[#00b14f] outline-none placeholder-[#666] rounded-[6px]"
				placeholder="First Name" />

			<input name="dzLastName" required="" type="text"
				class="h-[50px] border border-gray-300 px-5 text-[15px] font-normal text-black transition-all duration-300 ease-in-out bg-white w-full focus:border-[#00b14f] focus:ring-[#00b14f] placeholder-[#666] rounded-[6px] outline-none"
				placeholder="Last Name" />
		</div>

		<div>
			<input name="dzOther[Address]" required="" type="text"
				class="h-[50px] border border-gray-300 px-5 text-[15px] font-normal text-black transition-all duration-300 ease-in-out bg-white w-full focus:border-[#00b14f] focus:ring-[#00b14f] placeholder-[#666] rounded-[6px] outline-none"
				placeholder="Address" />
		</div>

		<div class="flex justify-between items-center gap-8">

			<input name="dzOther[Other]" type="text"
				class="h-[50px] border border-gray-300 px-5 text-[15px] font-normal text-black transition-all duration-300 ease-in-out bg-white w-full focus:border-[#00b14f] focus:ring-[#00b14f] placeholder-[#666] rounded-[6px] outline-none"
				placeholder="Apartment, suite, unit etc." />

			<input name="dzOther[Town/City]" required="" type="text"
				class="h-[50px] border border-gray-300 px-5 text-[15px] font-normal text-black transition-all duration-300 ease-in-out bg-white w-full focus:border-[#00b14f] focus:ring-[#00b14f] placeholder-[#666] rounded-[6px] outline-none"
				placeholder="Town / City" />
		</div>

		<div class="flex justify-between items-center gap-8">

			<input name="dzOther[Province]" required="" type="text"
				class="h-[50px] border border-gray-300 px-5 text-[15px] font-normal text-black transition-all duration-300 ease-in-out bg-white w-full focus:border-[#00b14f] focus:ring-[#00b14f] placeholder-[#666] rounded-[6px] outline-none"
				placeholder="Province" />

			<input name="Postcode/Zip" required="" type="text"
				class="h-[50px] border border-gray-300 px-5 text-[15px] font-normal text-black transition-all duration-300 ease-in-out bg-white w-full focus:border-[#00b14f] focus:ring-[#00b14f] placeholder-[#666] rounded-[6px] outline-none"
				placeholder="Postcode / Zip" />
		</div>

		<div class="flex justify-between items-center gap-8">

			<input name="dzEmail" required="" type="email"
				class="h-[50px] border border-gray-300 px-5 text-[15px] font-normal text-black transition-all duration-300 ease-in-out bg-white w-full focus:border-[#00b14f] focus:ring-[#00b14f] placeholder-[#666] rounded-[6px] outline-none"
				placeholder="Email" />

			<input name="dzPhoneNumber" required="" type="text"
				class="h-[50px] border border-gray-300 px-5 text-[15px] font-normal text-black transition-all duration-300 ease-in-out bg-white w-full focus:border-[#00b14f] focus:ring-[#00b14f] placeholder-[#666] rounded-[6px] outline-none"
				placeholder="Phone" />
		</div>
	</div>
</template>

<script setup>

</script>

<style scoped></style>

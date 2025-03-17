<template>
	<div class="p-0 relative">
		<NuxtLink to="/payment">
			<button class="absolute top-4 left-4 z-10 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
				<font-awesome :icon="['fas', 'chevron-left']" />
			</button>
		</NuxtLink>

		<div class="w-full">
			<div class="gmap_canvas">
				<iframe 
					class="w-full h-[150px]" 
					src="https://maps.google.com/maps?q=14.971233,120.6044675&t=&z=13&ie=UTF8&iwloc=&output=embed" 
					frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
				</iframe>
			</div>
		</div>

		<!-- Content Section -->
		<div class="p-6 space-y-4">
			<h1 class="tf-bebas font-bold text-lg">Edit Location Details</h1>

			<p class="tf-spartan">Address Location<span class="text-[#ee2737]">*</span></p>

			<div class="bg-gray-200 w-full rounded-md flex items-center p-4 gap-5 border border-gray-400">
				<font-awesome icon="fa-solid fa-location-dot" class="text-red-600 flex-shrink-0 text-[25px]" />
				<div class="truncate">
					<p class="truncate font-bold text-gray-400">Near Guagua-Santa Rita-Porac Road</p>
					<p class="truncate text-gray-400">Becuran, Santa Rita, Pampanga, Central Luzon (Region III), Pampanga</p>
				</div>
			</div>

			<p>Address Details</p>
			<input type="text" placeholder="Apartment, suite, unit, etc." required 
				class="w-full h-[50px] border border-gray-400 p-4 rounded-md focus:border-[#ee2737] focus:ring-1 focus:ring-[#ee2737] placeholder-[#AEAEAE] placeholder:text-[15px] font-semibold">
			<p>Note to Driver</p>
			<input type="text" placeholder="Notes about order, e.g. special notes for delivery" 
				class="w-full h-[50px] border border-gray-400 p-4 rounded-md focus:border-[#ee2737] focus:ring-1 focus:ring-[#ee2737] placeholder-[#AEAEAE] placeholder:text-[15px] font-semibold truncate">
		</div>
	</div>
</template>

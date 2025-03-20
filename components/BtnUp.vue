<template>
	<div>
		<!-- Scroll to Top Button -->
		<button @click="scrollToTop"
			:class="{ 'opacity-100 visible translate-y-0': isVisible, 'opacity-0 invisible translate-y-5': !isVisible }"
			class="fixed lg:bottom-4 bottom-[6em] right-4 w-[50px] h-[50px] rounded-full flex items-center justify-center
			   transition-all duration-200 ease-linear z-[999] cursor-pointer">

			<!-- SVG Circle Progress -->
			<svg class="absolute top-0 left-0 w-full h-full" viewBox="0 0 40 40">
				<circle cx="20" cy="20" r="18" fill="none" stroke="#ddd" stroke-width="1" /> <!-- Background Circle -->
				<circle cx="20" cy="20" r="18" fill="none" stroke="#00b14f" stroke-width="1" stroke-dasharray="113.1"
					:stroke-dashoffset="113.1 - (scrollProgress * 113.1)" stroke-linecap="round"
					class="transition-all duration-200 ease-linear" />
			</svg>

			<!-- Font Awesome Icon -->
			<font-awesome :icon="['fas', 'arrow-up']" class=" text-[20px] text-[#00b14f] relative z-10" />
		</button>
	</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isVisible = ref(false);
const scrollProgress = ref(0);

// Function to update scroll progress
const handleScroll = () => {
	const scrollTop = window.scrollY;
	const docHeight = document.documentElement.scrollHeight - window.innerHeight;
	scrollProgress.value = docHeight ? scrollTop / docHeight : 0;
	isVisible.value = scrollTop > 200; // Show button after scrolling 200px
};

// Scroll to top function
const scrollToTop = () => {
	window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Attach event listener
onMounted(() => {
	window.addEventListener('scroll', handleScroll);
});

// Remove event listener when component unmounts
onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped></style>

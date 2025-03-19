<template>
	<div>
		<footer class="bg-[#222222]" id="footer">
			<div class="container mx-auto px-6 sm:px-8 lg:px-12 pt-[85px] pb-[40px]">
				<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
					<div>
						<h5 class="text-[24px] tf-bebas font-bold mb-[30px] text-white">CONTACT</h5>
						<ul class="space-y-6 tf-spartan text-[#C2C2C2]">
							<li class="flex items-center">
								<font-awesome :icon="['fas', 'location-dot']" class="text-[#00b14f] text-[30px]" />
								<p class="text-[14px] pl-2">Balibago, Angeles City, Philippines</p>
							</li>
							<li class="flex items-center">
								<font-awesome :icon="['fas', 'phone']" class="text-[#00b14f] text-[30px]" />
								<p class="text-[14px] pl-2 text-[#00b14f]">+63 967-085-3563</p>
							</li>
							<li class="flex items-center">
								<font-awesome :icon="['fas', 'envelope']" class="text-[#00b14f] text-[30px]" />
								<p class="text-[14px] pl-2 text-[#00b14f]"><a href="#">sales@makimuraramen.com</a></p>
							</li>
						</ul>
					</div>

					<div>
						<h5 class="text-[24px] tf-bebas font-bold mb-[30px] text-white">OUR LINKS</h5>
						<ul class="space-y-6 tf-spartan text-[#C2C2C2]">
							<li class="text-[14px]"><a href="/pages/index.vue">Home</a></li>
							<li class="text-[14px]"><a href="#">About Us</a></li>
							<li class="text-[14px]"><a href="#">Services</a></li>
							<li class="text-[14px]"><a href="#">Team</a></li>
							<li class="text-[14px]"><a href="#">Blog</a></li>
						</ul>
					</div>

					<div>
						<h5 class="text-[24px] tf-bebas font-bold mb-[30px] text-white">SOCIALS</h5>
						<ul class="space-y-6 tf-spartan text-[#C2C2C2]">
							<li class="text-[14px]"><a href="https://www.facebook.com/makimuraramenbar">Facebook</a>
							</li>
							<li class="text-[14px]"><a href="https://www.tiktok.com/@makimuraramenbar">Tiktok</a></li>
						</ul>
					</div>

					<div>
						<h5 class="text-[24px] tf-bebas font-bold mb-[30px] text-white">HELP CENTER</h5>
						<ul class="space-y-6 tf-spartan text-[#C2C2C2]">
							<li class="text-[14px]"><a href="#">Shop</a></li>
							<li class="text-[14px]"><a href="#">Contact Us</a></li>
						</ul>
					</div>
				</div>
			</div>

			<div class="container mx-auto px-6 sm:px-8 lg:px-12 mt-10 border-t border-gray-700 py-[20px]">
				<div class="flex flex-col md:flex-row justify-between text-center md:text-left text-[15px] tf-spartan text-[#C2C2C2]">
					<p class="text-[14px]">© 2024 All rights reserved.</p>
					<p class="text-[14px]">
						Crafted With ❤️ by
						<a href="https://tigernethost.com/" target="_blank"><span class="text-[#00b14f]">Tigernethost</span></a>
					</p>
				</div>
			</div>
		</footer>
	</div>
</template>



<script setup>

</script>

<style scoped></style>
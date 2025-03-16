<template>
  <div>
    <div class="z-20 p-5 flex w-full bg-white">
      <!-- <img class="w-[50%]" src="https://order.makimuraramen.com/assets/logo-LcMPCbT4.png" alt=""> -->
      <nav class="w-full flex items-center justify-center">
        <img class="w-[50%]" src="https://order.makimuraramen.com/assets/logo-LcMPCbT4.png" alt="">
      </nav>
      <!-- <button class="ml-auto bg-[#EE2737] text-white rounded-md p-2 w-[35px] h-[35px] flex items-center justify-center"
        @click="BDMenuOpen = !BDMenuOpen"><font-awesome icon="fas location-dot" /></button> -->
    </div>
    <transition name="slide-down">
      <div v-if="isHeaderFixed" class="fixed h-[70px] top-0 left-0 z-20 p-5 flex items-center justify-center w-full bg-white">
        <nav class="w-full flex items-center justify-center">
          <img class="w-[50%]" src="https://order.makimuraramen.com/assets/logo-LcMPCbT4.png" alt="">
        </nav>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { useScrollHandler } from '#imports';

const { isHeaderFixed } = useScrollHandler()

</script>

<style scoped>
.slide-down-enter-active, .slide-down-leave-active {
  transition: transform 0.3s ease-in;
}
.slide-down-enter-from, .slide-down-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
.slide-down-enter-to, .slide-down-leave-from {
  transform: translateY(0);
  opacity: 1;
}
</style>
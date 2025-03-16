<template>
    <section class="left-0 z-50 w-full flex gap-2 my-2 bg-white ">
        <div ref="filter-category" class="grow bg-gray-100 flex justify-between items-center px-5 rounded-full">
            <p>filter here</p>
            <font-awesome icon="fas chevron-down" />
            <font-awesome icon="fas chevron-up" />
        </div>
        <button
            class="ml-auto bg-[#EE2737] text-white rounded-md p-2 w-[35px] h-[35px] flex items-center justify-center"
            @click="BDMenuOpen = !BDMenuOpen"><font-awesome icon="fas location-dot" /></button>
    </section>
    <transition name="fade-in">
        <section v-if="isHeaderFixed" class="fixed top-[70px] left-0 z-50 w-full flex gap-2 px-5 py-2 bg-white ">
            <div ref="filter-category" class="grow bg-gray-100 flex justify-between items-center px-5 rounded-full">
                <p>filter here</p>
                <font-awesome icon="fas chevron-down" />
                <font-awesome icon="fas chevron-up" />
            </div>
            <button
                class="ml-auto bg-[#EE2737] text-white rounded-md p-2 w-[35px] h-[35px] flex items-center justify-center"
                @click="BDMenuOpen = !BDMenuOpen"><font-awesome icon="fas location-dot" /></button>
        </section>
    </transition>
</template>

<script setup>
import { useScrollHandler } from '#imports';

const { isHeaderFixed } = useScrollHandler()

const BDMenuOpen = useState('BDMenuOpen', () => true)

</script>

<style scoped>
.fade-in-enter-active, .fade-in-leave-active {
  transition: transform 0.3s ease-in;
}
.fade-in-enter-from, .fade-in-leave-to {
  transform: translateY(-200%);
  opacity: 0;
}
.fade-in-enter-to, .fade-in-leave-from {
  transform: translateY(0);
  opacity: 1;
}
</style>
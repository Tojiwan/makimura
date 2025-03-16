<template>
    <section class="left-0 z-25 w-full flex gap-2 my-2 bg-white ">
        <div @click="filterOpen = !filterOpen" class="cursor-pointer grow bg-gray-100 flex justify-between items-center px-5 rounded-full">
            <p class="tf-tf-spartan font-bold">{{ filter_category }}</p>
            <font-awesome v-if="!filterOpen" icon="fas chevron-down" />
            <font-awesome v-if="filterOpen" icon="fas chevron-up" />
        </div>
        <button
            class="ml-auto bg-[#EE2737] text-white rounded-md p-2 w-[35px] h-[35px] flex items-center justify-center"
            @click="BDMenuOpen = !BDMenuOpen"><font-awesome icon="fas location-dot" /></button>
    </section>
    <transition name="fade-in">
        <section v-if="isHeaderFixed" class="fixed top-[70px] left-0 z-20 w-full flex gap-2 px-5 py-2 bg-white ">
            <div @click="filterOpen = !filterOpen" class="cursor-pointer grow bg-gray-100 flex justify-between items-center px-5 rounded-full">
                <p class="tf-tf-spartan font-bold">{{ filter_category }}</p>
                <font-awesome v-if="!filterOpen" icon="fas chevron-down" />
                <font-awesome v-if="filterOpen" icon="fas chevron-up" />
            </div>
            <button
                class="ml-auto bg-[#EE2737] text-white rounded-md p-2 w-[35px] h-[35px] flex items-center justify-center"
                @click="BDMenuOpen = !BDMenuOpen"><font-awesome icon="fas location-dot" /></button>
        </section>
    </transition>
    <!-- category menu -->
     <transition name="slide-up">
         <div v-if="filterOpen" @click="filterOpen = !filterOpen" class="fixed top-0 left-0 h-full w-full bg-gray-500/70 z-20">
             <div class="fixed bottom-0 z-20 flex flex-col gap-2 bg-white w-full p-5 rounded-t-3xl">
                 <font-awesome :icon="['fas', 'x']" class="ml-auto text-gray-500 cursor-pointer"/>
                 <NuxtLink class="border-b tf-spartan" @click.prevent="scrollTo('hot-selling', 'HOT SELLING')" to="#hot-selling">HOT SELLING</NuxtLink>
                 <NuxtLink class="border-b tf-spartan" @click.prevent="scrollTo(category.slug, category.name.toUpperCase())" :to="`#${category.slug}`" v-for="category in categoryMeals">{{ category.name.toUpperCase() }}</NuxtLink>
             </div>
         </div>
     </transition>
</template>

<script setup>
import { useScrollHandler } from '#imports';

const { isHeaderFixed } = useScrollHandler()
const BDMenuOpen = useState('BDMenuOpen', () => true)
const categoryMeals = useState('categoryMeals', () => { })

const filterOpen = ref(false)
const filter_category = ref('HOT SELLING')

const filterArray = computed(()=>{
    const category_names = categoryMeals.value.map(item => item.name)
    return ['HOT SELLING', ...category_names]
})


// handle scrolling to id part
const scrollTo = (id, name) => {
  const targetElement = document.getElementById(id);
  if (targetElement) {
    const offset = 100; // Adjust this based on your fixed navbar height
    const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
    
    window.scrollTo({
      top: elementPosition - offset,
      behavior: 'smooth'
    });
  }
  filter_category.value = name  
}

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
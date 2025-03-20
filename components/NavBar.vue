<template>
  <div>
    <div :class="[ (isOrder || isMobile) ? 'bg-white' : 'bg-transparent border-0 absolute top-0 left-0' ]" class="z-20 py-4 px-6 lg:px-10 xl:px-28 flex w-full tf-spartan">
      <nav class="w-full flex items-center justify-center lg:justify-between lg:px-5 gap-10">
        <img :class="{'filter brightness-0 invert':(!isOrder && !isMobile)}" class="cursor-pointer max-w-[180px] lg:mr-auto" src="https://order.makimuraramen.com/assets/logo-LcMPCbT4.png"
          alt="" @click="navigateTo('/')">
        <p :class="[ !isOrder ? 'text-white' : 'text-black' ]" class="hidden lg:block">{{ branch.name }}</p>
        <div :class="[!isOrder ? 'text-white bg-main' : '']" class="hidden lg:flex items-center relative justify-center relative shadow-xl rounded-xl w-[45px] h-[45px]"
          @click="isCartOpen = !isCartOpen">
          <div class="w-full h-full cursor-pointer flex items-center justify-center">
            <font-awesome :icon="['fas', 'bag-shopping']" />
          </div>
          <p
            class="absolute -top-2 -right-2 text-[12px] bg-gray-500 rounded-full h-[20px] w-[20px] flex items-center justify-center text-white tf-spartan">
            {{ count }}</p>
          <CartMenu v-if="!isHeaderFixed && isCartOpen" @click.stop />
        </div>
      </nav>
    </div>

    <!-- fixed header -->
    <transition name="slide-down">
      <div v-if="isHeaderFixed"
        class="fixed h-[70px] top-0 left-0 z-20 px-6 lg:px-10 xl:px-28 flex items-center justify-center w-full bg-white"
        :class="{ 'shadow-lg': isPayment || !isMobile }">
        <nav class="w-full flex items-center justify-center lg:justify-between lg:px-5 gap-10">
          <img class="cursor-pointer max-w-[180px] lg:mr-auto" src="https://order.makimuraramen.com/assets/logo-LcMPCbT4.png"
            alt="" @click="navigateTo('/')">
          <p class="hidden lg:block">{{ branch.name }}</p>
          <div :class="[!isOrder ? 'text-white bg-main' : '']" class="hidden lg:flex items-center relative justify-center relative border shadow-xl rounded-xl bg-[var(--green-color)] text-white w-[45px] h-[45px]"
            @click="isCartOpen = !isCartOpen">
            <div class="w-full h-full cursor-pointer flex items-center justify-center">
              <font-awesome :icon="['fas', 'bag-shopping']" />
            </div>
            <p
              class="absolute -top-2 -right-2 text-[12px] bg-gray-500 rounded-full h-[20px] w-[20px] flex items-center justify-center text-white tf-spartan">
              {{ count }}</p>
            <CartMenu v-if="isHeaderFixed && isCartOpen" @click.stop />
          </div>
        </nav>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { useScrollHandler, useBranchDelivery } from '#imports';

const isMobile = useMediaQuery('(max-width: 768px)')
const { getBranch } = useBranchDelivery()
const { isHeaderFixed } = useScrollHandler()
const route = useRoute()
const isPayment = computed(() => {
  return route.fullPath.includes('payment')
})
const isOrder = computed(() => {
  return route.fullPath == '/'
})
const isCartOpen = useState('isCartOpen', ()=>false)

const branchGlobal = useState('branch', () => null)
const branch = ref([])
const branches = ref([])

onMounted(async () => {
  branches.value = await getBranch()
})
watchEffect(() => {
  branch.value = branches.value.filter(item => item.slug == branchGlobal.value)[0] ?? ''
})

const order = useState('order', () => []);
const count = computed(() => {
  return Object.values(order.value).reduce((sum, item) => sum + (item.count || 0), 0);
});

</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: transform 0.3s ease-in;
}

.slide-down-enter-from,
.slide-down-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

.slide-down-enter-to,
.slide-down-leave-from {
  transform: translateY(0);
  opacity: 1;
}
</style>
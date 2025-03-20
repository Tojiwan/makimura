<template>
    <div v-show="BDMenuOpen" class="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
        <div class="w-[90%] max-w-[600px] bg-white rounded-[5px] p-3 flex flex-col">
            <!-- Header -->
            <header class="flex items-center mb-3">
                <font-awesome v-if="saved" :icon="['fas', 'x']" class="text-gray-500 cursor-pointer"
                    @click="closeBDMenu" />
                <h1 class="text-[25px] font-bold tf-bebas mx-auto">Branch & Delivery</h1>
            </header>

            <!-- Form -->
            <form class="w-full p-4 space-y-4" @submit.prevent="saveOptions">
                <select v-model="formData.pickupType" class="form-select">
                    <option value="" disabled>Pickup or Delivery</option>
                    <option value="pickup">Pickup</option>
                    <option value="delivery">Delivery</option>
                </select>

                <select v-model="formData.branch" class="form-select" @change="loadSlots">
                    <option value="" disabled>Select a branch</option>
                    <option v-for="branch in branches" :key="branch.id" :value="branch.slug">
                        {{ branch.name }}
                    </option>
                </select>

                <input v-model="formData.date" type="date" class="form-select" :min="today" @change="loadSlots">

                <select v-model="formData.interval" class="form-select">
                    <option value="" disabled>Select a slot</option>
                    <option v-for="slot in slots" :key="slot.id" :value="slot.id">
                        {{ slot.start_time }} - {{ slot.end_time }} -
                        {{ slot.categories[0].name }}
                        ({{ slot.categories[0].pivot.slots }} available)
                    </option>
                </select>

                <p class="text-sm text-gray-600 text-center">
                    <strong>Important:</strong> Your cart will be cleared after saving.
                </p>

                <div class="flex gap-4">
                    <button type="submit" class="flex-1 h-11 bg-main text-white rounded-md">
                        Save
                    </button>
                    <button type="button" class="flex-1 h-11 border border-[#00b14f] text-[#00b14f] rounded-md"
                        @click="clearOptions">
                        Clear
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { useBranchDelivery } from '#imports'

// Composables
const { getBranch, getIntervals, getHotSelling, getCategoryMeals } = useBranchDelivery()

// State Management
const BDMenuOpen = useState('BDMenuOpen', () => true)
const saved = useState('saved', () => false)
const order = useState('order', () => ({}))
const hotSelling = useState('hotSelling', () => [])
const categoryMeals = useState('categoryMeals', () => ({}))

// Global State
const branchGlobal = useState('branch', () => null)
const dateGlobal = useState('dated', () => null)
const intervalGlobal = useState('interval', () => null)

// Local State
const branches = ref([])
const slots = ref([])
const today = ref(new Date().toISOString().split('T')[0])

// Form Data
const formData = reactive({
    pickupType: 'pickup',
    branch: '',
    date: today.value,
    interval: ''
})

// Methods
const loadSlots = async () => {
    if (formData.branch && formData.date) {
        slots.value = await getIntervals(formData.date, formData.branch)
    }
}

const saveOptions = async () => {
    if (!formData.branch || !formData.date || !formData.interval) return

    // Reset states
    hotSelling.value = []
    categoryMeals.value = {}
    order.value = {}

    // Update global state
    branchGlobal.value = formData.branch
    dateGlobal.value = formData.date
    intervalGlobal.value = formData.interval

    // Fetch new data
    Promise.all([
        getHotSelling(formData.branch, formData.date, formData.interval)
            .then(data => hotSelling.value = data),
        getCategoryMeals(formData.branch, formData.date, formData.interval)
            .then(data => categoryMeals.value = data)
    ])

    saved.value = true
    BDMenuOpen.value = false
}

const clearOptions = () => {
    Object.assign(formData, {
        branch: '',
        date: today.value,
        interval: ''
    })
    saved.value = false
    hotSelling.value = []
    categoryMeals.value = {}
}

const closeBDMenu = () => {
    BDMenuOpen.value = false
}

// Lifecycle
onMounted(async () => {
    branches.value = await getBranch()
})
</script>

<style scoped>
.form-select {
    @apply h-[65px] px-4 text-base font-medium text-[#666666] rounded-[10px] border border-[#dddddd] focus:ring-1 focus:ring-[#00b14f] focus:border-[#00b14f] w-full;
}

* {
    outline: none;
}
</style>
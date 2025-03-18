<template>
    <section class="left-0 z-25 w-full flex gap-2 my-2 bg-white">
        <div v-if="!searchOpen" @click="filterOpen = !filterOpen"
            class="cursor-pointer grow bg-gray-100 flex justify-between items-center px-5 rounded-full">
            <p class="tf-tf-spartan font-bold">{{ filter_category }}</p>
            <font-awesome v-if="!filterOpen" icon="fas chevron-down" />
            <font-awesome v-if="filterOpen" icon="fas chevron-up" />
        </div>
        <div @click="openFocus" :class="[searchOpen ? 'grow' : '']"
            class="bg-main cursor-pointer flex justify-between items-center px-3 tf-spartan rounded-full text-white">
            <font-awesome icon="fas magnifying-glass" />
            <!-- <p v-if="!searchOpen">Search</p> -->
            <input v-if="!isHeaderFixed && searchOpen" ref="search" @keyup="handleSearch" :value="search_query"
                @focusout="handleFocusOut" @click.stop class="grow pl-3 py-1 bg-transparent placeholder-white    outline-0" type="text"
                placeholder="Have a craving?">
        </div>
        <button class="ml-auto bg-main text-white rounded-md p-2 w-[35px] h-[35px] flex items-center justify-center"
            @click="BDMenuOpen = !BDMenuOpen"><font-awesome icon="fas location-dot" /></button>
    </section>

    <!-- Fixed Header with Transition -->
    <transition name="fade-in">
        <section v-if="isHeaderFixed"
            class="fixed drop-shadow-lg top-[70px] left-0 z-20 w-full flex gap-2 px-5 py-2 bg-white">
            <div v-if="!searchOpen" @click="filterOpen = !filterOpen"
                class="cursor-pointer grow bg-gray-100 flex justify-between items-center px-5 rounded-full">
                <p class="tf-tf-spartan font-bold">{{ filter_category }}</p>
                <font-awesome v-if="!filterOpen" icon="fas chevron-down" />
                <font-awesome v-if="filterOpen" icon="fas chevron-up" />
            </div>
            <div @click="openFocus" :class="[searchOpen ? 'grow' : '']"
                class="bg-main cursor-pointer flex justify-between items-center px-3 tf-spartan rounded-full text-white">
                <font-awesome icon="fas magnifying-glass" />
                <!-- <p v-if="!searchOpen">Search</p> -->
                <input ref="search" @keyup="handleSearch" :value="search_query" @focusout="handleFocusOut" @click.stop
                    v-if="searchOpen" class="grow pl-3 py-1 bg-transparent placeholder-white     outline-0" type="text"
                    placeholder="Have a craving?">
            </div>
            <button class="ml-auto bg-main text-white rounded-md p-2 w-[35px] h-[35px] flex items-center justify-center"
                @click="BDMenuOpen = !BDMenuOpen"><font-awesome icon="fas location-dot" /></button>
        </section>
    </transition>

    <!-- Category Menu -->
    <transition name="slide-up">
        <div v-if="filterOpen" @click="filterOpen = false" class="fixed top-0 left-0 h-full w-full bg-gray-500/70 z-20">
            <div class="fixed bottom-0 z-20 flex flex-col gap-2 bg-white w-full p-5 rounded-t-3xl">
                <font-awesome :icon="['fas', 'x']" class="ml-auto text-gray-500 cursor-pointer" />
                <NuxtLink class="border-b tf-spartan" @click.prevent="scrollTo('hot-selling', 'HOT SELLING')"
                    to="#hot-selling">HOT SELLING</NuxtLink>
                <NuxtLink class="border-b tf-spartan"
                    @click.prevent="scrollTo(category.slug, category.name.toUpperCase())" :to="`#${category.slug}`"
                    v-for="category in categoryMeals">{{ category.name.toUpperCase() }}</NuxtLink>
            </div>
        </div>
    </transition>
</template>

<script setup>
import { useScrollHandler } from '#imports';

const { isHeaderFixed } = useScrollHandler()
const BDMenuOpen = useState('BDMenuOpen', () => true)
const categoryMeals = useState('categoryMeals', () => [])
const search_query = useState('search_query', () => '')

const searchOpen = ref(false)
const filterOpen = ref(false)
const search = ref(null)
const filter_category = ref('HOT SELLING')

const filterArray = computed(() => {
    const category_names = categoryMeals.value.map(item => item.name)
    return ['HOT SELLING', ...category_names]
})

// Scroll to Section with Correct Offset
const scrollTo = (id, name) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
        const offset = 120;
        const elementPosition = targetElement.offsetTop;

        window.scrollTo({
            top: elementPosition - offset,
            behavior: 'smooth'
        });
    }
    filter_category.value = name;
};

// Handle Search Open & Focus
const openFocus = async () => {
    searchOpen.value = true;
    await nextTick();
    search.value?.focus();
};

// Handle Search Input
const handleSearch = async (event) => {
    search_query.value = event.target.value;
    await nextTick();
};

// Handle Search Focus Out
const handleFocusOut = async (event) => {
    const value = event.target.value.trim();
    if (value.length > 0) return; // Keep open if text exists

    searchOpen.value = false;
    await nextTick();
};
</script>

<style scoped>
/* Fade-In Transition */
.fade-in-enter-active,
.fade-in-leave-active {
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
}

.fade-in-enter-from,
.fade-in-leave-to {
    transform: translateY(-100%);
    opacity: 0;
}

.fade-in-enter-to,
.fade-in-leave-from {
    transform: translateY(0);
    opacity: 1;
}

/* Slide-Up Transition */
.slide-up-enter-active,
.slide-up-leave-active {
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
}

.slide-up-enter-from,
.slide-up-leave-to {
    transform: translateY(100%);
    opacity: 0;
}

.slide-up-enter-to,
.slide-up-leave-from {
    transform: translateY(0);
    opacity: 1;
}
</style>

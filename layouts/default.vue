<template>
    <!-- <div class="lg:mx-10 xl:mx-60"> -->
    <div>
        <NavBar />
        <NuxtPage />
    </div>
    <AppFooter />
    <BtnUp />
</template>

<script setup>
const route = useRoute()
const selected_filter = useLocalStorage('selected_filter', 'Hot Selling')
watchEffect(() => {
    if (route.fullPath) {
        selected_filter.value = 'Hot Selling'
    }
})
</script>

<style scoped></style>
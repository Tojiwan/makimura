<template>
    <!-- <div class="lg:mx-10 xl:mx-60"> -->
    <NavBar />
    <div class="lg:flex flex-col items-center justify-center">
        <NuxtPage class="container"/>
    </div>
    <AppFooter />
    <BtnUp />
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute()
const selected_filter = useLocalStorage('selected_filter', 'Hot Selling')
watchEffect(() => {
    if (route.fullPath) {
        selected_filter.value = 'Hot Selling'
    }
})
</script>

<style scoped></style>
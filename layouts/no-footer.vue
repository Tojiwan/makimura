<template>
    <div>
        <NavBar />
        <NuxtPage />
        <BtnUp />
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
const route           = useRoute()
const selected_filter = useLocalStorage('selected_filter', 'Hot Selling')
watchEffect(() => {
    if (route.fullPath) {
        selected_filter.value = 'Hot Selling'
    }
})
</script>

<style scoped></style>
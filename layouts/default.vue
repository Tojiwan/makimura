<template>
    <div>
        <NavBar />
        <NuxtPage />
        <AppFooter />
    </div>
</template>

<script setup>
const route = useRoute()
const selected_filter = useState('selected_filter', () => 'Hot Selling')
watchEffect(() => {
    if (route.fullPath) {
        selected_filter.value = 'Hot Selling'
    }
})
</script>

<style scoped></style>
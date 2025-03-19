<template>
    <div>
        <NavBar />
        <NuxtPage />
        <Footer />
    </div>
</template>

<script setup>
const route = useRoute()
const selected_filter = useState('selected_filter', ()=>'Hot Selling')
watchEffect(()=>{
    if(route.fullPath){
        selected_filter.value = 'Hot Selling'
    }
    console.log('hehe');
    
})
</script>

<style lang="scss" scoped></style>
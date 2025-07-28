<script setup lang="ts">

</script>
<template>
    <header class="max-w-header w-full mx-auto px-10 py-4.5 bg-blue-light rounded-lg my-10 flex atems-center justify-between">
        <nuxt-link to="/" class="flex items-center" >
            <img src="~/assets/images/logo.svg" alt="">
        </nuxt-link>

        <NavBarComponent />

        <div class="flex items-center gap-x-5">
            <UserDropdownComponent />
            <ButtonComponent>Bok Now</ButtonComponent>
        </div>
        
        
        <div>
            Auth Bar
        </div>
    </header>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
<template>
    <div>
        <div class="relative">
            <div class="roundee-full overflow-hidden h-14 w-14">
                <img 
                    src="/user/user_icon.png" 
                    :alt="`User Icon ${user.firstName} ${user.lastName}`" />
            </div>
            <div 
                v-if="user.active"
                class="absolute top-1 right-1 bg-green-500 rounded-full h-2.5 w-2.5 border border-white"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
const user = ref({
    active: true,
    firstName: 'Serhii',
    lastName: 'Chernyshov',
    icon: '/user/user_icon.png',
})
</script>

<style scoped>

</style>
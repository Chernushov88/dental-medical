<script setup lang="ts">


</script>

<template>
    <div class="default-layout flex flex-col min-h-screen max-w-max mx-auto px-4">
        <HeaderComponent />

        <main class="flex-auto">
            <slot />
        </main>

        <FooterComponent />

    </div>
</template>

<style>
.default-layout {
    @apply text-blue-dark;
}
</style>
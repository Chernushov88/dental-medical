<script setup lang="ts">


</script>

<template>
    <div class="flex flex-col min-h-screen">
        <HeaderComponent />

        <main class="flex-auto">
            <slot />
        </main>

        <FooterComponent />

    </div>
</template>
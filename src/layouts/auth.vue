<template>
  <div
    :class="isReady ? 'opacity-100' : 'opacity-0'"
    class="default-layout flex flex-col min-h-screen max-w-max mx-auto lg:px-4 transition-all duration-500"
  >
    <HeaderComponent class="fixed left-1/2 -translate-x-1/2" />

    <main class="flex-auto">
      <slot />
    </main>

    <FooterComponent />
  </div>
</template>

<script setup lang="ts">
import { useTransitionSections } from '#build/imports';

const { isReady } = useTransitionSections();
</script>

<style lang="scss" scoped></style>

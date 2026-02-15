<template>
  <SectionComponent
    class="h-screen flex flex-col justify-center bg-gradient-to-b from-blue-light to-white"
  >
    <div class="max-w-[414px]">
      <div class="flex flex-col items-center lg:items-start">
        <SectionHeadingComponent class="!mb-3 lg:!mb-2">
          Welcome Back
        </SectionHeadingComponent>

        <DescriptionWrapperComponent class="text-center lg:text-left">
          Discover a better way of spandings with Uifry.
        </DescriptionWrapperComponent>
      </div>

      <div>
        <GoogleBtnComponent />

        <DOr />

        <LoginFormComponent />
      </div>
    </div>
  </SectionComponent>
</template>

<script setup lang="ts">
import LoginFormComponent from '~/components/pages/auth/LoginFormComponent.vue';
import GoogleBtnComponent from '~/components/pages/auth/GoogleBtnComponent.vue';

definePageMeta({
  layout: 'auth',
});
</script>

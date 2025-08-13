<template>
  <div>
    <FirstScreen />
    <ServicesSliderSection />
    <PhoneFormSectionComponent />
    <BookSection />
  </div>
</template>

<script setup lang="ts">
import BookSection from '~/components/pages/home/book/BookSectionComponent.vue';

  import FirstScreen from '@/components/pages/home/firstScreen/FirstScreenComponent.vue'
  import ServicesSliderSection from '@/components/pages/home/services/ServicesSliderSectionComponent.vue'

  import PhoneFormSectionComponent from '@/components/pages/home/phoneForm/PhoneFormSectionComponent.vue'
</script>

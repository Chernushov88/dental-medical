<template>
  <div>
    <FirstScreen />
    <ServicesSliderSection />
    <PhoneFormSectionComponent />
  </div>
</template>

<script setup lang="ts">
  import FirstScreen from '@/components/pages/home/firstScreen/FirstScreenComponent.vue'
  import ServicesSliderSection from '@/components/pages/home/services/ServicesSliderSectionComponent.vue'

  import PhoneFormSectionComponent from '@/components/pages/home/phoneForm/PhoneFormSectionComponent.vue'
</script>

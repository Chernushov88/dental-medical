<template>
  <div>
    <FirstScreen />
    <ServicesSliderSection />
    <PhoneFormSection />
    <BookSection />
    <BenefitsSection />
    <!-- <VideoSection /> -->
    <PlaylistPreview />
  </div>
</template>

<script setup lang="ts">
  import BookSection from '~/components/pages/home/book/BookSectionComponent.vue';
  import FirstScreen from '@/components/pages/home/firstScreen/FirstScreenComponent.vue'
  import ServicesSliderSection from '@/components/pages/home/services/ServicesSliderSectionComponent.vue'
  import PhoneFormSection from '@/components/pages/home/phoneForm/PhoneFormSectionComponent.vue'
  import BenefitsSection from '@/components/pages/home/benefits/BenefitsSectionComponent.vue'
// import VideoSection from '@/components/pages/home/video/VideoSectionComponent.vue';
  import PlaylistPreview from '@/components/pages/home/playListPreview/PlaylistPreviewComponent.vue';

</script>

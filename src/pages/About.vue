<template>
  <div>
    <AboutUsComponent />
    <OurDoctorsComponent />
    <RandomInfoComponent />
    <ServicesSliderSectionComponent class="mb-25 !bg-blue-dark" />
    <PlaylistPreviewComponent />
  </div>
</template>

<script setup lang="ts">
import AboutUsComponent from '~/components/pages/about-as/AboutUsComponent.vue';
import OurDoctorsComponent from '~/components/pages/about-as/OurDoctorsComponent.vue';
import RandomInfoComponent from '~/components/pages/about-as/RandomInfoComponent.vue';
import PlaylistPreviewComponent from '~/components/pages/home/playListPreview/PlaylistPreviewComponent.vue';
import ServicesSliderSectionComponent from '~/components/pages/home/services/ServicesSliderSectionComponent.vue';
</script>

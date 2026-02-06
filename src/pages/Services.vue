<template>
  <div>
    <ServicesMain />
    <ContactFormComponent />
    <PlayListComponent class="!py-25" />
    <MeetSectionComponent />
    <AsksSectionComponent />
    <AskToActionSection />
  </div>
</template>

<script setup lang="ts">
import ContactFormComponent from '~/components/pages/services/ContactFormComponent.vue';
import ServicesMain from '~/components/pages/services/ServicesMainComponent.vue';
import PlayListComponent from '~/components/pages/home/playListPreview/PlaylistPreviewComponent.vue';
import MeetSectionComponent from '~/components/pages/home/meet/MeetSectionComponent.vue';
import AsksSectionComponent from '~/components/pages/home/asks/AsksSectionComponent.vue';
import AskToActionSection from '~/components/pages/home/askToAction/AskToActionSection.vue';
</script>

<style lang="scss" scoped></style>

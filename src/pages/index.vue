<template>
  <div>
    <FirstScreen />
    <ServicesSliderSection />
    <PhoneFormSection />
    <BookSection />
    <BenefitsSection />
    <PlaylistPreview />
    <MeetSection />
    <HappyClientsSection />    

    <AsksSection />
    <AskToActionSection />
  </div>
</template>

<script setup lang="ts">
  import BookSection from '~/components/pages/home/book/BookSectionComponent.vue';
  import FirstScreen from '@/components/pages/home/firstScreen/FirstScreenComponent.vue'
  import ServicesSliderSection from '@/components/pages/home/services/ServicesSliderSectionComponent.vue'
  import PhoneFormSection from '@/components/pages/home/phoneForm/PhoneFormSectionComponent.vue'
  import BenefitsSection from '@/components/pages/home/benefits/BenefitsSectionComponent.vue'
  import PlaylistPreview from '@/components/pages/home/playListPreview/PlaylistPreviewComponent.vue';
  import MeetSection from '@/components/pages/home/meet/MeetSectionComponent.vue';
  import HappyClientsSection from '~/components/pages/home/happyClients/HappyClientsSection.vue';
  import AsksSection from '~/components/pages/home/asks/AsksSectionComponent.vue';
import AskToActionSection from '~/components/pages/home/askToAction/AskToActionSection.vue';

</script>

<template>
  <SectionComponent class="pt-10 pb-25 relative">
    <div
      :style="`height: calc(100% + ${scapeFromTop}px)`"
      class="bg-gradient-to-b from-blue-light to-white absolute w-screen h-[120vh] bottom-0 left-1/2 -translate-x-1/2"
    />
    <div ref="servicesSection" class="flex flex-col items-center">
      <SectionHeadingComponent>
        <MarkedWordComponent>Services</MarkedWordComponent>
      </SectionHeadingComponent>

      <DescriptionWrapperComponent class="max-w-[526px] text-center">
        We use only the best quality materials on the market in order to provide
        the best products to our patients.
      </DescriptionWrapperComponent>
    </div>

    <div class="grid grid-cols-3 gap-x-14 gap-y-12 relative">
      <ServiceCard v-for="(item, i) in items" :key="i" :item="item" />
    </div>
  </SectionComponent>
</template>

<script setup lang="ts">
import ServiceCard from '@/components/pages/home/services/ServiceCardComponent.vue';
import { useServiceStore } from '~/store/useServicesStore.js';
const { items } = storeToRefs(useServiceStore());

const scapeFromTop = ref(0);

const servicesSection = ref<HTMLElement>();

onMounted(
  () =>
    servicesSection.value &&
    (scapeFromTop.value = servicesSection.value.getBoundingClientRect().top),
);
</script>

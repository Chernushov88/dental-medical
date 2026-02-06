<template>
  <SectionComponent class="pt-10 pb-25 relative" firs-gradient-section>
    <div ref="servicesSection" class="flex flex-col lg:items-center">
      <SectionHeadingComponent>
        <MarkedWordComponent>Services</MarkedWordComponent>
      </SectionHeadingComponent>

      <DescriptionWrapperComponent
        class="max-w-[526px] lg:text-center mb-12 lg:mb-20"
      >
        We use only the best quality materials on the market in order to provide
        the best products to our patients.
      </DescriptionWrapperComponent>
    </div>

    <div class="grid lg:grid-cols-3 gap-x-14 gap-y-8 lg:gap-y-12 relative">
      <ServiceCard v-for="(item, i) in items" :key="i" :item="item" />
    </div>
  </SectionComponent>
</template>

<script setup lang="ts">
import ServiceCard from '@/components/pages/home/services/ServiceCardComponent.vue';
import { useServiceStore } from '~/store/useServicesStore.js';
const { items } = storeToRefs(useServiceStore());
</script>

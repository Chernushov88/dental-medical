<template>
  <SectionComponent>
    <div class="flex flex-col items-center">
      <SectionHeadingComponent class="capitalize">
        Meet our
        <MarkedWordComponent>specialists</MarkedWordComponent>
      </SectionHeadingComponent>

      <DescriptionWrapperComponent class="lg:text-center max-w-[480px] mb-0">
        We use only the best quality materials on the market in order to provide
        the best products to our patients.
      </DescriptionWrapperComponent>
    </div>

    <DoctorCardComponent v-for="(item, i) in items" :key="i" v-bind="item" />
  </SectionComponent>
</template>

<script setup>
import { useDoctorsStore } from '~/store/useDoctorsStore';
import DoctorCardComponent from './DoctorCardComponent.vue';

const { items } = useDoctorsStore();
</script>

<style lang="scss" scoped></style>

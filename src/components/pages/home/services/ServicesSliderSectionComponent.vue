<template>
  <SectionComponent
    class="bg-blue-light pt-12.5 pb-8 !px-0 lg:rounded-2lg lg:!px-8 flex flex-col lg:flex-row gap-6"
  >
    <div class="lg:hidden">
      <ClientOnly>
        <swiper-container ref="containerRef" :init="false">
          <swiper-slide v-for="(item, idx) in items" :key="idx" class="px-5">
            <ServiceCard :item="item" />
          </swiper-slide>
        </swiper-container>
      </ClientOnly>
      <SliderArrowsComponent
        class="mt-10"
        @prev="swiper.prev()"
        @next="swiper.next()"
      />
    </div>

    <ServiceCard
      v-for="(item, i) in items"
      v-show="i < 3"
      :key="item.title"
      :item="item"
      class="hidden lg:flex"
    />
  </SectionComponent>
</template>

<script setup lang="ts">
import ServiceCard from '@/components/pages/home/services/ServiceCardComponent.vue';
import { useServiceStore } from '~/store/useServicesStore.js';
const { items } = storeToRefs(useServiceStore());

const containerRef = ref(null);

const swiper = useSwiper(containerRef, {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  slidesPerView: 1,
});

onMounted(() => swiper.instance);
</script>

<template>
  <SectionComponent class="pt-25 pb-16 lg:pb-12">
    <div>
      <client-only>
        <swiper-container
          ref="containerRef"
          class="w-full"
          :slides-per-view="4"
          :space-between="20"
          :loop="true"
          :looped-slides="items.length"
          :slides-per-group="1"
          :centered-slides="false"
          :speed="600"
          :autoplay="{ delay: 8000 }"
          :free-mode="true"
          :breakpoints="{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }"
        >
          <swiper-slide v-for="(item, i) in items" :key="i">
            <HappyClientsCard v-bind="item" />
          </swiper-slide>
        </swiper-container>
      </client-only>
      <SliderArrowsComponent class="mt-10" @prev="goPrev" @next="goNext" />
    </div>
  </SectionComponent>
</template>

<script setup lang="ts">
import { useReviewsStore } from '~/store/useReviewsStore';
import HappyClientsCard from './HappyClientsCard.vue';

const reviewsStore = useReviewsStore();
const { items } = reviewsStore;

const containerRef = ref<any>(null);
const goPrev = () => {
  containerRef.value?.swiper.slidePrev();
};
const goNext = () => {
  containerRef.value?.swiper.slideNext();
};
</script>

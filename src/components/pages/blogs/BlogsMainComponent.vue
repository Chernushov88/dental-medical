<template>
  <SectionComponent class="pt-10 pb-25" first-gradient-section>
    <div ref="blogsSection" class="flex flex-col w-full relative mb-12">
      <SectionHeadingComponent>
        <MarkedWordComponent>Blogs</MarkedWordComponent>
      </SectionHeadingComponent>
      <DescriptionWrapperComponent
        class="max-w-[526px] lg:text-center mb-12 lg:mb-20"
      >
        We use only the best quality materials on the market in order to provide
        the best products to our patients.
      </DescriptionWrapperComponent>

      <div
        class="flex items-center px-5 py-3.5 bg-white border border-gray-50 rounded-md"
      >
        <img
          src="~/assets/images/icons/search.svg"
          alt="Search icon"
          class="h-6 w-6 mr-2.5"
        />

        <input type="text" placeholder="Search" class="placeholder:text-b2" />
      </div>

      <div>
        <client-only>
          <swiper-container
            v-if="items.length"
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
              <BlogItemCardComponent v-bind="item" />
            </swiper-slide>
          </swiper-container>
        </client-only>
        <SliderArrowsComponent
          class="mt-10 relative"
          @prev="goPrev"
          @next="goNext"
        />
      </div>
    </div>
  </SectionComponent>
</template>

<script setup lang="ts">
import BlogItemCardComponent from '../home/blog/BlogItemCardComponent.vue';
import { useBlogStore } from '~/store/useBlogStore';
const blogStore = useBlogStore();
const { items } = blogStore;

const containerRef = ref<any>(null);
const goPrev = () => {
  containerRef.value?.swiper.slidePrev();
};
const goNext = () => {
  containerRef.value?.swiper.slideNext();
};
</script>

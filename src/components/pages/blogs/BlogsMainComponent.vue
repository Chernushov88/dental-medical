<script setup lang="ts">
import BlogItemCardComponent from '../home/blog/BlogItemCardComponent.vue';
import { useBlogStore } from '~/store/useBlogStore';
const { items } = storeToRefs(useBlogStore());

const containerRef = ref(null);

const swiper = useSwiper(containerRef, {
  loop: true,
  autoplay: {
    delay: 2500,
  },
  slidesPerView: 1,
});

/*
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
*/
onMounted(() => swiper.instance);
</script>

<template>
  <SectionComponent first-gradient-section class="pt-10 pb-25">
    <div class="flex flex-col items-center relative mb-12">
      <SectioHeading>
        <MarkedWordComponent>Blogs</MarkedWordComponent>
        <DescriptionWrapperComponent
          class="max-w-[526px] lg:text-center mb-12 lg:mb-20"
        >
          We use only the best quality materials on the market in order to
          provide the best products to our patients.
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
          <ClientOnly>
            <swiper-container ref="containerRef" :init="false">
              <swiper-slide v-for="(item, i) in items" :key="i" class="px-5">
                <BlogItemCardComponent
                  :key="i"
                  v-bind="item"
                  :class="i && 'hidden lg:block'"
                />
              </swiper-slide>
            </swiper-container>
          </ClientOnly>
          <SliderArrowsComponent dark-mode class="mt-10 relative" />
        </div>
      </SectioHeading>
    </div>
  </SectionComponent>
</template>

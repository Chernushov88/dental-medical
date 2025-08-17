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
      v-for="item in items"
      :key="item.title"
      :item="item"
      class="hidden lg:flex"
    />
  </SectionComponent>
</template>

<script setup lang="ts">
  import ServiceCard from '@/components/pages/home/services/ServiceCardComponent.vue'
  import type { ServiceItem } from '~/types/services'

  const items: ServiceItem[] = [
    {
      icon: 'smile',
      title: 'Smile Design',
      description:
        'A smile design is a cosmetic dental procedure that enhances the appearance of your smile.',
      route: '/',
    },
    {
      icon: 'implant',
      title: 'Dental Implants',
      description:
        'Dental implants are artificial tooth roots that provide a permanent base for fixed replacement teeth.',
      route: '/',
    },
    {
      icon: 'teeth',
      title: 'Teeth Whitening',
      description:
        'Teeth whitening is a cosmetic procedure that lightens the color of your teeth.',
      route: '/',
    },
  ]

  const containerRef = ref(null)

  const swiper = useSwiper(containerRef, {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    slidesPerView: 1,
  })

  onMounted(() => swiper.instance)
</script>

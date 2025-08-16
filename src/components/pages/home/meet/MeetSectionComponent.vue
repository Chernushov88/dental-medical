<template>
    <SectionComponent
        fullWidth
        background
        class="flex flex-col items-cente lg:py-14"
    >
        <div class="lg:text-center flex flex-col items-center">
            <SectionHeadingComponent class="capitalize">
                Meet our <MarkedWordComponent>specialists</MarkedWordComponent>
            </SectionHeadingComponent>

            <DescriptionWrapperComponent class="max-w-[480px]">
                We use only the best quality materials on the market in order to provide the best products to our patients.
            </DescriptionWrapperComponent>
        </div>

        <client-only>
            <div class="w-fit relative left-1/2 -translate-x-1/2">
                <swiper-container ref="containerRef" class="w-screen">
                    <swiper-slide 
                        v-for="(item, i) in items"
                        :key="i"
                        class="!w-fit"
                    >
                        <SpecialistsCard v-bind="item" />
                    </swiper-slide>
                </swiper-container>
            </div>
        </client-only>

        <div class="flex items-center justify-center gap-2.5 mt-10">
            <PrevBtnComponent @click="swiper.prev()" />

            <NextBtnComponent @click="swiper.next()" />
        </div>
    </SectionComponent>
</template>

<script setup lang="ts">
import type { TeamItem } from '~/types/team';
import SpecialistsCard from './SpecialistsCardComponent.vue';

const containerRef = ref(null)

const swiper = useSwiper(containerRef, {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 20,
    centeredSlides: true,
})

onMounted(() => swiper.instance)

const items: TeamItem[] = [
    {
        name: 'Jim Carry',
        position: 'Orthodontist',
        photo: './pages/home/team/doctor1.png',
        profileLink: 'https://www.linkedin.com/'
    },
    {
        name: 'Wade Warren',
        position: 'Endodontist',
        photo: './pages/home/team/doctor2.png',
        profileLink: 'https://www.linkedin.com/'
    },
    {
        name: 'Jenny Wilson',
        position: 'Periodontist',
        photo: './pages/home/team/doctor3.png',
        profileLink: 'https://www.linkedin.com/'
    },
    {
        name: 'Jacob Jones',
        position: 'Pediatric Dentist',
        photo: './pages/home/team/doctor4.png',
        profileLink: 'https://www.linkedin.com/'
    },
]
</script>
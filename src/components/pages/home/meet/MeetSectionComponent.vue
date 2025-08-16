<template>
    <SectionComponent
        fullWidth
        background
        class="flex flex-col items-cente pt-16 pb-12 lg:py-14"
    >
        <div class="lg:text-center flex flex-col items-center">
            <SectionHeadingComponent class="capitalize">
                Meet our <MarkedWordComponent>specialists</MarkedWordComponent>
            </SectionHeadingComponent>

            <DescriptionWrapperComponent class="max-w-[480px]">
                We use only the best quality materials on the market in order to provide the best products to our patients.
            </DescriptionWrapperComponent>
        </div>
        <div class="hidden lg:block">
            <client-only>
                <swiper-container ref="containerRef" class="w-screen" :init="false">>
                    <swiper-slide 
                        v-for="(item, i) in items"
                        :key="i"
                        class="!w-fit"> 
                        <SpecialistsCard v-bind="item" /> 
                    </swiper-slide>
                </swiper-container>
            </client-only>
        </div>

        <div class="flex flex-col items-center lg:hidden">
            <div class="flex flex-col gap-8 w-full">
                <template
                    v-for="(item, i) in items"
                    :key="i">
                    <SpecialistsCard
                        v-if="i < 2"
                        v-bind="item"
                    />
                </template>
            </div>
            <ButtonComponent class="mt-10">View all Members</ButtonComponent>
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
    autoplay: {
      delay: 3000,
    },
    centeredSlides: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
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
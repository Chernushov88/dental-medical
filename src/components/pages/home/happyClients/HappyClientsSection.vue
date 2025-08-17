<template>
    <SectionComponent class="pt-25 pb-16 lg:pb-12">
        <div class="flex flex-col lg:items-center lg:text-center">
            <SectionHeadingComponent>
                Our <MarkedWordComponent>Happy Clients</MarkedWordComponent>
            </SectionHeadingComponent>

            <DescriptionWrapperComponent class="max-w-[480px]">
                We use only the best quality materials on the market in order to provide the best products to our patients.
            </DescriptionWrapperComponent>
        </div>

        <div class="mt-2 lg:mt-10 mb-10 lg:mb-12 flex items-center gap-5">
            <HappyClientsCard
                v-for="(item, i) in items"
                :key="i"
                v-bind="item"
                :class="i && 'hidden lg:block'"
            />
        </div>

        <SliderArrowsComponent dark-mode />
    </SectionComponent>
</template>

<script setup lang="ts">
import type { ReviewsItem } from '~/types/reviews';
import HappyClientsCard from './HappyClientsCard.vue';

const items: ReviewsItem[] = [
    {
        name: 'Thomas daniel',
        photo: './pages/home/clients/client1.png',
        stars: 3,
        message: 'Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources.'
    },
    {
        name: 'Alena Alex',
        photo: './pages/home/clients/client2.png',
        stars: 5,
        message: 'Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources.'
    },
    {
        name: 'Thomas Edison',
        photo: './pages/home/clients/client3.png',
        stars: 4,
        message: 'Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources.'
    },
    {
        name: 'Thomas daniel',
        photo: './pages/home/clients/client1.png',
        stars: 5,
        message: 'Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources.'
    },
    {
        name: 'Alena Alex',
        photo: './pages/home/clients/client2.png',
        stars: 2,
        message: 'Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources.'
    },
    {
        name: 'Thomas Edison',
        photo: './pages/home/clients/client3.png',
        stars: 4,
        message: 'Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources.'
    },
]
</script>
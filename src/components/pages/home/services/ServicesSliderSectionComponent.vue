<template>
    <SectionComponent class="bg-blue-light py-12.5 px-5">
        <ServiceCard 
            v-for="item in items"
            :key="item.title"
            :item="item"
            class="mb-5"
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
        description: 'A smile design is a cosmetic dental procedure that enhances the appearance of your smile.',
        route: '/services/smile'
    },
    {
        icon: 'implant',
        title: 'Dental Implants',
        description: 'Dental implants are artificial tooth roots that provide a permanent base for fixed replacement teeth.',
        route: '/services/dental-implants'
    },
    {
        icon: 'teeth',
        title: 'Teeth Whitening',
        description: 'Teeth whitening is a cosmetic procedure that lightens the color of your teeth.',
        route: '/services/teeth-whitening'
    }
]

</script>
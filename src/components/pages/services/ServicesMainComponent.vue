<template>
    <DSection class="pt-10">
        <div class="flex flex-col items-center">
            <DSectionHeading>
                <DMarkedWord>
                    Services
                </DMarkedWord>
            </DSectionHeading>

            <DDescriptionWrapper class="max-w-[526px] text-center">
                We use only the best quality materials on the market in order to provide the best products to our patients.
            </DDescriptionWrapper>
        </div>

        <div>
            <ServiceCard
                v-for="(item, i) in items"
                :key="i"
                :item="item"
            />
        </div>
    </DSection>
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

</script>

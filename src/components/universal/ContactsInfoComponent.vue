<template>
  <div class="box-border flex flex-col gap-5">
    <MapInfoCardComponent />
    <ContactItemComponent
      v-for="(item, i) in cardsData"
      :key="i"
      v-bind="item"
    />
  </div>
</template>

<script setup lang="ts">
import type { InfoItem } from '~/types/contacts';
import { INFO_CARD_ICON } from '~/types/contacts';
const cardsData: InfoItem[] = [
  {
    icon: INFO_CARD_ICON.TIME,
    title: 'Office Timings',
    data: ['Monday - Saturday (9:00am to 5pm)', 'Sunday (Closed)'],
  },
  {
    icon: INFO_CARD_ICON.LOCATION,
    title: 'Emai Address',
    data: ['sergei.chernyshov88@gmail.com'],
  },
  {
    icon: INFO_CARD_ICON.PHONE,
    title: 'Phone Number',
    data: ['+38-097-590-82-74'],
  },
  {
    icon: INFO_CARD_ICON.CHAT,
    title: 'Live chat',
    data: ['+38-097-590-82-74'],
  },
];
</script>

<template>
    <div class="max-w-[630px] flex flex-col gap-5">
        <AccordeonItemComponent
            v-for="(item, i) in items"
            :key="i"
            v-bind="item"
            :active="activeId === i"
            @open="chooseItem(i)"
        />
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import type { AccordeonItem as AccordeonItemType } from '~/types/accordeon/index';
import AccordeonItemComponent from './AccordeonItemComponent.vue';

defineProps<{
    items: AccordeonItemType[]
}>()

const activeId = ref<number | null>(0)

function chooseItem(i: number) {
    activeId.value = activeId.value === i ? null : i
}
</script>
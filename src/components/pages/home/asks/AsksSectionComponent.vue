<template>
    <SectionComponent class="pt-16 lg:pt-12 pb-30">
        <div class="lg:text-center flex flex-col lg:items-center mb-2.5 lg:mb-6">
            <SectionHeaderComponent>
                <MarkedWordComponent>
                    Frequently Ask Question
                </MarkedWordComponent>
                <DescriptionWrapperComponent class="max-w-[450px] text-b2">
                    Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.
                </DescriptionWrapperComponent>
            </SectionHeaderComponent>
        </div>

        <div class="flex justify-center">
            <AccordeonComponent  :items/>
        </div>
    </SectionComponent>    
</template>

<script setup lang="ts">
import AccordeonComponent from '~/components/universal/accordeon/AccordeonComponent.vue';
import type { AccordeonItem } from '~/types/accordeon';

const items: AccordeonItem[] = [
    {
        title: 'What is the best way to contact with you?',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    },
    {
        title: 'What is the best way to contact with you?',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    },
    {
        title: 'What is the best way to contact with you?',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    },
    {
        title: 'What is the best way to contact with you?',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    },
    {
        title: 'What is the best way to contact with you?',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    },
];
</script>

<style scoped>

</style>
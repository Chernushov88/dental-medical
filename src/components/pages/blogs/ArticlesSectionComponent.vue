<template>
    <DSection class="pb-6 lg:pb-25">
        <div class="flex items-center justify-between mb-14">
            <SectionHeadingComponent>
                <MarkedWordComponent>
                    Articles
                </MarkedWordComponent>
            </SectionHeadingComponent>

            <span>Sort by: New</span>
        </div>

        <div class="grid lg:grid-cols-4 gap-5 mb-10">
            <BlogItemCardComponent
                v-for="(item, i) in items"
                :key="i"
                v-bind="item"
                :class="i && 'hidden lg:block'"
            />
        </div>

        <div class="flex justify-center">
            <DButton>Check out more</DButton>
        </div>
    </DSection>
</template>


<script setup lang="ts">
import { useBlogStore } from '~/store/useBlogStore';
import BlogItemCardComponent from '~/components/pages/home/blog/BlogItemCardComponent.vue';

const { items } = storeToRefs(useBlogStore())
</script>
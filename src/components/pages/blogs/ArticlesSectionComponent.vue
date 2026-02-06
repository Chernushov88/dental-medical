<template>
  <SectionComponent class="pb-6 lg:pb-25">
    <div class="flex items-center justify-between mb-14">
      <SectionHeadingComponent>
        <MarkedWordComponent>Articles</MarkedWordComponent>
      </SectionHeadingComponent>

      <DropDownСomponent
        title="Sort by"
        :options="[
          {
            title: 'New',
            value: 'new',
          },
          {
            title: 'Old',
            value: 'old',
          },
        ]"
      />
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
      <ButtonComponent>Check out more</ButtonComponent>
    </div>
  </SectionComponent>
</template>

<script setup lang="ts">
import { useBlogStore } from '~/store/useBlogStore';
import BlogItemCardComponent from '~/components/pages/home/blog/BlogItemCardComponent.vue';

const { items } = storeToRefs(useBlogStore());
</script>

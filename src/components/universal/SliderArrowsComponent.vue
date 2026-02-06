<template>
  <div class="flex items-center justify-center gap-2.5 mt-10">
    <ArrowBtnComponent
      class="swiper-button-prev"
      type="prev"
      :dark-mode
      @click="emit('prev')"
    />
    <ArrowBtnComponent
      class="swiper-button-next"
      type="next"
      :dark-mode
      @click="emit('next')"
    />
  </div>
</template>

<script setup lang="ts">
import ArrowBtnComponent from './ArrowBtnComponent.vue';

withDefaults(defineProps<{ darkMode?: boolean }>(), {
  darkMode: false,
});
const emit = defineEmits<{
  prev: [];
  next: [];
}>();
</script>

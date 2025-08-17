<template>
    <div class="flex items-center justify-center gap-2.5 mt-10">
        <ArrowBtnComponent
            type="prev"
            :dark-mode    
            @click="emit('prev')"
        />
        <ArrowBtnComponent
            type="next"
            :dark-mode
            @click="emit('next')"
        />
    </div>
</template>

<script setup lang="ts">
import ArrowBtnComponent from './ArrowBtnComponent.vue';

withDefaults(defineProps<{ darkMode?: boolean }>(), {
    darkMode: false
})
const emit = defineEmits<{
    prev: [],
    next: []
}>()
</script>
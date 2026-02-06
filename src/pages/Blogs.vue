<template>
  <div>
    <BlogsMainComponent />
    <ArticlesSectionComponent />
    <PlaylistPreviewComponent />
    <AsksSectionComponent />
    <AskToActionSection />
  </div>
</template>

<script setup lang="ts">
import ArticlesSectionComponent from '~/components/pages/blogs/ArticlesSectionComponent.vue';
import BlogsMainComponent from '~/components/pages/blogs/BlogsMainComponent.vue';
import AsksSectionComponent from '~/components/pages/home/asks/AsksSectionComponent.vue';
import PlaylistPreviewComponent from '~/components/pages/home/playListPreview/PlaylistPreviewComponent.vue';
import AskToActionSection from '~/components/pages/home/askToAction/AskToActionSection.vue';
</script>

<style scoped></style>

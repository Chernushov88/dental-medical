<template>
    <SectionComponent class="py-16 lg:py-12">
        <div class="flex items-end justify-between">
            <div class="max-w-[455px]">
                <SectionHeadingComponent>
                    <MarkedWord>
                        News & Articles
                    </MarkedWord>
                </SectionHeadingComponent>

                <DescriptionWrapperComponent class="!mb-0">
                    We use only the best quality materials on the market in order to provide the best products to our patients.
                </DescriptionWrapperComponent>
            </div>

            <ButtonComponent class="hidden lg:block">View All</ButtonComponent>
        </div>

        <div class="mt-12 mb-10 lg:mt-16 lg:mb-12 lg:grid grid-cols-4 gap-5">
            <BlogItemCardComponent
                v-for="(item, i) in items"
                :key="i"
                v-bind="item"
                :class="i && 'hidden lg:block'"
            />
        </div>

        <div class="lg:flex justify-center hidden">
            <ButtonComponent>Check out more</ButtonComponent>
        </div>

        <SliderArrowsComponent
            dark-mode
            class="lg:hidden"
        />
    </SectionComponent>
</template>

<script setup lang="ts">
import type { PostItem } from '~/types/blog';
import BlogItemCardComponent from './BlogItemCardComponent.vue';

const items: PostItem[] = [
    {
        photo: './pages/home/posts/post1.png',
        title: 'Care of your Teeth',
        description: 'Lorem ipsum dolor sit amet consectetur.',
        route: '/',
        author: 'Anita Jackson'
    },
    {
        photo: './pages/home/posts/post2.png',
        title: 'Care of your Teeth',
        description: 'Lorem ipsum dolor sit amet consectetur.',
        route: '/',
        author: 'Anita Jackson'
    },
    {
        photo: './pages/home/posts/post3.png',
        title: 'Care of your Teeth',
        description: 'Lorem ipsum dolor sit amet consectetur.',
        route: '/',
        author: 'Anita Jackson'
    },
    {
        photo: './pages/home/posts/post4.png',
        title: 'Care of your Teeth',
        description: 'Lorem ipsum dolor sit amet consectetur.',
        route: '/',
        author: 'Anita Jackson'
    },
    {
        photo: './pages/home/posts/post5.png',
        title: 'Care of your Teeth',
        description: 'Lorem ipsum dolor sit amet consectetur.',
        route: '/',
        author: 'Anita Jackson'
    },
    {
        photo: './pages/home/posts/post6.png',
        title: 'Care of your Teeth',
        description: 'Lorem ipsum dolor sit amet consectetur.',
        route: '/',
        author: 'Anita Jackson'
    },
    {
        photo: './pages/home/posts/post7.png',
        title: 'Care of your Teeth',
        description: 'Lorem ipsum dolor sit amet consectetur.',
        route: '/',
        author: 'Anita Jackson'
    },
    {
        photo: './pages/home/posts/post8.png',
        title: 'Care of your Teeth',
        description: 'Lorem ipsum dolor sit amet consectetur.',
        route: '/',
        author: 'Anita Jackson'
    },
]
</script>
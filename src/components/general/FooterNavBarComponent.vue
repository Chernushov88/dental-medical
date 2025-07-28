<template>
    <nav class="flex items-center text-blue-dark transition-all">
        <ul 
            class="flex items-center gap-x-10">
            <li
                v-for="item in navItems"
                :key="item.id"
                class="text-b2"
            >
                <nuxt-link :to="item.route">{{ item.title }}</nuxt-link>
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">

const navItems = ref([
    {
        id: '1',
        title: 'Home',
        route: '/',
    },
    {
        id: '2',
        title: 'Services',
        route: '/services',
    },
    {
        id: '3',
        title: 'Blogs',
        route: '/blogs',
    },
    {
        id: '4',
        title: 'About',
        route: '/about',
    },
    {
        id: '5',
        title: 'Contacts',
        route: '/contacts',
    }
])

</script>
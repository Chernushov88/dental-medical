<template>
    <nav class="flex items-center text-blue-dark transition-all">
        <ul 
            class="flex items-center gap-x-9"
            :class="navBarActive ? 'text-b2' : 'text-b3'">
            <li
                v-for="item in navItems"
                :key="item.id"
                class="text-b2"
                :class="item.active ? 'font-semibold' : 'font-medium'"
                @click="changeRoute(item.id)"
            >
                <nuxt-link :to="item.route">{{ item.title }}</nuxt-link>
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
const route = useRoute()

const navItems = ref([
    {
        active: false,
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

const changeRoute = (id: string) => {
    navItems.value = navItems.value.map(item => ({ ...item, active: item.id === id }))
}

const checkRouterPath = () => {
    const id = navItems.value.find(item => item.route === route.path)?.id
    id && changeRoute(id)    
}

onMounted(() => {
    checkRouterPath()
})

const navBarActive = computed(() => {
    return navItems.value.some(item => item.active)
})

watch(() => route.path, () => {
    checkRouterPath()
})

</script>
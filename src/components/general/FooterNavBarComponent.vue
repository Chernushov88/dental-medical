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
import { useNavStore } from '~/store/useNavStore';
const { navItems } = storeToRefs(useNavStore());

</script>
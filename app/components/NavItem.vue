<template>
    <li>
        <NuxtLink :to="navItem.href" class="text-white font-inter font-medium">{{ navItem.title }}</NuxtLink>
    </li>
</template>

<script setup lang="ts">
import type { navItemInterface } from '~/types';

defineProps<{
    navItem: navItemInterface;
}>();
</script>

<style scoped>
.router-link-exact-active {
    @apply text-[#F1522F];
}
</style>
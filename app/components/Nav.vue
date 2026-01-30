<template>
    <nav>
        <ul class="flex justify-center gap-10">
            <NavItem v-for="navItem in navItems" :key="navItem.id" :navItem />
        </ul>
    </nav>
</template>

<script setup lang="ts">
import { useGeneralStore } from '~/stores/GeneralStore';

const { navItems } = useGeneralStore();
</script>

<style scoped></style>
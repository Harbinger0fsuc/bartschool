<template>
    <ul class="text-center flex justify-center gap-2">
        <li v-for="page in totalPages" :key="page">
            <button class="inline-block p-2 cursor-pointer" :class="{ 'text-[#F1522F]': currentPage === page }"
                @click="setPage(page)">{{
                    page }}</button>
        </li>
    </ul>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const route = useRoute();

const props = defineProps<{
    totalPages: number;
    currentPage: number;
    setPage: (pageNumber: number) => void;
}>();

watch(() => props.currentPage, (newVal, oldVal) => {
    router.push({
        query: {
            ...route.query,
            page: props.currentPage || undefined, // undefined removes the query if input is empty
        },
    });
}, { immediate: true });
</script>

<style scoped></style>
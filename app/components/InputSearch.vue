<template>
    <div class="relative w-full max-w-116.5">
        <input type="search"
            class="block w-full pt-3 pr-5 pb-3 pl-10 xl:pt-5.25 xl:pr-6 xl:pb-5.25 xl:pl-14 bg-[rgba(255,255,255,0.25)] border border-solid border-white rounded-2xl backdrop-blur-[6.349999904632568px]"
            id="search" name="search" v-model="searchQuery" />
        <Icon name="tabler:search" size="24" class="absolute top-[50%] left-3 translate-y-[-50%]" />
    </div>
</template>

<script setup lang="ts">
import { usePostsStore } from "~/stores/PostsStore";
import { storeToRefs } from "pinia";

const postsStore = usePostsStore();
const { searchQuery } = storeToRefs(postsStore);
</script>

<style scoped></style>
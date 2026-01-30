<template>
    <ul class="grid grid-cols-1 gap-10 mb-14 md:grid-cols-2 md:mb-28 2xl:grid-cols-3">
        <li v-for="post in posts" :key="post.id">
            <Post :post />
        </li>
    </ul>

    <Pagination v-if="posts.length > 0" :totalPages :setPage="setPage" :currentPage="page" />
</template>

<script setup lang="ts">
import { usePostsStore } from '~/stores/PostsStore';

const postsStore = usePostsStore();
const { posts, totalPages, page } = storeToRefs(postsStore);
const { fetchPosts, setPage } = postsStore;

await useAsyncData("fetch-posts", async () => {
    await fetchPosts();
});
</script>
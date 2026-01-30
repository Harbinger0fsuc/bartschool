<template>
    <section class="py-15 single-post">
        <div class="container mx-auto px-4">
            <div class="mb-10">
                <NuxtLink :to="{ path: '/blog', query: { page: 1 } }" class="underline">News
                    & blog</NuxtLink> / <span v-if="singlePost?.title">{{ singlePost.title
                    }}</span>
            </div>

            <NuxtImg v-if="singlePost?.featuredImage" :src="singlePost?.featuredImage"
                class="block w-[60%] aspect-video mx-auto mb-6" />

            <h1 class="font-bold text-4xl lg:text-6xl text-center mb-6">{{ singlePost?.title }}</h1>

            <div v-html="singlePost?.description"></div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';
import { usePostsStore } from '~/stores/PostsStore';

const postsStore = usePostsStore();
const { singlePost, page, searchQuery } = storeToRefs(postsStore);
const { getSinglePost } = postsStore;

const route = useRoute();
const id = route.params.id;
const idToNumber = Number(id);

await useAsyncData(`post-${id}`, async () => {
    await getSinglePost(idToNumber);
})

onBeforeRouteLeave((to, from) => {
    page.value = 1;
    searchQuery.value = "";
});
</script>
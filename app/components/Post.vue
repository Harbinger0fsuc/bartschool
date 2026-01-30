<template>
    <article>
        <header class="mb-5 rounded-2xl overflow-hidden aspect-video">
            <NuxtLink :to="`/blog/${post.id}`">
                <NuxtImg v-if="post.thumbnail" :src="post.thumbnail" class="w-full h-full object-cover" />
            </NuxtLink>
        </header>

        <div class="flex gap-4 justify-between">
            <h3 class="font-bold text-3xl">
                <NuxtLink :to="`/blog/${post.id}`">
                    {{ post.title }}
                </NuxtLink>
            </h3>

            <time class="basis-30 text-[15px] text-right text-[#F1522F] font-medium" :datetime="post.created_at">{{
                useDateFormat(post.created_at, "DD.MM.YYYY", {
                    locales: "en-US"
                })
            }}</time>
        </div>
    </article>
</template>

<script setup lang="ts">
import { useDateFormat } from '@vueuse/core';
import type { Post } from "~/types";

defineProps<{
    post: Post
}>();
</script>
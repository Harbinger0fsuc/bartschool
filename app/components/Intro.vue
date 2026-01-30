<template>
    <section
        class="relative isolate pt-20 pb-25 md:pt-30 md:pb-35 xl:pt-57.75 xl:pb-49.5 after:absolute after:inset-0 after:block after:bg-[rgba(12,20,28,0.30)] after:z-[-1]">
        <div class="container mx-auto px-4">
            <div class="text-white flex flex-col items-center">
                <h1 class="uppercase text-5xl md:text-6xl xl:text-[90px] font-bold leading-[1.11] mb-4">{{ title }}</h1>

                <slot />
            </div>
        </div>

        <NuxtImg v-if="image" :src="image" class="absolute inset-0 w-full h-full object-cover z-[-1]" aria-hidden="true"
            loading="lazy" />
    </section>
</template>

<script setup lang="ts">
defineProps<{
    image: string;
    title: string;
}>();
</script>

<style scoped></style>
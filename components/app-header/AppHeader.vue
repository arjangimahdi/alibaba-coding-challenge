<template>
    <div class="app-header w-full px-4 py-5 bg-element_scheme_background text-element_scheme_text">
        <!-- TODO - fix the shadow issue -->
        <div class="container mx-auto">
            <div class="app-header-inner flex justify-between items-center">
                <span class="text-xl font-extrabold">{{ title }}</span>
                <app-button @click="emit('toggle-dark-mode')" class="font-semibold">
                    <template #prepend> <i :class="isDark ? 'icon-sun' : 'icon-moon'"></i> </template>
                    Dark Mode
                </app-button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Header {
    title: string;
}

withDefaults(defineProps<Header>(), {
    title: "Header Title",
});

const emit = defineEmits<{
    (e: "toggle-dark-mode"): void;
}>();

const isDark = inject("isDark");
</script>

<style lang="scss">
@import "~/assets/scss/components/app-header.scss";
</style>

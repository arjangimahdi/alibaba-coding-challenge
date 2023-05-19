<template>
    <header class="app-header w-full px-4 py-5 bg-element_scheme_background text-element_scheme_text">
        <!-- TODO - fix the shadow issue -->
        <div class="container mx-auto">
            <div class="app-header-inner flex justify-between items-center">
                <span class="text-xl font-extrabold">{{ title }}</span>
                <app-button @click="emit('toggle-dark-mode')" class="font-semibold" size="md" flat>
                    <template #prepend> <i :class="_isDark ? 'icon-sun' : 'icon-moon'"></i> </template>
                    Dark Mode
                </app-button>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import { inject, ref } from "vue";
import AppButton from "../app-button/AppButton.vue";

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

const _isDark = ref(isDark);
</script>

<style lang="scss">
@import "~/assets/scss/components/app-header.scss";
</style>

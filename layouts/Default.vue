<template>
    <div
        class="default-layout h-screen overflow-hidden"
        :class="[isDark ? 'element-scheme-dark' : 'element-scheme-light']"
    >
        <app-header title="Where in the world?" @toggle-dark-mode="toggleDark" />
        <main class="default-layout-outer bg-body_scheme_background">
            <div class="container mx-auto py-10">
                <div class="default-layout-inner overflow-y-auto">
                    <slot />
                </div>
            </div>
        </main>
    </div>
</template>

<script setup lang="ts">
const isDark = ref<boolean>(false);

onMounted(() => {
    isDark.value = localStorage.getItem("color-scheme") === "dark";
});

function toggleDark() {
    localStorage.setItem("color-scheme", isDark.value ? "light" : "dark");
    isDark.value = !isDark.value;
}

provide("isDark", isDark);
</script>

<style lang="scss">
@import "~/assets/scss/layouts/default.scss";
</style>

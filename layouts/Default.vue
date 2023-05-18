<template>
    <div
        class="default-layout h-screen bg-body_scheme_background overflow-hidden"
        :class="[isDark ? 'element-scheme-dark' : 'element-scheme-light']"
    >
        <app-header title="Where in the world?" @toggle-dark-mode="toggleDark" />
        <main class="default-layout-outer">
            <div class="container mx-auto">
                <div class="default-layout-inner py-8 my-4 px-4 overflow-y-auto scrollable">
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

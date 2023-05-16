<template>
    <button class="app-button flex justify-center items-center" :class="[`size-${size}`, flat ? 'flat' : '']">
        <div class="app-button-prepend-icon mr-2" v-if="hasPrepend">
            <slot name="prepend" />
        </div>
        <slot />
        <div class="app-button-append-icon" v-if="hasAppend"><slot name="append" /></div>
    </button>
</template>

<script setup lang="ts">
export interface Props {
    size: string;
    flat: boolean;
}

withDefaults(defineProps<Props>(), {
    size: "md",
    flat: false,
});

const slots = useSlots();

const hasAppend = computed(() => {
    return !!slots.append;
});
const hasPrepend = computed(() => {
    return !!slots.prepend;
});
</script>

<style lang="scss">
@import "~/assets/scss/components/app-button.scss";
</style>

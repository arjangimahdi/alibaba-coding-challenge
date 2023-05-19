<template>
    <div
        class="app-input bg-element_scheme_background text-element_scheme_placeholder"
        :class="[`size-${size}`, hasAppend() ? 'has-append' : '', hasPrepend() ? 'has-prepend' : '']"
    >
        <div v-if="hasPrepend()" class="app-input-prepend">
            <slot name="prepend" />
        </div>

        <input
            :id="id"
            :type="type"
            autocomplete="off"
            :value="modelValue"
            @input="InputHandler"
            :placeholder="placeholder"
            class="bg-element_scheme_background text-element_scheme_text placeholder-element_scheme_placeholder"
        />

        <div v-if="hasAppend()" class="app-input-append">
            <slot name="append" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useSlots } from "vue";

export interface Props {
    id: string;
    modelValue: string;
    placeholder: string;
    type: string;
    size: string;
}

const props = withDefaults(defineProps<Props>(), {
    type: "text",
    size: "md",
});

const slots = useSlots();

const emit = defineEmits(["update:modelValue", "append-click", "prepend-click"]);

function hasAppend() {
    return !!slots.append;
}
function hasPrepend() {
    return !!slots.prepend;
}

function InputHandler(event: Event) {
    emit("update:modelValue", (event.target as HTMLInputElement).value);
}
// function appendClickHandler(event: Event) {
//     emit("append-click", event);
// }
// function prependClickHandler(event: Event) {
//     emit("prepend-click", event);
// }
</script>

<style lang="scss">
@import "@/assets/scss/components/app-input.scss";
</style>

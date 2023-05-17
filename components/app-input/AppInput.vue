<template>
    <div
        class="app-input bg-element_scheme_background text-element_scheme_placeholder"
        :class="[
            `size-${size}`,
            invalid ? 'invalid' : '',
            disabled ? 'disabled' : '',
            hasAppend() ? 'has-append' : '',
            hasPrepend() ? 'has-prepend' : '',
        ]"
    >
        <div v-if="hasPrepend()" class="app-input-prepend" @click="prependClickHandler">
            <slot name="prepend" />
        </div>

        <input
            :id="id"
            :type="type"
            autocomplete="off"
            :value="modelValue"
            :disabled="disabled"
            @input="InputHandler"
            :placeholder="placeholder"
            :class="[appendSeparator(), prependSeparator()]"
            class="bg-element_scheme_background text-element_scheme_text placeholder-element_scheme_placeholder"
        />

        <!-- TODO - change placeholder color to #858585 -->

        <div v-if="hasAppend()" class="app-input-append" @click="appendClickHandler">
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
    hasSeparator: boolean;
    type: string;
    size: string;
    disabled: boolean;
    invalid: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    type: "text",
    size: "md",
    hasSeparator: false,
    disabled: false,
    invalid: false,
});

const slots = useSlots();

const emit = defineEmits(["update:modelValue", "append-click", "prepend-click"]);

function hasAppend() {
    return !!slots.append;
}
function hasPrepend() {
    return !!slots.prepend;
}
function appendSeparator() {
    return hasAppend() && props.hasSeparator ? "append-separator" : "";
}
function prependSeparator() {
    return hasPrepend() && props.hasSeparator ? "prepend-separator" : "";
}

function InputHandler(event: Event) {
    emit("update:modelValue", (event.target as HTMLInputElement).value);
}
function appendClickHandler(event: Event) {
    emit("append-click", event);
}
function prependClickHandler(event: Event) {
    emit("prepend-click", event);
}
</script>

<style lang="scss">
@import "@/assets/scss/components/app-input.scss";
</style>

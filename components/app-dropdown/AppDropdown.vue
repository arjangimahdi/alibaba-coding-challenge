<template>
    <!-- TODO - change the component to setup ts -->
    <div
        tabindex="0"
        class="app-dropdown"
        :class="isOpen ? 'open' : ''"
        @blur.capture="focusChangeHandler"
        @focus.capture="focusChangeHandler"
    >
        <div
            class="app-dropdown-input bg-element_scheme_background text-element_scheme_placeholder"
            @click="isOpen = true"
        >
            <span class="app-dropdown-input-name">
                {{ _value ?? _placeholder }}
            </span>
            <i :class="isOpen ? 'icon-chevron-up' : 'icon-chevron-down'"></i>
        </div>
        <div class="app-dropdown-dropdown bg-element_scheme_background text-element_scheme_placeholder" v-show="isOpen">
            <div class="app-dropdown-search" v-if="searchable">
                <input
                    type="text"
                    autocomplete="off"
                    id="app-dropdown-search"
                    @input="searchOptionsHandler"
                    placeholder="Search in options"
                />
            </div>
            <div class="app-dropdown-dropdown-inner" v-if="options.length > 0">
                <div
                    :key="item[keyName]"
                    v-for="item in options"
                    class="app-dropdown-dropdown-item"
                    @click="selectOptionHandler(item)"
                    :class="selectedOption && item[keyName] === selectedOption[keyName] ? 'active' : ''"
                >
                    <slot v-if="hasCustomItem" name="item" v-bind:item="item" />
                    <div v-else class="app-dropdown-dropdown-item-inner">
                        {{ name ? item[name] : item }}
                    </div>
                </div>
            </div>
            <div v-else class="app-dropdown-not-found">
                <h5>Result Not Found!</h5>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        keyName: {
            type: String,
        },
        name: {
            type: String,
        },
        items: {
            type: Array,
        },
        option: {
            type: Object,
        },
        placeholder: {
            type: String,
        },
        searchable: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        hasCustomItem() {
            return !!this.$slots.item;
        },
        _placeholder() {
            return this.placeholder ?? "Select an option";
        },
        _value() {
            if (this.name) {
                return this.selectedOption ? this.selectedOption[this.name] : undefined;
            } else {
                return this.selectedOption || undefined;
            }
        },
    },
    methods: {
        selectOptionHandler(option) {
            this.isOpen = false;
            this.selectedOption = option;
            this.$emit("update:option", option);
        },
        searchOptionsHandler(e) {
            const regex = new RegExp(e.target.value, "gi");
            this.options = this.items.filter((option) => {
                if (option[this.name].search(regex) > -1) {
                    return option;
                }
            });
        },
        focusChangeHandler(e) {
            if (e.type == "focus" && e.relatedTarget === null) {
                this.isOpen = true;
            }
            if (e.type == "blur") {
                setTimeout(() => {
                    if (e.relatedTarget !== null) {
                        if (e.relatedTarget.id !== "app-dropdown-search") {
                            this.isOpen = false;
                        }
                    } else {
                        this.isOpen = false;
                    }
                }, 200);
            }
        },
    },
    data() {
        return {
            isOpen: false,
            options: this.items,
            selectedOption: this.option,
        };
    },
};
</script>

<style lang="scss">
@import "~/assets/scss/components/app-dropdown.scss";
</style>

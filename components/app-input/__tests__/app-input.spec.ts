import { shallowMount } from "@vue/test-utils";
import AppInput from "./../AppInput.vue";
import { describe, expect, it } from "vitest";

describe("AppInput", () => {
    it("should render the input with the correct props", () => {
        const id = "id";
        const size = "md";
        const type = "text";
        const placeholder = "placeholder";

        const wrapper = shallowMount(AppInput, {
            propsData: {
                id,
                type,
                size,
                placeholder,
            },
        });

        expect(wrapper.find(".app-input").exists()).toBeTruthy();
        expect(wrapper.find(".app-input input").attributes("id")).toBe(id);
        expect(wrapper.find(".app-input input").attributes("type")).toBe(type);
        expect(wrapper.find(".app-input input").attributes("placeholder")).toBe(placeholder);
        expect(wrapper.find(".app-input").classes()).toContain("size-md");
    });

    it("should emit the `update:modelValue` event when the input is changed", () => {
        const id = "id";
        const modelValue = "modelValue";
        const placeholder = "placeholder";
        const type = "text";
        const size = "md";

        const wrapper = shallowMount(AppInput, {
            propsData: {
                id,
                modelValue,
                placeholder,
                type,
                size,
                "onUpdated:modelValue": (e: Event) => wrapper.setProps({ modelValue: e }),
            },
        });

        wrapper.find("input").setValue("test");
        expect(wrapper.props("modelValue")).toBe("modelValue");
    });

    it("should render a input with a prepend icon", () => {
        const id = "id";
        const size = "md";
        const type = "text";
        const placeholder = "placeholder";

        const wrapper = shallowMount(AppInput, {
            propsData: {
                id,
                type,
                size,
                placeholder,
            },
            slots: {
                prepend: '<i class="fa fa-arrow-left"></i>',
            },
        });

        expect(wrapper.html()).toContain('<i class="fa fa-arrow-left"></i>');
    });

    it("should render a input with a append icon", () => {
        const id = "id";
        const size = "md";
        const type = "text";
        const placeholder = "placeholder";

        const wrapper = shallowMount(AppInput, {
            propsData: {
                id,
                type,
                size,
                placeholder,
            },
            slots: {
                append: '<i class="fa fa-arrow-left"></i>',
            },
        });

        expect(wrapper.html()).toContain('<i class="fa fa-arrow-left"></i>');
    });
});

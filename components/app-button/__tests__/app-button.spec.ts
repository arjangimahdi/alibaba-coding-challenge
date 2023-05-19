import { mount, shallowMount } from "@vue/test-utils";
import AppButton from "./../AppButton.vue";
import { describe, expect, it } from "vitest";

describe("AppButton", () => {
    it("should render the correct button", () => {
        const wrapper = shallowMount(AppButton);
        expect(wrapper.text()).toBe("");
        expect(wrapper.classes()).toContain("app-button");
        expect(wrapper.classes()).toContain("flex");
        expect(wrapper.classes()).toContain("justify-center");
        expect(wrapper.classes()).toContain("items-center");
        expect(wrapper.classes()).toContain("text-element_scheme_text");
        expect(wrapper.classes()).toContain("bg-element_scheme_background");
        expect(wrapper.classes()).not.toContain("flat");
    });

    it("should render a button with the specified size", () => {
        const wrapper = shallowMount(AppButton, {
            propsData: {
                size: "md",
            },
        });
        expect(wrapper.classes()).toContain("size-md");
    });

    it("should render a flat button", () => {
        const wrapper = shallowMount(AppButton, {
            propsData: {
                flat: true,
            },
        });
        expect(wrapper.classes()).toContain("flat");
    });

    it("should render a button with a prepend icon", () => {
        const wrapper = mount(AppButton, {
            slots: {
                prepend: '<i class="fa fa-arrow-left"></i>',
            },
        });
        expect(wrapper.html()).toContain('<i class="fa fa-arrow-left"></i>');
    });

    it("should render a button with an append icon", () => {
        const wrapper = mount(AppButton, {
            slots: {
                append: '<i class="fa fa-arrow-left"></i>',
            },
        });
        expect(wrapper.html()).toContain('<i class="fa fa-arrow-left"></i>');
    });
});

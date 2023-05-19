import { nextTick } from "vue";
import AppDropdown from "./AppDropdown.vue";
import { shallowMount } from "@vue/test-utils";
import { beforeEach, describe, expect, it, vi } from "vitest";

describe("AppDropdown", () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });
    it("should render the dropdown with the correct props", () => {
        const options = ["Option 1", "Option 2"];
        const selectedOption = options[0];

        const wrapper = shallowMount(AppDropdown, {
            propsData: {
                items: options,
                selectedOption,
            },
        });

        expect(wrapper.find(".app-dropdown").exists()).toBeTruthy();
        expect(wrapper.find(".app-dropdown-input").text()).toBe("Select an option");
        expect(wrapper.findAll(".app-dropdown .app-dropdown-dropdown-item").length).toBe(2);
        expect(wrapper.findAll(".app-dropdown .app-dropdown-dropdown-item")[0].text()).toBe("Option 1");
        expect(wrapper.findAll(".app-dropdown .app-dropdown-dropdown-item")[1].text()).toBe("Option 2");
    });

    it("should open the dropdown when the input is clicked", async () => {
        const options = ["Option 1", "Option 2"];
        const selectedOption = options[0];

        const wrapper = shallowMount(AppDropdown, {
            propsData: {
                items: options,
                selectedOption,
            },
        });

        await wrapper.find(".app-dropdown").trigger("focus");

        expect(wrapper.find(".app-dropdown").classes()).toContain("open");
    });

    it("should close the dropdown when the input is blurred", async () => {
        const options = ["Option 1", "Option 2"];
        const selectedOption = options[0];

        const wrapper = shallowMount(AppDropdown, {
            propsData: {
                items: options,
                selectedOption,
            },
        });

        await wrapper.find(".app-dropdown").trigger("focus");

        expect(wrapper.find(".app-dropdown").classes()).toContain("open");

        await wrapper.find(".app-dropdown").trigger("blur");

        vi.advanceTimersByTime(500);

        await nextTick();

        expect(wrapper.find(".app-dropdown").classes()).not.toContain("open");
    });

    it.skip("should select the option when it is clicked", () => {
        const options = ["Option 1", "Option 2"];
        const selectedOption = options[0];

        const wrapper = shallowMount(AppDropdown, {
            propsData: {
                items: options,
                selectedOption,
            },
        });

        wrapper.findAll(".app-dropdown .app-dropdown-dropdown-item")[1].trigger("click");

        expect(wrapper.find(".app-dropdown-input-name").text()).toBe("Option 2");
        expect(wrapper.find(".app-dropdown .app-dropdown-dropdown-item.active").text()).toBe("Option 2");
    });
});

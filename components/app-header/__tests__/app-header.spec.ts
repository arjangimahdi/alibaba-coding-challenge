import AppHeader from "./../AppHeader.vue";
import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import AppButton from "./../../app-button/AppButton.vue";

describe("AppHeader", () => {
    it("should render the header with the correct props", () => {
        const title = "Header Title";

        const wrapper = mount(AppHeader, {
            propsData: {
                title,
            },
            stubs: {
                AppButton,
            },
        });

        expect(wrapper.find(".app-header").exists()).toBeTruthy();
        expect(wrapper.find(".app-header .app-header-inner .text-xl").text()).toBe(title);
        expect(wrapper.find(".app-header .app-header-inner .app-button").text()).toBe("Dark Mode");
        expect(wrapper.find(".app-header .app-header-inner .app-button i").classes()).toContain("icon-moon");
    });

    it.skip("should toggle dark mode when the button is clicked", async () => {
        const title = "Header Title";
        const isDark = false;

        const wrapper = mount(AppHeader, {
            propsData: {
                title,
                isDark,
            },
            stubs: {
                AppButton,
            },
        });

        const colorSchemeToggleButton = wrapper.findComponent({
            name: "app-button",
        });

        await colorSchemeToggleButton.trigger("click");

        expect(wrapper.find(".app-header .app-header-inner .app-button i").classes()).toContain("icon-sun");

        expect(wrapper.vm.isDark).toBeTruthy();
    });
});

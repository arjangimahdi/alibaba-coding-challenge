import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import CountriesList from "../index.vue";

describe("CountriesList", () => {
    it("should have a search input", () => {
        const wrapper = mount(CountriesList);
        const searchInput = wrapper.find('input[type="text"]');
        expect(searchInput).toBeDefined();
    });

    it("should have a dropdown menu", () => {
        const wrapper = mount(CountriesList);
        const dropdownMenu = wrapper.find(".app-dropdown");
        expect(dropdownMenu).toBeDefined();
    });
});

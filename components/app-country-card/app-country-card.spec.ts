import { mount, shallowMount } from "@vue/test-utils";
import AppCountryCard from "./AppCountryCard.vue";
import { describe, expect, it } from "vitest";

describe("AppButton", () => {
    it("should render the country card component", () => {
        const wrapper = mount(AppCountryCard, {
            propsData: {
                capital: ["London"],
                image: "https://example.com/image.jpg",
                title: "United Kingdom",
                region: "Europe",
                population: 67881000,
            },
        });

        expect(wrapper.html()).toContain("United Kingdom");
        expect(wrapper.html()).toContain("67,881,000");
        expect(wrapper.html()).toContain("Europe");
        expect(wrapper.html()).toContain("London");
    });
});

/*

*/

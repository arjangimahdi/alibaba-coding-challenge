import { fetchAllCountries } from "~/api/app-api";

export const useAppStore = defineStore("app-store", {
    state: () => ({
        countries: [],
    }),
    getters: {
        // getCountriesList() {
        // }
    },
    actions: {
        async getAllCountries() {
            const { error, data } = await fetchAllCountries();
            if (data) {
                this.countries = data.value.map((country) => {
                    return country;
                });
            }
        },
    },
});

import { sortBy, filter } from "lodash";
import { fetchAllCountries } from "~/api/app-api";

export const useAppStore = defineStore("app-store", {
    state: () => ({
        allCountries: [],
        countries: [],
    }),
    actions: {
        async getAllCountries() {
            const { error, data } = await fetchAllCountries();
            if (data) {
                this.countries = sortBy(data.value, [
                    function (country) {
                        return country.population;
                    },
                ]).reverse();
                this.allCountries = data.value;
            }
        },
        async filterCountries(query: string) {
            const filteredCountries = filter(this.allCountries, (country) => {
                const pattern = query
                    .split("")
                    .map((x) => {
                        return `(?=.*${x})`;
                    })
                    .join("");
                const regex = new RegExp(`${pattern}`, "g");

                if (country.name.common.match(regex)) {
                    return country;
                }
            });
            this.countries = sortBy(filteredCountries, [
                function (country) {
                    return country.population;
                },
            ]).reverse();
        },
        filterCountriesByRegion(region: string) {
            this.countries = filter(this.allCountries, ["region", region]);
        },
    },
});

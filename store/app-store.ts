import _ from "lodash";
import { fetchAllCountries, fetchCountryBorders, fetchCountryByCode } from "~/api/app-api";

export const useAppStore = defineStore("app-store", {
    state: () => ({
        allCountries: [],
        countries: [],
        country: {},
        borderCountries: [],
    }),
    getters: {
        getNativeName(): string {
            return this.country.altSpellings[1];
        },
        getPopulation(): string {
            return this.country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
        getTopLevelDomain(): string {
            return this.country.tld.join(",");
        },
        getCapital(): string {
            return this.country.capital.join(",");
        },
        getCurrencies(): string {
            const currencies = [];
            if (!_.isEmpty(this.country.currencies)) {
                _.each(this.country.currencies, ({ name }) => {
                    currencies.push(name);
                });
            }

            return currencies.join(",");
        },
        getLanguages() {
            const languages = [];

            _.each(this.country.languages, (lang) => {
                languages.push(lang);
            });

            return languages.join(", ");
        },
        getCountryBorders() {
            const borderCountries = [];

            _.each(this.borderCountries, (country) => {
                console.log(country);

                borderCountries.push({
                    ccn3: country.ccn3,
                    name: country.name,
                });
            });

            return borderCountries;
        },
    },
    actions: {
        async getAllCountries() {
            const { error, data } = await fetchAllCountries();
            if (data) {
                this.countries = _.sortBy(data.value, [
                    function (country) {
                        return country.population;
                    },
                ]).reverse();
                this.allCountries = data.value;
            }
        },
        async getCountryByCode(code: string) {
            const { error, data } = await fetchCountryByCode(code);
            if (data) {
                this.country = data.value[0];
            }
        },
        async filterCountries(query: string) {
            const filteredCountries = _.filter(this.allCountries, (country) => {
                const pattern = query
                    .split("")
                    .map((x) => {
                        return `(?=.*${x})`;
                    })
                    .join("");
                const regex = new RegExp(`${pattern}`, "gi");

                if (country.name.common.match(regex)) {
                    return country;
                }
            });
            this.countries = _.sortBy(filteredCountries, [
                function (country) {
                    return country.population;
                },
            ]).reverse();
        },
        filterCountriesByRegion(region: string) {
            this.countries = _.filter(this.allCountries, ["region", region]);
        },
        async getBorderCountries(borders: string[]) {
            const codes = _.take(borders, 3).join(",");

            const { error, data } = await fetchCountryBorders(codes);
            if (data) {
                this.borderCountries = data.value;
            }
        },
    },
});

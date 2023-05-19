import _ from "lodash";
import type { Country, BorderCountry } from "~/types/country.type";
import { fetchAllCountries, fetchCountryBorders, fetchCountryByCode } from "~/api/app-api";

export const useAppStore = defineStore("app-store", {
    state: () => ({
        allCountries: <Country[]>[],
        countries: <Country[]>[],
        country: <Country>{},
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
        getCapital(): string | undefined {
            if (this.country.capital) {
                return this.country.capital.join(",");
            }
        },
        getCurrencies(): string {
            const currencies: string[] = [];
            if (!_.isEmpty(this.country.currencies)) {
                _.each(this.country.currencies, ({ name }) => {
                    currencies.push(name);
                });
            }

            return currencies.join(",");
        },
        getLanguages(): string {
            const languages: string[] = [];

            _.each(this.country.languages, (lang) => {
                languages.push(lang);
            });

            return languages.join(", ");
        },
        getCountryBorders(): BorderCountry[] {
            const borderCountries: BorderCountry[] = [];

            _.each(this.borderCountries, (country: Country) => {
                borderCountries.push({
                    ccn3: country.ccn3,
                    name: country.name,
                });
            });

            return borderCountries;
        },
    },
    actions: {
        async getAllCountries(): Promise<any> {
            const { error, data } = await fetchAllCountries();
            if (data) {
                this.countries = _.sortBy(data.value, ["population"]).reverse();
                this.allCountries = data.value;
            }
        },
        async getCountryByCode(code: string): Promise<any> {
            const { error, data } = await fetchCountryByCode(code);
            if (data) {
                this.country = data.value[0];
            }
        },
        async filterCountries(query: string): Promise<any> {
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
            this.countries = _.sortBy(filteredCountries, ["population"]).reverse();
        },
        filterCountriesByRegion(region: string): void {
            this.countries = _.filter(this.allCountries, ["region", region]);
        },
        async getBorderCountries(borders: string[]): Promise<any> {
            const codes = _.take(borders, 3).join(",");

            const { error, data } = await fetchCountryBorders(codes);
            if (data) {
                this.borderCountries = data.value;
            }
        },
    },
});

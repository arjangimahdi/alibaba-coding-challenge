// import countries from '~/data/countries.json';
// import { fetchAllCountries } from "~/api/app-api";

// export const useAppStore = defineStore("app-store", {
//     state: () => ({
//         countries: [],
//         chunked: [],
//         // pagination
//         perPage: 20,
//         lastPage: 0,
//         currentPage: 0,
//     }),
//     getters: {
//         // getCountriesList() {
//         // }
//     },
//     actions: {
//         async getAllCountries() {
//           this.countries = countries;

//             // const { error, data } = await fetchAllCountries();
//             // if (data) {
//             //     for (let i = 0; i < data.value.length; i += this.perPage) {
//             //         const chunk = data.value.slice(i, i + this.perPage);
//             //         this.countries.push(chunk);
//             //     }
//             // }
//         },
//         async getCurrentChunk() {
//           this.chunked.push(this.countries[this.currentPage]);
//           this.currentPage++;
//         },
//     },
// });

// /*
// region
// name { common }
// flags { png, alt }
// borders
// capital
// population
// */

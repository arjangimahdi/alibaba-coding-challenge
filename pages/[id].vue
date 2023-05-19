<template>
    <div class="flex justify-start items-start sm:pt-10 pt-0">
        <app-button class="font-semibold w-32 h-10 rounded-md shadow-md" size="md" @click="goBack">
            <template #prepend> <i class="icon-arrow-left"></i> </template>
            Back
        </app-button>
    </div>
    <div class="grid sm:grid-cols-2 grid-cols-1 sm:gap-28 gap-0 mt-20 text-element_scheme_text sm:pb-0 pb-10">
        <div class="country-flag sm:mb-0 mb-10">
            <nuxt-img loading="lazy" :src="country.flags.png" class="w-full aspect-[10/6]" />
        </div>
        <div class="country-info flex flex-col justify-center items-start">
            <h2 class="text-3xl font-bold mb-10">
                {{ country.name.common }}
            </h2>
            <div class="grid sm:grid-cols-2 grid-cols-1 gap-10 w-full mb-10">
                <div>
                    <ul>
                        <li class="mb-3">
                            <span class="font-semibold">Native Name: </span>
                            <span>{{ getNativeName }}</span>
                        </li>
                        <li class="mb-3">
                            <span class="font-semibold">Population: </span>
                            <span>{{ getPopulation }}</span>
                        </li>
                        <li class="mb-3">
                            <span class="font-semibold">Region: </span>
                            <span>{{ country.region }}</span>
                        </li>
                        <li class="mb-3">
                            <span class="font-semibold">Sub Region: </span>
                            <span>{{ country.subregion }}</span>
                        </li>
                        <li class="mb-3">
                            <span class="font-semibold">Capital: </span>
                            <span>{{ getCapital }}</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li class="mb-3">
                            <span class="font-semibold">Top Level Domain: </span>
                            <span>{{ getTopLevelDomain }}</span>
                        </li>
                        <li class="mb-3">
                            <span class="font-semibold">Currencies: </span>
                            <span>{{ getCurrencies }}</span>
                        </li>
                        <li class="mb-3">
                            <span class="font-semibold">Languages: </span>
                            <span>{{ getLanguages }}</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="flex sm:flex-row flex-col sm:items-center items-start">
                <span class="font-semibold mr-3 sm:mb-0 mb-5">Border Countries: </span>
                <ul class="flex">
                    <li
                        v-for="_country in getCountryBorders"
                        :key="_country.ccn3"
                        class="mx-1"
                        @click="goToCountryDetail(_country)"
                    >
                        <app-button class="text-sm rounded-md shadow-md" size="md">
                            {{ _country.name.common }}
                        </app-button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useAppStore } from "~/store/app-store";
import type { BorderCountry } from "~/types/country.type";

useHead({
    title: "Countries Detail",
    meta: [{ name: "description", content: "" }],
});

const route = useRoute();
const router = useRouter();
const id: string | string[] = route.params.id;

const store = useAppStore();

const {
    country,
    getNativeName,
    getPopulation,
    getCapital,
    getTopLevelDomain,
    getCurrencies,
    getLanguages,
    getCountryBorders,
} = storeToRefs(store);

if (id.constructor === String) await useAsyncData("store", () => store.getCountryByCode(id));
await useAsyncData("store", () => store.getBorderCountries(country.value.borders));

function goBack() {
    router.push({
        path: "/",
    });
}

function goToCountryDetail(country: BorderCountry) {
    const id = country.ccn3;
    router.push({
        path: `/${id}`,
    });
}
</script>

<style scoped></style>

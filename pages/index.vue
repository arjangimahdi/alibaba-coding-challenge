<template>
    <section class="flex justify-between items-center">
        <app-input
            size="lg"
            id="search"
            type="text"
            v-model="search"
            placeholder="Search for a country..."
            @update:model-value="searchInCountries"
        >
            <template #prepend> <i class="icon-search"></i> </template>
        </app-input>

        <app-dropdown
            class="w-48"
            :items="regions"
            :searchable="false"
            placeholder="Filter by region"
            v-model:option="selectedRegion"
            @update:option="filterByRegion"
        />
    </section>
    <section class="countries-list pt-10">
        <div class="grid grid-cols-4 gap-10">
            <app-country-card
                v-if="countries.length > 0"
                v-for="country in countries"
                :key="country.cca3"
                :capital="country.capital"
                :region="country.region"
                :population="country.population"
                :image="country.flags.png"
                :title="country.name.common"
                @click="goToCountryDetail(country)"
            />
        </div>
    </section>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useAppStore } from "~/store/app-store";

useHead({
    title: "Countries List",
    meta: [{ name: "description", content: "World wide countries are listed here." }],
});

const search = ref<string>("");
const selectedRegion = ref<string>("");
const regions = reactive<string[]>(["Americas", "Oceania", "Asia", "Africa", "Europe"]);

const router = useRouter();
const store = useAppStore();

const { countries } = storeToRefs(store);

const isLoading = ref<boolean>(true);

await useAsyncData("store", () => store.getAllCountries()).then(() => {
    isLoading.value = false;
});

function searchInCountries() {
    store.filterCountries(search.value);
}
function filterByRegion() {
    store.filterCountriesByRegion(selectedRegion.value);
}
function goToCountryDetail(country: Country) {
    const id = country.ccn3;
    router.push({
        path: `/${id}`,
    });
}
</script>

<style scoped></style>

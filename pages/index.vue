<template>
    <div class="flex justify-between items-center">
        <app-input
            size="lg"
            id="search"
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
        />
    </div>
    <div class="countries-list pt-10">
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
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useAppStore } from "~/store/app-store";

const search = ref<string>("");
const selectedRegion = ref<string>("");
const regions = reactive<string[]>(["Americas", "Oceania", "Asia", "Africa", "Europe"]);

const store = useAppStore();

const { countries } = storeToRefs(store);

useAsyncData("store", () => store.getAllCountries());

function searchInCountries() {
    store.filterCountries(search.value);
}
</script>

<style scoped></style>

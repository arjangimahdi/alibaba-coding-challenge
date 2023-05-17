<template>
    <div class="flex justify-between items-center">
        <app-input size="lg" id="email" v-model="email" placeholder="Search for a country...">
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
        <div class="grid grid-cols-4 gap-4">
            <app-country-card :capital="countryInfo.capital" :region="countryInfo.region" :population="countryInfo.population" :image="countryInfo.flags.png" :title="countryInfo.name.common" />
        </div>
    </div>
</template>

<script setup lang="ts">
const email = ref<string>("");
const selectedRegion = ref<string>("");
const regions = reactive<string[]>(["Americas", "Oceania", "Asia", "Africa", "Europe"]);

const countryInfo = reactive({
    name: {
        common: "Comoros",
        official: "Union of the Comoros",
    },
    capital: ["Moroni"],
    region: "Africa",
    population: 869595,
    flags: {
        png: "https://flagcdn.com/w320/km.png",
        svg: "https://flagcdn.com/km.svg",
    },
});
</script>

<style scoped></style>

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
            <app-country-card
                v-for="country in countries"
                :key="country.code"
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
const email = ref<string>("");
const selectedRegion = ref<string>("");
const regions = reactive<string[]>(["Americas", "Oceania", "Asia", "Africa", "Europe"]);

const countries = reactive([
    {
        code: "174",
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
    },
    {
        code: "170",
        name: {
            common: "Colombia",
            official: "Republic of Colombia",
        },
        capital: ["Bogotá"],
        region: "Americas",
        population: 50882884,
        flags: {
            png: "https://flagcdn.com/w320/co.png",
            svg: "https://flagcdn.com/co.svg",
        },
    },
    {
        code: "364",
        name: {
            common: "Iran",
            official: "Islamic Republic of Iran",
        },
        capital: ["Tehran"],
        region: "Asia",
        population: 83992953,
        flags: {
            png: "https://flagcdn.com/w320/ir.png",
            svg: "https://flagcdn.com/ir.svg",
        },
    },
    {
        code: "276",
        name: {
            common: "Germany",
            official: "Federal Republic of Germany",
        },
        capital: ["Berlin"],
        region: "Europe",
        population: 83240525,
        flags: {
            png: "https://flagcdn.com/w320/de.png",
            svg: "https://flagcdn.com/de.svg",
        },
    },
]);
</script>

<style scoped></style>

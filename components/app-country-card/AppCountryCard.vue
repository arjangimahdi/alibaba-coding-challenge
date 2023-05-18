<template>
    <article
        class="app-country-card rounded-md overflow-hidden text-element_scheme_text bg-element_scheme_background shadow-lg hover:cursor-pointer"
    >
        <div class="app-country-card-image">
            <nuxt-img loading="lazy" :src="image" class="w-full aspect-[16/9]" />
        </div>
        <div class="p-6">
            <div class="app-country-card-title mb-3">
                <h4 class="font-semibold text-lg">{{ title }}</h4>
            </div>
            <div class="app-country-card-body">
                <ul>
                    <li class="text-sm mb-2">
                        <span class="font-medium">Population: </span>
                        <span class="font-light">{{ _population }}</span>
                    </li>
                    <li class="text-sm mb-2">
                        <span class="font-medium">Region: </span>
                        <span class="font-light">{{ region }}</span>
                    </li>
                    <li class="text-sm mb-2">
                        <span class="font-medium">Capital: </span>
                        <span class="font-light">{{ capital ? capital.join(",") : "" }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </article>
</template>

<script setup lang="ts">
export interface Props {
    capital: string[];
    image: string;
    title: string;
    region: string;
    population: number;
}

const props = defineProps<Props>();

const _population = computed(() => {
    return props.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
});
</script>

<style lang="scss">
@import "~/assets/scss/components/app-country-card.scss";
</style>

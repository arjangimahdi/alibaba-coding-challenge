<template>
    <div class="flex justify-between items-center">
        <app-input size="lg" id="email" v-model="email" placeholder="Enter your email">
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
</template>

<script setup lang="ts">
const email = ref<string>("");
const selectedRegion = ref<string>("");
const regions = reactive<string[]>(["Americas", "Oceania", "Asia", "Africa", "Europe"]);
</script>

<style scoped></style>

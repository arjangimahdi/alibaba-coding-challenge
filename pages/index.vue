<template>
    <div>
        <app-input size="lg" id="email" v-model="email" placeholder="Enter your email">
            <template #prepend> <i class="icon-search"></i> </template>
        </app-input>
    </div>
</template>

<script setup lang="ts">
const email = ref<string>("");
</script>

<style scoped></style>

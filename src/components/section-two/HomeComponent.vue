<template>
    <!-- Named Slots -->
    <h1>
        Home Component
    </h1>
    <FirstPage>
        <template #header>
            Header Content is Here
        </template>
        Default Content is Here
        <template #footer>
            Footer Conter is Here
        </template>
    </FirstPage>
</template>
<script setup lang="ts">
    import FirstPage from "./FirstPageComponent.vue"
</script>
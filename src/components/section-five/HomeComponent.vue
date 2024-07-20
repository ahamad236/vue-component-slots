<template>
    <h2>
        Home Component
    </h2>

    <!-- Named Scoped Slots -->
    <FirstPage>
        <template #header="headerProps">
            {{ headerProps }}
        </template>

        <!-- <template #default="defaultProps">
            {{ defaultProps }}
        </template>

        <template #footer="footerProps">
            {{ footerProps }}
        </template> -->
    </FirstPage>
</template>
<script setup lang="ts">
    import FirstPage from "./FirstPageComponent.vue"
</script>
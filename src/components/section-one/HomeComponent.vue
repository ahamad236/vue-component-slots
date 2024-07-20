<template>
    <h1>
        Home Component
    </h1>
    <FirstPage>
        {{ message }}
    </FirstPage>
</template>
<script setup lang="ts">
    import FirstPage from "./FirstPageComponent.vue"
    import { ref } from "vue"

    const message = ref("Hello World")
</script>
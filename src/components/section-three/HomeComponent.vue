<template>
    <h1>
        Home Component
    </h1>
    <!-- <FirstPage>
        <template #header>
            Header Content
        </template>
        <template #default>
            Default Content
        </template>
        <template #footer>
            Footer Content
        </template>
    </FirstPage> -->

    <!-- Dynamic slot names -->
    <FirstPage>
        <template #[headerValue]>
            Header Content is Here
        </template>
        <template #[footerValue]>
            Default Content is Here
        </template>
        <template #[defaultValue]>
            Footer Content is Here
        </template>
    </FirstPage>

</template>
<script setup lang="ts">
    import FirstPage from "./FirstPageComponent.vue"
    import { ref } from "vue"
    import type { Ref } from "vue" 

    const headerValue:Ref<string> = ref("header")
    const defaultValue:Ref<string> = ref("default")
    const footerValue:Ref<string> = ref("footer")

</script>
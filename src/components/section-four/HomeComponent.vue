<template>
    <!-- Scoped slots -->
    <!-- <FirstPage v-slot="scopedSlot">
        {{ scopedSlot.text }} {{ scopedSlot.count }}
    </FirstPage> -->

    <!-- Destructuring in scoped slots -->
    <FirstPage v-slot="{ text, count }">
        {{ text }} {{ count }}
    </FirstPage>
</template>
<script setup lang="ts">
    import FirstPage from "./FirstPageComponent.vue"
</script>
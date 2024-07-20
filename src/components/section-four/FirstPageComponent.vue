<template>
    <slot :text="greetingMessage" :count="1"></slot>
</template>
<script setup lang="ts">
    import { ref } from "vue"

    const greetingMessage = ref("Hello World")
</script>
<template>
    <h2>
        First Page Component
    </h2>
    <div v-if="$slots.header">
        <slot name="header"></slot>
    </div>
    <div v-if="$slots.default">
        <slot name=default></slot>
    </div>
    <div v-if="$slots.footer">
        <slot name=footer></slot>
    </div>
</template>
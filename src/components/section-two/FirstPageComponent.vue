<template>
    <h2>
        First Page Component
    </h2>
    <div>
        <slot name="header"></slot>
    </div>
    <div>
        <slot></slot>
    </div>
    <div>
        <slot name="footer"></slot>
    </div>
</template>
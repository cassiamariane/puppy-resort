<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <button :class="theme">{{ text }}</button>
</template>

<script setup lang="ts">
defineProps({
    text: String,
    theme: String,
})
</script>

<style scoped lang="scss">
button {
    padding: .5rem 1rem;
    font-size: 1rem;
    box-shadow: 1px 1px 5px #000000;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        transform: scale(1.02);
        transition: .2s;
    }

    &.primary {
        background-color: #51B53C;
        color: white;
    }

    &.secondary {
        background: #ffffff;
        border: 1px solid #222222;
        color: #222222;
    }
}
</style>
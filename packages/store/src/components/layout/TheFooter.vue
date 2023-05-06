<template>
    <footer>
        <span id="direitos">Todos os direitos reservados &copy; {{ year }}</span>
        <img src="@/assets/img/Logo.svg" alt="" id="logo">
    </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear();
</script>

<style scoped lang="scss">
footer {
    background: linear-gradient(to right, var(--primary-color), rgba(232, 106, 51, 1));
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    min-height: 80px;
    padding: 0 2rem;

    @media screen and (min-width: 779px) {
        padding: 0 5rem;
    }

    span#direitos {
        color: #ffffff;
    }

    #logo {
        max-width: 6rem;
        margin-left: auto;
        position: absolute;
        bottom: 1rem;
        right: 1rem;
        display: none;

        @media screen and (min-width: 779px) {
            display: block;
            bottom: .5rem;
            max-width: 8rem;
        }
    }
}
</style>
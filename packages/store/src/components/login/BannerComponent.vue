<template>
    <div id="banner">
        <img id="img-fundo" src="@/assets/img/paw_print2.svg">
        <h1 id="title" v-html="text"></h1>
        <Button text="Cadastro" theme="primary" id="button-banner"></Button>
    </div>
</template>

<script setup lang="ts">
defineProps({
    text: String,
})
import Button from '../layout/Button.vue';
</script>

<style scoped lang="scss">
@font-face {
    font-family: Digitalt;
    src: url(@/assets/fonts/Digitalt-04no.ttf)
}

#banner {
    background: #E86A33;
        max-width: 50%;
        height: 77vh;
        @media screen and (max-width: 1240px) {
            display: none;
        }
        display: flex;
        align-items: center;
        flex-direction: column;
        padding:5rem;
        border-radius: 10px;
        justify-content: center;
        gap:3rem;
        img{
            max-width: 22rem;
            position: absolute;
            opacity: 0.3;
        }
        h1{
                font-size: 2.5rem;
                color: #ffffff;
                font-weight: 500;
                font-family: 'Digitalt', sans-serif;
                text-shadow:  1px 2px #000000;
                max-width: 90%;

        }
        #button-banner{
            background-color: #E86A33;
            border: 1px solid #fff;
            width: 35%;
            height: 3rem;
            font-size: 20px;
        }
}
</style>
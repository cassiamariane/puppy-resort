<template>
    <div id="banner">
        <h1 id="title">Bem Vindo.<br> Entre para agendar hospedagem para o seu pet.<br> A magia começa aqui !</h1>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
    @font-face {
        font-family: Digitalt;
        src: url(@/assets/fonts/Digitalt-04no.ttf)
    }
   #banner{
        background: radial-gradient(95.94% 95.94% at 3.2% 2.56%, rgba(81, 181, 60, 0.7) 0%, rgba(81, 181, 60, 0.21) 100%);
        max-width: 50%;
        height: 77vh;
        @media screen and (max-width: 1240px) {
            display: none;
        }
        display: flex;
        align-items: center;
        padding:5rem;
        h1{
                font-size: 40px;
                color: #ffffff;
                font-weight: bold;
                font-family: 'Digitalt', sans-serif;
                text-shadow:  2px 5px #000000;
                max-width: 90%;

        }
   }
</style>
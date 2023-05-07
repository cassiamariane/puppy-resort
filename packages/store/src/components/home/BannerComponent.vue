<template>
    <div id="banner">
        <img src="@/assets/img/dog.avif" alt="">
        <h1 id="title">Aqui seu pet estará em boas patas</h1>
        <Button text="Agendar hospedagem" theme="primary" class="agendar" @click="sendWppMessage"/>
    </div>
</template>

<script setup lang="ts">
import Button from '../layout/Button.vue';

const sendWppMessage = () => {
    const phone = '5524993954501';
    const now = new Date().getHours();
    const greeting = now >= 5 && now < 12 ? 'Bom dia!' : now >= 12 && now < 18 ? 'Boa tarde!' : 'Boa noite!';
    const text = `${greeting} Eu gostaria de agendar uma hospedagem para o meu pet.`
    window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${text}`);
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
@font-face {
    font-family: Digitalt;
    src: url(@/assets/fonts/Digitalt-04no.ttf)
}

#banner {
    background: #ffffff;
    position: relative;

    #title {
        position: absolute;
        top: 5%;
        left: 5%;
        font-size: 100px;
        color: #ffffff;
        font-weight: bold;
        font-family: 'Digitalt', sans-serif;
        /*
        -webkit-text-stroke-width: 2px;
        -webkit-text-stroke-color: #222;
        */
        text-shadow:  2px 5px #000000;
        max-width: 35%;
        display: none;

        @media screen and (max-width: 1240px) {
            font-size: 80px;
            max-width: 50%;
        }

        @media screen and (min-width: 779px) {
            display: block;
        }
    }

    img {
        width: 100vw;
        max-height: 700px;
    }


    .agendar {
        min-width: 250px;
        position: absolute;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);

        @media screen and (min-width: 779px) {
            display: none;
        }
    }
}
</style>
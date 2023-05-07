<template>
    <header>
        <img src="@/assets/img/Logo.svg" id="logo">
        <div class="button-container">
            <Button text="Agendar hospedagem" theme="primary" id="agendar" @click="sendWppMessage" />
            <button type="button" id="menu-btn" title="Em breve"><img src="@/assets/img/icons/hamburger.png"
                    id="menu-strokes"><img src="@/assets/img/icons/user.png" id="user"></button>
        </div>
    </header>
</template>

<script setup lang="ts">
import Button from '../layout/Button.vue';

const sendWppMessage = () => {
    const phone = '5521981834355';
    const now = new Date().getHours();
    const greeting = now >= 5 && now < 12 ? 'Bom dia!' : now >= 12 && now < 18 ? 'Boa tarde!' : 'Boa noite!';
    const text = `${greeting} Eu gostaria de agendar uma hospedagem para o meu pet. 🐶🐱`
    window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${text}`);
}
</script>

<style scoped lang="scss">
header {
    display: flex;
    padding: .5rem 2rem 1rem;
    justify-content: space-between;
    gap: 0.2rem;
    align-items: center;
    background: #ffffff;
    position: relative;

    @media screen and (min-width: 779px) {
        padding: .5rem 5rem 1rem;
    }

    #logo {
        max-width: 6rem;

        @media screen and (min-width: 779px) {
            max-width: 8rem;
        }
    }

    .button-container {
        display: flex;
        gap: 1rem;

        #agendar {
            display: none;

            @media screen and (min-width: 779px) {
                display: inline-block;
                min-width: 200px;
            }
        }

        #menu-btn {
            display: flex;
            gap: 1rem;
            justify-content: center;
            align-items: center;
            padding: .5rem 1rem;
            background: #ffffff;
            border: 1px solid #999999;
            cursor: not-allowed;

            #user {
                max-width: 1.5rem;
            }

            #menu-strokes {
                max-width: 0.7rem;
            }
        }
    }
}
</style>
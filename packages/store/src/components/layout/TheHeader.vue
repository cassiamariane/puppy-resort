<template>
    <header>
        <img src="@/assets/img/Logo.svg" id="logo">
        <div class="button-container">
            <Button text="Agendar hospedagem" theme="primary" id="agendar" />
            <button type="button" id="menu-btn"><img src="@/assets/img/icons/hamburger.png" id="menu-strokes"><img
                    src="@/assets/img/icons/user.png" id="user"></button>
        </div>
    </header>
</template>

<script setup lang="ts">
import Button from '../layout/Button.vue';
</script>

<style scoped lang="scss">
header {
    display: flex;
    padding: .5rem 2rem 1rem;
    justify-content: space-between;
    gap: 0.2rem;
    align-items: center;
    background: #ffffff;

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
<template>
    <header>
        <img src="@/assets/img/Logo.svg" id="logo" @click="router.push('/')">
        <div class="button-container">
            <Button text="Agendar hospedagem" theme="primary" id="agendar" @click="handleClickButton" />
            <div class="dropdown">
                <button type="button" id="menu-btn"><img src="@/assets/img/icons/hamburguer.svg" id="menu-strokes"></button>
                <div class="dropdown-content">
                    <router-link to="agendamento" v-if="props.isAuthenticated"><img src="@/assets/img/icons/schedule.svg"/>Agendar</router-link>
                    <router-link to="perfil" v-if="props.isAuthenticated"><img src="@/assets/img/icons/user.svg"/>Meu perfil</router-link>
                    <router-link to="login" v-if="!props.isAuthenticated"><img src="@/assets/img/icons/login.svg">Faça
                        login</router-link>
                    <router-link to="#" v-if="props.isAuthenticated" class="logout" @click="logout"><img
                            src="@/assets/img/icons/logout.svg">Sair</router-link>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import router from '@/router';
import Button from '../layout/Button.vue';
import useLocalStorage from '@/composables/useLocalStorage';
const { removeFromLocalStorage } = useLocalStorage();
import { useUserStore } from '@/stores/UserStore';
const user = useUserStore();

const handleClickButton = () => {
    if (!props.isAuthenticated) {
        router.push('/login');
        return;
    }
    router.push('/agendamento');
}

const logout = () => {
    removeFromLocalStorage('token');
    user.logout()
    if (window.location.pathname == '/') {
        return router.go(0)
    }
    router.push('/');
}

const props = defineProps({
    isAuthenticated: Boolean,
})
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
        cursor: pointer;

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
                display: flex;
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

            img {
                min-width: 20px;
            }

            #user {
                max-width: 1.5rem;
            }

            #menu-strokes {
                max-width: 0.7rem;
            }
        }

        .dropdown {
            position: relative;
            display: inline-block;

            .dropdown-content {
                display: none;
                position: absolute;
                left: -50px;
                background-color: #f9f9f9;
                min-width: 160px;
                box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
                z-index: 1;

                a,
                router-link {
                    color: black;
                    padding: 12px 16px;
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    gap: .5em;

                    img {
                        max-width: 1rem;
                        margin-right: 2px;
                    }
                }

                a:hover {
                    background-color: #f1f1f1
                }
            }
        }

        .dropdown:hover .dropdown-content {
            display: block;
        }

        .dropdown:hover #menu-btn {
            background-color: #f1f1f1;
        }
    }
}
</style>
<template>
    <div class="container">
        <form>
            <label for="name">
                <span>Nome completo:</span>
                <input autofocus required type="text" name="name" id="name" v-model="name">
            </label>
            <label for="email">
                <span>E-mail:</span>
                <input required type="email" name="email" id="email" v-model="email">
            </label>
            <div class="flex">
                <label for="phone">
                    <span>Telefone de emergência:</span>
                    <input required type="tel" name="phone" id="phone" v-model="phone">
                </label>
                <label for="cpf">
                    <span>CPF:</span>
                    <input required type="text" name="cpf" id="cpf" v-model="cpf">
                </label>
            </div>
            <label for="password">
                <span>Senha:</span>
                <input required type="password" name="password" id="password" v-model="password">
            </label>
            <label for="password_2">
                <span>Confirme sua senha:</span>
                <input required type="password" name="password_2" id="password_2" v-model="passwordConfirmation">
            </label>
            <span class="error">{{ error }}</span>
            <TheLoading v-if="loading" />
            <Button text="Avançar" theme="primary" id="avancar" @click.prevent="handleSignup"><img
                    src="@/assets/img/backward.svg"></Button>
            <p id="login" @click="changeToLogin">Já possui conta? <span class="green">Fazer login</span></p>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Button from '../layout/Button.vue';
import { useSignup } from '@/composables/useSignup';
import TheLoading from '../layout/TheLoading.vue';
const { data, error, signup, loading } = useSignup();

import { useUserStore } from '@/stores/UserStore';
const user = useUserStore();

import useLocalStorage from '@/composables/useLocalStorage';
const { saveToLocalStorage } = useLocalStorage();

const name = ref('');
const email = ref('');
const phone = ref('');
const cpf = ref('');
const password = ref('');
const passwordConfirmation = ref('');

const handleSignup = async () => {
    error.value = '';
    if (password.value != passwordConfirmation.value) {
        error.value = 'As senhas não coincidem.'
        return;
    }
    await signup({
        name: name.value,
        email: email.value,
        phone: phone.value,
        cpf: cpf.value,
        password: password.value
    });
    if (!data.value) {
        return;
    }
    saveToLocalStorage('token', data.value.token)
    saveToLocalStorage('name', data.value.name)
    saveToLocalStorage('email', data.value.email)
    saveToLocalStorage('admin', data.value.admin)
    user.loadToken();
    user.loadUser();
    data.value = null;
    return changeToAddress()
}

const emit = defineEmits(['changeToLogin', 'changeToAddress']);

const changeToLogin = () => {
    emit('changeToLogin');
}

const changeToAddress = () => {
    emit('changeToAddress');
}

</script>

<style scoped lang="scss">
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 77vh;
    font-size: 1rem;
    width: 50%;
    margin: 3rem 0;

    @media screen and (min-width: 779px) {
        padding: 0 3rem;
    }

    form {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 1rem;
        margin-bottom: 2rem;

        .flex {
            display: flex;
            gap: 1rem;
            flex-direction: column;

            @media screen and (min-width: 779px) {
                flex-direction: row;
                gap: 1.5rem;
            }

            label {
                flex: 1;
            }
        }

        label {
            display: flex;
            flex-direction: column;
            gap: .5rem;

            input {
                background-color: #F8F9F9;
                border: none;
                border-radius: 5px;
                height: 2.5rem;
                padding: 0 1rem;
                color: #222;
                font-size: 1rem;
                outline: none;

                &:focus {
                    border: 2px solid var(--primary-color);
                }
            }
        }

        #check>label {
            display: flex;
            align-items: center;
            flex-direction: row;
            font-size: 14px;
            gap: 1rem;
        }

        span.error {
            color: #ff4848;
        }

        span.green, span.green > * {
            color: var(--primary-color);
            text-decoration: underline;
        }

        #avancar {
            height: 3rem;
            font-size: 20px;
        }

        p#login {
            font-size: 14px;
            color: #222;
            cursor: pointer;
        }
    }
}
</style>
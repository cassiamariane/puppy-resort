<template>
    <div id="form-container">
        <form>
            <label for="email">
                <span>E-mail</span>
                <input required type="email" name="email" id="email" v-model="identifier">
            </label>
            <label for="password">
                <span>Senha</span>
                <input required type="password" name="password" id="password" v-model="password">
            </label>
            <span class="error">{{ error }}</span>
            <Button text="Entrar" theme="primary" id="entrar" @click.prevent="handleLogin"></Button>
            <p id="create" @click="changeToSignup">Não possui conta? <span>Cadastre-se</span></p>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Button from '../layout/Button.vue';
import router from '@/router';

import { useLogin } from '@/composables/useLogin';
const { data, error, login } = useLogin();

import { useUserStore } from '@/stores/UserStore';
const user = useUserStore();

import useLocalStorage from '@/composables/useLocalStorage';
const {saveToLocalStorage} = useLocalStorage();

const identifier = ref('');
const password = ref('');

const handleLogin = async () => {
    error.value = ''
    if (!identifier.value || !password.value) {
        return;
    }
    await login({
        identifier: identifier.value,
        password: password.value,
    });
    if (!data.value) {
        return;
    }
    saveToLocalStorage('token', data.value.token)
    saveToLocalStorage('name', data.value.name)
    saveToLocalStorage('email', data.value.email)
    saveToLocalStorage('admin', data.value.admin)
    user.setUser(data.value)
    return router.push('agendamento')
}

const emit = defineEmits(['changeToSignup'])

const changeToSignup = () => {
    emit('changeToSignup');
}
</script>

<style scoped lang="scss">
#form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1rem;
    width: 50%;
    padding: 4rem 0 0;
    
    @media screen and (min-width: 779px) {
        padding: 6rem 6rem 0;
    }

    form {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 1.5rem;

        .flex {
            display: flex;
            gap: 1.5rem;
            label {
                flex: 1;
            }
        }

        label {
            display: flex;
            flex-direction: column;
            gap: .5rem;
        }

        input {
            background-color: #F8F9F9;
            border: none;
            border-radius: 10px;
            height: 2.5rem;
            padding: 0 1rem;
            color: #222;
            font-size: 1rem;
            outline: none;

            &:focus {
                border: 2px solid var(--primary-color);
            }
        }

        span.error {
            color: #ff4848;
        }

        #entrar {
            height: 3rem;
            font-size: 20px;
        }

        #create {
            font-size: 14px;
            color: #222;
            cursor: pointer;
        }
    }
}</style>
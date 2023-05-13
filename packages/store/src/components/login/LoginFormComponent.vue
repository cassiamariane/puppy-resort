<template>
    <div id="form-container">
        <form>
            <label for="email">E-mail</label>
            <input type="email" name="email" id="email" v-model="identifier">
            <label for="password">Senha</label>
            <input type="password" name="password" id="password" v-model="password">
            <p id="reset">Esqueceu a senha?</p>
            <p id="create">Não possui conta? <span @click="changeToSignup">Cadastre-se</span></p>
            <Button text="Entrar" theme="primary" id="entrar" @click.prevent="handleLogin"></Button>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Button from '../layout/Button.vue';

import { useLogin } from '@/composables/useLogin';
import { useWhatsappMessage } from '@/composables/useWhatsappMessage';
const { data, error, loading, login } = useLogin();
const { sendWppMessage } = useWhatsappMessage();

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
    if (error.value) {
        console.log(error.value);
        return;
    }
    localStorage.setItem('token', data.value.token);
    sendWppMessage();
    return;
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
    justify-content: center;
    height: 77vh;
    padding: 3rem;
    font-size: 1rem;
    width: 50%;

    form {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        input {
            background-color: #F8F9F9;
            border: none;
            border-radius: 10px;
            width: 17rem;
            height: 2.5rem;
        }

        #email {
            margin-bottom: 2rem;
        }

        #password {
            margin-bottom: 1rem;
        }

        #entrar {
            margin-top: 2rem;
            width: 100%;
            height: 3rem;
            font-size: 20px;
        }
    }
}</style>
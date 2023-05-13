<template>
    <div id="form-container">
        <p id="login" @click="changeToLogin">Fazer login</p>
        <form>
            <label for="name">Nome completo</label>
            <input type="text" name="name" id="name" v-model="name">
            <label for="email">E-mail</label>
            <input type="email" name="email" id="email" v-model="email">
            <label for="phone">Celular</label>
            <input type="tel" name="phone" id="phone" v-model="phone">
            <label for="cpf">CPF</label>
            <input type="text" name="cpf" id="cpf" v-model="cpf">
            <label for="dn">Data de Nascimento</label>
            <input type="date" name="dn" id="dn" v-model="birthday">
            <label for="password">Senha</label>
            <input type="password" name="password" id="password" v-model="password">
            <label for="password_2">Confirme sua senha</label>
            <input type="password" name="password_2" id="password_2" v-model="passwordConfirmation">
            <div id="check">
                <div>
                    <input type="checkbox" name="termos" id="termos">
                    <label for="termos">Aceito os termos de compromisso</label>
                </div>
                <Button text="Avançar" theme="primary" id="avancar" @click.prevent="handleSignup"><img
                        src="@/assets/img/backward.svg"></Button>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Button from '../layout/Button.vue';
import { useSignup } from '@/composables/useSignup';
import { useWhatsappMessage } from '@/composables/useWhatsappMessage';
const { data, error, loading, signup } = useSignup();
const { sendWppMessage } = useWhatsappMessage();

const name = ref('');
const email = ref('');
const phone = ref('');
const birthday = ref('');
const cpf = ref('');
const password = ref('');
const passwordConfirmation = ref('');

const handleSignup = async () => {
    error.value = '';
    if (password.value != passwordConfirmation.value) {
        alert('senhas diferentes');
        return;
    }
    await signup({
        name: name.value,
        email: email.value,
        phone: phone.value,
        cpf: cpf.value,
        birthday: birthday.value,
        password: password.value
    });
    if (error.value) {
        console.log(error.value);
        return;
    }
    localStorage.setItem('token', data.value.token);
    sendWppMessage();
    return;
}

const emit = defineEmits(['changeToLogin']);

const changeToLogin = () => {
    emit('changeToLogin');
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

        input {
            background-color: #F8F9F9;
            border: none;
            border-radius: 10px;
            width: 25rem;
            height: 2.5rem;
        }

        #check {
            display: flex;
            align-items: center;
            margin-top: 2rem;
            div{
                display:flex;
                align-items: center;
                gap:0.5rem;
            }
        }

        #avancar{
            width: 35%;
            height: 3rem;
            font-size: 20px;
        }
        #termos{
            width: 1rem;
            #termos-label{
                width: 5px;
            }
        }
    }
}
</style>
<template>
    <div id="form-container">
        <form>
            <label for="name">Nome completo</label>
            <input type="text" name="name" id="name">
            <label for="cpf">CPF</label>
            <input type="text" name="cpf" id="cpf">
            <label for="dn">Data de Nascimento</label>
            <input type="date" name="dn" id="dn">
            <label for="email">E-mail</label>
            <input type="e-mail" name="email" id="email">
            <label for="phone">Celular</label>
            <input type="tel" name="phone" id="phone">
            <label for="password">Senha</label>
            <input type="password" name="password" id="password">
            <label for="password_2">Confirme sua senha</label>
            <input type="password" name="password_2" id="password_2">
            <div id="check">
                <input type="checkbox" name="termos" id="termos">
                <label for="termos">Aceito os termos de compromisso</label>
                <Button text="Avançar" theme="primary" id="avancar"><img src="@/assets/img/backward.svg"></Button>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
import Button from '../layout/Button.vue';
</script>

<style scoped lang="scss">
#form-container{
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
        align-items: center;
        input{
            background-color: #F8F9F9;
            border: none;
            border-radius: 10px;
            width: 17rem;
            height: 2.5rem;
        }
        #check{
            display: flex;
            align-items: flex-start;
        }
        #avancar{
            margin-top: 2rem;
            width: 50%;
            height: 3rem;
            font-size: 20px;
        }
        #termos{
            label{
                max-width: 30%;
            }
        }
        label{
            text-align: left;
        }
    }
}
</style>
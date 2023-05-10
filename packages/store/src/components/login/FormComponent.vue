<template>
    <div id="form-container">
        <form>
            <label for="email">E-mail</label>
            <input type="e-mail" name="email" id="email">
            <label for="password">Senha</label>
            <input type="password" name="password" id="password">
            <p id="reset">Esqueceu a senha?</p>
            <p id="create">Criar Conta</p>
            <Button text="Entrar" theme="primary" id="entrar"></Button>
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
    font-size: 20px;
    width: 50%;
    form {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        input{
            background-color: #F8F9F9;
            border: none;
            border-radius: 20rem;
            width: 17rem;
            height: 3rem;
        }
        #email{
            margin-bottom: 4rem;
        }
        #password{
            margin-bottom: 1rem;
        }
        #entrar{
            margin-top: 4rem;
            width: 100%;
            height: 3rem;
            font-size: 20px;
        }
    }
}
</style>
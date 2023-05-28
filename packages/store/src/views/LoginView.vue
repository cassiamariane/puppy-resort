<template>
    <div class="container">
        <BannerComponent :etapa-atual="etapaAtual" @changeToSignup="etapaAtual = 1" @changeToLogin="etapaAtual = 0"
            text="Seja bem-vindo(a)(e)!<br> A magia do nosso resort começa aqui." />
        <LoginFormComponent v-if="etapaAtual == 0" @changeToSignup="etapaAtual = 1" id="login" />
        <CadastroFormComponent v-if="etapaAtual == 1" @changeToLogin="etapaAtual = 0" id="cadastro" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import BannerComponent from '@/components/login/BannerComponent.vue';
import CadastroFormComponent from '@/components/login/CadastroFormComponent.vue';
import LoginFormComponent from '@/components/login/LoginFormComponent.vue';

enum opcoesForm {
    LOGIN,
    CADASTRO,
}

const etapaAtual = ref(opcoesForm.LOGIN)

</script>

<style scoped lang="scss">
.container {
    display: flex;
    flex-direction: row;
    margin: 2rem 3rem 20rem;
    justify-content: center;

    @media screen and (min-width: 998px) {
        justify-content: space-around;
        margin: 2rem 3rem;
    }

    #login,
    #cadastro {
        flex: 3;
    }
}
</style>
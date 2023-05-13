<template>
    <div class="container">
        <div class="flex">
            <BannerComponent text="Bem Vindo<br> Entre para agendar hospedagem para o seu pet<br> A magia começa aqui !">
            </BannerComponent>
            <LoginFormComponent v-if="etapaAtual == 0" @changeToSignup="etapaAtual = 1"></LoginFormComponent>
            <CadastroFormComponent v-if="etapaAtual == 1" @changeToLogin="etapaAtual = 0"></CadastroFormComponent>
        </div>
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
.flex {
    display: flex;
    flex-direction: row;
}

.container {
    padding: 2rem 10rem;
}
</style>
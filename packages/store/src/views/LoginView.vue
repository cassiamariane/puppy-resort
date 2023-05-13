<template>
    <div class="container">
        <div class="flex">
            <BannerComponent></BannerComponent>
            <LoginFormComponent></LoginFormComponent>
            <!--<FormComponent></FormComponent>-->
        </div>
    </div>
</template>

<script setup lang="ts">
import LoginFormComponent from '@/components/login/FormComponent.vue';
import BannerComponent from '@/components/cadastro/BannerComponent.vue';
import FormComponent from '@/components/cadastro/FormComponent.vue';
</script>

<style scoped lang="scss">
.flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.container {
    padding: 2rem 10rem;
}
</style>
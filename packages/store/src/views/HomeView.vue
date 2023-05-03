<template>
    <BannerComponent></BannerComponent>
    <ServicosComponent></ServicosComponent>
    <AvaliacoesComponente></AvaliacoesComponente>
    <div class="flex">
        <MapaDeLocalizacao></MapaDeLocalizacao>
        <InformacoesComponente></InformacoesComponente>
    </div>
</template>

<script setup lang="ts">
import AvaliacoesComponente from '@/components/home/AvaliacoesComponente.vue';
import ServicosComponent from '@/components/home/ServicosComponent.vue';
import BannerComponent from '@/components/home/BannerComponent.vue';
import MapaDeLocalizacao from '@/components/home/MapaDeLocalizacao.vue';
import InformacoesComponente from '@/components/home/InformacoesComponente.vue';
</script>

<style scoped lang="scss">
.flex {
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 998px) {
        flex-direction: row;
    }
}
</style>
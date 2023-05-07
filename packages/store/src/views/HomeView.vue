<template>
    <BannerComponent></BannerComponent>
    <ServicesComponent></ServicesComponent>
    <RateComponent></RateComponent>
    <InfoComponent></InfoComponent>
</template>

<script setup lang="ts">
import BannerComponent from '@/components/home/BannerComponent.vue';
import ServicesComponent from '@/components/home/ServicesComponent.vue';
import RateComponent from '@/components/home/RateComponent.vue';
import InfoComponent from '@/components/home/InfoComponent.vue';
</script>

<style scoped lang="scss">
.flex {
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 779px) {
        flex-direction: row;
    }
}
</style>
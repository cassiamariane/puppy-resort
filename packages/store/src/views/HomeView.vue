<template>
    <BannerComponent></BannerComponent>
    <ServicesComponent></ServicesComponent>
    <RateComponent></RateComponent>
    <div class="flex">
        <LocationComponent></LocationComponent>
        <InfoComponent></InfoComponent>
    </div>
</template>

<script setup lang="ts">
import RateComponent from '@/components/home/RateComponent.vue';
import ServicesComponent from '@/components/home/ServicesComponent.vue';
import BannerComponent from '@/components/home/BannerComponent.vue';
import LocationComponent from '@/components/home/LocationComponent.vue';
import InfoComponent from '@/components/home/InfoComponent.vue';
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
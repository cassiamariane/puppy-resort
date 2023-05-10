<template>
    <div class="flex">
        <BannerComponent></BannerComponent>
        <FormComponent></FormComponent>
    </div>
</template>

<script setup lang="ts">
    import BannerComponent from '@/components/login/BannerComponent.vue';
    import FormComponent from '@/components/login/FormComponent.vue';
</script>

<style scoped lang="scss">
.flex {
    display: flex;
    flex-direction: row;
}
</style>
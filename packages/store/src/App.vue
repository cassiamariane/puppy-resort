<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from './components/layout/TheHeader.vue';
import TheFooter from './components/layout/TheFooter.vue';
</script>

<template>
  <TheHeader class="header"/>
  <RouterView />
  <TheFooter/>
</template>

<style scoped lang="scss">
.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
</style>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from './components/layout/TheHeader.vue';
import TheFooter from './components/layout/TheFooter.vue';

import { useUserStore } from '@/stores/UserStore';
const user = useUserStore();

import useLocalStorage from '@/composables/useLocalStorage';
const {getFromLocalStorage} = useLocalStorage();

const name = getFromLocalStorage('name')
const token = getFromLocalStorage('token')
const email = getFromLocalStorage('email')
const admin = getFromLocalStorage('admin')

user.setUser({
  name,
  token,
  email,
  admin
})

</script>

<template>
  <TheHeader class="header" />
  <RouterView />
  <TheFooter />
</template>

<style scoped lang="scss">
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #ffffff;
}
</style>

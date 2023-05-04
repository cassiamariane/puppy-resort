<template>
    <header>
        <img src="@/assets/img/Logo.svg" id="logo">
        <button type="button" id="agendamento">Agende sua hospedagem</button>
        <button type="button" id="detalhes-perfil"><img src="@/assets/img/user-menu.png" id="user-menu"><img src="@/assets/img/user.png" id="user"></button>
    </header>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
header {
    display: flex;
    padding: 0.3rem;
    gap: 0.2rem;
    #logo{
        max-width: 4rem;
    }

    #agendamento{
        background-color: #51B53C;
        color: white;
        border: none;
        border-radius: 0.5rem;
        max-width: 4rem;
        font-size: 0.5rem;
    }

    #detalhes-perfil{
        display: flex;
        align-items: center;
        gap: 0.3rem;
        border: none;
        border-radius: 0.5rem;
        #user{
            max-width: 1.5rem;
        }
        #user-menu{
            max-width: 0.7rem;
        }
    }
}

</style>
<template>
    <div id="container">
        <div id="view">
            <button id="reservations" @click="activeShowBooking">Reservas</button>
            <button id="rooms" @click="unactiveShowBooking">Quartos</button>
        </div>
        <div id="filter-container">
            <button id="filter"><img src="@/assets/img/icons/filter.svg"></button>
        </div>
        <BookingComponent v-if="showBooking"></BookingComponent>
        <CurrentRoomComponent v-else></CurrentRoomComponent>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import BookingComponent from '@/components/booking/BookingComponent.vue';
import CurrentRoomComponent from '@/components/booking/CurrentRoomComponent.vue';

const showBooking = ref(true);

const activeShowBooking = () => {
    showBooking.value = true;
};

const unactiveShowBooking = () => {
    showBooking.value = false;
}
</script>

<style scoped lang="scss">
    #container{
        align-items: center;
        display: flex;
        flex-direction:column;
        min-height: 90vh;
        padding: 2rem 1rem 7rem;
        gap: 1.5rem;
        position: relative;
        #view{
            display:flex;
            button{
                padding: 0.5rem;
            }
            button:first-child {
                border-radius: 0;
                border-right: 1px solid #000;
            }
        }
        #filter-container{
            position:absolute;
            top: 2rem;
            right: 1rem;
            @media screen and (min-width: 779px) {
                right: 5rem;
            }
            #filter{
                background-color: #7AA874;
                padding: 0.5rem;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                img{
                    max-width: 1.5rem;
                }
            }
        }
    }
</style>
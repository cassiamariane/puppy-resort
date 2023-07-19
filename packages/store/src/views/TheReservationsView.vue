<template>
    <div id="services-container">
        <div id="services">
            <div class="card brown" v-for="item in rooms" :key="item.id">
              <div id="number">
                {{ item.id }}
              </div>
              <div id="flex-info">
                <div class="info">
                  <img src="@/assets/img/icons/cat.svg">
                  {{ item.pet }}
                </div>
                <div class="info">
                    <img src="@/assets/img/icons/calendar.svg">
                    {{ item.startDate }} - {{ item.endDate }}
                </div>
                <div class="info">
                  <img src="@/assets/img/icons/money.svg">
                  <p>R$ {{ item.value }}</p>
                </div>
                <div class="info">
                  <img src="@/assets/img/icons/room.svg">
                  {{ item.roomNumber }}
                </div>
                <div class="info">
                    <p>Forma de pagamento: {{ item.payment }}</p>
                </div>
                <Button text="Fazer avaliação" theme="primary" id="avaliar"></Button>
              </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Button from '@/components/layout/TheButton.vue';
const rooms = ref([
  {
    id: 10200000,
    pet: 'Safira',
    startDate: '01-01-2023',
    endDate: '03-01-2023',
    value: 375.95,
    roomNumber: 101,
    payment: "PIX"
  },
  {
    id: 1020000001,
    pet: 'Malhada',
    startDate: '04-01-2023',
    endDate: '05-01-2023',
    value: 375.95,
    roomNumber: 101,
    payment: "PIX"
  },
  {
    id: 10300000,
    pet: 'Lui',
    startDate: '06-01-2023',
    endDate: '15-01-2023',
    value: 375.95,
    roomNumber: 101,
    payment: "PIX"
  },
  {
    id: 10400000,
    pet: 'Safira',
    startDate: '16-05-2023',
    endDate: '22-05-2023',
    value: 375.95,
    roomNumber: 101,
    payment: "PIX"
  },
  {
    id: 10500000,
    pet: 'Malhada',
    startDate: '23-05-2023',
    endDate: '27-05-2023',
    value: 200.00,
    roomNumber: 101,
    payment: "PIX"
  },
]);
</script>

<style scoped lang="scss">
#services-container {
    padding: 2rem;
  
    @media screen and (min-width: 779px) {
      padding: 2rem 3rem;
    }
  
    #services {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
  
      @media screen and (min-width: 779px) {
        gap: 2rem;
      }
  
      .card {
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        gap: 1.5rem;
        align-items: center;
        flex: 1 1;
        box-shadow: 1px 1px 5px #000000;
        transition: .2s;
  
        &:hover {
          transform: scale(1.02);
        }
  
        @media screen and (max-width: 464px) and (min-width: 328px) {
          &:nth-child(3) {
            order: 4;
          }
  
          &:nth-child(6) {
            order: 7;
          }
        }
  
        img {
          max-width: 1.5rem;
        }
  
        &.brown {
          background-color: rgba(232, 106, 51, 0.2);
        }
  
        #number {
          background-color: #E86A33;
          width: 100%;
          text-align: center;
          padding: 0.5rem;
          border-radius: 10px 10px 0 0;
          color: #fff;
          font-weight: bold;
          overflow: hidden;
        }
  
        #flex-info {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding: 1rem;
          justify-content: center;
  
          .info {
            display: flex;
            align-items: center;
            gap: 1rem;
            white-space: nowrap;
          }
        }
      }
    }
  }
</style>
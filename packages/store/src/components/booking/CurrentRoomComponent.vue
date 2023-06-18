<template>
    <div id="services-container">
        <div id="services">
            <div class="card brown" v-for="item in rooms" :key="item.roomNumber">
              <div id="number">
                {{ item.roomNumber }}
              </div>
              <div id="flex-info">
                <div class="info">
                  <img src="@/assets/img/icons/cat.svg">
                  {{ item.pet }}
                </div>
                <div class="info">
                  <img src="@/assets/img/icons/tutor.png">
                  {{ item.tutor }}
                </div>
                <div class="info">
                  <img src="@/assets/img/icons/tel.png">
                  {{ item.tel }}
                </div>
                <div class="info">
                  <img src="@/assets/img/icons/calendar.svg">
                  {{ item.startDate }} - {{ item.endDate }}
                </div>
              </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

const rooms = ref([
  {
    roomNumber: 101,
    status:'Ocupado',
    pet: 'Safira',
    startDate: '01-01-2023',
    endDate: '03-01-2023',
    tutor: 'Daniel',
    tel: '(99) 99999-9999'
  },
  {
    roomNumber: 102,
    status:'Ocupado',
    pet: 'Malhada',
    startDate: '01-01-2023',
    endDate: '03-01-2023',
    tutor: 'Daniel',
    tel: '(99) 99999-9999'
  },
  {
    roomNumber: 103,
    status:'Ocupado',
    pet: 'Lui',
    startDate: '01-01-2023',
    endDate: '03-01-2023',
    tutor: 'Daniel',
    tel: '(99) 99999-9999' 
  },
  {
    roomNumber: 104,
    status:'Ocupado',
    pet: 'Joelma',
    startDate: '01-01-2023',
    endDate: '03-01-2023',
    tutor: 'Daniel',
    tel: '(99) 99999-9999' 
  },
  {
    roomNumber: 105,
    status:'Ocupado',
    pet: 'Hello Kitty',
    startDate: '01-01-2023',
    endDate: '03-01-2023',
    tutor: 'Cássia',
    tel: '(99) 99999-9999' 
  },
  {
    roomNumber: 201,
    status:'Ocupado',
    pet: 'Lizzy',
    startDate: '01-01-2023',
    endDate: '03-01-2023',
    tutor: 'Cássia',
    tel: '(99) 99999-9999' 
  },
  {
    roomNumber: 202,
    status:'Ocupado',
    pet: 'Dualipas',
    startDate: '01-01-2023',
    endDate: '03-01-2023',
    tutor: 'Cássia',
    tel: '(99) 99999-9999' 
  },
  {
    roomNumber: 203,
    status:'Ocupado',
    pet: 'Badtz-Maru',
    startDate: '01-01-2023',
    endDate: '03-01-2023',
    tutor: 'Cássia',
    tel: '(99) 99999-9999' 
  },
  {
    roomNumber: 204,
    status:'Disponível' 
  },
  {
    roomNumber: 205,
    status:'Disponível' 
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
            border-radius: 1rem;
            gap: 1.5rem;
            align-items: center;
            flex-grow: 1;
            flex-basis: 8rem;
            box-shadow: 1px 1px 5px #000000;

            &:hover {
                transform: scale(1.02);
                transition: .2s;
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
            &.green {
                background-color:  rgba(65, 100, 74, 0.2);
            }

            &.brown {
                background-color:  rgba(232, 106, 51, 0.2);
            }
            #number{
              background-color: #E86A33;
              width:100%;
              border-radius: 1rem 1rem 0 0;
              text-align: center;
              padding: 0.5rem;
              color: #fff;
              font-weight: bold;
            }
            #flex-info{
              display: flex;
              flex-direction: column;
              gap: 1rem;
              padding: 1rem;
              justify-content: center;
              .info{
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
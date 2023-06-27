<template>
  <label for="search-bar">
    <input type="text" name="search-bar" id="search-bar">
    <button type="button"><img src="@/assets/img/icons/search.svg"></button>
  </label>
  <v-table
    fixed-header
    height="90vh"
  >
    <thead>
      <tr>
        <th class="text-left">
          Código da Reserva
        </th>
        <th class="text-left">
          Nome
        </th>
        <th class="text-left">
          Quarto
        </th>
        <th class="text-left">
          Check-in
        </th>
        <th class="text-left">
          Check-out
        </th>
        <th class="text-left">
          Valor
        </th>
        <th class="text-left">
          Finalizar
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in bookings" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.cpf }}</td>
        <td>{{ item.roomNumber }}</td>
        <td>{{ item.startDate }}</td>
        <td>{{ item.endDate }}</td>
        <td>{{ item.value }}</td>
        <td><Button text="Finalizar serviço" theme="primary" id="finalizar"/></td>
    </tr>
    </tbody>
  </v-table>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Button from '../layout/Button.vue';

const bookings = ref([
  {
    id: 1,
    cpf: '111.111.111-11',
    roomNumber: 101,
    startDate: '01-01-2023',
    endDate: '03-01-2023',
    value: 'R$' + 225 
  },
  {
    id: 2,
    cpf: '111.111.111-12',
    roomNumber: 102,
    startDate: '01-01-2023',
    endDate: '03-01-2023',
    value: 'R$' + 225 
  },
  {
    id: 3,
    cpf: '111.111.111-13',
    roomNumber: 103,
    startDate: '01-01-2023',
    endDate: '03-01-2023',
    value: 'R$' + 225  
  },
  {
    id: 4,
    cpf: '111.111.111-10',
    roomNumber: 104,
    startDate: '01-01-2023',
    endDate: '03-01-2023',
    value: 'R$' + 225  
  },
  {
    id: 5,
    cpf: '111.111.111-14',
    roomNumber: 105,
    startDate: '01-01-2023',
    endDate: '03-01-2023',
    value: 'R$' + 225  
  },
  {
    id: 6,
    cpf: '111.111.111-15',
    roomNumber: 201,
    startDate: '01-01-2023',
    endDate: '03-01-2023',
    value: 'R$' + 225  
  },
  {
    id: 7,
    cpf: '111.111.111-16',
    roomNumber: 202,
    startDate: '01-01-2023',
    endDate: '03-01-2023',
    value: 'R$' + 225  
  },
  {
    id: 8,
    cpf: '111.111.111-17',
    roomNumber: 203,
    startDate: '01-01-2023',
    endDate: '03-01-2023',
    value: 'R$' + 225  
  },
  {
    id: 9,
    cpf: '111.111.111-18',
    roomNumber: 204,
    startDate: '01-01-2023',
    endDate: '03-01-2023',
    value: 'R$' + 225  
  },
  {
    id: 10,
    cpf: '111.111.111-19',
    roomNumber: 205,
    startDate: '01-01-2023',
    endDate: '03-01-2023',
    value: 'R$' + 225  
  },
]);
</script>

<style scoped lang="scss">
  label {
    display: flex;
    gap: .5rem;
    border-radius: 20px;
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
    input {
        border: none;
        height: 2.5rem;
        padding: 0 1rem;
        color: #222;
        font-size: 1rem;
        outline: none;

        &:focus {
            border: 2px solid var(--primary-color);
        }
    }
    button{
      padding: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 0;
      border-left: 1px solid #000;
      img{
          max-width: 1.5rem;
      }
    }
  }
  thead, th{
    background-color: #E86A33 !important; 
    color: #fff !important;
  }
  tr:nth-child(even) {
    background-color:  rgba(232, 106, 51, 0.5);
  }
  td{
    #finalizar{
      background-color: red;
      padding: 0.5rem;
    }
  }
  @media screen and (min-width: 779px) {
    thead, th, tr{
      margin: 0 auto;
      width: 12.5rem;
    }
  }
</style>
<template>
  <!-- <label for="search-bar">
    <input type="text" name="search-bar" id="search-bar">
    <button type="button"><img src="@/assets/img/icons/search.svg"></button>
  </label> -->
  <v-table fixed-header height="90vh" id="services-table">
    <thead>
      <tr>
        <th class="text-left">
          Código da Reserva
        </th>
        <th class="text-left">
          CPF do cliente
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
      </tr>
    </thead>
    <tbody v-if="service.services">
      <tr v-for="item in service.services" :key="item.id">
        <td>#{{ item.id }}</td>
        <td>{{ item.pet.user.cpf }}</td>
        <td>{{ item.roomNumber }}</td>
        <td>{{ new Date(item.startDate).toLocaleDateString('pt-br') }}</td>
        <td>{{ new Date(item.endDate).toLocaleDateString('pt-br') }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useService } from '../../composables/useService';
import { useServiceStore } from '../../stores/ServiceStore';
const service = useServiceStore();
const { getAllServices } = useService();

onMounted(async () => {
  await getAllServices();
});
</script>

<style scoped lang="scss">
#services-table {
  border-radius: 10px;
}

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

  button {
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0;
    border-left: 1px solid #000;

    img {
      max-width: 1.5rem;
    }
  }
}


thead,
th {
  background-color: #E86A33 !important;
  color: #fff !important;
}

tr:nth-child(even) {
  background-color: rgba(232, 106, 51, 0.5);
}

@media screen and (min-width: 779px) {

  thead,
  th,
  tr {
    margin: 0 auto;
    width: 12.5rem;
  }
}
</style>
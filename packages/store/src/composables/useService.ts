import { ref } from 'vue';
import { useFetch } from './useFetch'
import { useServiceStore } from '@/stores/ServiceStore';
const service = useServiceStore();

export function useService() {
  const { get, post, data, error } = useFetch()
  const serviceLoading = ref(false);
  const api = process.env.BASE_API

  const schedule = async (startDate: string, endDate: string, petId: number, roomNumber: number, token: string) => {
    serviceLoading.value = true;
    await post(`${api}/service`, {
      startDate,
      endDate,
      petId,
      roomNumber
    }, token);
    serviceLoading.value = false;
  }

  //admin
  const getAllServices = async (token: string) => {
    serviceLoading.value = true;
    await get(`${api}/service/all`, token)
    service.services = data.value;
    serviceLoading.value = false;
  }

  const confirmCheckIn = async (serviceId: number, token: string) => {
    serviceLoading.value = true;
    await post(`${api}/service/confirm/${serviceId}`, {
      confirm: true,
    }, token)
    service.services = data.value;
    serviceLoading.value = false;
  }

  const finishService = async (serviceId: number, token: string) => {
    serviceLoading.value = true;
    await post(`${api}/service/finish/${serviceId}`, {
      finish: true,
    }, token)
    service.services = data.value;
    serviceLoading.value = false;
  }

  return {
    schedule,
    getAllServices,
    confirmCheckIn,
    finishService,
    data,
    error,
    serviceLoading,
  }
}

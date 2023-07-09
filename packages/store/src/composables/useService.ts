import { ref } from 'vue';
import { useFetch } from './useFetch'
import { useServiceStore } from '@/stores/ServiceStore';
const service = useServiceStore();

export function useService() {
  const { get, post, data, error } = useFetch()
  const serviceLoading = ref(false);
  const api = process.env.BASE_API

  const schedule = async (startDate: string, endDate: string, petId: number, roomNumber: number) => {
    serviceLoading.value = true;
    await post(`${api}/service`, {
      startDate,
      endDate,
      petId,
      roomNumber
    });
    serviceLoading.value = false;
  }

  //admin
  const getAllServices = async () => {
    serviceLoading.value = true;
    await get(`${api}/service/all`)
    service.services = data.value;
    serviceLoading.value = false;
  }

  return {
    schedule,
    getAllServices,
    data,
    error,
    serviceLoading,
  }
}

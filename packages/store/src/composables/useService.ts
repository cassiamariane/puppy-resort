import { ref } from 'vue';
import { useFetch } from './useFetch'
import { useRoomStore } from '@/stores/RoomStore'
const room = useRoomStore();

export function useService() {
  const { get, post, data, error } = useFetch()
  const serviceLoading = ref(false);
  const api = process.env.BASE_API

  const getRooms = async () => {
    serviceLoading.value = true;
    await get(`${api}/service/1`)
    room.rooms = data.value;
    serviceLoading.value = false;
  }

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



  return {
    getRooms,
    schedule,
    data,
    error,
    serviceLoading
  }
}

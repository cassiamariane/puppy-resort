import { ref } from 'vue';
import { useFetch } from './useFetch'
import { useRoomStore } from '@/stores/RoomStore'
const room = useRoomStore();

export function useRoom() {
  const { get, data, error } = useFetch()
  const roomLoading = ref(false);
  const api = process.env.BASE_API

  const getAvailableRooms = async () => {
    roomLoading.value = true;
    await get(`${api}/room/1`)
    room.rooms = data.value;
    roomLoading.value = false;
  }

  // admin
  const getAllRooms = async () => {
    roomLoading.value = true;
    await get(`${api}/room/current`)
    room.rooms = data.value;
    roomLoading.value = false;
  }

  return {
    getAvailableRooms,
    data,
    error,
    roomLoading,
    getAllRooms
  }
}

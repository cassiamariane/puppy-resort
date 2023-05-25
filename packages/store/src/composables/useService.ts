import { useFetch } from './useFetch'
import { useRoomStore } from '@/stores/RoomStore'
const room = useRoomStore();

export function useService() {
  const { get, post, data, error } = useFetch()
  const api = process.env.BASE_API

  const getRooms = async () => {
    await get(`${api}/service/1`)
    room.rooms = data.value;
  }

  const schedule = async (startDate: string, endDate: string, petId: number, roomNumber: number) => {
    await post(`${api}/service`, {
      startDate,
      endDate,
      petId,
      roomNumber
    });
  }



  return {
    getRooms,
    schedule,
    data,
    error,
  }
}

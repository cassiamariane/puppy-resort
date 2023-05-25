import { useFetch } from './useFetch'
import { usePetStore } from '@/stores/PetStore'
const pet = usePetStore();

export function usePet() {
  const { get, data} = useFetch()

  const myPets = async () => {
    const api = process.env.BASE_API
    await get(`${api}/user/pets`)
    pet.pets = data.value;
  }

  return {
    myPets
  }
}

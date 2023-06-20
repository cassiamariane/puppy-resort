import { ref } from 'vue';
import { useFetch } from './useFetch'
import { usePetStore } from '@/stores/PetStore'
const pet = usePetStore();

type Pet = {
  name: string
  age: number
  description: string
  gender: string
  breed: string
  species: string

}

export function usePet() {
  const { get, post, data, error} = useFetch()
  const petLoading = ref(false);

  const myPets = async () => {
    petLoading.value = true;
    const api = process.env.BASE_API
    await get(`${api}/user/pets`)
    pet.pets = data.value;
    petLoading.value = false;
  }

  const createPet = async (pet: Pet) => {
    petLoading.value = true;
    const api = process.env.BASE_API
    await post(`${api}/pet`, {
      name: pet.name,
      age: pet.age,
      description: pet.description,
      gender: pet.gender,
      breed: pet.breed,
      species: pet.species
    })
    petLoading.value = false;
  }

  return {
    myPets,
    createPet,
    data,
    error,
    petLoading
  }
}

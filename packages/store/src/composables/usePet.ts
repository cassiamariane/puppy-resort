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

  const myPets = async () => {
    const api = process.env.BASE_API
    await get(`${api}/user/pets`)
    pet.pets = data.value;
  }

  const createPet = async (pet: Pet) => {
    const api = process.env.BASE_API
    await post(`${api}/pet`, {
      name: pet.name,
      age: pet.age,
      description: pet.description,
      gender: pet.gender,
      breed: pet.breed,
      species: pet.species
    })
  }

  return {
    myPets,
    createPet,
    data,
    error
  }
}

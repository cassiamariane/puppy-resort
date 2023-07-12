import { ref } from 'vue'
import { useFetch } from './useFetch'
import { useAddressStore } from '@/stores/AddressStore'
const address = useAddressStore()

type Address = {
  code: string
  street: string
  number: string
  neighborhood: string
  city: string
  state: string
  complement: string
}

export function useAddress() {
  const { get, post, data, error } = useFetch()
  const addressLoading = ref(false)

  const myAddress = async (token: string) => {
    addressLoading.value = true
    const api = process.env.BASE_API
    await get(`${api}/user/address`, token)
    address.address = data.value
    addressLoading.value = false
  }

  const createAddress = async (address: Address, token: string) => {
    addressLoading.value = true
    const api = process.env.BASE_API
    await post(`${api}/address`, {
      code: address.code,
      street: address.street,
      city: address.city,
      neighborhood: address.neighborhood,
      number: address.number,
      state: address.state,
      complement: address.complement
    }, token)
    addressLoading.value = false
  }

  return {
    myAddress,
    createAddress,
    data,
    error,
    addressLoading
  }
}

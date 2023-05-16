import { ref } from 'vue'
import { useFetch } from './useFetch'

type User = {
  name: string
  email: string
  phone: string
  cpf: string
  password: string
}

export function useSignup() {
  const loading = ref(false)
  const { data, error, post } = useFetch()

  const signup = async (user: User) => {
    loading.value = true
    const api = process.env.BASE_API
    await post(`${api}/user/create`, {
      name: user.name,
      phone: user.phone,
      email: user.email,
      password: user.password,
      cpf: user.cpf
    })
    loading.value = false
  }

  return {
    data,
    error,
    loading,
    signup
  }
}

import { ref } from 'vue'
import { useFetch } from './useFetch'

type User = {
  name: string
  email: string
  phone: string
  cpf: string
  birthday: string
  password: string
}

export function useSignup() {
  const loading = ref(false)
  const { data, error, post } = useFetch()

  const signup = async (user: User) => {
    loading.value = true
    await post('http://localhost:8081/api/user/create', {
      name: user.name,
      birthday: user.birthday,
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

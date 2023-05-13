import { ref } from 'vue'
import { useFetch } from './useFetch'

type Auth = {
  identifier: string
  password: string
}

export function useLogin() {
  const loading = ref(false)
  const { data, error, post } = useFetch()

  const login = async (user: Auth) => {
    loading.value = true
    await post('http://localhost:8081/api/user/login', {
      identifier: user.identifier,
      password: user.password
    })
    loading.value = false
  }

  return {
    data,
    error,
    loading,
    login
  }
}

import { useFetch } from './useFetch'

type Auth = {
  identifier: string
  password: string
}

export function useLogin() {
  const { data, error, post, loading } = useFetch()

  const login = async (user: Auth) => {
    const api = process.env.BASE_API
    await post(`${api}/user/login`, {
      identifier: user.identifier,
      password: user.password
    })
  }

  return {
    data,
    error,
    login,
    loading
  }
}

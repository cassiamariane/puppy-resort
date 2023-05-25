import { ref } from 'vue'
import { useUserStore } from '@/stores/UserStore'

export function useFetch() {
  const data = ref(null) as any
  const error = ref('')
  const { user } = useUserStore()

  const get = async (url: string) => {
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: [
          ['Content-Type', 'application/json'],
          ['Authorization', user.token ? `Bearer ${user.token}` : '']
        ]
      })
      const result = await response.json()
      if (result.error) {
        error.value = result.error
        return
      }

      data.value = result.data
    } catch (e) {
      console.log(e)
    }
  }

  const post = async (url: string, body: any) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: [['Content-Type', 'application/json'], ['Authorization', user.token ? `Bearer ${user.token}` : '']],
        body: JSON.stringify({ ...body }),
      })
      const result = await response.json()
      if (result.error) {
        error.value = result.error
        return
      }
      data.value = result.data
    } catch (e) {
      console.log(e)
    }
  }

  return {
    get,
    post,
    data,
    error
  }
}

import { ref } from 'vue'

export function useFetch() {
  const data = ref(null) as any
  const error = ref('')
  const loading = ref(false)

  const get = async (url: string, token: string = '') => {
    loading.value = true;
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: [
          ['Content-Type', 'application/json'],
          ['Authorization', token ? `Bearer ${token}` : '']
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
    finally {
      loading.value = false;
    }
  }

  const post = async (url: string, body: any, token: string = '') => {
    loading.value = true;
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: [['Content-Type', 'application/json'], ['Authorization', token ? `Bearer ${token}` : '']],
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
    finally {
      loading.value = false;
    }
  }

  return {
    get,
    post,
    data,
    error,
    loading
  }
}

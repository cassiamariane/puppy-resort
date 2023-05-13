import { ref } from 'vue'

export function useFetch() {
  const data = ref(null) as any;
  const error = ref('')

  const post = async (url: string, body: any) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: [['Content-Type', 'application/json']],
            body: JSON.stringify({...body})
          })
          const result = await response.json()
          if (result.error) {
            error.value = result.error
            return
          }
          data.value = result.data  
    } catch (e) {
        console.log(e);
        error.value = 'Não foi possível concluir seu cadastro. Tente novamente mais tarde.'
    }

  }

  return {
    data,
    error,
    post
  }
}

import { defineStore } from 'pinia'

export const useServiceStore = defineStore('service', {
  state() {
    return {
      services: [
        {
          id: 0,
          startDate: '',
          endDate: '',
          roomNumber: '',
          pet: {
            user: {
              cpf: ''
            }
          }
        }
      ]
    }
  },

  actions: {
    setService(services: any) {
      this.services = services
    }
  }
})

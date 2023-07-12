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
          finished: false,
          pet: {
            user: {
              cpf: ''
            }
          },
          room: {
            available: false,
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

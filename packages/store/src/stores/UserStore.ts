import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
    state() {
        return {
            user: {
                token: '',
                name: '',
                email: '',
                admin: false,
            }
        }
    },

    actions: {
        setUser(user: any) {
            this.user = user;
        }
    }
})
import { defineStore } from "pinia";

export const useRoomStore = defineStore('room', {
    state() {
        return {
            rooms: [{
                notAvailableAt: [] as Date[],
                room: 0,
            }]
        }
    },

    actions() {}
})
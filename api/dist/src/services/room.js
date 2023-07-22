"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseDatabase_1 = require("../../prisma/BaseDatabase");
class RoomService {
    static getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const services = yield BaseDatabase_1.BaseDatabase.room.findMany({
                    select: {
                        number: true,
                        available: true,
                        services: {
                            select: {
                                pet: {
                                    select: {
                                        name: true,
                                        species: true,
                                        user: {
                                            select: {
                                                name: true,
                                                phone: true,
                                            },
                                        },
                                    },
                                },
                                endDate: true,
                                startDate: true,
                            },
                        },
                    },
                });
                return {
                    data: services,
                    status: 200,
                    error: "",
                };
            }
            catch (error) {
                console.log(error);
                return {
                    data: null,
                    status: 500,
                    error: "Houve um problema ao buscar os quartos. Tente novamente mais tarde.",
                };
            }
        });
    }
    static getAvailable(hotelId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!hotelId) {
                return {
                    data: null,
                    status: 400,
                    error: "Informações insuficientes.",
                };
            }
            try {
                const availableRooms = yield BaseDatabase_1.BaseDatabase.room.findMany({
                    select: { number: true },
                    where: { available: true, hotelId },
                });
                let unavailability = [];
                for (let room of availableRooms) {
                    const services = yield BaseDatabase_1.BaseDatabase.service.findMany({
                        select: {
                            startDate: true,
                            endDate: true,
                        },
                        where: {
                            roomNumber: room.number,
                            finished: false,
                            endDate: {
                                gt: new Date(new Date().setHours(0, 0, 0, 0)),
                            },
                        },
                    });
                    let notAvailableAt = [];
                    for (let service of services) {
                        const start = service.startDate;
                        const end = service.endDate;
                        let dia = new Date(start);
                        while (dia.getTime() !== end.getTime()) {
                            notAvailableAt.push(new Date(dia));
                            dia = new Date(dia.getTime() + 24 * 60 * 60 * 1000);
                        }
                    }
                    unavailability.push({
                        room: room.number,
                        notAvailableAt,
                    });
                }
                return {
                    data: unavailability,
                    status: 200,
                    error: "",
                };
            }
            catch (error) {
                console.log(error);
                return {
                    data: null,
                    status: 500,
                    error: "Houve um problema ao encontrar a disponibilidade dos quartos. Tente novamente mais tarde.",
                };
            }
        });
    }
}
exports.default = RoomService;

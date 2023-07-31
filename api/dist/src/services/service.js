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
class ServiceService {
    static getAllServices() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const services = yield BaseDatabase_1.BaseDatabase.service.findMany({
                    select: {
                        id: true,
                        startDate: true,
                        endDate: true,
                        roomNumber: true,
                        finished: true,
                        pet: {
                            select: {
                                user: {
                                    select: {
                                        cpf: true,
                                    },
                                },
                            },
                        },
                        room: {
                            select: {
                                available: true,
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
                    error: "Houve um problema ao buscar os serviços. Tente novamente mais tarde.",
                };
            }
        });
    }
    static getClientServices(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const calculateServiceValue = (startDate, endDate) => {
                const valorDiario = 70;
                const umDiaEmMilissegundos = 24 * 60 * 60 * 1000;
                const data1SemHora = new Date(endDate);
                data1SemHora.setUTCHours(9, 0, 0, 0);
                const data2SemHora = new Date(startDate);
                data2SemHora.setUTCHours(9, 0, 0, 0);
                const diferencaEmMilissegundos = Math.abs(data1SemHora.getTime() - data2SemHora.getTime());
                const diferencaEmDias = Math.round(diferencaEmMilissegundos / umDiaEmMilissegundos);
                return diferencaEmDias * valorDiario;
            };
            try {
                const services = yield BaseDatabase_1.BaseDatabase.service.findMany({
                    select: {
                        id: true,
                        startDate: true,
                        endDate: true,
                        roomNumber: true,
                        finished: true,
                        pet: {
                            select: {
                                name: true,
                                species: true,
                            },
                        },
                    },
                    where: {
                        userId,
                    },
                });
                return {
                    data: services.map((s) => (Object.assign(Object.assign({}, s), { value: calculateServiceValue(s.startDate, s.endDate) }))),
                    status: 200,
                    error: "",
                };
            }
            catch (error) {
                console.log(error);
                return {
                    data: null,
                    status: 500,
                    error: "Houve um problema ao buscar os serviços. Tente novamente mais tarde.",
                };
            }
        });
    }
    static schedule(service) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!service.startDate ||
                !service.endDate ||
                !service.petId ||
                !service.roomNumber) {
                return {
                    data: null,
                    status: 400,
                    error: "Informações insuficientes.",
                };
            }
            service.startDate = new Date(service.startDate);
            service.startDate.setHours(service.startDate.getHours() - service.startDate.getTimezoneOffset() / 60);
            service.endDate = new Date(service.endDate);
            service.endDate.setHours(service.endDate.getHours() - service.endDate.getTimezoneOffset() / 60);
            if (service.endDate <= service.startDate ||
                service.startDate.setHours(9, 0, 0, 0) <
                    new Date().setHours(9, 0, 0, 0) ||
                service.endDate.setHours(9, 0, 0, 0) < new Date().setHours(9, 0, 0, 0)) {
                return {
                    data: null,
                    status: 400,
                    error: "A data de fim deve ser pelo menos um dia maior que a data de início.",
                };
            }
            try {
                const currentServices = yield BaseDatabase_1.BaseDatabase.service.findMany({
                    select: {
                        startDate: true,
                        endDate: true,
                    },
                    where: {
                        roomNumber: service.roomNumber,
                        finished: false,
                        OR: [
                            {
                                startDate: { lte: service.startDate },
                                endDate: { gt: service.startDate },
                            },
                            {
                                startDate: { lt: service.endDate },
                                endDate: { gte: service.endDate },
                            },
                            {
                                startDate: { gte: service.startDate },
                                endDate: { lte: service.endDate },
                            },
                            {
                                startDate: { lte: service.startDate },
                                endDate: { gte: service.endDate },
                            },
                        ],
                    },
                });
                if (currentServices.length) {
                    return {
                        data: null,
                        status: 400,
                        error: "Período indisponível para este quarto.",
                    };
                }
                const scheduled = yield BaseDatabase_1.BaseDatabase.service.create({ data: service });
                return {
                    data: scheduled,
                    status: 200,
                    error: "",
                };
            }
            catch (error) {
                console.log(error);
                return {
                    data: null,
                    status: 500,
                    error: "Houve um problema ao agendar seu serviço. Tente novamente mais tarde.",
                };
            }
        });
    }
    static finishService(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!id) {
                return {
                    data: null,
                    status: 400,
                    error: "Informações insuficientes.",
                };
            }
            try {
                yield BaseDatabase_1.BaseDatabase.service.update({
                    where: {
                        id,
                    },
                    data: {
                        finished: true,
                        room: {
                            update: {
                                available: true,
                            },
                        },
                    },
                });
                return {
                    data: (yield this.getAllServices()).data,
                    status: 200,
                    error: "",
                };
            }
            catch (error) {
                console.log(error);
                return {
                    data: null,
                    status: 500,
                    error: "Houve um problema ao finalizar o serviço.",
                };
            }
        });
    }
    static confirmCheckIn(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!id) {
                return {
                    data: null,
                    status: 400,
                    error: "Informações insuficientes.",
                };
            }
            try {
                const service = yield BaseDatabase_1.BaseDatabase.service.findFirst({
                    where: {
                        id,
                    },
                });
                if (!service) {
                    return {
                        data: null,
                        status: 400,
                        error: "Serviço não encontrado.",
                    };
                }
                const roomNumber = service.roomNumber;
                yield BaseDatabase_1.BaseDatabase.room.update({
                    where: {
                        number: roomNumber,
                    },
                    data: {
                        available: false,
                    },
                });
                return {
                    data: (yield this.getAllServices()).data,
                    status: 200,
                    error: "",
                };
            }
            catch (error) {
                console.log(error);
                return {
                    data: null,
                    status: 500,
                    error: "Houve um problema ao confirmar o check-in.",
                };
            }
        });
    }
}
exports.default = ServiceService;

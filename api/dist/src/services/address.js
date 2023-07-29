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
class AddressService {
    static findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const adresses = yield BaseDatabase_1.BaseDatabase.address.findMany({
                    select: {
                        id: true,
                        code: true,
                        street: true,
                        number: true,
                        neighborhood: true,
                        city: true,
                        state: true,
                        complement: true,
                        user: {
                            select: {
                                name: true,
                                cpf: true,
                            },
                        },
                    },
                });
                return {
                    data: adresses,
                    status: 200,
                    error: "",
                };
            }
            catch (error) {
                console.log(error);
                return {
                    data: null,
                    status: 500,
                    error: "Houve um problema ao encontrar os endereços.",
                };
            }
        });
    }
    static findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!id || typeof id != "number") {
                    return {
                        data: null,
                        status: 400,
                        error: "ID inválido ou inexistente.",
                    };
                }
                const address = yield BaseDatabase_1.BaseDatabase.address.findUnique({
                    where: { id },
                    select: {
                        id: true,
                        code: true,
                        street: true,
                        number: true,
                        neighborhood: true,
                        city: true,
                        state: true,
                        complement: true,
                        user: {
                            select: {
                                name: true,
                                id: true,
                            },
                        },
                    },
                });
                return {
                    data: address,
                    status: 200,
                    error: "",
                };
            }
            catch (error) {
                console.log(error);
                return {
                    data: null,
                    status: 500,
                    error: "Houve um problema ao encontrar o endereços.",
                };
            }
        });
    }
    static createAddress(address) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!address.code ||
                    !address.street ||
                    !address.number ||
                    !address.neighborhood ||
                    !address.city ||
                    !address.state ||
                    !address.complement ||
                    !address.userId) {
                    return {
                        data: null,
                        status: 400,
                        error: "Informações insuficientes.",
                    };
                }
                const addressCreated = yield BaseDatabase_1.BaseDatabase.address.create({
                    data: address,
                });
                if (addressCreated.id) {
                    return {
                        data: addressCreated,
                        status: 200,
                        error: "",
                    };
                }
                return {
                    data: null,
                    status: 500,
                    error: "Houve um problema ao cadastrar o endereço.",
                };
            }
            catch (error) {
                console.log(error);
                return {
                    data: null,
                    status: 500,
                    error: "Houve um problema ao cadastrar o endereço.",
                };
            }
        });
    }
    static updateAddress(id, address, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!address.code &&
                    !address.street &&
                    !address.number &&
                    !address.neighborhood &&
                    !address.city &&
                    !address.state &&
                    !address.complement &&
                    !address.userId) {
                    return {
                        data: null,
                        status: 400,
                        error: "Informações insuficientes.",
                    };
                }
                const addressExists = yield BaseDatabase_1.BaseDatabase.address.findFirst({
                    where: { id },
                });
                if (!addressExists) {
                    return {
                        data: false,
                        status: 404,
                        error: "Endereço não existe.",
                    };
                }
                if (addressExists.userId !== userId) {
                    return {
                        data: false,
                        status: 401,
                        error: "Você não tem permissão para atualizar este endereço.",
                    };
                }
                const addressUpdated = yield BaseDatabase_1.BaseDatabase.address.update({
                    where: {
                        id
                    },
                    data: {
                        number: address.number ? address.number : addressExists.number,
                        code: address.code ? address.code : addressExists.code,
                        street: address.street ? address.street : addressExists.street,
                        neighborhood: address.neighborhood
                            ? address.neighborhood
                            : addressExists.neighborhood,
                        city: address.city ? address.city : addressExists.city,
                        state: address.state ? address.state : addressExists.state,
                        complement: address.complement
                            ? address.complement
                            : addressExists.complement,
                    },
                });
                if (addressUpdated.id) {
                    return {
                        data: addressUpdated,
                        status: 200,
                        error: "",
                    };
                }
                return {
                    data: null,
                    status: 500,
                    error: "Houve um problema ao atualizar o endereço.",
                };
            }
            catch (error) {
                console.log(error);
                return {
                    data: null,
                    status: 500,
                    error: "Houve um problema ao atualizar o endereço.",
                };
            }
        });
    }
}
exports.default = AddressService;

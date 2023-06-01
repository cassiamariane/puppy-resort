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
class PetService {
    static findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pets = yield BaseDatabase_1.BaseDatabase.pet.findMany({
                    select: { id: true, name: true, species: true, breed: true, gender: true, age: true, description: true, user: {
                            select: {
                                name: true,
                                cpf: true
                            }
                        }
                    }
                });
                return {
                    data: pets,
                    status: 200,
                    error: "",
                };
            }
            catch (error) {
                console.log(error);
                return {
                    data: null,
                    status: 500,
                    error: "Houve um problema ao encontrar os pets.",
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
                const pet = yield BaseDatabase_1.BaseDatabase.pet.findUnique({
                    where: { id },
                    select: { id: true, name: true, species: true, breed: true, gender: true, age: true, description: true, user: {
                            select: {
                                name: true,
                                id: true
                            }
                        }
                    }
                });
                return {
                    data: pet,
                    status: 200,
                    error: "",
                };
            }
            catch (error) {
                console.log(error);
                return {
                    data: null,
                    status: 500,
                    error: "Houve um problema ao encontrar o pet.",
                };
            }
        });
    }
    static createPet(pet) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!pet.name || !pet.species || !pet.breed || !pet.gender || !pet.age || !pet.description || !pet.userId) {
                    return {
                        data: null,
                        status: 400,
                        error: "Informações insuficientes.",
                    };
                }
                const petCreated = yield BaseDatabase_1.BaseDatabase.pet.create({ data: pet });
                if (petCreated.id) {
                    return {
                        data: petCreated,
                        status: 200,
                        error: "",
                    };
                }
                return {
                    data: null,
                    status: 500,
                    error: "Houve um problema ao cadastrar o pet.",
                };
            }
            catch (error) {
                console.log(error);
                return {
                    data: null,
                    status: 500,
                    error: "Houve um problema ao cadastrar o pet.",
                };
            }
        });
    }
}
exports.default = PetService;

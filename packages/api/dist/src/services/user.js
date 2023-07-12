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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const BaseDatabase_1 = require("../../prisma/BaseDatabase");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class UserService {
    static getMe(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!id || typeof id != "number") {
                    return {
                        data: null,
                        status: 400,
                        error: "ID inválido ou inexistente.",
                    };
                }
                const user = yield BaseDatabase_1.BaseDatabase.user.findUnique({
                    where: { id },
                    select: { id: true, name: true, cpf: true, phone: true, email: true },
                });
                return {
                    data: user,
                    status: 200,
                    error: "",
                };
            }
            catch (error) {
                console.log(error);
                return {
                    data: null,
                    status: 500,
                    error: "Houve um problema ao encontrar o usuário.",
                };
            }
        });
    }
    static getMyPets(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!userId || typeof userId != "number") {
                    return {
                        data: null,
                        status: 400,
                        error: "ID inválido ou inexistente.",
                    };
                }
                const user = yield BaseDatabase_1.BaseDatabase.pet.findMany({
                    where: { userId },
                    select: {
                        id: true,
                        name: true,
                        breed: true,
                        species: true,
                        description: true,
                        age: true,
                        gender: true,
                    },
                });
                return {
                    data: user,
                    status: 200,
                    error: "",
                };
            }
            catch (error) {
                console.log(error);
                return {
                    data: null,
                    status: 500,
                    error: "Houve um problema ao encontrar o usuário.",
                };
            }
        });
    }
    static isSignupComplete(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const address = yield this.getMyAddress(userId);
                if (address.data) {
                    return {
                        data: true,
                        status: 200,
                        error: "",
                    };
                }
                return {
                    data: false,
                    status: 404,
                    error: "",
                };
            }
            catch (error) {
                return {
                    data: null,
                    status: 500,
                    error: "Houve um problema ao buscar essa informação.",
                };
            }
        });
    }
    static getMyAddress(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!userId || typeof userId != "number") {
                    return {
                        data: null,
                        status: 400,
                        error: "ID inválido ou inexistente.",
                    };
                }
                const user = yield BaseDatabase_1.BaseDatabase.address.findUnique({
                    where: { userId },
                    select: {
                        id: true,
                        code: true,
                        street: true,
                        number: true,
                        neighborhood: true,
                        city: true,
                        state: true,
                        complement: true,
                    },
                });
                return {
                    data: user,
                    status: 200,
                    error: "",
                };
            }
            catch (error) {
                console.log(error);
                return {
                    data: null,
                    status: 500,
                    error: "Houve um problema ao encontrar o usuário.",
                };
            }
        });
    }
    static findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield BaseDatabase_1.BaseDatabase.user.findMany({
                    select: {
                        id: true,
                        name: true,
                        cpf: true,
                        phone: true,
                        email: true,
                        admin: true,
                    },
                });
                return {
                    data: users,
                    status: 200,
                    error: "",
                };
            }
            catch (error) {
                console.log(error);
                return {
                    data: null,
                    status: 500,
                    error: "Houve um problema ao encontrar os usuários.",
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
                const user = yield BaseDatabase_1.BaseDatabase.user.findUnique({
                    where: { id },
                    select: {
                        id: true,
                        name: true,
                        cpf: true,
                        phone: true,
                        email: true,
                        admin: true,
                    },
                });
                return {
                    data: user,
                    status: 200,
                    error: "",
                };
            }
            catch (error) {
                console.log(error);
                return {
                    data: null,
                    status: 500,
                    error: "Houve um problema ao encontrar o usuário.",
                };
            }
        });
    }
    static createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!user.email ||
                    !user.password ||
                    !user.cpf ||
                    !user.phone ||
                    !user.name) {
                    return {
                        data: null,
                        status: 400,
                        error: "Informações insuficientes.",
                    };
                }
                const userExists = yield BaseDatabase_1.BaseDatabase.user.findFirst({
                    where: { OR: [{ email: user.email }, { cpf: user.cpf }] },
                });
                if (userExists) {
                    return { data: null, status: 400, error: "Usuário já cadastrado." };
                }
                const salt = yield bcryptjs_1.default.genSalt(Number(process.env.SALT) || 10);
                const hash = yield bcryptjs_1.default.hash(user.password, salt);
                user.password = hash;
                if (!user.admin) {
                    user.admin = false;
                }
                else {
                    user.admin = true;
                }
                const userCreated = yield BaseDatabase_1.BaseDatabase.user.create({ data: user });
                if (userCreated.id) {
                    return this.generateToken(userCreated.id, user.email, user.name, user.admin);
                }
                return {
                    data: null,
                    status: 500,
                    error: "Houve um problema ao cadastrar o usuário.",
                };
            }
            catch (error) {
                console.log(error);
                return {
                    data: null,
                    status: 500,
                    error: "Houve um problema ao cadastrar o usuário.",
                };
            }
        });
    }
    static login(login) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { identifier, password } = login;
                if (!identifier || !password) {
                    return {
                        data: null,
                        status: 400,
                        error: "Informações insuficientes.",
                    };
                }
                const userExists = yield BaseDatabase_1.BaseDatabase.user.findFirst({
                    where: { OR: [{ email: identifier }, { cpf: identifier }] },
                });
                if (!userExists) {
                    return {
                        data: null,
                        status: 400,
                        error: "Usuário não existe.",
                    };
                }
                const validPassword = yield bcryptjs_1.default.compare(password, userExists.password);
                if (!validPassword) {
                    return {
                        data: null,
                        status: 401,
                        error: "Senha incorreta.",
                    };
                }
                return this.generateToken(userExists.id, userExists.email, userExists.name, userExists.admin);
            }
            catch (error) {
                console.log(error);
                return {
                    data: null,
                    status: 500,
                    error: "Houve um problema ao autenticar o usuário.",
                };
            }
        });
    }
    static generateToken(id, email, name, admin) {
        const token = jsonwebtoken_1.default.sign({ id, email, name, admin }, UserService.secret, {
            expiresIn: "7d",
        });
        if (!token) {
            return {
                data: null,
                status: 401,
                error: "Não autorizado",
            };
        }
        return {
            data: {
                token,
                email,
                name,
                admin,
            },
            status: 200,
            error: "",
        };
    }
}
UserService.secret = (_a = process.env.TOKEN_SECRET) !== null && _a !== void 0 ? _a : "foo";
exports.default = UserService;

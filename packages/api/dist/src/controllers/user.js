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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_1 = __importDefault(require("../services/user"));
class UserController {
    getMe(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield user_1.default.getMe(Number((_a = req.user) === null || _a === void 0 ? void 0 : _a.id));
            return res
                .status(response.status)
                .json({ data: response.data, error: response.error });
        });
    }
    getMyPets(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield user_1.default.getMyPets(Number((_a = req.user) === null || _a === void 0 ? void 0 : _a.id));
            return res
                .status(response.status)
                .json({ data: response.data, error: response.error });
        });
    }
    getMyAddress(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield user_1.default.getMyAddress(Number((_a = req.user) === null || _a === void 0 ? void 0 : _a.id));
            return res
                .status(response.status)
                .json({ data: response.data, error: response.error });
        });
    }
    isSignupComplete(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield user_1.default.isSignupComplete(Number((_a = req.user) === null || _a === void 0 ? void 0 : _a.id));
            return res
                .status(response.status)
                .json({ data: response.data, error: response.error });
        });
    }
    findById(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if ((_a = req.user) === null || _a === void 0 ? void 0 : _a.admin) {
                const response = yield user_1.default.findById(Number(req.params.id));
                return res
                    .status(response.status)
                    .json({ data: response.data, error: response.error });
            }
            return res.status(401).json({ data: null, error: "Não autorizado" });
        });
    }
    findAll(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if ((_a = req.user) === null || _a === void 0 ? void 0 : _a.admin) {
                const response = yield user_1.default.findAll();
                return res
                    .status(response.status)
                    .json({ data: response.data, error: response.error });
            }
            return res.status(401).json({ data: null, error: "Não autorizado" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield user_1.default.createUser(req.body);
            return res
                .status(response.status)
                .json({ data: response.data, error: response.error });
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield user_1.default.login(req.body);
            return res
                .status(response.status)
                .json({ data: response.data, error: response.error });
        });
    }
}
exports.UserController = UserController;

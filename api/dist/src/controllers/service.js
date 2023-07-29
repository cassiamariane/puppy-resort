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
exports.ServiceController = void 0;
const service_1 = __importDefault(require("../services/service"));
class ServiceController {
    schedule(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.user;
            const response = yield service_1.default.schedule(Object.assign(Object.assign({}, req.body), { userId: id }));
            return res
                .status(response.status)
                .json({ data: response.data, error: response.error });
        });
    }
    getClientServices(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.user;
            const response = yield service_1.default.getClientServices(id);
            return res
                .status(response.status)
                .json({ data: response.data, error: response.error });
        });
    }
    getAll(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if ((_a = req.user) === null || _a === void 0 ? void 0 : _a.admin) {
                const response = yield service_1.default.getAllServices();
                return res
                    .status(response.status)
                    .json({ data: response.data, error: response.error });
            }
            return res.status(401).json({ data: null, error: "Não autorizado" });
        });
    }
    finishService(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if ((_a = req.user) === null || _a === void 0 ? void 0 : _a.admin) {
                const { id } = req.params;
                const response = yield service_1.default.finishService(Number(id));
                return res
                    .status(response.status)
                    .json({ data: response.data, error: response.error });
            }
            return res.status(401).json({ data: null, error: "Não autorizado" });
        });
    }
    confirmCheckIn(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if ((_a = req.user) === null || _a === void 0 ? void 0 : _a.admin) {
                const { id } = req.params;
                const response = yield service_1.default.confirmCheckIn(Number(id));
                return res
                    .status(response.status)
                    .json({ data: response.data, error: response.error });
            }
            return res.status(401).json({ data: null, error: "Não autorizado" });
        });
    }
}
exports.ServiceController = ServiceController;

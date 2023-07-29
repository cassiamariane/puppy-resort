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
exports.AddressController = void 0;
const address_1 = __importDefault(require("../services/address"));
class AddressController {
    findById(req, res) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield address_1.default.findById(Number(req.params.id));
            if (((_a = req.user) === null || _a === void 0 ? void 0 : _a.admin) || ((_b = response.data) === null || _b === void 0 ? void 0 : _b.user.id) == ((_c = req.user) === null || _c === void 0 ? void 0 : _c.id)) {
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
                const response = yield address_1.default.findAll();
                return res
                    .status(response.status)
                    .json({ data: response.data, error: response.error });
            }
            return res.status(401).json({ data: null, error: "Não autorizado" });
        });
    }
    create(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield address_1.default.createAddress(Object.assign(Object.assign({}, req.body), { userId: (_a = req.user) === null || _a === void 0 ? void 0 : _a.id }));
            return res
                .status(response.status)
                .json({ data: response.data, error: response.error });
        });
    }
    update(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield address_1.default.updateAddress(Number(req.params.id), req.body, (_a = req.user) === null || _a === void 0 ? void 0 : _a.id);
            return res
                .status(response.status)
                .json({ data: response.data, error: response.error });
        });
    }
}
exports.AddressController = AddressController;

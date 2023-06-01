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
    findAvailableRooms(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield service_1.default.findAvailableRooms(Number((_a = req.params) === null || _a === void 0 ? void 0 : _a.hotelId));
            return res
                .status(response.status)
                .json({ data: response.data, error: response.error });
        });
    }
    schedule(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield service_1.default.schedule(req.body);
            return res
                .status(response.status)
                .json({ data: response.data, error: response.error });
        });
    }
}
exports.ServiceController = ServiceController;

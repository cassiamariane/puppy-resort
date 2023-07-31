"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Server_1 = __importDefault(require("./Server"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const port = Number(process.env.PORT);
const app = (0, express_1.default)();
const server = new Server_1.default(app, port);
exports.default = app;
server.config();
if (process.env.NODE_ENV !== 'test') {
    server.run();
}

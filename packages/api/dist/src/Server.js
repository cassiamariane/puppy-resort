"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("./routes/user"));
const pet_1 = __importDefault(require("./routes/pet"));
const address_1 = __importDefault(require("./routes/address"));
const service_1 = __importDefault(require("./routes/service"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor(app, port) {
        this.app = app;
        this.port = port;
    }
    config() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.get('/api/health', (req, res) => {
            res.status(200).send({ ok: true });
        });
        this.app.use('/api/user', user_1.default);
        this.app.use('/api/pet', pet_1.default);
        this.app.use('/api/address', address_1.default);
        this.app.use('/api/service', service_1.default);
    }
    run() {
        this.app.listen(this.port, () => {
            console.log('Server running on port', this.port);
        });
    }
}
exports.default = Server;

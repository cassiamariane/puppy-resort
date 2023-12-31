"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const service_1 = require("../controllers/service");
const auth_1 = require("../middlewares/auth");
const router = (0, express_1.Router)();
const controller = new service_1.ServiceController();
router.get('/', auth_1.authenticate, controller.getClientServices);
router.post('/', auth_1.authenticate, controller.schedule);
router.get('/all', auth_1.authenticate, controller.getAll);
router.post('/finish/:id', auth_1.authenticate, controller.finishService);
router.post('/confirm/:id', auth_1.authenticate, controller.confirmCheckIn);
exports.default = router;

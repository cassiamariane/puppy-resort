import { Router } from "express";
import { AddressController } from '../controllers/address';
import { authenticate } from '../middlewares/auth';

const router = Router();
const controller = new AddressController();

router.get('/', authenticate, controller.findAll)
router.get('/:id', authenticate, controller.findById)
router.post('/', authenticate, controller.create)

export default router;
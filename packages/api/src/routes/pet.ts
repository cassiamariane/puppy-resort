import { Router } from "express";
import { PetController } from '../controllers/pet';
import { authenticate } from '../middlewares/auth';

const router = Router();
const controller = new PetController();

router.get('/', authenticate, controller.findAll)
router.get('/:id', authenticate, controller.findById)
router.post('/', authenticate, controller.create)

export default router;
import { Router } from "express";
import { ServiceController } from '../controllers/service';
import { authenticate } from '../middlewares/auth';

const router = Router();
const controller = new ServiceController();

router.get('/all', authenticate, controller.getAll)
router.post('/', authenticate, controller.schedule)

export default router;
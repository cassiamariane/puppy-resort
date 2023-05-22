import { Router } from "express";
import { ServiceController } from '../controllers/service';
import { authenticate } from '../middlewares/auth';

const router = Router();
const controller = new ServiceController();

router.get('/:hotelId', authenticate, controller.findAvailableRooms)
router.post('/', authenticate, controller.schedule)

export default router;
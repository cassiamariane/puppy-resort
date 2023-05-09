import { Router } from "express";
import { UserController } from '../controllers/user';
import { authenticate } from '../middlewares/auth';

const router = Router();
const controller = new UserController();

router.get('/', authenticate, controller.findAll)
router.get('/:id', authenticate, controller.findById)
router.post('/login', controller.login)
router.post('/create', controller.create)

export default router;
import { Router } from "express";
import { UserController } from '../controllers/user';
import { authenticate } from '../middlewares/auth';

const router = Router();
const controller = new UserController();

router.get('/', authenticate, controller.findAll)
router.get('/me', authenticate, controller.getMe)
router.get('/pets', authenticate, controller.getMyPets)
router.get('/:id', authenticate, controller.findById)
router.post('/login', controller.login)
router.post('/', controller.create)

export default router;
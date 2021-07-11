import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

/*
router.post('/', userController.store);
router.get('/:id', userController.index);
*/
router.get('/', loginRequired, userController.show);
router.put('/', userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

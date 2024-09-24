import express from 'express';
const router = express.Router();
import user_controller from '../controllers/user-controller.js';


router.post('/', user_controller.createUser);
router.get('/', user_controller.showAllUsers);
router.get('/:id', user_controller.showUserById);
router.put('/:id', user_controller.updateUser);
router.delete('/:id', user_controller.deleteUser);

router.post('/signup', user_controller.signup);
router.post('/signin', user_controller.signin);

export default router;
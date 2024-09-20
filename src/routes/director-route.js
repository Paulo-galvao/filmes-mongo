import express from 'express';
const router = express.Router();
import director_controllers from '../controllers/director-controllers.js';
import cep_endereco from '../middlewares/cep-address.js';

router.post('/',cep_endereco, director_controllers.createDirector);
router.get('/', director_controllers.showAllDirectors);
router.get('/:id', director_controllers.showDirectorById);
router.put('/:id', director_controllers.updateDirector);
router.delete('/:id', director_controllers.deleteDirector);

export default router;
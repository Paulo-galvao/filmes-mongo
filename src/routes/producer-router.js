import express from 'express';
const router = express.Router();
import producer_controllers from '../controllers/producer-controllers.js';
// import cep_endereco from '../middlewares/cep-address.js';

router.post('/', producer_controllers.createProducer);
router.get('/', producer_controllers.showAllProducers);
router.get('/:id', producer_controllers.showProducerById);
router.put('/:id', producer_controllers.updateProducer);
router.delete('/:id', producer_controllers.deleteProducer);

export default router;
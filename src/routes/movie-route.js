import express from 'express';
const router = express.Router();
import movie_controllers from '../controllers/movie-controllers.js';

router.post('/', movie_controllers.createMovie);
router.get('/', movie_controllers.showAllMovies);
router.get('/:id', movie_controllers.showMovieById);
router.put('/:id', movie_controllers.updateMovie);
router.delete('/:id', movie_controllers.deleteMovie);

export default router;
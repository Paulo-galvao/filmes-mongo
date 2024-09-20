import Movie from "../models/movie-model.js";

const createMovie = async (req, res) => {
    try {
        const movie = await Movie.create(req.body);
        res.status(201).json(movie);
    } catch (error) {
        res.status(400).json({error: "não foi possivel criar adicionar"});
        
    }
}

const showAllMovies = async (req, res) => {
    try {
        const movies = await Movie.find().exec();
        res.status(201).json(movies);
    } catch (error) {
        res.status(400).json({error: "não foi possível listar os filmes"})
    }
}

const showMovieById = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        res.status(201).json(movie);
    } catch (error) {
        res.status(400).json({error: "nao foi possível encontrar o filme"});
    }
}

const updateMovie = async (req, res) => {
    try {
        const movie = await Movie.findByIdAndUpdate(req.params.id, req.body);
        res.status(201).json(movie);
    } catch (error) {
        res.status(400).json({error: "nao foi possível atualizar o filme"});
    }
}

const deleteMovie = async (req, res) => {
    try {
        const movie = await Movie.findByIdAndDelete(req.params.id);
        res.status(201).json(movie);
    } catch (error) {
        res.status(400).json({error: "nao foi possível excluir o filme"});
    }
}

export default {
    createMovie,
    showAllMovies,
    showMovieById,
    updateMovie,
    deleteMovie
};
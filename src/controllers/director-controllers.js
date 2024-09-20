import Director from "../models/director-model.js";

const createDirector = async (req, res) => {
    try {
        const director = await Director.create(req.body);
        res.status(201).json(director);
    } catch (error) {
        res.status(400).json({error: "não foi possivel adicionar"});
        
    }
}

const showAllDirectors = async (req, res) => {
    try {
        const directors = await Director.find().exec();
        res.status(201).json(directors);
    } catch (error) {
        res.status(400).json({error: "não foi possível listar os diretores"})
    }
}

const showDirectorById = async (req, res) => {
    try {
        const director = await Director.findById(req.params.id);
        res.status(201).json(director);
    } catch (error) {
        res.status(400).json({error: "nao foi possível encontrar o diretor"});
    }
}

const updateDirector = async (req, res) => {
    try {
        const director = await Director.findByIdAndUpdate(req.params.id, req.body);
        res.status(201).json(director);
    } catch (error) {
        res.status(400).json({error: "nao foi possível atualizar o diretor"});
    }
}

const deleteDirector = async (req, res) => {
    try {
        const director = await Director.findByIdAndDelete(req.params.id);
        res.status(201).json(director);
    } catch (error) {
        res.status(400).json({error: "nao foi possível excluir o diretor"});
    }
}

export default {
    createDirector,
    showAllDirectors,
    showDirectorById,
    updateDirector,
    deleteDirector
};
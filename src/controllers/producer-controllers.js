import Producer from "../models/producer-model.js";

const createProducer = async (req, res) => {
    try {
        const producer = await Producer.create(req.body);
        res.status(201).json(producer);
    } catch (error) {
        res.status(400).json({error: "não foi possivel adicionar"});
        
    }
}

const showAllProducers = async (req, res) => {
    try {
        const producers = await Producer.find().exec();
        res.status(201).json(producers);
    } catch (error) {
        res.status(400).json({error: "não foi possível listar os produtores"})
    }
}

const showProducerById = async (req, res) => {
    try {
        const producer = await Producer.findById(req.params.id);
        res.status(201).json(producer);
    } catch (error) {
        res.status(400).json({error: "nao foi possível encontrar o produtor"});
    }
}

const updateProducer = async (req, res) => {
    try {
        const producer = await Producer.findByIdAndUpdate(req.params.id, req.body);
        res.status(201).json(producer);
    } catch (error) {
        res.status(400).json({error: "nao foi possível atualizar o produtor"});
    }
}

const deleteProducer = async (req, res) => {
    try {
        const producer = await Producer.findByIdAndDelete(req.params.id);
        res.status(201).json(producer);
    } catch (error) {
        res.status(400).json({error: "nao foi possível excluir o diretor"});
    }
}

export default {
    createProducer,
    showAllProducers,
    showProducerById,
    updateProducer,
    deleteProducer
};
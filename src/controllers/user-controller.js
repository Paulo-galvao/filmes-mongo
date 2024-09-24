import User from "../models/user-model.js";

const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({error: "não foi possivel criar adicionar"});
        
    }
}

const showAllUsers = async (req, res) => {
    try {
        const user = await User.find().exec();
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({error: "não foi possível listar os filmes"})
    }
}

const showUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({error: "nao foi possível encontrar o filme"});
    }
}

const updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({error: "nao foi possível atualizar o filme"});
    }
}

const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({error: "nao foi possível excluir o filme"});
    }
}

const signup = async (req, res) => {
    try {
        const user = await User.create({
            email: req.body.email,
            password: req.body.password,
        });
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json(error);
    }
}

const signin = async (req, res) => {
    try {
        const user = await User.findOne({
            email: req.body.email,
        });

        if(!user) {
            res.sendStatus(404);
        }

        res.json();
    } catch (error) {
        res.status(400).json(error);
    }
}

export default {
    createUser,
    showAllUsers,
    showUserById,
    updateUser,
    deleteUser,
    signin,
    signup
};
import { Router } from "express";
import { userModel } from "../daos/mongodb/models/user.model.js";
import * as userController from "../controllers/user.controllers.js";

const router = Router();

router.get("/", async (req, res) => {
    try {
        const users = await userModel.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener usuarios", details: error.message });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const user = await userModel.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener usuario", details: error.message });
    }
});

router.post("/create", userController.createUser);

export default router;
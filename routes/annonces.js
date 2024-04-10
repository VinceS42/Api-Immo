import express from "express";
import Annonce from "../models/Annonce.js";
const annonceRouter = express.Router();

annonceRouter.get("/", async (req, res) => {
    try {
        const annonces = await Annonce.find();
        res.json(annonces);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default annonceRouter;

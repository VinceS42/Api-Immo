const express = require("express");
const Annonce = require("../models/Annonce");
const annonceRouter = express.Router();

annonceRouter.get("/", async (req, res) => {
    try {
        const annonces = await Annonce.find();
        res.json(annonces);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = annonceRouter;

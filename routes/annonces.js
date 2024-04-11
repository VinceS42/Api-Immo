const express = require("express");
const Annonce = require("../models/Annonce");
const Mongoose = require("mongoose");
const annonceRouter = express.Router();

// READ ONE ANNONCE

annonceRouter.get("/", async (req, res) => {
    try {
        const annonces = await Annonce.find();
        res.status(200).json(annonces);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

annonceRouter.get("/:id", async (req, res) => {
    try {
        if (!Mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: "Invalid id" });
        }
        const { id } = req.params;
        const annonce = await Annonce.findById(id);
        if (!annonce) {
            return res.status(404).json({ message: "Annonce not found" });
        }
        return res.status(200).json(annonce);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

// CREATE ONE ANNONCE

annonceRouter.post("/create", async (req, res) => {
    try {
        const annonce = await Annonce.create(req.body);
        return res.status(201).json(annonce);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

// UPDATE ONE ANNONCE

// annonceRouter.put("/update/:id", async (req, res) => {
//     try {
//         if (!Mongoose.Types.ObjectId.isValid(req.params.id)) {
//             return res.status(400).json({ message: "Invalid id" });
//         }
//         const { id } = req.params;
//         const annonce = await Annonce.findByIdAndUpdate(id, req.body, {
//             new: true,
//             runValidators: true,
//             context: "query", // Ajoutez cette ligne
//             useFindAndModify: false,
//         });
//         if (!annonce) {
//             return res.status(404).json({ message: "Annonce not found" });
//         }
//         const updatedAnnonce = await Annonce.findById(id);
//         return res.status(200).json(updatedAnnonce);
//     } catch (error) {
//         return res.status(500).json({ message: error.message });
//     }
// });

annonceRouter.put("/update/:id", async (req, res) => {
    try {
        // format d'id non supporté par mongoDB
        if (!Mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: "Invalid ID" }); // 400 signifie "Bad Request"
        }
        Annonce.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        })
            .then((annonce) => {
                if (!annonce) {
                    return res
                        .status(404)
                        .json({ message: "Annonce not found" }); // 404 signifie "Not Found"
                } else {
                    return res.status(200).json(annonce); // 200 signifie "OK"
                }
            })
            .catch((error) => {
                return res.status(500).json({
                    message: "Failed to update annonce",
                    error: error.toString(),
                }); // 500
            });
    } catch (error) {
        return res.status(500).json({
            message: "Failed to update annonce",
            error: error.toString(),
        }); // 500
    }
});

// DELETE ONE ANNONCE

annonceRouter.delete("/:id", async (req, res) => {
    try {
        if (!Mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: "Invalid id" });
        }
        const { id } = req.params;
        const annonce = await Annonce.findByIdAndDelete(id);
        if (!annonce) {
            return res.status(404).json({ message: "Annonce not found" });
        }
        return res.status(204).json();
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

module.exports = annonceRouter;

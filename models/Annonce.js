const mongoose = require("mongoose");
const { Schema } = mongoose;

const annonceSchema = new Schema(
    {
        // TODO: Définissez les champs du schéma ici, par exemple titre, prix, caractéristiques, etc.
        titre: {
            type: String,
            required: [true, "Le titre est obligatoire"], // [true, "message d'erreur"]
        },

        description: {
            type: String,
            required: [true, "La description est obligatoire"], // [true, "message d'erreur"]
        },

        prix: {
            type: Number,
            required: [true, "Le prix est obligatoire"], // [true, "message d'erreur"]
        },

        surface: {
            type: Number,
            required: [true, "La surface est obligatoire"], // [true, "message d'erreur"]
        },

        localisation: {
            ville: {
                type: String,
                required: [true, "La ville est obligatoire"], // [true, "message d'erreur"]
            },
            codePostal: {
                type: String,
                required: [true, "Le code postal est obligatoire"], // [true, "message d'erreur"]
            },
        },
        caractéristiques: {
            chambre: {
                type: Number,
                required: [true, "Le nombre de chambres est obligatoire"], // [true, "message d'erreur"]
            },
            salleDeBain: {
                type: Number,
                required: [true, "Le nombre de salles de bain est obligatoire"], // [true, "message d'erreur"]
            },
            balcon: {
                type: Boolean,
                required: [true, "La présence d'un balcon est obligatoire"], // [true, "message d'erreur"]
            },
            jardin: {
                type: Boolean,
                required: [true, "La présence d'un jardin est obligatoire"], // [true, "message d'erreur"]
            },
            parking: {
                type: Boolean,
                required: [true, "La présence d'un parking est obligatoire"], // [true, "message d'erreur"]
            },
        },
    },
    {
        timestamps: true,
    }
);

// l'etape de transformation du schema en modele sert a creer des instances de donnees
// a partir du schema et d'y ajouter des comportements (methodes)
// ici nous n'ajoutons pas de comportements mais on pourrait le faire avec par exemple
// annonceSchema.methods.rateAnnonce = function() { rating code here }

// le premier argument est le nom du modele, le deuxieme est le schema
// le nom du modele est important car il sera utilise pour creer la collection dans la base de donnees
const Annonce = mongoose.model("Annonce", annonceSchema);

module.exports = Annonce;

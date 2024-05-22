const mongoose = require("mongoose");
const { Schema } = mongoose;

const annonceSchema = new Schema({
    // TODO: Définissez les champs du schéma ici, par exemple titre, prix, caractéristiques, etc.
    titre: { type: String, required: false },
    description: { type: String, required: false },
    photo: { type: String, required: false },
    latitude: { type: String, required: false },
    longitude: { type: String, required: false },
});

// l'etape de transformation du schema en modele sert a creer des instances de donnees
// a partir du schema et d'y ajouter des comportements (methodes)
// ici nous n'ajoutons pas de comportements mais on pourrait le faire avec par exemple
// annonceSchema.methods.rateAnnonce = function() { rating code here }

// le premier argument est le nom du modele, le deuxieme est le schema
// le nom du modele est important car il sera utilise pour creer la collection dans la base de donnees
const Annonce = mongoose.model("Annonce", annonceSchema);

module.exports = Annonce;

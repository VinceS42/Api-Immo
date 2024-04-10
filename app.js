const express = require("express");
const connectDatabase = require("./config/database.js");
require("dotenv").config();
const annonceRouter = require("./routes/annonces.js");

connectDatabase();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public")); // Le dossier 'public' contiendra vos fichiers statiques

app.use("/annonces", annonceRouter);

app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});

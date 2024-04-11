const express = require("express");
const connectDatabase = require("./config/database.js");
const annonceRouter = require("./routes/annonces.js");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public")); // Le dossier 'public' contiendra vos fichiers statiques

connectDatabase();

const PORT = process.env.PORT || 3000;

app.use("/annonces", annonceRouter);

module.exports = app;

app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});

import connectDatabase from "./config/database.js";
import express from "express";
import dotenv from "dotenv";
import annonceRouter from "./routes/annonces.js";


dotenv.config({ path: ".env" });

connectDatabase();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public")); // Le dossier 'public' contiendra vos fichiers statiques

app.use("/annonces", annonceRouter);

app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});

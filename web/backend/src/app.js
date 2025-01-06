const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const path = require("path");

const app = express();

// Middleware pour servir les fichiers statiques
app.use(express.static("public"));

// Connexion à MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Démarrage du serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Route pour servir le fichier index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});

app.use(express.static(path.join(__dirname, "../../public")));

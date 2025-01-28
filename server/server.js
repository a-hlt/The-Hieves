// server.js avec import
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();
app.use(cors());

// Créer un serveur HTTP
const server = createServer(app);

// Installe Socket.IO sur le serveur
const io = new Server(server, {
	cors: {
		origin: "http://localhost:5173", // Remplacez par l'URL de votre application React
		methods: ["GET", "POST"],
	},
});

// Événements Socket.IO
io.on("connection", (socket) => {
	console.log("Nouvelle connexion :", socket.id);

	socket.on("sendMessage", (message) => {
		console.log("Message reçu :", message);
		io.emit("message", { id: Date.now(), type: "user", text: message });

		// Simuler une réponse automatique
		setTimeout(() => {
			socket.emit("message", {
				id: Date.now() + 1,
				type: "bot",
				text: "Merci pour votre message !",
			});
		}, 1000);
	});

	socket.on("disconnect", () => {
		console.log("Utilisateur déconnecté :", socket.id);
	});
});

// Lancer le serveur
const PORT = 3000;
server.listen(PORT, () => {
	console.log(`Serveur Socket.IO en cours d'exécution sur http://localhost:${PORT}`);
});

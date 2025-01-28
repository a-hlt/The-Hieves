// src/pages/Chat/ChatPage.jsx
import React, { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";

const ChatPage = () => {
	const [messages, setMessages] = useState([{ id: 1, type: "bot", text: "Bonjour, comment puis-je vous aider ?" }]);
	const [inputValue, setInputValue] = useState("");
	const socketRef = useRef(null);
	const messagesEndRef = useRef(null);

	useEffect(() => {
		// Connexion au serveur Socket.IO
		socketRef.current = io("http://localhost:4000"); // Remplacez par l'URL de votre serveur

		// Écouter les messages du serveur
		socketRef.current.on("message", (message) => {
			setMessages((prevMessages) => [...prevMessages, { id: Date.now(), ...message }]);
		});

		// Nettoyer la connexion lors du démontage du composant
		return () => {
			socketRef.current.disconnect();
		};
	}, []);

	useEffect(() => {
		// Faire défiler vers le bas lorsque les messages changent
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages]);

	/**
	 * Fonction appelée lors de l'envoi d'un message
	 */
	const handleSendMessage = (e) => {
		e.preventDefault();
		if (!inputValue.trim()) return;

		// Envoyer le message au serveur
		socketRef.current.emit("sendMessage", inputValue);

		// Ajouter le message utilisateur localement
		// setMessages((prevMessages) => [...prevMessages, { id: Date.now(), type: "user", text: inputValue }]);
		setInputValue("");
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
			<div className="flex flex-col w-full max-w-2xl h-[90vh] border border-gray-200 rounded-lg shadow-lg bg-white">
				{/* Header */}
				<div className="flex items-center justify-between p-4 border-b border-gray-200 rounded-t-lg bg-white">
					<h1 className="text-xl font-bold text-gray-700">Chatbot</h1>
					<span className="text-sm text-green-500">En ligne</span>
				</div>

				{/* Zone d'affichage des messages */}
				<div className="flex-1 p-4 overflow-y-auto space-y-4">
					{messages.map((message) => (
						<div key={message.id} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
							<div
								className={`max-w-xs md:max-w-md px-4 py-2 rounded-lg text-sm
                  ${message.type === "user" ? "bg-blue-500 text-white rounded-tr-none" : "bg-gray-200 text-gray-700 rounded-tl-none"}
                `}>
								{message.text}
							</div>
						</div>
					))}
					<div ref={messagesEndRef} />
				</div>

				{/* Zone de saisie */}
				<form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200 bg-white rounded-b-lg">
					<div className="flex items-center gap-2">
						<input
							type="text"
							className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
							placeholder="Tapez votre message..."
							value={inputValue}
							onChange={(e) => setInputValue(e.target.value)}
						/>
						<button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
							Envoyer
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ChatPage;

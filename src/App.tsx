import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "./components/ui/button";
import ChatPage from "./pages/chat/chatPage.tsx";
function App() {
	return (
		<>
			<ChatPage />
		</>
	);
}

export default App;

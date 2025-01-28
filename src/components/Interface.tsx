import Map from "./Map";
import ChatPage from "./chatPage";
import Navbar from "./Navbar";

function Interface() {
    return (
        <div className="h-screen w-screen bg-gray-200/50 flex flex-col">
            <div className="mx-5 my-2 bg-white rounded-xl flex items-center text-black text-xl font-bold">
                <Navbar />
            </div>
            <div className="flex flex-grow px-5 gap-5">
                <div className="flex-grow">
            
            <div className="flex flex-grow p-5 gap-5">
                <div className="flex-grow shadow-custom rounded-xl">
                    <Map />
                </div>
                
                {/* Sidebar */}
                <div className="w-1/4 bg-yellow-500 rounded-xl shadow-custom">
                    <ChatPage />
                </div>
            </div>
        </div>
    );
}

export default Interface;
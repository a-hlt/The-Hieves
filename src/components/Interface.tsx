import Map from "./Map";

function Interface() {
    return (
        <div className="h-screen w-screen bg-gray-300 flex flex-col">
            <div className="h-[7%] w-full bg-red-800 flex items-center px-4 text-white text-xl font-bold">
                {/* Navbar */}
            </div>
            
            <div className="flex flex-grow p-5 gap-5">
                <div className="flex-grow">
                    <Map />
                </div>
                
                {/* Sidebar */}
                <div className="w-1/4 bg-yellow-500 rounded-xl">
                    {/* Chat or Additional Info */}
                </div>
            </div>
        </div>
    );
}

export default Interface;
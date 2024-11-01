import React from "react";
import Navbar from "../navbar/Navbar";

const Dashboard = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-grow flex items-center justify-center p-4">
                <h1 className="text-5xl font-bold">Welcome to the Dashboard</h1>
                {/* Other dashboard content */}
            </div>
        </div>
    );
};

export default Dashboard;

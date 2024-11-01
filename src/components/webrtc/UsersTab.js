import React, { useState } from "react";
import { FaPhone, FaTimes } from "react-icons/fa";

const users = [
    { name: "Humayun Ahmed", phone: "8801789896378" },
    { name: "Abegail Casabuena Punzalan", phone: "0501234567" },
    { name: "Aki Gallardo", phone: "0502345678" },
    { name: "Andrea Cardenas Baquero", phone: "0503456789" },
    { name: "Andrea Mae Basilio Joson", phone: "0504567890" },
    // Add more users as needed
];

const UsersTab = ({ handleUserSelect }) => {
    const [searchTerm, setSearchTerm] = useState("");

    // Filter users based on the search term
    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Handle input change for typing or deletion
    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    // Clear the search term when "X" icon is clicked
    const clearSearch = () => {
        setSearchTerm("");
    };

    return (
        <div className="mt-3">
            {/* Search Input */}
            <div className="flex items-center p-2 border-b border-gray-300 relative">
                <input
                    type="text"
                    placeholder="Search for a user..."
                    className="w-full p-2 text-sm border-none focus:outline-none"
                    value={searchTerm}
                    onChange={handleInputChange}
                />
                {searchTerm && (
                    <FaTimes
                        onClick={clearSearch}
                        className="absolute right-3 text-gray-400 cursor-pointer"
                    />
                )}
            </div>

            {/* User List - Scrollable Section */}
            <div className="max-h-60 overflow-y-auto">
                {filteredUsers.length > 0 ? (
                    filteredUsers.map((user) => (
                        <div
                            key={user.phone}
                            className="flex items-center justify-between p-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleUserSelect(user.phone)}
                        >
                            <span className="text-sm">{user.name}</span>
                            <FaPhone className="text-green-500" /> {/* Phone icon */}
                        </div>
                    ))
                ) : (
                    <div className="p-2 text-gray-500 text-sm">
                        No users found
                    </div>
                )}
            </div>
        </div>
    );
};

export default UsersTab;

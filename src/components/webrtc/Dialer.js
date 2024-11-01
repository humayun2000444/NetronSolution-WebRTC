import React, { useState, useEffect, useCallback } from "react";
import "react-phone-input-2/lib/style.css";
import DialSection from "./DialSection";
import ControlButtons from "./ControlButtons";
import UsersTab from "./UsersTab";
import PhonebookTab from "./PhonebookTab";
import HistoryTab from "./HistoryTab";

const Dialer = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [tab, setTab] = useState("users");
    const [status, setStatus] = useState("Available");
    const [isStatusDropdownOpen, setStatusDropdownOpen] = useState(false);

    useEffect(() => {
        // Disable page scroll
        document.body.style.overflow = "hidden";

        // Re-enable scroll when component unmounts
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    const handleDial = (number) => {
        setPhoneNumber(phoneNumber + number);
    };

    const handleBackspace = useCallback(() => {
        setPhoneNumber((prevNumber) => prevNumber.slice(0, -1));
    }, []);

    const handleTabChange = (tabName) => {
        setTab(tabName);
    };

    // const handleUserSelect = (event) => {
    //     const selectedPhone = event.target.value;
    //     setPhoneNumber(selectedPhone);
    //     setSelectedUser(selectedPhone);
    // };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Backspace") {
                event.preventDefault();
                handleBackspace();
            } else if (!isNaN(event.key) || ["*", "#"].includes(event.key)) {
                setPhoneNumber((prev) => prev + event.key);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [handleBackspace]);

    const handleDialButtonClick = () => {
        console.log(`Dialing ${phoneNumber}`);
    };
    const handleMuteButtonClick = () => {
        console.log(`Mute ${phoneNumber}`);
    }
    const handleCallHold = () => {
        console.log("Call Hold");
    }
    const handleCallTransfer = () => {
        console.log("Call Transfer");
    }

    const toggleStatusDropdown = () => {
        setStatusDropdownOpen((prev) => !prev);
    };

    const handleStatusChange = (newStatus) => {
        setStatus(newStatus);
        setStatusDropdownOpen(false);
    };
    // Update handleUserSelect to accept phone number directly
    const handleUserSelect = (phone) => {
        setPhoneNumber(phone);
    };

    return (
        <div className="w-11/12 mx-auto bg-gray-50 rounded-lg shadow-lg font-sans">
            <div className="w-full p-2 border bg-gray-200 rounded-md mb-1 flex justify-center">
                <span className="text-gray-600">Health Status</span>
            </div>

            <div
                className={`flex justify-between items-center mb-4 rounded-md ${status === "Available" ? "bg-green-500" : "bg-red-500"}`}>
                <div className="text-white p-3">Online</div>
                <div className="relative">
                    <div
                        className="flex items-center cursor-pointer"
                        onClick={toggleStatusDropdown}
                    >
                        <span className="text-white py-1 px-3 rounded-md">{status}</span>
                        <i className="fas fa-chevron-down text-white p-3"></i>
                    </div>
                    {isStatusDropdownOpen && (
                        <div className="absolute left-0 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
                            <ul className="list-none">
                                <li
                                    className="p-2 cursor-pointer hover:bg-gray-100"
                                    onClick={() => handleStatusChange("Available")}
                                >
                                    Available
                                </li>
                                <li
                                    className="p-2 cursor-pointer hover:bg-gray-100"
                                    onClick={() => handleStatusChange("Away")}
                                >
                                    Away
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            <div>
                <select className="w-full p-2 border border-gray-300 rounded-md mb-2">
                    <option>Auto</option>
                </select>
            </div>

            <DialSection
                phoneNumber={phoneNumber}
                handleDial={handleDial}
                setPhoneNumber={setPhoneNumber}
            />

            <ControlButtons
                handleDialButtonClick={handleDialButtonClick}
                handleMuteButtonClick={handleMuteButtonClick}
                handleCallHold={handleCallHold}
                handleCallTransfer={handleCallTransfer}
            />

            <div className="flex justify-around mt-5">
                <button
                    onClick={() => handleTabChange("users")}
                    className={`${tab === "users" ? "bg-green-500 text-white" : "bg-gray-200"} px-4 py-2 font-bold rounded-md transition duration-300`}
                >
                    Users
                </button>
                <button
                    onClick={() => handleTabChange("phonebook")}
                    className={`${tab === "phonebook" ? "bg-green-500 text-white" : "bg-gray-200"} px-4 py-2 font-bold rounded-md transition duration-300`}
                >
                    Phonebook
                </button>
                <button
                    onClick={() => handleTabChange("history")}
                    className={`${tab === "history" ? "bg-green-500 text-white" : "bg-gray-200"} px-4 py-2 font-bold rounded-md transition duration-300`}
                >
                    History
                </button>
            </div>

            {/* Tab Content - Scrollable Section */}
            <div className="mt-5 max-h-80 overflow-y-auto">
                {tab === "users" && (
                    <UsersTab
                        handleUserSelect={handleUserSelect}
                    />
                )}
                {tab === "phonebook" && <PhonebookTab />}
                {tab === "history" && <HistoryTab />}
            </div>
        </div>
    );
};

export default Dialer;

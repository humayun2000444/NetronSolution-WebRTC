// src/components/ControlButtons.js
import React from "react";


const ControlButtons = ({ handleDialButtonClick, handleMuteButtonClick, handleCallHold, handleCallTransfer }) => {
    return (
        <div className="justify-center my-5 grid grid-cols-4 gap-3 mt-3">
            <button
                className="ml-1 p-2 bg-green-500 text-white rounded-md transition duration-300 hover:bg-green-600"
                onClick={handleDialButtonClick}
            >
                <i className="fas fa-solid fa-phone"></i>
            </button>
            <button
                className="p-2 text-lg rounded-md border border-gray-300 bg-white transition duration-300 hover:bg-gray-100"
                onClick={handleMuteButtonClick}
            >
                <i className="fas fa-light fa-volume-xmark"></i>
            </button>
            <button
                className="p-2 text-lg rounded-md border border-gray-300 bg-white transition duration-300 hover:bg-gray-100"
                onClick={handleCallHold}
            >
                <i className="fas fa-solid fa-pause"></i>
            </button>
            <button
                className="p-2 text-lg rounded-md border border-gray-300 bg-white transition duration-300 hover:bg-gray-100"
                onClick={handleCallTransfer}
            >
                <i className="fas fa-solid fa-phone-volume"></i>
            </button>
        </div>
    );
};

export default ControlButtons;

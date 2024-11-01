import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const DialSection = ({ phoneNumber, handleDial, setPhoneNumber }) => {
    return (
        <div className="flex flex-col items-center mb-5">
            <div className="flex items-center w-full">
                <PhoneInput
                    type="text"
                    country={"ae"}
                    value={phoneNumber}
                    onChange={(value) => setPhoneNumber(value)}
                    inputClass="w-full rounded-md"
                    buttonClass="country-flag"
                    inputProps={{
                        disabled: true,
                        placeholder: "Enter Number",
                    }}
                />
            </div>
            <div className="grid grid-cols-3 gap-3 mt-3 justify-center">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, "*", 0, "#"].map((key) => (
                    <button
                        key={key}
                        className="px-12 py-2 text-lg rounded-md border border-gray-300 bg-white transition duration-300 hover:bg-gray-100"
                        onClick={() => handleDial(key)}
                    >
                        {key}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default DialSection;

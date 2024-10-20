import { useState } from "react";

const PopupCard = () => {
    const [isVisible, setIsVisible] = useState(true);

    const closePopup = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            {/* Grayed-out background */}

            <button onClick={closePopup} >
                <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
            </button>
            {/* The card */}
            <div className="relative bg-white p-6 rounded-lg shadow-lg z-10 max-w-xl">
                {/* Close button */}
                <button
                    className="absolute top-3 right-5 text-theme-darkgreen hover:text-theme-green text-3xl"
                    onClick={closePopup}
                >
                    x
                </button>

                {/* Popup content */}
                <h2 className="text-4xl font-bold text-theme-darkgreen mb-4 font-playfair-display">Welcome!</h2>
                <p className="text-2xl text-theme-green font-playfair-display p-5 font-light">
                    This website is still under construction. Thank you for your patience!
                </p>
            </div>
        </div>
    );
};

export default PopupCard;

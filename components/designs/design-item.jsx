"use client";

import React, { useState, useEffect } from "react";

const DesignItem = ({ imageSrc, href }) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            document.body.style.pointerEvents = "none";
        } else {
            document.body.style.overflow = "auto";
            document.body.style.pointerEvents = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
            document.body.style.pointerEvents = "auto";
        };
    }, [isOpen]);

    return (
        <div className="w-full h-auto relative"> {/* Added relative wrapper */}
            <img
                src={imageSrc}
                alt="Design Preview"
                className="w-full h-auto object-cover shadow-md cursor-pointer"
                onClick={() => setIsOpen(true)}
            />
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-surface-700 bg-opacity-80 z-50 pointer-events-none">
                    <div className="relative p-4 max-w-4xl z-60 pointer-events-auto">
                        <button
                            className="absolute top-2 right-3 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-600"
                            onClick={() => setIsOpen(false)}
                        >
                            ✕
                        </button>
                        <img
                            src={imageSrc}
                            alt="Full Design"
                            className="max-w-[90vw] max-h-[80vh] object-contain shadow-lg"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default DesignItem;
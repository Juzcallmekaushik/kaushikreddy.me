"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DesignItem = ({ imageSrc }) => {
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

    const handleClose = (e) => {
        // Check if the clicked element is outside the image container
        if (e.target.id === "modal-container") {
            setIsOpen(false);
        }
    };

    return (
        <div className="w-full h-auto relative">
            <img
                src={imageSrc}
                alt="Design Preview"
                className="w-full h-auto object-cover shadow-md cursor-pointer"
                onClick={() => setIsOpen(true)}
            />
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        id="modal-container"
                        className="fixed inset-0 flex items-center justify-center bg-surface-700 bg-opacity-80 z-50 pointer-events-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={handleClose} // Close modal on click
                    >
                        <motion.div
                            className="relative p-4 max-w-4xl z-60 pointer-events-none"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img
                                src={imageSrc}
                                alt="Full Design"
                                className="max-w-[90vw] max-h-[80vh] object-contain shadow-lg pointer-events-auto"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default DesignItem;

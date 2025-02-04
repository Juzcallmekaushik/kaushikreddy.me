"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import en from "@/public/translations/en.json"; // Adjust the path as needed

export default function Covers() {
    const [selectedImage, setSelectedImage] = useState(null);
    const router = useRouter();

    return (
        <section className="min-h-screen bg-surface-100 p-8 text-white flex flex-col">
            <button
                onClick={() => router.back()}
                className="absolute top-6 left-6 text-white bg-red-500 px-4 py-2 rounded-md hover:bg-red-600 transition-all flex items-center"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                </svg>
                Back
            </button>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-10 gap-4 mt-16">
                {en.designs.map((design, index) => (
                    <img
                        key={index}
                        src={design.image}
                        alt={`Design ${index + 1}`}
                        className="w-full h-auto object-cover shadow-md cursor-pointer hover:opacity-80"
                        onClick={() => setSelectedImage(design.image)}
                    />
                ))}
            </div>
            
            {selectedImage && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-surface-700 bg-opacity-90 z-50"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative p-4 max-w-4xl">
                        <button
                            className="absolute top-2 right-3 bg-gray-800 text-white p-3 hover:bg-gray-600 z-60"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImage(null);
                            }}
                        >
                            ✕
                        </button>
                        <img
                            src={selectedImage}
                            alt="Full Design"
                            className="max-w-[90vw] max-h-[80vh] object-contain shadow-lg"
                        />
                    </div>
                </div>
            )}
        </section>
    );
}

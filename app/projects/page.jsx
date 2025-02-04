"use client";

import React from "react";
import { useRouter } from "next/navigation";
import en from "@/public/translations/en.json"; // Adjust the path as needed

export default function Projects() {
    const router = useRouter();

    return (
        <section className="min-h-screen bg-surface-100 p-6 text-white flex flex-col">
            <button
                onClick={() => router.back()}
                className="absolute top-6 left-6 text-white bg-red-500 px-4 py-2 hover:bg-red-600 transition-all flex items-center"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                </svg>
                Back
            </button>

            {en.projects && en.projects.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-12">
                    {en.projects.map((project, index) => (
                        <div
                            key={index}
                            className="group bg-surface-200 p-5 shadow-md cursor-pointer hover:scale-105 transition-all aspect-square"
                            onClick={() => window.open(project.href, "_blank")}
                        >
                            <div className="text-surface-600 mb-4 flex flex-row items-center justify-between">
                                <div className="flex flex-row items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                    <span className="ml-1 text-xs">{project.stars}</span>
                                </div>
                                <div className="text-xs font-medium tracking-widest uppercase">
                                    {project.framework}
                                </div>
                            </div>

                            <h3 className="mb-2 text-xl font-semibold text-surface-900">{project.name}</h3>
                            <p className="text-xs text-surface-600">{project.description}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-500 text-center mt-4">
                    No projects available right now. More coming soon!
                </p>
            )}
        </section>
    );
}

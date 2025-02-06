"use client";

import React from "react";
import { useRouter } from "next/navigation";
import en from "@/public/translations/en.json";
import ProjectItem from "@/components/projects/project-item";

export default function Projects() {
    const router = useRouter();

    return (
        <section className="min-h-screen bg-surface-100 p-6 text-white flex flex-col">
            <button
                onClick={() => router.back()}
                className="absolute top-6 left-6 text-white bg-red-500 px-4 py-2 hover:scale-[1.03] hover:bg-red-600 transition-all flex items-center"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                </svg>
                Back
            </button>

            {en.projects && en.projects.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-3 mt-12">
                    {en.projects.map((project, index) => (
                        <ProjectItem
                            key={index}
                            href={project.href}
                            stars={project.stars}
                            lib={project.framework}
                            name={project.name}
                            description={project.description}
                        />
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

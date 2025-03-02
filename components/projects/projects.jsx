"use client";

import React from "react";
import { useRouter } from "next/navigation";
import ProjectItem from "./project-item";

const Projects = ({ data }) => {
    const router = useRouter();

    return (
        <div data-section id="projects" className="mb-16">
            <h2 className='mb-2 visible lg:visible font-black text-xl font-montserrat'>
                PROJECTS
            </h2>

            {data && data.length > 0 ? (
                <>
                    <div className="space-y-2">
                        {data.slice(0, 4).map((object) => (
                            <ProjectItem
                                key={object.name}
                                name={object.name}
                                description={object.description}
                                href={object.href}
                                libs={object.framework}
                            />
                        ))}
                    </div>

                    {data.length > 4 && (
                        <div className="flex justify-center mt-4">
                            <button
                                onClick={() => router.push("/projects")}
                                className="px-6 py-2 bg-surface-200 text-white rounded-md hover:bg-surface-300"
                            >
                                Show More
                            </button>
                        </div>
                    )}
                </>
            ) : (
                <p className="text-gray-500 text-center mt-4">
                    No projects available right now. More coming soon!
                </p>
            )}
        </div>
    );
};

export default Projects;

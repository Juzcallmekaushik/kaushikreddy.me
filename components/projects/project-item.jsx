"use client";

import React from "react";

function ProjectItem(props) {
    const { name, description, href, libs } = props;
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col p-5 transition-all bg-surface-200 hover:scale-[1.03] brightness-75 hover:brightness-100 hover:z-10 rounded-md"
        >
            <div className="text-surface-100 flex flex-row items-center justify-between mb-0"></div>
            <div className="flex items-center gap-2 mb-4">
                <h1 className="text-xl subpixel-antialiased">{name}</h1>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="gray"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 transition-all duration-300 group-hover:-translate-y-1 group-hover:stroke-primary-600"
                >
                    <path d="M7 17L17 7M7 7h10v10" />
                </svg>
            </div>
            <div className="text-surface-600 text-xs mb-5">{description}</div>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-2 max-w-[500px]">
                {libs?.map((lib, index) => (
                    <React.Fragment key={lib.name}>
                        <span
                            className="bg-surface-300 py-0.5 px-2 rounded-md text-[10px] transition-all"
                        >
                            {lib.name}
                        </span>
                        {index !== libs.length - 1 && (
                            <span className="text-surface-600">+ </span>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </a>
    );
}

export default ProjectItem;

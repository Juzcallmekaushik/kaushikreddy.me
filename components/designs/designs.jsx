"use client";

import React from "react";
import { useRouter } from "next/navigation";
import DesignItem from "./design-item";

const Designs = ({ data }) => {
    const router = useRouter();

    return (
        <div data-section id="designs" className="mb-16">
            <h2 className="mb-2 font-bold text-2xl" style={{ fontFamily: 'Blatant, sans-serif' }}>
                DESIGNS
            </h2>

            {data && data.length > 0 ? (
                <>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {data.slice(0, 4).map((object, index) => (
                            <DesignItem key={index} imageSrc={object.image} href={object.href} />
                        ))}
                    </div>
                    {data.length > 4 && (
                        <div className="flex justify-center mt-4">
                            <button 
                                onClick={() => router.push("/covers")} 
                                className="px-6 py-2 bg-surface-200 text-white rounded-md hover:bg-surface-300"
                            >
                                Show More
                            </button>
                        </div>
                    )}
                </>
            ) : (
                <p className="text-gray-500 mt-4">
                    No designs available right now. More coming soon!
                </p>
            )}
        </div>
    );
};

export default Designs;

import React from "react";

function SkillItem({ title, skills = [] }) {
    return (
        <div className="group flex flex-row mb-4 p-5 pl-0 transition-all">
            <div className='basis-3/4'>
                <a target="_blank" rel="noopener noreferrer" className='font-medium transition-all mb-3 block'>{title}</a>
                <div className='flex flex-wrap gap-x-2 gap-y-2 max-w-[500px]'>
                    {skills ? skills.map((skill, index) => (
                        <a 
                            key={skill.name} 
                            href={skill.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className='bg-surface-200 py-1 px-3 rounded-md text-xs transition-all hover:bg-surface-300 hover:text-white'
                        >
                            {skill.name}
                        </a>
                    )) : ""}
                </div>
            </div>
        </div>
    );
}

export default SkillItem;
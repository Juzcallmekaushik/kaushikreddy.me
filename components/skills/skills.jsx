import React from "react";
import SkillItem from "./skill-item";

const Skills = ({ data = [] }) => {
    return (
        <div data-section id='skills' className='mb-16'>
            <h2 className='mb-1 visible lg:visible font-bold text-2xl' style={{ fontFamily: 'Blatant, sans-serif' }}>SKILLS</h2>
            {data.map((item) => (
                <SkillItem  
                    key={item.title}
                    title={item.title}
                    skills={item.skills}
                />
            ))}
        </div>
    );
}

export default Skills;

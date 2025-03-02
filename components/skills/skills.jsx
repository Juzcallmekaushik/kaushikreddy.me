import React from "react";
import SkillItem from "./skill-item";

const Skills = ({ data = [] }) => {
    return (
        <div data-section id='skills' className='mb-16'>
            <h2 className='mb-2 visible lg:visible font-black text-xl font-montserrat'>SKILLS</h2>
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

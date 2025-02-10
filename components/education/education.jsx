import React from "react";
import EducationItem from "./education-item";

const Education = (props) => {
    return (
        <div data-section id='education' className='mb-16'>
            <h2 className='mb-2 visible lg:visible font-bold text-2xl' style={{ fontFamily: 'Blatant, sans-serif' }}>EDUCATION</h2>
            {props.data.map(function(object, index){
                return <EducationItem
                    key={`${object.subject}+${object.startDate}`}  
                    subject={object.subject}
                    level={object.level}
                    university={object.university}
                    startDate={object.startDate} 
                    endDate={object.endDate ? object.endDate : ''} 
                    description={object.description}
                />
            })}
        </div>
    )
}

export default Education;

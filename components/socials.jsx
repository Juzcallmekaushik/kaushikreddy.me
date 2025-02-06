import React from "react";

const Socials = (props) => {
    return (
        <div className='flex flex-row items-center'>
            <a href='contact' className='mr-5 transition-all bg-primary-500 hover:bg-primary-300 text-surface-100 font-bold py-2 px-6 rounded flex flex-row justify-center items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span className='pl-2'>Get in touch</span>
            </a>
            <div className='flex flex-row'>
                <a href={props.data.github} target="_blank" rel="noopener noreferrer" className="mr-0 flex flex-row content-center justify-center">
                    <img src="/logos/github.png" alt="GitHub Logo" width={19} height={19} className='object-contain object-top mr-2' />
                </a>
                <a href={props.data.instagram} target="_blank" rel="noopener noreferrer" className="flex flex-row content-center justify-center">
                    <img src="/logos/instagram.png" alt="Instagram Logo" width={19} height={19} className='object-contain object-top mr-2' />
                </a>
                <a href={props.data.discord} target="_blank" rel="noopener noreferrer" className="flex flex-row content-center justify-center">
                    <img src="/logos/discord.png" alt="Discord Logo" width={19} height={19} className='object-contain object-top mr-2' />
                </a>
            </div>
        </div>
    );
}

export default Socials;

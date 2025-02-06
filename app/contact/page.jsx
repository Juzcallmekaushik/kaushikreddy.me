"use client";

import { useState } from 'react';
import emailjs from 'emailjs-com';
import { useRouter } from 'next/navigation';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');
    const router = useRouter();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, message } = formData;

        if (name && email && message) {
            emailjs.send(
                'service_oro90p8',
                'template_x5mkmte',
                {
                    to_name: "Kaushik Reddy",
                    from_name: name,
                    from_email: email,
                    message: message,
                },
                'o6ur3bgM95yeyBbyW'
            )
            .then(
                (response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    setStatus('Message sent successfully!');
                    setFormData({ name: '', email: '', message: '' });
                },
                (err) => {
                    console.error('FAILED...', err);
                    setStatus('Failed to send the message. Please try again later.');
                }
            );
        } else {
            setStatus('Please fill out all fields.');
        }
    };

    return (
        <section className="min-h-screen bg-surface-100 p-8 text-white flex flex-col justify-center items-center relative">
            <button 
                onClick={() => router.back()} 
                className="absolute top-6 left-6 text-white bg-red-500 px-4 py-2 rounded-md hover:bg-red-600 transition-all flex items-center"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                </svg>
                Back
            </button>

            <div className="max-w-8 bg-surface-200 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-8 justify-center items-center min-h-[500px]">
                <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start">
                    <h2 
                        className="text-4xl md:text-4xl font-extrabold text-red-500 mb-2 text-center md:text-left" 
                        style={{ fontFamily: 'Abadi, sans-serif' }}
                    >
                        Get in touch
                    </h2>
                    <p className="text-red-300 mb-3 text-center md:text-left">
                        Got a project or just want to chat? Reach out via the form or socials!
                    </p>
                    <div className="flex flex-row justify-center md:justify-start">
                        <a 
                            href="https://github.com/Juzcallmekaushik" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex flex-row content-center justify-center"
                        >
                            <img 
                                src="/logos/github.png" 
                                alt="GitHub Logo" 
                                width="19" 
                                height="19" 
                                className="object-contain object-top mr-2" 
                            />
                        </a>
                        <a 
                            href="https://www.instagram.com/juzcallmekaushik" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex flex-row content-center justify-center"
                        >
                            <img 
                                src="/logos/instagram.png" 
                                alt="Instagram Logo" 
                                width="19" 
                                height="19" 
                                className="object-contain object-top mr-2" 
                            />
                        </a>
                        <a 
                            href="https://discord.com/users/838682557976936509" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex flex-row content-center justify-center"
                        >
                            <img 
                                src="/logos/discord.png" 
                                alt="Discord Logo" 
                                width="19" 
                                height="19" 
                                className="object-contain object-top mr-2" 
                            />
                        </a>
                    </div>
                </div>
                <div className="w-full md:w-3/4 flex justify-center items-center">
                    <form className="flex flex-col space-y-4 w-full" onSubmit={handleSubmit}>
                        <div>
                            <label 
                                htmlFor="name" 
                                className="block mb-1 text-red-500" 
                                style={{ fontFamily: 'Blatant, sans-serif' }}
                            >
                                Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                className="w-full bg-surface-100 text-white border border-surface-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                            />
                        </div>
                        <div>
                            <label 
                                htmlFor="email" 
                                className="block mb-1 text-red-500" 
                                style={{ fontFamily: 'Blatant, sans-serif' }}
                            >
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your Email"
                                className="w-full bg-surface-100 text-white border border-surface-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                            />
                        </div>
                        <div>
                            <label 
                                htmlFor="message" 
                                className="block mb-1 text-red-500" 
                                style={{ fontFamily: 'Blatant, sans-serif' }}
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your Message"
                                className="w-full bg-surface-100 text-white border border-surface-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                            ></textarea>
                        </div>
                        <button 
                            type="submit" 
                            className="bg-surface-400 hover:bg-red-600 transition-colors text-white font-bold py-2 rounded-md"
                        >
                            Send
                        </button>
                        {status && (
                            <p className="text-center mt-1 text-red-300 text-sm">
                                {status}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}

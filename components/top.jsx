'use client'

import React, { useState, useEffect } from "react";

const Top = () => {
  const [visible, setVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    setVisible(window.scrollY > 20);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " " ? scrollToTop() : null)}
      tabIndex={0}
      className={`fixed bottom-5 right-5 z-50 p-3 rounded-2xl bg-surface-200 bg-opacity-40 backdrop-blur-md shadow-lg brightness-90 transition-all duration-300 hover:brightness-100 hover:bg-opacity-60 
      ${visible ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
      title="Go to top"
      aria-label="Scroll to top"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-3 h-3 text-on-background"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
};

export default Top
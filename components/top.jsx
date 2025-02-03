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
      className={`fixed bottom-5 right-5 z-50 p-2 rounded-2xl bg-surface-200 shadow-lg brightness-90 transition-all duration-300 hover:brightness-100 ${
        visible ? "opacity-100 scale-100" : "opacity-0 scale-75"
      }`}
      title="Go to top"
    >
      <img 
        src="/logos/hand.png"
        alt="Scroll to top"
        className="w-5 h-5"
      />
    </button>
  );
};

export default Top
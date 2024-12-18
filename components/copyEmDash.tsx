"use client";

import { useState } from "react";

const CopyEmDash = () => {
  const [showPopup, setShowPopup] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("—");
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 2500);
    } catch (error) {
      console.error("Failed to copy text to clipboard:", error);
    }
  };

  return (
    <div className="fixed bottom-10 lg:bottom-16 right-10 lg:right-16 z-50">
      {/* --- MESSAGE POPUP --- */}
      <div
        className="absolute right-16 lg:right-20 top-1/2 -translate-y-1/2 flex justify-center items-center p-2 lg:p-4 w-[18em] lg:w-[20em] bg-hriste text-white text-sm lg:text-md font-bold transition-all pointer-events-none shadow-xl"
        style={{ opacity: showPopup ? 1 : 0 }}
      >
        Dlouhá pomlčka zkopírována!
      </div>
      {/* --- BUTTON --- */}
      <div
        onClick={copyToClipboard}
        className="p-5 w-10 lg:w-16 h-10 lg:h-16 font-bold bg-black text-white text-center rounded-full shadow-md flex justify-center items-center transition hover:scale-105 hover:shadow-xl hover:cursor-pointer"
      >
        &mdash;
      </div>
    </div>
  );
};

export default CopyEmDash;

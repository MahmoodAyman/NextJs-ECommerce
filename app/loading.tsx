"use client";
import { useState, CSSProperties } from "react";
import { BeatLoader } from "react-spinners";
const LoadingPage = () => {
  const [loading, setLoading] = useState(true);
  return (
    <div className="sweet-loading h-screen flex-center">
      <BeatLoader
        loading={loading}
        color='#FFCA28'
        size={15}
        aria-label="loading spineer"
        data-testid="loader"
      />
    </div>
  );
};

export default LoadingPage;

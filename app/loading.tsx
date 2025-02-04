"use client";
import { useState } from "react";
import { BeatLoader } from "react-spinners";
const LoadingPage = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div className="sweet-loading h-screen flex-center">
      <BeatLoader
        loading={loading}
        color="#FFCA28"
        size={15}
        aria-label="loading spineer"
        data-testid="loader"
      />
    </div>
  );
};

export default LoadingPage;

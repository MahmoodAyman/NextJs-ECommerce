"use client";
import { BeatLoader } from "react-spinners";
const LoadingPage = () => {
  return (
    <div className="sweet-loading h-screen flex-center">
      <BeatLoader
        color="#FFCA28"
        size={15}
        aria-label="loading spineer"
        data-testid="loader"
      />
    </div>
  );
};

export default LoadingPage;

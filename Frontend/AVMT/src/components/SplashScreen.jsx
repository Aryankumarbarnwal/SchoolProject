import { useEffect } from "react";
import logo from "../assets/saraswati_logo.png";

const SplashScreen = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 1000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center
      bg-gradient-to-br from-yellow-100 to-white"
    >
      {/* Logo */}
      <img
        src={logo}
        alt="Saraswati Mata"
        className="
          w-40 h-40 
          sm:w-48 sm:h-48 
          md:w-56 md:h-56 
          lg:w-64 lg:h-64
          rounded-full
          shadow-2xl
          border-4 border-yellow-300
          animate-zoomOut
        "
      />

      {/* Mantra Text */}
      <p
        className="
          mt-4 sm:mt-6
          px-4 text-center
          text-sm sm:text-base md:text-lg
          text-yellow-700 font-semibold
          animate-pulse
        "
      >
        ॐ ऐं ह्रीं क्लीं महासरस्वत्यै नमः
      </p>
    </div>
  );
};

export default SplashScreen;

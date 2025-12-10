import { useEffect } from "react";
import logo from "../assets/saraswati_logo.png";

const SplashScreen = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-yellow-100 to-white animate-fadeOut delay-[2500ms]">
      <img
        src={logo}
        alt="Saraswati Mata"
        className="w-120 h-120 rounded-full shadow-2xl border-4 border-yellow-300 animate-zoomOut"
      />
      <p className="mt-6 text-lg text-yellow-700 font-semibold animate-pulse">
        ॐ ऐं ह्रीं क्लीं महासरस्वत्यै नमः
      </p>
    </div>
  );
};

export default SplashScreen;

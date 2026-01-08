import { useState, useEffect } from "react";

const WelcomePopup: React.FC = () => {
  const [showPopup, setShowPopup] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setShowPopup(false);

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 max-w-sm text-center shadow-lg transform scale-90 opacity-0 animate-popup transition-all">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Hello Alessandro Magistro ❤️
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Welcome to my portfolio!
            </p>
            <button
              onClick={handleClose}
              className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Animation avec Tailwind */}
      <style>
        {`
          @keyframes popup {
            0% { opacity: 0; transform: scale(0.8); }
            100% { opacity: 1; transform: scale(1); }
          }
          .animate-popup {
            animation: popup 0.4s ease-out forwards;
          }
        `}
      </style>
    </>
  );
};

export default WelcomePopup;

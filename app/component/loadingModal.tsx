import { useEffect, useState } from 'react';

const LoadingModal = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFadingOut(true);
      setTimeout(() => setIsVisible(false), 300); // Espera 500ms antes de ocultar completamente
    }, 500); // Tiempo de espera antes de desaparecer

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    // <div className="fixed inset-0 bg-white bg-opacity-100 flex items-center justify-center z-50">
    <div
    className={`fixed inset-0 bg-white bg-opacity-100 flex items-center justify-center z-50 transition-opacity duration-500 ${
      isFadingOut ? 'opacity-0' : 'opacity-100'
    }`}
    style={{ backgroundColor: '#FAF7F3' }}
  >
      <div className="corazon-falta w-16 h-16 animate-heartBeat">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-full h-full"
        >
          <path
            fill="#81948B"
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          />
        </svg>
      </div>
    </div>
  );
};

export default LoadingModal;

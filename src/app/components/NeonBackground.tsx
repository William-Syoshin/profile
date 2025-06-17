import React from "react";

const NeonBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-black opacity-90"></div>
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.5 + 0.5,
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent animate-pulse"></div>
    </div>
  );
};

export default NeonBackground;

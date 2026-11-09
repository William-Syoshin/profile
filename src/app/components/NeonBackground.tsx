import React from "react";

// Stable positions prevent the stars from moving when the language changes,
// and keep the server and browser render identical.
const starValue = (index: number, offset: number) => {
  let value = Math.imul(index + 1, 374761393) + Math.imul(offset + 1, 668265263);
  value = Math.imul(value ^ (value >>> 13), 1274126177);
  return ((value ^ (value >>> 16)) >>> 0) / 4294967296;
};

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
              left: `${starValue(i, 0) * 100}%`,
              top: `${starValue(i, 1) * 100}%`,
              animationDelay: `${starValue(i, 2) * 5}s`,
              opacity: starValue(i, 3) * 0.5 + 0.5,
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent animate-pulse"></div>
    </div>
  );
};

export default NeonBackground;

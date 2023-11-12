import React from "react";

const Button = ({ bgColor, color, size, text, borderRadius, onClick, type }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={`text-${size} p-3 hover: drop-shadow-xl`}
        type={type}
        style={{
          backgroundColor: bgColor,
          color: color,
          borderRadius: borderRadius,
        }}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;

// components/common/Button.tsx
import React from "react";
import { ButtonProps } from "@/interfaces";

const sizeClasses: Record<string, string> = {
  small: "px-3 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-6 py-3 text-lg",
};

const shapeClasses: Record<string, string> = {
  "rounded-sm": "rounded-sm",
  "rounded-md": "rounded-md",
  "rounded-full": "rounded-full",
};

const Button: React.FC<ButtonProps> = ({
  size = "medium",
  shape = "rounded-md",
  children,
  onClick,
}) => {
  const sizeClass = sizeClasses[size] || sizeClasses.medium;
  const shapeClass = shapeClasses[shape] || shapeClasses["rounded-md"];

  return (
    <button
      className={`bg-blue-500 text-white font-semibold ${sizeClass} ${shapeClass} hover:bg-blue-600 transition`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

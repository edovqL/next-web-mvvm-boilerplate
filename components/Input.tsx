import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<InputProps> = ({ className = "", ...props }) => {
  return (
    <input className={`border rounded px-3 py-2 ${className}`} {...props} />
  );
};

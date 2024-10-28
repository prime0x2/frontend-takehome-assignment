// src/components/Button.tsx
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`h-10 w-full rounded-full border-2 text-xs font-bold uppercase tracking-widest shadow-cta-button transition-all duration-200 focus:outline-none focus:ring focus:ring-offset-2 sm:h-12 sm:w-60 sm:text-sm ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

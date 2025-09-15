'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ButtonProps } from '@/utils/types';



const Button: React.FC<ButtonProps> = ({
  id,
  label,
  icon,
  action,
  isHighlighted = false,
  onClick,
  className = ''
}) => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const baseClasses = "px-4 py-1.5 rounded-3xl text-sm font-medium flex items-center space-x-2 transition-colors cursor-pointer";
  const variantClasses = isHighlighted 
    ? "bg-[#00B9B9] hover:bg-white hover:border hover:border-[#00323C] hover:text-[#00323C] text-white"
    : "bg-[#00323C] hover:bg-white hover:border hover:border-[#00323C] hover:text-[#00323C] text-white";
  
  const combinedClasses = `${baseClasses} ${variantClasses} ${className}`;

  if (!mounted) {
    return (
      <div className={`${combinedClasses} animate-pulse`}>
        <div className="w-4 h-4 bg-gray-300 rounded"></div>
        <span className="text-transparent bg-gray-300 rounded">{label}</span>
      </div>
    );
  }

  return (
    <button 
      key={id}
      className={combinedClasses}
      onClick={() => onClick?.(action)}
    >
      <Image 
        src={icon} 
        alt={label} 
        width={16} 
        height={16} 
        className="w-4 h-4" 
      />
      <span>{label}</span>
    </button>
  );
};

export default Button;

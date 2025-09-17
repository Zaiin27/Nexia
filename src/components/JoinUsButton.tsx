'use client'
import React from 'react'

interface JoinUsButtonProps {
  className?: string
  onClick?: () => void
}

const JoinUsButton: React.FC<JoinUsButtonProps> = ({ className = '', onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-6 py-3 sm:px-8 sm:py-4
        border-2 border-[#00B9B9] 
        bg-transparent 
        text-white 
        font-semibold 
        text-base sm:text-lg
        rounded-full 
        hover:bg-[#00B9B9] 
        hover:text-white 
        transition-all 
        duration-300 
        ease-in-out
        focus:outline-none 
        focus:ring-2 
        focus:ring-[#00B9B9] 
        focus:ring-opacity-50
        ${className}
      `}
    >
      Join Us
    </button>
  )
}

export default JoinUsButton

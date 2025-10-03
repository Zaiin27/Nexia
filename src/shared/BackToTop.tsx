'use client'
import React, { useState, useEffect } from 'react'

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (!isVisible) {
    return null
  }

  return (
    <div className="flex justify-center py-8 bg-white">
      <button
        onClick={scrollToTop}
        className="flex flex-col items-center gap-2 text-black hover:text-teal-700 transition-colors duration-300 group cursor-pointer"
        aria-label="Back to top"
      >
        {/* Arrow Icon - First Row */}
        <div className="w-10 h-10 flex items-center justify-center group-hover:animate-bounce" style={{ animationDuration: '0.6s' }}>
          <img
            src="https://nexia.com/wp-content/uploads/2024/07/Group-256-rotated-1.svg"
            alt="Back to top"
            className="w-8 h-8"
          />
        </div>
        
        {/* Text - Second Row */}
        <span className="text-black font-normal text-2xl">Back to top</span>
      </button>
    </div>
  )
}

export default BackToTop

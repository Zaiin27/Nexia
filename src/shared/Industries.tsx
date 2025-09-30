'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { FiArrowRight, FiArrowLeft } from "react-icons/fi"
import { industries } from '@/utils/constants'



const Industries: React.FC = () => {
 

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [screenSize, setScreenSize] = useState('lg')

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setScreenSize('sm')
      } else if (window.innerWidth < 768) {
        setScreenSize('md')
      } else if (window.innerWidth < 1024) {
        setScreenSize('lg')
      } else {
        setScreenSize('xl')
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const getMaxIndex = () => {
    switch (screenSize) {
      case 'sm': return industries.length - 1
      case 'md': return industries.length - 2
      case 'lg': return industries.length - 3
      case 'xl': return industries.length - 4
      default: return industries.length - 4
    }
  }

  const getTransformPercentage = () => {
    switch (screenSize) {
      case 'sm': return 100
      case 'md': return 50
      case 'lg': return 33.33
      case 'xl': return 25
      default: return 25
    }
  }

  const nextSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => (prev + 1) % (getMaxIndex() + 1))
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const prevSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => (prev - 1 + (getMaxIndex() + 1)) % (getMaxIndex() + 1))
    setTimeout(() => setIsTransitioning(false), 500)
  }

  return (
    <section className="relative bg-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 lg:mb-12 gap-4 sm:gap-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[32px] leading-tight font-normal text-[#00B9B9]">
            Industries
          </h2>
          
          {/* Navigation Arrows */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <button
              onClick={prevSlide}
              disabled={isTransitioning}
              className="disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center group"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#00B9B9] group-hover:border-[#009999] transition-colors duration-300 flex items-center justify-center">
                <FiArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-[#00B9B9] group-hover:text-[#009999] transition-colors duration-300" strokeWidth="1.5" />
              </div>
            </button>
            
            <button
              onClick={nextSlide}
              disabled={isTransitioning}
              className="disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center group"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#00B9B9] group-hover:border-[#009999] transition-colors duration-300 flex items-center justify-center">
                <FiArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#00B9B9] group-hover:text-[#009999] transition-colors duration-300" strokeWidth="1.5" />
              </div>
            </button>
          </div>
        </div>

        {/* Industries Cards */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ 
              transform: `translateX(-${currentIndex * getTransformPercentage()}%)` 
            }}
          >
            {industries.map((industry, index) => (
              <div
                key={industry.id}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 px-1 sm:px-2"
              >
                <div className="relative group cursor-pointer">
                  {/* Industry Card */}
                  <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 rounded-lg overflow-hidden hover:rounded-tr-4xl hover:rounded-bl-4xl hover:rounded-tl-none hover:rounded-br-none transition-all duration-300">
                    <Image
                      src={industry.image}
                      alt={industry.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    
                    {/* Industry Name */}
                    <div className="absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4">
                      <h3 className="text-white text-sm sm:text-base md:text-lg font-semibold leading-tight">
                        {industry.name}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Industries

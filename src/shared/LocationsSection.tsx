'use client'
import React from 'react'
import Button from '@/components/Button'

const LocationsSection: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white md:pt-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-start justify-start gap-8 md:gap-8 lg:gap-[15rem]">
          {/* Left Side - Locations Heading with Icon */}
          <div className="flex items-center gap-3">
            {/* Globe Icon */}
            <div className="w-8 h-8 flex items-center justify-center">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                className="text-[#00B9B9]"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
                  fill="currentColor"
                />
              </svg>
            </div>
            
            {/* Locations Text */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal text-[#00B9B9]">
              Locations
            </h2>
          </div>

          {/* Right Side - Content and Button */}
          <div className="flex flex-col gap-6 max-w-xl ">
            {/* Description Text */}
            <p className="text-2xl text-[#00323C] leading-relaxed font-light">
              Wherever you are in the world, member firms put themselves at the heart of your business to understand your needs and create tailored solutions.
            </p>

            {/* Discover More Button */}
            <div className="flex justify-start">
              <button
                onClick={() => console.log('Discover more button clicked')}
                className="px-6 py-3 border-2 border-black bg-transparent text-black font-medium text-base rounded-full hover:text-[#00B9B9] hover:border-[#00B9B9] transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#00B9B9] focus:ring-opacity-50 cursor-pointer"
              >
                Discover more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocationsSection

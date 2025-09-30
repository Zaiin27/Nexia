'use client'
import React from 'react'
import Image from 'next/image'
import Button from '@/components/Button'

const NexiaHeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen md:h-[calc(88vh)] flex flex-col md:flex-row overflow-hidden">
      {/* Left Section - Teal Background */}
      <div className="w-full md:w-1/2 bg-[#00B9B9] flex items-center justify-center md:justify-end px-4 sm:px-6 lg:px-8 xl:px-12 py-16 lg:py-24 h-[60vh] md:h-full">
        <div className="max-w-2xl lg:max-w-3xl xl:max-w-4xl">
          {/* Main Heading */}
          <h1 className="text-white text-xl md:text-2xl lg:text-3xl xl:text-3xl font-normal leading-tight">
            We are Nexia
          </h1>
          
          {/* Description */}
          <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-3xl font-light leading-9 mb-6 lg:mb-8 max-w-2xl">
            We are a forward-looking community, guided by shared values and trusted relationships.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button className=" cursor-pointer px-4 py-2 sm:px-6 sm:py-3 lg:px-7 lg:py-3 border-2 border-white text-white font-medium text-xs sm:text-sm lg:text-base rounded-full hover:bg-white hover:text-[#00B9B9] transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
              About us
            </button>
            <button className=" cursor-pointer px-4 py-2 sm:px-6 sm:py-3 lg:px-7 lg:py-3 border-2 border-white text-white font-medium text-xs sm:text-sm lg:text-base rounded-full hover:bg-white hover:text-[#00B9B9] transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
              Become a member
            </button>
          </div>
          
        </div>
      </div>
      
      {/* Right Section - Image */}
      <div className="w-full md:w-1/2 relative h-[60vh] md:h-full flex items-center">
        <Image
          src="/nexia-home.jpg"
          alt="Nexia Team - Professional Collaboration"
          fill
          className="object-cover object-center"
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    </section>
  )
}

export default NexiaHeroSection

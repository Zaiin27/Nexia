'use client'
import React from 'react'
import Image from 'next/image'
import JoinUsButton from '@/components/JoinUsButton'

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] lg:min-h-[85vh] flex items-center justify-start overflow-hidden bg-[#00323c]">
      {/* Background Image (bottom-right anchored and responsive) */}
      <div className="absolute inset-0 z-0 flex justify-end items-end pointer-events-none">
        <div className="relative h-[65%] sm:h-[70%] md:h-[85%] lg:h-full w-[95%] sm:w-full md:w-full lg:w-full">
          <Image
            src="/hero-background.jpg"
            alt="Nexia Hero Background"
            fill
            className="object-contain object-right-bottom"
            priority
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full -mt-6 sm:-mt-4 lg:mt-6 md:pt-0">
        <div className="max-w-2xl">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1
              className="font-extralight text-[28px] leading-[32px] sm:text-[32px] sm:leading-[36px] md:text-[44px] md:leading-[48px] lg:text-[52px] lg:leading-[57px]"
              style={{ fontFamily: 'effra, sans-serif' }}
            >
              <span className="text-[28px] sm:text-[32px] md:text-[44px] lg:text-[52px] leading-[32px] sm:leading-[36px] md:leading-[48px] lg:leading-[57px] text-[#00B9B9]">Nexia is a leading</span>
              <br />
              <span className="text-[28px] sm:text-[32px] md:text-[44px] lg:text-[52px] leading-[32px] sm:leading-[36px] md:leading-[48px] lg:leading-[57px] text-white">global network of</span>
              <br />
              <span className="text-[28px] sm:text-[32px] md:text-[44px] lg:text-[52px] leading-[32px] sm:leading-[36px] md:leading-[48px] lg:leading-[57px] text-white">independent accounting</span>
              <br />
              <span className="text-[28px] sm:text-[32px] md:text-[44px] lg:text-[52px] leading-[32px] sm:leading-[36px] md:leading-[48px] lg:leading-[57px] text-white">& consulting firms.</span>
            </h1>
          </div>

          {/* Join Us Button */}
          <div className="mt-8 sm:mt-10 md:mt-12">
            <JoinUsButton />
          </div>
        </div>
      </div>

      
    </section>
  )
}

export default HeroSection

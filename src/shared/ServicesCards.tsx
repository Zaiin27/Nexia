'use client'
import React from 'react'
import Image from 'next/image'

interface ServiceCard {
  id: string
  title: string
  image: string
  waveColor: string
}

interface ServicesCardsProps {
  services: ServiceCard[]
  heading?: string
  showViewAllButton?: boolean
}

const ServicesCards: React.FC<ServicesCardsProps> = ({ services, heading = "Personal connections, global solutions.", showViewAllButton = true }) => {

  return (
    <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading with Button */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-16">
          <h2 className="text-3xl md:text-3xl lg:text-4xl font-light text-[#00323C] text-left">
            {heading}
          </h2>
          {showViewAllButton && (
            <button className="bg-white text-teal-600 border-2 border-teal-600 px-6 py-3 rounded-lg font-medium hover:bg-teal-600 hover:text-white transition-colors duration-300 w-fit mt-4 sm:mt-0">
              View all
            </button>
          )}
        </div>

        {/* Services Cards Grid - Responsive for 3-4 cards */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${
          services.length === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'
        }`}>
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-[#00323C] rounded-tl-[3rem] rounded-br-[3rem] p-6 h-56 cursor-pointer overflow-hidden"
            >
              {/* Arrow Icon */}
              <div className="absolute top-6 right-6 z-10">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-gray-400"
                >
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Service Title */}
              <h3 className="text-white text-xl font-semibold mb-4 relative z-10">
                {service.title}
              </h3>

               {/* Background Image */}
               <div className="absolute inset-0 z-0 overflow-hidden">
                 <Image
                   src={service.image}
                   alt={service.title}
                   fill
                   className="object-cover opacity-60 group-hover:scale-110 transition-transform duration-500 ease-out"
                 />
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesCards

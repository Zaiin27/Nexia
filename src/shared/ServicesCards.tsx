'use client'
import React from 'react'
import Image from 'next/image'

interface ServiceCard {
  id: string
  title: string
  image: string
  waveColor: string
}

const ServicesCards: React.FC = () => {
  const services: ServiceCard[] = [
    {
      id: 'audit',
      title: 'Audit',
      image: 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/08/audit-1.jpg',
      waveColor: 'from-yellow-400 via-orange-400 to-yellow-500'
    },
    {
      id: 'tax',
      title: 'Tax',
      image: 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/08/tax1.jpg',
      waveColor: 'from-pink-400 via-magenta-400 to-pink-500'
    },
    {
      id: 'advisory',
      title: 'Advisory',
      image: 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/08/advisory-1-3.jpg',
      waveColor: 'from-blue-400 via-cyan-400 to-blue-500'
    },
    {
      id: 'business-services',
      title: 'Business Services',
      image: 'https://s3-eu-west-1.amazonaws.com/nexiawebsite/wp-media-folder-global-network-of-accounting-consultant-firms-nexia/wp-content/uploads/2024/08/hero-teal-yellow-3.jpg',
      waveColor: 'from-teal-400 via-cyan-400 to-orange-400'
    }
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
         <h2 className="text-3xl md:text-3xl lg:text-4xl font-light text-[#00323C] mb-16  text-left">
          Personal connections, global solutions.
        </h2>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

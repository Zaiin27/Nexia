'use client'
import React from 'react'
import { FiArrowUpRight } from "react-icons/fi"

interface NetworkStat {
  id: string
  number: string
  label: string
  isHighlighted?: boolean
}

const NetworkStats: React.FC = () => {
  const stats: NetworkStat[] = [
    {
      id: 'countries',
      number: '119',
      label: 'countries worldwide'
    },
    {
      id: 'member-firms',
      number: '186',
      label: 'member firms',
      isHighlighted: true
    },
    {
      id: 'offices',
      number: '519',
      label: 'offices globally'
    },
    {
      id: 'partners',
      number: '1,942',
      label: 'partners'
    }
  ]

  return (
    <section className="relative bg-white py-8 sm:py-12 lg:py-5 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal text-[#00B9B9] mb-8 sm:mb-12 lg:mb-6">
          Network stats
        </h2>

        {/* Stats Grid */}
        <div className="space-y-0">
          {stats.map((stat, index) => (
            <div key={stat.id}>
              <div className="relative group">
                {/* Stat Row */}
                <div className="flex items-start justify-between py-2 sm:py-3 lg:py-4 transition-all duration-300 hover:bg-[#00B9B9] hover:rounded-lg group">
                  {/* Left Side - Number and Label */}
                  <div className="flex items-baseline space-x-4 sm:space-x-6 lg:space-x-8">
                    <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[10rem] 2xl:text-[12rem] font-normal text-[#00323C] group-hover:text-white transition-colors duration-300">
                      {stat.number}
                    </div>
                    <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-normal text-[#6B7280] group-hover:text-white transition-colors duration-300">
                      {stat.label}
                    </div>
                  </div>

                  {/* Right Side - View All Link */}
                  <div className="flex items-start space-x-2 text-[#9CA3AF] group-hover:text-white transition-all duration-300 pt-2 sm:pt-3 lg:pt-4">
                    <span className="text-xs sm:text-sm md:text-base lg:text-lg font-medium group-hover:hidden">
                      View all
                    </span>
                    <FiArrowUpRight className="w-6 h-6 sm:w-7 sm:h-7 lg:w-16 lg:h-16 group-hover:scale-110 transition-all duration-300 hidden group-hover:block" />
                  </div>
                </div>
              </div>
              
              {/* Separator Line */}
              <div className="h-px w-full bg-[#000] my-2 sm:my-3 lg:my-4" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NetworkStats

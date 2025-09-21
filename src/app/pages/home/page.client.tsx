'use client'
import React from 'react'
import HeroSection from './features/HeroSection'
import ServicesCards from '@/shared/ServicesCards'
import LocationsSection from '@/shared/LocationsSection'
import { servicesCardsData } from '@/utils/constants'

const HomePage: React.FC = () => {
  const homeData = servicesCardsData.home
  
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesCards 
        services={[...homeData.services]} 
        heading={homeData.heading}
        showViewAllButton={false}
      />
      <LocationsSection />
    </main>
  )
}

export default HomePage

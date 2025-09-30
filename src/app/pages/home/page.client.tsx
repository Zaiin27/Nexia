'use client'
import React from 'react'
import HeroSection from './features/HeroSection'
import NexiaHeroSection from './features/NexiaHeroSection'
import ServicesCards from '@/shared/ServicesCards'
import LocationsSection from '@/shared/LocationsSection'
import { servicesCardsData } from '@/utils/constants'
import InsightsSection from './features/InsightsSection'
import Industries from '@/shared/Industries'
import NetworkStats from '@/shared/NetworkStats'
import GetInTouch from '@/shared/GetInTouch'

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
      <NexiaHeroSection />
      <InsightsSection />
      <Industries />
      <NetworkStats />
      <GetInTouch />
    </main>
  )
}

export default HomePage

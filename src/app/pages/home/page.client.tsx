'use client'
import React from 'react'
import HeroSection from './features/HeroSection'
import ServicesCards from '@/shared/ServicesCards'
import LocationsSection from '@/shared/LocationsSection'

const HomePage: React.FC = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesCards />
      <LocationsSection />
    </main>
  )
}

export default HomePage

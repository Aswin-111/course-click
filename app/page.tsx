'use client'

import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import AboutSection from '@/components/AboutSection'
import UserTypesSection from '@/components/UserTypesSection'
import MobileAppSection from '@/components/MobileAppSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import FAQSection from '@/components/FAQSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <UserTypesSection />
      <MobileAppSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </main>
  )
}
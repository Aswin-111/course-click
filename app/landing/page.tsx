import type { Metadata } from 'next'
import LandingPage from '@/components/LandingPage'

export const metadata: Metadata = {
  title: 'Court Click - Your court case always in your pocket',
  description: 'Modern legal-tech platform to track and manage court cases',
}

export default function Landing() {
  return <LandingPage />
}
'use client'

import Link from 'next/link'
import WhatsAppIcon from './icons/WhatsAppIcon'
import LandingTestimonialsSection from './LandingTestimonialsSection'
import { mockRootProps } from './landingTestimonialsMockData'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      {/* Header Navigation */}
      <header 
        className="relative bg-[#50223c] text-white"
        style={{
          backgroundImage: "url('/images/header-bg.svg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <nav className="max-w-[1440px] mx-auto px-20">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/images/landing-logo.svg" 
                alt="Court Click Logo" 
                className="h-[26px] w-auto"
              />
            </div>

            {/* Navigation Links */}
            <div className="flex items-center gap-6">
              <Link 
                href="#about" 
                className="text-[#ede8eb] text-[16px] font-bold font-urbanist hover:opacity-80 transition"
              >
                About
              </Link>
              <Link 
                href="#features" 
                className="text-[#ede8eb] text-[16px] font-bold font-urbanist hover:opacity-80 transition"
              >
                Features
              </Link>
              <Link 
                href="#user-types" 
                className="text-[#ede8eb] text-[16px] font-bold font-urbanist hover:opacity-80 transition"
              >
                User Types
              </Link>
              <Link 
                href="#career" 
                className="text-[#ede8eb] text-[16px] font-bold font-urbanist hover:opacity-80 transition"
              >
                Career
              </Link>
              <Link 
                href="#notraise" 
                className="text-[#ede8eb] text-[16px] font-bold font-urbanist hover:opacity-80 transition"
              >
                Notraise Document
              </Link>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4">
              <button className="text-[#ede8eb] text-[14px] font-bold font-inter border-2 border-[#ede8eb] px-6 py-2.5 rounded-full hover:bg-white hover:text-[#50223c] transition-all duration-300">
                Contact Us
              </button>
              <button className="text-[#50223c] text-[14px] font-bold font-inter bg-[#ede8eb] px-6 py-2.5 rounded-full hover:bg-white transition-all duration-300">
                Log In
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content Section */}
      <main className="relative">
        <div className="max-w-[1440px] mx-auto px-20 py-16">
          <div className="grid grid-cols-12 gap-8 items-start">
            {/* Left Section - Hero Text and Phone */}
            <div className="col-span-5">
              <h1 className="text-[#11060c] font-urbanist mb-8">
                <span className="block text-[40px] font-light leading-[56px]">
                  Your court case
                </span>
                <span className="block text-[40px] font-light leading-[56px]">
                  always in your pocket.
                </span>
              </h1>

              {/* Phone Mockup */}
              <div className="relative w-full max-w-[400px]">
                <img 
                  src="/images/landing-phone-mockup.png" 
                  alt="Court Click App on Phone" 
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Middle Section - Description and Download */}
            <div className="col-span-4 pt-32">
              <p className="text-[#555555] text-[16px] font-medium font-urbanist leading-[24px] mb-12">
                Court Click is a modern legal-tech platform built to simplify the way people track and manage court cases. Whether you're a litigant, lawyer, NRI, or clerk - we help you stay updated, request documents, and even sign forms digitally. All through your phone. All without the courtroom chaos.
              </p>

              {/* Download Section */}
              <div>
                <h2 
                  className="text-[20px] font-bold font-urbanist mb-6"
                  style={{
                    background: 'radial-gradient(268.12% 268.12% at 50.00% 50.00%, #131213 0.00%, #161115 100.00%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  Download Court Click App
                </h2>
                <div className="flex gap-4">
                  <img 
                    src="/images/download-buttons.svg" 
                    alt="Download on App Store and Google Play" 
                    className="h-[37px] w-auto"
                  />
                </div>
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="col-span-1 flex justify-center pt-32">
              <img 
                src="/images/vertical-divider.svg" 
                alt="" 
                className="h-[530px] w-[2px]"
              />
            </div>

            {/* Right Section - Support */}
            <div className="col-span-2 pt-32">
              <h2 className="text-[#11060c] text-[32px] font-normal font-urbanist leading-[40px] mb-6">
                Need help finding your case or facing trouble?
              </h2>

              <p className="text-[#555555] text-[16px] font-medium font-urbanist leading-[24px] mb-12">
                Our support team is here for you - just click Contact Support or WhatsApp to reach us on .
              </p>

              {/* Action Buttons */}
              <div className="space-y-4">
                <button className="w-full bg-[#50223c] text-[#ede8eb] text-[14px] font-bold font-inter px-8 py-4 rounded-full hover:bg-[#3d1a2e] transition-all duration-300">
                  Contact Us
                </button>
                <button className="w-full border-2 border-[#50223c] text-[#50223c] text-[14px] font-bold font-inter px-8 py-4 rounded-full hover:bg-[#50223c] hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                  <WhatsAppIcon width={16} height={16} color="currentColor" />
                  <span>Chat in Whatsapp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Testimonials Section */}
      <LandingTestimonialsSection 
        testimonials={mockRootProps.testimonials}
        stats={mockRootProps.stats}
      />
    </div>
  )
}
'use client'

import React from 'react'
import Image from 'next/image'
import { Reveal, AnimatedButton } from './animations'
import mobileAppPhone from '@/public/images/mobile-app-phone.png'
import appStore from '@/public/images/icons/appstore.svg'
import playStore from '@/public/images/icons/playstore.svg'
import { Urbanist } from 'next/font/google'

const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
})

export default function MobileAppSection() {
  return (
    <section className="relative bg-[#F8F8F8] pt-14 lg:pt-18 overflow-hidden min-h-[800px] lg:min-h-[900px] flex flex-col justify-end">
      {/* Apply Urbanist to everything inside, without touching existing classes */}
      <div className={urbanist.className}>
        {/* 3-column grid: phone + content + help */}
        <div className="relative max-w-[1450px] mx-auto px-4 lg:px-5 grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-9 lg:items-end">
          
          {/* LEFT: headings (top) + phone (bottom) */}
          <div className="lg:col-span-4">
            <Reveal once={false}>
              <h2 className="text-[48px] font-light leading-[56px] text-[#11060C]">
                Your court case
              </h2>
            </Reveal>
            <Reveal once={false}>
              <h2 className="text-[48px] font-extrabold leading-[56px] text-[#11060C] mt-2 mb-5">
                always in your pocket.
              </h2>
            </Reveal>

            {/* Phone mockup */}
            <Reveal once={false}>
              <div className="relative w-full max-w-[372px] aspect-[372/571] mx-auto lg:mx-0">
                <Image
                  src={mobileAppPhone}
                  alt="Court Click Mobile App"
                  fill
                  priority
                  sizes="(min-width: 1024px) 372px, 80vw"
                  className="object-contain"
                />
              </div>
            </Reveal>
          </div>

          {/* MIDDLE: description + download */}
          <div className="lg:col-span-4 pb-16 lg:pb-20 relative">
            <Reveal once={false}>
              <p className="text-[#555555] text-[16px] font-medium leading-[24px] mb-8">
                Court Click is a modern legal-tech platform built to simplify the way people
                track and manage court cases. Whether you're a litigant, lawyer, NRI, or clerk
                - we help you stay updated, request documents, and even sign forms digitally.
                All through your phone. All without the courtroom chaos.
              </p>
            </Reveal>

            <Reveal once={false}>
              <h3 className="text-[20px] font-bold leading-[28px] text-[#11060C] mb-5">
                Download Court Click App
              </h3>
            </Reveal>

            <Reveal once={false}>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#" aria-label="Download on the App Store">
                  <Image
                    src={appStore}
                    alt="App Store"
                    width={160}
                    height={48}
                    className="h-[48px] w-auto hover:opacity-80 transition-opacity"
                  />
                </a>
                <a href="#" aria-label="Get it on Google Play">
                  <Image
                    src={playStore}
                    alt="Google Play"
                    width={160}
                    height={48}
                    className="h-[48px] w-auto hover:opacity-80 transition-opacity"
                  />
                </a>
              </div>
            </Reveal>

            {/* Vertical divider */}
            <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" width="2" height="569" viewBox="0 0 2 569" fill="none">
                <path d="M1 0L1.00002 569" stroke="url(#paint0_linear_20_2530)" />
                <defs>
                  <linearGradient id="paint0_linear_20_2530" x1="1" y1="0" x2="1.00002" y2="563.511" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#E0E1E2" stopOpacity="0.17" />
                    <stop offset="0.5" stopOpacity="0.15" />
                    <stop offset="1" stopColor="#E0E1E2" stopOpacity="0.17" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* RIGHT: help card */}
          <div className="lg:col-span-4 pb-16 lg:pb-20">
            <Reveal once={false}>
              <h3 className="text-[32px] lg:text-[34px] font-light leading-[40px] lg:leading-[42px] text-[#11060C]">
                Need help finding your case or facing trouble?
              </h3>
            </Reveal>

            <Reveal once={false}>
              <p className="text-[#555555] text-[16px] font-medium leading-[24px] mt-4 mb-6">
                Our support team is here for you - just click Contact Support or
                WhatsApp to reach us on.
              </p>
            </Reveal>

            <Reveal once={false} className="space-y-3">
              <AnimatedButton className="w-full max-w-[280px] bg-[#50223C] text-white px-6 py-3.5 rounded-full hover:bg-[#5A2D57] transition-all duration-300 font-medium text-[15px] leading-[20px] text-center">
                Contact Us
              </AnimatedButton>

              <AnimatedButton className="w-full max-w-[280px] border border-[#50223C] text-[#50223C] px-6 py-3.5 rounded-full hover:bg-[#50223C] hover:text-white transition-all duration-300 font-medium text-[15px] leading-[20px] flex items-center justify-center gap-2">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span>Chat in Whatsapp</span>
              </AnimatedButton>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

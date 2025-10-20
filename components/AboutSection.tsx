'use client'

import React from 'react'
import { Reveal, AnimatedButton } from './animations'

export default function AboutSection() {
  return (
    <section className="bg-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-20">
        {/* Eyebrow */}
        <Reveal once={false}>
          <p className="text-[20px] leading-[64px] font-medium text-[#B4B4B4] text-center font-['Inter']">
            About Court Click
          </p>
        </Reveal>

        {/* Headings */}
        <Reveal once={false}>
          <h2 className="text-[40px] leading-[56px] font-extralight text-[#11060C] text-center font-['Urbanist']">
            From Court Confusion
          </h2>
        </Reveal>
        <Reveal once={false}>
          <h2 className="text-[40px] leading-[56px] font-bold text-[#11060C] text-center font-['Urbanist']">
            to Court Click
          </h2>
        </Reveal>

        {/* Paragraph */}
        <Reveal once={false}>
          <p className="mt-4 text-center text-[#555] text-[20px] leading-8 font-medium font-['Urbanist'] max-w-[1050px] mx-auto">
            Court Click is a modern legal-tech platform built to simplify the way people track and manage
            court cases. Whether you&apos;re a litigant, lawyer, NRI, or clerk – we help you stay updated,
            request documents, and even sign forms digitally. All through your phone. All without the
            courtroom chaos.
          </p>
        </Reveal>

        {/* Button (218 × 48) */}
        <div className="mt-6 flex justify-center">
          <Reveal once={false}>
            <AnimatedButton className="w-[218px] h-[48px] rounded-full bg-[#4A2347] text-white font-medium transition-colors hover:bg-[#5A2D57]">
              Learn More
            </AnimatedButton>
          </Reveal>
        </div>

        {/* Phone Mockup (47px gap from button, 689 × 321) */}
        <div className="mt-[47px] flex justify-center">
          <Reveal once={false} className="relative">
            <img
              src="/images/about-phone-mockup.png"
              alt="Court Click app mockup"
              width={689}
              height={321}
              className="w-[689px] h-[321px] object-contain drop-shadow-[0_40px_60px_rgba(0,0,0,0.12)]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

'use client'

import React from 'react'
import Image from 'next/image'
import { Reveal, AnimatedButton } from './animations'
import aboutPhone from '@/public/images/about-phone-mockup.png'

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
          <Reveal once={false} className="relative about-scale-wrapper">
            {/* ratio box to guarantee height for <Image fill /> */}
            <div className="relative about-ratio">
              <Image
                src={aboutPhone}
                alt="Court Click app mockup"
                fill
                priority
                sizes="(min-width: 1280px) 689px, 90vw"
                className="drop-shadow-[0_40px_60px_rgba(0,0,0,0.12)]"
                style={{ objectFit: 'contain' }}
              />
            </div>
          </Reveal>
        </div>
      </div>

      {/* Scoped helpers: ratio + gentle scale for smaller/larger screens.
          These DO NOT change your inner styles; they only make the exact design fit responsively. */}
      <style jsx>{`
        /* Original design size: 689 × 321 */
        .about-ratio {
          width: 689px;
          max-width: 100%;
          position: relative;
          /* maintains 321/689 aspect */
          padding-top: calc(321 / 689 * 100%);
        }
        .about-ratio > :global(img),
        .about-ratio > :global(span > img) {
          /* next/image places an inner span > img */
          display: block;
        }
        .about-scale-wrapper {
          --about-scale: clamp(0.72, 100vw / 1200, 1); /* scales down on small viewports, 1:1 on desktop */
          transform: scale(var(--about-scale));
          transform-origin: center;
          will-change: transform;
        }

        /* Slightly larger monitors can nudge scale up a touch */
        @media (min-width: 1800px) {
          .about-scale-wrapper { --about-scale: clamp(0.72, 100vw / 1600, 1.08); }
        }

        /* Prevent over-scaling on ultra-wide / 4K */
        @media (min-width: 3000px) {
          .about-scale-wrapper { --about-scale: 1.1; }
        }
      `}</style>
    </section>
  )
}

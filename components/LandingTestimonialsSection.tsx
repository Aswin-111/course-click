'use client'

import React, { useEffect, useRef, useState } from 'react'
import QuoteIcon from './icons/QuoteIcon'
import StarRatingIcon from './icons/StarRatingIcon'
import { Reveal } from './animations'

// Mock data for landing page testimonials section
export interface TestimonialType {
  id: number
  quote: string
  name: string
  title: string
  avatar: string
  rating: number
}

export interface StatType {
  value: string
  label: string
}

// Data passed as props to the root component
export const mockRootProps = {
  testimonials: [
    {
      id: 1,
      quote:
        "Court Click has completely changed the way I manage my practice. I no longer have to juggle between different tools-everything is right there in one dashboard. It saves me hours every week and keeps my cases well-organized.",
      name: 'Adv. Arun Menon',
      title: 'Lawyer at Kerala High Court',
      avatar: '/images/testimonials/avatar-arun-menon.jpg',
      rating: 5,
    },
    {
      id: 2,
      quote:
        "Court Click has completely changed the way I manage my practice. I no longer have to juggle between different tools-everything is right there in one dashboard. It saves me hours every week and keeps my cases well-organized.",
      name: 'Neha Suresh',
      title: 'Public Litigant, Kerala(Kochi)',
      avatar: '/images/testimonials/avatar-neha-suresh.jpg',
      rating: 5,
    },
    {
      id: 3,
      quote:
        "Court Click has completely changed the way I manage my practice. I no longer have to juggle between different tools-everything is right there in one dashboard. It saves me hours every week and keeps my cases well-organized.",
      name: 'Adv. Arun Menon',
      title: 'Lawyer at Kerala High Court',
      avatar: '/images/testimonials/avatar-arun-menon.jpg',
      rating: 5,
    },
  ],
  stats: [
    {
      value: '10K+',
      label: 'Total Downloads',
    },
    {
      value: '2K+',
      label: 'Trusted by Lawyers and Litigants',
    },
    {
      value: '4.7 / 5',
      label: 'Review Ratings',
    },
  ],
}

interface LandingTestimonialsSectionProps {
  testimonials?: TestimonialType[]
  stats?: StatType[]
}

export default function LandingTestimonialsSection({
  testimonials = mockRootProps.testimonials,
  stats = mockRootProps.stats,
}: LandingTestimonialsSectionProps) {
  // ===== copied animation behavior: vertical auto-scroll with hover pause =====
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isScrolling, setIsScrolling] = useState(true)

  // Duplicate items for seamless loop in the right stack
  const looped = [...testimonials, ...testimonials]

  useEffect(() => {
    const el = scrollRef.current
    if (!el || !isScrolling) return
    let raf = 0
    const speed = 0.5 // medium speed

    const tick = () => {
      if (!el) return
      el.scrollTop += speed
      // reset at half since list is duplicated
      if (el.scrollTop >= el.scrollHeight / 2) el.scrollTop = 0
      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [isScrolling])
  // ===========================================================================

  return (
    <section className="bg-[#f5f5f5] py-20">
      <div className="max-w-[1440px] mx-auto px-20">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Column - Heading and Featured Testimonial */}
          <div className="col-span-12 lg:col-span-5 flex flex-col gap-12">
            {/* Section Heading */}
            <Reveal once={false}>
              <div className="flex flex-col gap-6">
                <p className="text-[#818181] text-[20px] leading-[32px] font-medium font-inter opacity-70">
                  Testimonials
                </p>
                <h2 className="text-[#11060c] font-urbanist">
                  <span className="block text-[40px] font-light leading-[56px]">
                    Don't take our word for it,
                  </span>
                  <span className="block text-[40px] font-light leading-[56px]">
                    Have a look yourself
                  </span>
                </h2>
              </div>
            </Reveal>

            {/* Horizontal Divider */}
            <Reveal once={false}>
              <img src="/images/horizontal-divider.svg" alt="" className="w-full h-[2px]" />
            </Reveal>

            {/* Featured Testimonial Card */}
            {testimonials[0] && (
              <Reveal once={false}>
                <div className="flex flex-col gap-12">
                  <div className="relative">
                    <QuoteIcon width={29} height={22} color="#1f0d19" />
                    <p className="text-[#555555] text-[20px] font-medium font-urbanist leading-[32px] mt-2">
                      {testimonials[0].quote}
                    </p>
                  </div>

                  {/* User Info and Rating */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={testimonials[0].avatar}
                        alt={testimonials[0].name}
                        className="w-[48px] h-[48px] rounded-full object-cover"
                      />
                      <div className="flex flex-col gap-1">
                        <p className="text-[#11060c] text-[18px] font-bold font-urbanist">
                          {testimonials[0].name}
                        </p>
                        <p className="text-[#555555] text-[12px] font-medium font-urbanist">
                          {testimonials[0].title}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 items-end">
                      <p className="text-[#555555] text-[12px] font-medium font-urbanist">
                        Review rating
                      </p>
                      <StarRatingIcon width={130} height={26} />
                    </div>
                  </div>
                </div>
              </Reveal>
            )}
          </div>

          {/* Right Column - Testimonial Cards Stack (auto-scrolling container) */}
          <div className="col-span-12 lg:col-span-7">
            <Reveal once={false}>
              <div className="relative h-[520px] overflow-hidden">
                {/* top fade */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-16 z-10"
                     style={{ background: 'linear-gradient(180deg, rgba(245,245,245,1) 0%, rgba(245,245,245,0) 100%)' }} />
                {/* scroll area */}
                <div
                  ref={scrollRef}
                  className="h-full overflow-y-scroll [scrollbar-width:none] [-ms-overflow-style:none]"
                  onMouseEnter={() => setIsScrolling(false)}
                  onMouseLeave={() => setIsScrolling(true)}
                >
                  {/* hide webkit scrollbar */}
                  <style jsx>{`
                    div::-webkit-scrollbar {
                      display: none;
                    }
                  `}</style>

                  <div className="flex flex-col gap-4 py-2">
                    {/* We render the trio (partial/full/partial) pattern for each item, looping for seamless scroll */}
                    {looped.map((t, i) => {
                      const mod = i % 3
                      if (mod === 0) {
                        // Card 1 - Partial with gradient fade (top)
                        return (
                          <div
                            key={`top-${t.id}-${i}`}
                            className="relative rounded-2xl bg-[rgba(110,87,115,0.08)] p-6 h-[139px] overflow-hidden"
                          >
                            <div
                              className="absolute inset-0 z-10"
                              style={{
                                background:
                                  'linear-gradient(180deg, rgba(245,245,245,1) 0%, rgba(245,245,245,0) 100%)',
                              }}
                            />
                            <div className="relative z-0 flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <img
                                  src={t.avatar}
                                  alt={t.name}
                                  className="w-[48px] h-[48px] rounded-full object-cover"
                                />
                                <div className="flex flex-col gap-1">
                                  <p className="text-[#11060c] text-[16px] font-bold font-urbanist">
                                    {t.name}
                                  </p>
                                  <p className="text-[#555555] text-[12px] font-normal font-inter">
                                    {t.title}
                                  </p>
                                </div>
                              </div>
                              <StarRatingIcon width={130} height={26} />
                            </div>
                          </div>
                        )
                      }
                      if (mod === 1) {
                        // Card 2 - Full testimonial
                        return (
                          <div
                            key={`full-${t.id}-${i}`}
                            className="rounded-2xl bg-[rgba(110,87,115,0.08)] p-6"
                          >
                            <div className="flex flex-col gap-6">
                              <div className="relative">
                                <QuoteIcon width={29} height={22} color="#1f0d19" />
                                <p className="text-[#555555] text-[13px] font-medium font-urbanist leading-[24px] mt-2">
                                  "{t.quote}"
                                </p>
                              </div>

                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <img
                                    src={t.avatar}
                                    alt={t.name}
                                    className="w-[48px] h-[48px] rounded-full object-cover"
                                  />
                                  <div className="flex flex-col gap-1">
                                    <p className="text-[#11060c] text-[16px] font-bold font-urbanist">
                                      {t.name}
                                    </p>
                                    <p className="text-[#555555] text-[12px] font-normal font-inter">
                                      {t.title}
                                    </p>
                                  </div>
                                </div>
                                <StarRatingIcon width={130} height={26} />
                              </div>
                            </div>
                          </div>
                        )
                      }
                      // Card 3 - Partial with gradient fade (bottom)
                      return (
                        <div
                          key={`bottom-${t.id}-${i}`}
                          className="relative rounded-2xl bg-[rgba(110,87,115,0.08)] p-6 h-[133px] overflow-hidden"
                        >
                          <div
                            className="absolute inset-0 z-10"
                            style={{
                              background:
                                'linear-gradient(180deg, rgba(245,245,245,0) 0%, rgba(245,245,245,1) 100%)',
                            }}
                          />
                          <div className="relative z-0">
                            <QuoteIcon width={29} height={22} color="#1f0d19" />
                            <p className="text-[#555555] text-[13px] font-medium font-urbanist leading-[24px] mt-2">
                              "{t.quote}"
                            </p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
                {/* bottom fade */}
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-16 z-10"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(245,245,245,0) 0%, rgba(245,245,245,1) 100%)',
                  }}
                />
              </div>
            </Reveal>
          </div>
        </div>

        {/* Bottom Stats Section */}
        <Reveal once={false}>
          <div className="mt-16 flex flex-col gap-16">
            {/* Bottom Divider */}
            <img src="/images/bottom-divider.svg" alt="" className="w-full h-[1px]" />

            {/* Stats Row */}
            <div className="flex items-center justify-center gap-28">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-28">
                  <div className="flex flex-col gap-3 items-center">
                    <h3
                      className="text-[48px] font-semibold font-inter"
                      style={{
                        background:
                          'linear-gradient(180.65deg, rgba(80,34,60,1) 0.75%, rgba(37,2,31,1) 160.02%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      {stat.value}
                    </h3>
                    <p className="text-[#555555] text-[18px] font-semibold font-urbanist text-center">
                      {stat.label}
                    </p>
                  </div>

                  {/* Vertical Divider (not after last item) */}
                  {index < stats.length - 1 && (
                    <img src="/images/stats-divider.svg" alt="" className="h-[83px] w-[1px]" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

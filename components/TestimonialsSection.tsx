'use client'

import React, { useEffect, useRef, useState } from 'react'
import QuoteIcon from './icons/QuoteIcon'
import StarRatingIcon from './icons/StarRatingIcon'
import TestimonialCard from './TestimonialCard'
import { Reveal } from './animations'

// ==== Types ====
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

// ==== Optional default data (used if no props are passed) ====
const fallbackTestimonials: TestimonialType[] = [
  {
    id: 1,
    quote:
      "Court Click has completely changed the way I manage my practice. I no longer have to juggle between different tools—everything is right there in one dashboard. It saves me hours every week and keeps my cases well-organized.",
    name: 'Adv. Arun Menon',
    title: 'Lawyer at Kerala High Court',
    avatar: '/images/testimonials/avatar-arun-menon.jpg',
    rating: 5,
  },
  {
    id: 2,
    quote:
      "Court Click has completely changed the way I manage my practice. I no longer have to juggle between different tools—everything is right there in one dashboard. It saves me hours every week and keeps my cases well-organized.",
    name: 'Neha Suresh',
    title: 'Public Litigant, Kerala(Kochi)',
    avatar: '/images/testimonials/avatar-neha-suresh.jpg',
    rating: 5,
  },
  {
    id: 3,
    quote:
      "Court Click has completely changed the way I manage my practice. I no longer have to juggle between different tools—everything is right there in one dashboard. It saves me hours every week and keeps my cases well-organized.",
    name: 'Adv. Arun Menon',
    title: 'Lawyer at Kerala High Court',
    avatar: '/images/testimonials/avatar-arun-menon.jpg',
    rating: 5,
  },
]
const fallbackStats: StatType[] = [
  { value: '10K+', label: 'Total Downloads' },
  { value: '2K+', label: 'Trusted by Lawyers and Litigants' },
  { value: '4.7 / 5', label: 'Review Ratings' },
]

interface LandingTestimonialsSectionProps {
  testimonials?: TestimonialType[]
  stats?: StatType[]
}

/** Hover wobble wrapper (adds motion only, no style changes to children) */
function WobbleOnHover({ children }: { children: React.ReactNode }) {
  const [hover, setHover] = useState(false)
  const [amp, setAmp] = useState<number | null>(null)
  const [dur, setDur] = useState<number | null>(null)

  useEffect(() => {
    // run after mount to avoid SSR randomness
    const r = Math.random
    setAmp(Math.round((4 + (10 - 4) * r()) * 10) / 10)         // 4..10px
    setDur(Math.round((0.9 + (1.4 - 0.9) * r()) * 100) / 100)  // 0.9..1.4s
  }, [])

  const animate = hover && amp != null ? { y: [0, -amp, 0, amp, 0] } : { y: 0 }
  const transition = hover && dur != null ? { duration: dur, ease: 'easeInOut', repeat: Infinity } : undefined

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ willChange: 'transform' }}
    >
      {/* use a lightweight inline animation via CSS variables to avoid altering children */}
      <div style={{
        transform: animate.y ? undefined : 'translateY(0px)',
        animation: animate.y ? `wobble ${dur}s ease-in-out infinite` : undefined,
        // custom prop for amplitude
        ['--amp' as any]: amp ? `${amp}px` : '0px',
      }}>
        {children}
      </div>
      <style jsx>{`
        @keyframes wobble {
          0%   { transform: translateY(0); }
          25%  { transform: translateY(calc(var(--amp) * -1)); }
          50%  { transform: translateY(0); }
          75%  { transform: translateY(var(--amp)); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}

export default function LandingTestimonialsSection({
  testimonials = fallbackTestimonials,
  stats = fallbackStats,
}: LandingTestimonialsSectionProps) {
  // ===== Auto-scrolling vertical carousel (right column) =====
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isScrolling, setIsScrolling] = useState(true)
  const allTestimonials = [...testimonials, ...testimonials] // seamless loop

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    // Respect reduced-motion
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReduced || !isScrolling) return

    let raf = 0
    const speed = 0.5 // Medium speed

    const tick = () => {
      if (!el) return
      el.scrollTop += speed
      if (el.scrollTop >= el.scrollHeight / 2) el.scrollTop = 0
      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [isScrolling])

  return (
    <section className="bg-[#f5f5f5] py-20">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-20">
        <div className="grid grid-cols-12 gap-8">
          {/* ================= Left Column ================= */}
          <div className="col-span-12 lg:col-span-5 flex flex-col gap-12">
            {/* Heading */}
            <Reveal once={false}>
              <div className="flex flex-col gap-6">
                <p className="text-[#818181] text-[20px] font-medium font-inter opacity-70 leading-[32px]">
                  Testimonials
                </p>
                <h2 className="text-[#11060c] font-urbanist leading-[56px]">
                  <span className="block text-[40px] font-light">
                    Don&apos;t take our word for it,
                  </span>
                  <span
                    className="block text-[40px] font-bold leading-[56px]"
                    style={{
                      background:
                        'linear-gradient(181deg, #50223C -0.96%, #25021F 159.5%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Have a look yourself
                  </span>
                </h2>
              </div>
            </Reveal>

            {/* Divider */}
            <Reveal once={false}>
              <img
                src="/images/horizontal-divider.svg"
                alt=""
                className="w-full h-[2px]"
              />
            </Reveal>

            {/* Featured Testimonial */}
            {testimonials[0] && (
              <Reveal once={false}>
                <div className="flex flex-col gap-12">
                  <div className="relative">
                    <QuoteIcon width={29} height={22} color="#1f0d19" />
                    <p className="text-[#555555] text-[20px] font-medium font-urbanist leading-[32px] mt-2 max-w-[534px]">
                      {testimonials[0].quote}
                    </p>
                  </div>

                  {/* User info + rating */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={testimonials[0].avatar}
                        alt={testimonials[0].name}
                        className="w-[48px] h-[48px] rounded-full object-cover"
                        onError={(e) => {
                          const t = e.currentTarget
                          t.onerror = null
                          t.src =
                            "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Crect width='48' height='48' rx='24' fill='%23EDE8EB'/%3E%3C/svg%3E"
                        }}
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

          {/* ================= Right Column (Vertical Carousel) ================= */}
          <div className="col-span-12 lg:col-span-7">
            <Reveal once={false}>
              <div className="relative h-[536px] overflow-hidden">
                {/* Top fade */}
                <div
                  className="pointer-events-none absolute top-0 left-0 right-0 z-10 h-12"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(245,245,245,1) 0%, rgba(245,245,245,0) 100%)',
                  }}
                />
                {/* Scroll container */}
                <div
                  ref={scrollRef}
                  className="h-full overflow-y-scroll scrollbar-hide"
                  onMouseEnter={() => setIsScrolling(false)}
                  onMouseLeave={() => setIsScrolling(true)}
                >
                  <div className="space-y-4 py-4">
                    {allTestimonials.map((t, idx) => (
                      <WobbleOnHover key={`${t.id}-${idx}`}>
                        <TestimonialCard
                          name={t.name}
                          title={t.title}
                          testimonial={t.quote}
                          rating={t.rating}
                          image={t.avatar}
                        />
                      </WobbleOnHover>
                    ))}
                  </div>
                </div>
                {/* Bottom fade */}
                <div
                  className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-12"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(245,245,245,0) 0%, rgba(245,245,245,1) 100%)',
                  }}
                />
              </div>
            </Reveal>
          </div>
        </div>

        {/* ================= Bottom Stats ================= */}
        <div className="mt-16 flex flex-col gap-16">
          {/* Divider */}
          <Reveal once={false}>
            <img src="/images/bottom-divider.svg" alt="" className="w-full h-[1px]" />
          </Reveal>

          <Reveal once={false}>
            {/* scale wrapper keeps your exact styles but fits narrow screens */}
            <div className="stats-scale">
              <div className="flex items-center justify-center gap-28">
                {stats.map((stat, i) => (
                  <div key={i} className="flex items-center gap-28">
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
                    {/* Vertical divider between items */}
                    {i < stats.length - 1 && (
                      <img
                        src="/images/stats-divider.svg"
                        alt=""
                        className="h-[83px] w-[1px]"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Scoped helper: gently scale the fixed-width stats row on small screens.
          This does NOT change your inner styles or spacing; it only applies a transform. */}
      <style jsx>{`
        .stats-scale {
          --sscale: 1;
          transform: scale(var(--sscale));
          transform-origin: center;
          will-change: transform;
        }
        @media (max-width: 768px) {
          .stats-scale { --sscale: 0.84; }
        }
        @media (max-width: 480px) {
          .stats-scale { --sscale: 0.74; }
        }
      `}</style>
    </section>
  )
}

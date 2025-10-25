'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Stagger, Reveal, slideUp } from './animations'
import { easeInOut } from 'framer-motion'

/** Client-only randomized wobble on hover (no style changes to children) */
function WobbleOnHover({ children }: { children: React.ReactNode }) {
  const [hover, setHover] = useState(false)
  const [amp, setAmp] = useState<number | null>(null)
  const [dur, setDur] = useState<number | null>(null)

  useEffect(() => {
    const r = Math.random
    setAmp(Math.round((4 + (10 - 4) * r()) * 10) / 10)           // 4..10px
    setDur(Math.round((0.9 + (1.4 - 0.9) * r()) * 100) / 100)    // 0.9..1.4s
  }, [])

  const animate = hover && amp != null ? { y: [0, -amp, 0, amp, 0] } : { y: 0 }
  const transition =
  hover && dur != null
    ? { duration: dur, ease: easeInOut, repeat: Infinity }
    : undefined

  return (
    <motion.div
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      animate={animate}
      transition={transition}
      style={{ willChange: 'transform' }}
    >
      {children}
    </motion.div>
  )
}

export default function UserTypesSection() {
  const userTypes = [
    {
      id: 'public-litigant',
      icon: '/images/icons/public-litigant.svg',
      title: 'Public/Litigant',
      description:
        'Court Click simplifies following your court case. Enter your case number to get automatic updates on hearings, orders, and judgments, delivered right to you.',
    },
    {
      id: 'lawyers',
      icon: '/images/icons/lawyers.svg',
      title: 'Lawyers',
      description:
        'Court Click is an all-in-one app for lawyers to manage cases, get real-time High Court updates, and streamline tasks like e-signatures, billing, and client communication.',
    },
    {
      id: 'clerks',
      icon: '/images/icons/clerks.svg',
      title: 'Clerks',
      description:
        'Court Click simplifies following your court case. Enter your case number to get automatic updates on hearings, orders, and judgments, delivered right to you.',
    },
    {
      id: 'law-students',
      icon: '/images/icons/law-students.svg',
      title: 'Law Students',
      description:
        'Court Click simplifies following your court case. Enter your case number to get automatic updates on hearings, orders, and judgments, delivered right to you.',
    },
  ]

  return (
    <section className="bg-[#11060C]">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-20">
        {/* Eyebrow */}
        <div className="text-center">
          <Reveal once={false}>
            <p
              className="text-[#818181] text-[20px] font-medium leading-[64px]"
              style={{ fontFamily: 'Inter' }}
            >
              User Types
            </p>
          </Reveal>

          {/* Headline */}
          <Reveal once={false}>
            <h2
              className="text-[#F5F5F5] text-[40px] font-extralight leading-[56px]"
              style={{ fontFamily: 'Urbanist' }}
            >
              Different Users
            </h2>
          </Reveal>
          <Reveal once={false}>
            <h2
              className="text-[#F5F5F5] text-[40px] font-bold leading-[56px] mt-1"
              style={{ fontFamily: 'Urbanist' }}
            >
              One Powerful Platform.
            </h2>
          </Reveal>

          {/* Subcopy */}
          <Reveal once={false}>
            <p
              className="mx-auto mt-4 max-w-[760px] text-center text-[#818181] text-[18px] font-medium leading-[24px]"
              style={{ fontFamily: 'Urbanist' }}
            >
              Court Click understands your needs, From first-time users to experienced professionals - Court Click works for all.
            </p>
          </Reveal>
        </div>

        {/* GRID */}
        <div className="relative mx-auto mt-16 max-w-[1168px]">
          {/* internal separators */}
          <span className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-[#2C1B24] lg:block" />
          <span className="pointer-events-none absolute left-0 top-1/2 hidden h-px w-full -translate-y-1/2 bg-[#2C1B24] lg:block" />

          <Stagger once={false} className="grid grid-cols-1 place-items-center gap-0 lg:grid-cols-2">
            {userTypes.map((item) => (
              <WobbleOnHover key={item.id}>
                {/* Scale wrapper: keeps your fixed w-[566px] card fitting on smaller screens */}
                <div className="user-card-scale">
                  <motion.div
                    variants={slideUp}
                    className="flex w-[566px] flex-col items-center justify-end gap-[16px] pt-[32px] pr-[44px] pb-[8px] pl-[44px]"
                  >
                    {/* Heading row with icon */}
                    <div className="flex items-center gap-[14px]">
                      <img
                        src={item.icon}
                        alt=""
                        className="h-[32px] w-[32px] brightness-0 invert"
                        onError={(e) => {
                          const t = e.target as HTMLImageElement
                          t.onerror = null
                          t.src =
                            "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Ccircle cx='16' cy='16' r='14' fill='%23EDE8EB'/%3E%3C/svg%3E"
                        }}
                      />
                      <h3
                        className="text-[20px] font-bold leading-[32px] capitalize text-[#EDE8EB]"
                        style={{ fontFamily: 'Urbanist' }}
                      >
                        {item.title}
                      </h3>
                    </div>

                    {/* Paragraph */}
                    <p
                      className="text-center text-[15px] font-medium leading-[24px] text-[#818181]"
                      style={{ fontFamily: 'Urbanist' }}
                    >
                      {item.description}
                    </p>

                    {/* CTA group */}
                    <div className="flex items-center gap-[8px]">
                      <a
                        href="#"
                        className="flex h-[48px] w-[185px] items-center justify-center gap-2 rounded-[24px] border border-[#EDE8EB] text-[#EDE8EB]"
                        style={{ fontFamily: 'Urbanist' }}
                      >
                        Know more
                      </a>

                      {/* 48x48 arrow button per dev-mode svg */}
                      <a
                        href="#"
                        aria-label="Open"
                        className="flex h-[48px] w-[48px] items-center justify-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="48"
                          height="48"
                          viewBox="0 0 48 48"
                          fill="none"
                        >
                          <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="#EDE8EB" />
                          <path
                            d="M31.9761 19.1803C32.0758 18.6371 31.7162 18.1159 31.173 18.0163L22.3207 16.3923C21.7775 16.2926 21.2564 16.6522 21.1567 17.1954C21.057 17.7387 21.4166 18.2598 21.9598 18.3595L29.8285 19.803L28.385 27.6717C28.2853 28.2149 28.6449 28.7361 29.1881 28.8357C29.7314 28.9354 30.2525 28.5758 30.3522 28.0326L31.9761 19.1803ZM17 28.6543L17.5679 29.4774L31.5605 19.8229L30.9926 18.9998L30.4246 18.1768L16.4321 27.8312L17 28.6543Z"
                            fill="#EDE8EB"
                          />
                        </svg>
                      </a>
                    </div>
                  </motion.div>
                </div>
              </WobbleOnHover>
            ))}
          </Stagger>
        </div>
      </div>

      {/* Scoped helper: downscale fixed 566px cards on narrow screens (no change to inner styles) */}
      <style jsx>{`
        .user-card-scale {
          --uscale: 1;
          transform: scale(var(--uscale));
          transform-origin: center;
          will-change: transform;
        }
        /* For very narrow screens, scale each 566px card to fit viewport minus side padding (~48px) */
        @media (max-width: 640px) {
          .user-card-scale { --uscale: calc(min(1, (100vw - 48px) / 566)); }
        }
        /* Slight bump for medium tablets if needed */
        @media (min-width: 641px) and (max-width: 1023px) {
          .user-card-scale { --uscale: calc(min(1, (100vw - 96px) / 566)); }
        }
      `}</style>
    </section>
  )
}

'use client'

import React, { useEffect } from 'react'
import { motion, Variants } from 'framer-motion'
import { Reveal, AnimatedButton } from './animations'
import { Urbanist, Inter } from 'next/font/google'

const urbanist = Urbanist({ subsets: ['latin'], weight: ['200', '500', '700'] })
const inter = Inter({ subsets: ['latin'], weight: ['600', '700'] })

/* ===== Framer Variants ===== */
const columnStagger: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { ease: 'easeOut', duration: 0.36, staggerChildren: 0.08 }
  }
}
const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { ease: 'easeOut', duration: 0.32 } }
}

const statsStagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } }
}
const stat: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.28 } }
}

/* CTA hover group: children switch between `rest` and `hover` */
const ctaWrapper: Variants = {}
const ctaButton: Variants = {
  rest: { scale: 1, x: 0 },
  hover: { scale: 1.015, x: 4, transition: { type: 'spring', stiffness: 260, damping: 20 } }
}
const ctaCircle: Variants = {
  rest: { x: 0, scale: 1, boxShadow: '0 0 0 rgba(0,0,0,0)' },
  hover: { x: 6, scale: 1.06, boxShadow: '0 8px 24px rgba(80,34,60,0.25)' }
}
const ctaIcon: Variants = {
  rest: { rotate: 0 },
  hover: { rotate: 35 }
}

export default function HeroSection() {
  // keyboard scroll support
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth' })
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-20 lg:pt-20 lg:pb-24">
      {/* ===== Slanted grid background (slow drift) ===== */}
      <motion.div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: "url('/images/hero-bg-grid.png')",
          backgroundRepeat: 'repeat',
          backgroundSize: 'cover',
          transform: 'rotate(-5deg) scale(1.2)'
        }}
        animate={{ x: [0, -12, 0], y: [0, -8, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 mx-auto max-w-[1280px] px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* ============= LEFT ============= */}
          <motion.div
            className="max-w-none"
            variants={columnStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.2, once: false }}
          >
            {/* Pill Tag */}
            <motion.div variants={item}>
              <Reveal once={false}>
                <div className="inline-flex items-center gap-2 rounded-full border border-gray-200/80 bg-white/70 px-4 py-2 shadow-sm backdrop-blur-sm">
                  <div className="h-2 w-2 rounded-full bg-[#FC573B]" />
                  <span className="text-[13px] font-medium text-gray-700">
                    All in one Legal-Tech Platform
                  </span>
                </div>
              </Reveal>
            </motion.div>

            {/* Heading */}
            <motion.div className="mt-8 w-full max-w-[569px]" variants={item}>
              <Reveal
                once={false}
                as="h1"
                className={`${urbanist.className} text-[48px] leading-[60px] tracking-tight text-[#11060C] font-extralight`}
              >
                Manage Your Legal Journey
                <br />
                <span className="font-bold">Anywhere, Anytime</span>
              </Reveal>
            </motion.div>

            {/* Paragraph */}
            <motion.div variants={item}>
              <Reveal once={false}>
                <p
                  className={`${urbanist.className} mt-4 w-full max-w-[569px] text-[20px] leading-[32px] text-[#11060C]/80`}
                >
                  Whether you're a lawyer, litigant, clerk, or student –{' '}
                  <span className="font-bold text-[#11060C]/80">Court Click</span> simplifies every
                  step of your legal process.
                </p>
              </Reveal>
            </motion.div>

            {/* CTA Buttons (animated group hover) */}
            <motion.div className="mt-10 w-full max-w-[241px]" variants={item}>
              <motion.div
                className="flex items-center gap-2"
                initial="rest"
                whileHover="hover"
                animate="rest"
                variants={ctaWrapper}
              >
                <motion.div variants={ctaButton}>
                  <AnimatedButton
                    className={`${inter.className} flex h-[48px] w-[185px] items-center justify-center rounded-[24px] border border-[#50223C] bg-transparent px-[12px] py-[8px] font-bold text-[#50223C] transition-all hover:bg-[#50223C] hover:text-white`}
                  >
                    <span className="text-[14px] leading-none">Download Our App</span>
                  </AnimatedButton>
                </motion.div>

                <motion.div
                  className="flex h-[48px] w-[48px] items-center justify-center rounded-full border border-[#50223C] bg-white"
                  variants={ctaCircle}
                  transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                >
                  <motion.svg
                    className="h-4 w-4 text-[#50223C]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    variants={ctaIcon}
                    transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </motion.svg>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Stats Section (staggered) */}
            <motion.div
              variants={statsStagger}
              initial="hidden"
              whileInView="show"
              viewport={{ amount: 0.15, once: false }}
              className="relative mt-12 flex h-[71px] w-full max-w-[515px] items-start gap-[32px]"
            >
              {/* Col 1 */}
              <motion.div variants={stat} className="flex h-[71px] w-[98px] flex-col items-center gap-[12px]">
                <div className={`${inter.className} w-[77px] text-center text-[32px] font-semibold leading-none text-[#50223C]`}>
                  15K+
                </div>
                <div className={`${urbanist.className} w-[98px] text-center text-[13px] font-semibold leading-none text-[#555]`}>
                  Total Downloads
                </div>
              </motion.div>

     
              {/* Col 2 */}
              <motion.div variants={stat} className="mt-[3.5px] flex h-[64px] w-[194px] flex-col items-center gap-[9px]">
                <div className={`${inter.className} w-[60px] text-center text-[32px] font-semibold leading-none text-[#50223C]`}>
                  2K+
                </div>
                <div className={`${urbanist.className} w-[194px] text-center text-[13px] font-semibold leading-none text-[#555]`}>
                  Trusted by Lawyers and Litigants
                </div>
              </motion.div>

             

              {/* Col 3 */}
              <motion.div variants={stat} className="mt-[3.5px] flex h-[64px] w-[95px] flex-col items-center gap-[9px]">
                <div className={`${inter.className} w-[98px] text-center text-[32px] font-semibold leading-none text-[#50223C]`}>
                  4.7 / 5
                </div>
                <div className={`${urbanist.className} w-[95px] text-center text-[13px] font-semibold leading-none text-[#555]`}>
                  Review Ratings
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* ============= RIGHT (Phone Mockup + Floating Cards) ============= */}
          <div
            className="relative mx-auto flex items-center justify-center"
            style={{ width: '100%', maxWidth: '1065px', aspectRatio: '1065 / 720' }}
          >
            {/* Phone Mockup (gentle float) */}
            <Reveal once={false} amount={0.1} className="absolute inset-0 z-10 flex justify-center">
              <motion.div
                className="h-full w-full bg-contain bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/images/hero-phone-mockup.png')" }}
                aria-label="Court Click App mockup"
                role="img"
                animate={{ y: [0, -8, 0], rotateZ: [0, -0.4, 0.4, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
              />
            </Reveal>

            {/* Top Left — 15K+ Active Users */}
            <motion.div
              className="absolute top-[80px] left-[600px] lg:left-[70px] z-[300] flex items-center gap-3 px-3"
              style={{
                width: '145.225px',
                height: '53.366px',
                flexShrink: 0,
                borderRadius: '13.998px',
                background:
                  'linear-gradient(90deg, rgba(214, 114, 82, 0.76) 0%, rgba(163, 81, 127, 0.76) 100%)'
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.07, y: -5, boxShadow: '0 16px 50px rgba(214,114,82,0.35)' }}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 0.25, ease: 'easeOut', repeatDelay: 1.2 }}
            >
              <img src="/images/hero-top-left.svg" alt="Active users icon" style={{ width: '47.254px', height: '31.494px', flexShrink: 0 }} />
              <div>
                <div style={{ color: '#EDE8EB', fontFamily: 'Urbanist', fontSize: '12.248px', fontWeight: 700, lineHeight: '27.995px' }}>
                  15K+
                </div>
                <div style={{ color: '#EDE8EB', fontFamily: 'Inter', fontSize: '9.623px', fontWeight: 400, lineHeight: '13.998px' }}>
                  Active users
                </div>
              </div>
            </motion.div>

            {/* Top Right — Automated Cause List */}
            <motion.div
              className="absolute top-[60px] right-[-30px] lg:right-[-10px] z-20 flex items-center gap-2 px-3"
              style={{
                width: '167px',
                height: '48.742px',
                flexShrink: 0,
                borderRadius: '12.785px',
                background:
                  'linear-gradient(90deg, rgba(81, 17, 49, 0.76) -124.25%, rgba(44, 21, 49, 0.76) 104.48%)'
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.08, y: -5, boxShadow: '0 22px 60px rgba(81,17,49,0.4)' }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 0.25, ease: 'easeOut', repeatDelay: 1.0 }}
            >
              <img src="/images/hero-top-right.svg" alt="Automated Cause List icon" style={{ width: '23.172px', height: '23.172px', flexShrink: 0 }} />
              <div>
                <div style={{ color: '#EDE8EB', fontFamily: 'Urbanist', fontSize: '11.187px', fontWeight: 700, lineHeight: '25.569px' }}>
                  Automated Cause List
                </div>
                <div style={{ color: '#EDE8EB', fontFamily: 'Inter', fontSize: '8.789px', fontWeight: 400, lineHeight: '12.785px' }}>
                  No more manual checking
                </div>
              </div>
            </motion.div>

        {/* Bottom Left — Real-Time Alerts */}
<motion.div
  className="absolute bottom-[10px] left-[-60px] lg:left-[25px] z-20 flex items-center gap-3 px-4 py-3"
  style={{
    width: '193px',
    height: '54.505px',
    flexShrink: 0,
    borderRadius: '14.296px',
    background:
      'linear-gradient(90deg, rgba(80, 34, 60, 0.76) 0%, rgba(109, 80, 116, 0.76) 100%)'
  }}
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  whileHover={{ scale: 1.07, y: -5, boxShadow: '0 22px 60px rgba(80,34,60,0.35)' }}
  animate={{ y: [0, -7, 0] }}
  transition={{ duration: 0.25, ease: 'easeOut', repeatDelay: 1.1 }}
>
  <div 
    style={{ 
      width: '25.912px', 
      height: '25.912px', 
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '6px',
      backgroundColor: 'rgba(237, 232, 235, 0.9)'
    }}
  >
    <img 
      src="/images/hero-bottom-left.svg" 
      alt="Real-Time Alerts icon" 
      style={{ width: '16px', height: '16px' }} 
    />
  </div>
  <div style={{ flex: 1, minWidth: 0 }}>
    <div style={{ 
      color: '#EDE8EB', 
      fontFamily: 'Urbanist', 
      fontSize: '12.509px', 
      fontWeight: 700, 
      lineHeight: '16px',
      whiteSpace: 'nowrap'
    }}>
      Real-Time Alerts
    </div>
    <div style={{ 
      color: '#EDE8EB', 
      fontFamily: 'Inter', 
      fontSize: '9.829px', 
      fontWeight: 400, 
      lineHeight: '13px',
      marginTop: '2px'
    }}>
      Just real-time legal updates.
    </div>
  </div>
</motion.div>



            {/* Bottom Right — Billing for Lawyers */}
            <motion.div
              className="absolute bottom-[60px] right-[-80px] lg:right-[-60px] z-20 flex items-center gap-2 px-3"
              style={{
                width: '225.902px',
                height: '53px',
                flexShrink: 0,
                borderRadius: '13.902px',
                background:
                  'linear-gradient(90deg, rgba(142, 39, 98, 0.80) 0%, rgba(0, 0, 0, 0.80) 100%)'
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.07, y: -5, boxShadow: '0 22px 60px rgba(142,39,98,0.35)' }}
              animate={{ y: [0, -9, 0] }}
              transition={{ duration: 0.25, ease: 'easeOut', repeatDelay: 1.2 }}
            >
              <img src="/images/hero-bottom-right.svg" alt="Billing for Lawyers icon" style={{ width: '25.197px', height: '25.197px', flexShrink: 0 }} />
              <div>
                <div style={{ color: '#EDE8EB', fontFamily: 'Urbanist', fontSize: '12.164px', fontWeight: 700, lineHeight: '27.803px' }}>
                  Billing for Lawyers
                </div>
                <div style={{ color: '#EDE8EB', fontFamily: 'Inter', fontSize: '9.557px', fontWeight: 400, lineHeight: '13.902px' }}>
                  professional bills with just a few taps
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

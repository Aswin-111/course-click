'use client'

import Link from 'next/link'

export default function Navigation() {
  return (
    <nav
      className="w-full"
      style={{
        // Gradient from the XML (Frame fill)
        backgroundImage:
          'linear-gradient(180deg, #511131 0%, #2C1531 100%)',
        opacity: 0.95,
      }}
    >
      {/* Frame width is 1440 with 80px side padding and 24px vertical padding */}
      <div className="mx-auto max-w-[1440px] px-20 py-6">
        {/* Inner row: width 1280, 48px tall, center-aligned */}
        <div className="mx-auto flex h-12 w-full max-w-[1280px] items-center justify-between">
          {/* Left: logo 169x26 */}
          <div className="flex items-center">
            <img
              src="/images/icons/logo.svg"
              alt="Court Click"
              width={169}
              height={26}
              className="block h-[26px] w-[169px]"
            />
          </div>

          {/* Middle: nav links (gap 24px, font Urbanist Bold 16, color #EDE8EB) */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="#about"
              className="font-urbanist font-bold text-[16px] leading-[19px] text-[#EDE8EB]"
            >
              About
            </Link>
            <Link
              href="#features"
              className="font-urbanist font-bold text-[16px] leading-[19px] text-[#EDE8EB]"
            >
              Features
            </Link>
            <Link
              href="#user-types"
              className="font-urbanist font-bold text-[16px] leading-[19px] text-[#EDE8EB]"
            >
              User Types
            </Link>
            <Link
              href="#career"
              className="font-urbanist font-bold text-[16px] leading-[19px] text-[#EDE8EB]"
            >
              Career
            </Link>
            <Link
              href="#notraise-document"
              className="font-urbanist font-bold text-[16px] leading-[19px] text-[#EDE8EB]"
            >
              Notraise Document
            </Link>
          </div>

          {/* Right: actions – spacing 16px, heights 48px, radii 24px */}
          <div className="flex items-center gap-4">
            {/* Contact Us: outlined pill, width 139, height 48 */}
            <button
              className="h-12 w-[139px] rounded-[24px] border border-white text-[#EDE8EB] font-inter font-bold text-[14px] leading-[17px]"
              type="button"
            >
              Contact Us
            </button>

            {/* Log In: filled pill, width 106, height 48, bg #F9F9F9, text #50223C */}
            <button
              className="h-12 w-[106px] rounded-[24px] bg-[#F9F9F9] text-[#50223C] font-inter font-bold text-[14px] leading-[17px]"
              type="button"
            >
              Log In
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

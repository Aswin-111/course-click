'use client'

export default function Footer() {
  return (
    <footer className="bg-[#150914] w-full">
      {/* Responsive wrapper for 1440px base layout */}
      <div className="footer-stage-wrapper">
        <div className="max-w-[1440px] mx-auto px-20 py-16 text-white">
          {/* --- Top Section --- */}
          <div className="flex justify-between items-start mb-12 flex-wrap gap-8">
            {/* Brand + Info */}
            <div className="space-y-5 min-w-[250px]">
              {/* Logo */}
              <div className="w-[169px] h-[26px]">
                <img
                  src="/images/logo.svg"
                  alt="Court Click Logo"
                  className="w-full h-full"
                />
              </div>

              {/* Company Info */}
              <p className="font-inter text-[16px] leading-[21px] font-medium text-white">
                Digilaw Legal Software Pvt Ltd.
                <br />
                Doing Business as Court Click
              </p>

              <div className="text-white font-inter text-[16px] font-medium leading-[21px] space-y-[6px]">
                <p>support@courtclick.com</p>
                <p>+91 9746214172</p>
                <p>GSTIN-32AAKCD6651P1Z6</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-urbanist font-bold text-[18px] leading-[28px] mb-[12px]">
                Quick Links
              </h3>
              <ul className="space-y-[14px] text-white font-inter text-[16px] leading-[28px] font-medium">
                <li>Features</li>
                <li>User Types</li>
                <li>Pricing</li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-urbanist font-bold text-[18px] leading-[28px] mb-[12px]">
                Legal
              </h3>
              <ul className="space-y-[14px] text-white font-inter text-[16px] leading-[28px] font-medium">
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Refund Policy</li>
                <li>Cookie Policy</li>
              </ul>
            </div>

            {/* Informations */}
            <div>
              <h3 className="font-urbanist font-bold text-[18px] leading-[28px] mb-[12px]">
                Informations
              </h3>
              <ul className="space-y-[14px] text-white font-inter text-[16px] leading-[28px] font-medium">
                <li>FAQ</li>
                <li>Support</li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-urbanist font-bold text-[18px] leading-[28px] mb-[12px]">
                Company
              </h3>
              <ul className="space-y-[14px] text-white font-inter text-[16px] leading-[28px] font-medium">
                <li>About Us</li>
                <li>Career</li>
                <li>Contact Us</li>
              </ul>
            </div>

            {/* Download App Card */}
            <div className="w-[215px] h-[166px] rounded-[19px] bg-[#D9D9D9]/10 flex flex-col items-center justify-center">
              <p className="font-urbanist font-medium text-[14px] leading-[28px] text-white mb-3">
                Download Our App
              </p>
              <div className="flex flex-col gap-3 items-center">
                <img
                  src="/images/icons/appstore.svg"
                  alt="Download on the App Store"
                  className="h-[40px] w-auto"
                />
                <img
                  src="/images/icons/playstore.svg"
                  alt="Get it on Google Play"
                  className="h-[40px] w-auto"
                />
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/20 my-8" />

          {/* Bottom Section */}
          <div className="flex justify-between items-center flex-wrap gap-6">
            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-[35px] h-[35px] flex items-center justify-center transition-all hover:opacity-80"
              >
                <img
                  src="/images/linkedin.svg"
                  alt="LinkedIn Icon"
                  className="w-[35px] h-[35px]"
                />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-[35px] h-[35px] flex items-center justify-center transition-all hover:opacity-80"
              >
                <img
                  src="/images/facebook.svg"
                  alt="Facebook Icon"
                  className="w-[35px] h-[35px]"
                />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-[35px] h-[35px] flex items-center justify-center transition-all hover:opacity-80"
              >
                <img
                  src="/images/instagram.svg"
                  alt="Instagram Icon"
                  className="w-[35px] h-[35px]"
                />
              </a>
            </div>

            {/* Center Text */}
            <p className="font-urbanist text-[18px] leading-[28px] font-normal text-white text-center">
              A product of <span className="font-bold">Digilaw</span>
            </p>

            {/* Copyright */}
            <p className="font-inter text-[16px] leading-[21px] font-medium text-white text-center">
              © 2025 Court Click. All rights reserved
            </p>
          </div>
        </div>
      </div>

      {/* Scoped responsive scaling (no style conflicts) */}
      <style jsx>{`
        .footer-stage-wrapper {
          --footer-scale: clamp(0.7, min(100vw / 1440, 100vh / 940), 1.4);
          display: flex;
          justify-content: center;
          transform: scale(var(--footer-scale));
          transform-origin: top center;
          will-change: transform;
        }

        @media (max-width: 1024px) {
          .footer-stage-wrapper {
            --footer-scale: clamp(0.8, 100vw / 1440, 1);
          }
        }
        @media (min-width: 1920px) {
          .footer-stage-wrapper {
            --footer-scale: clamp(1, 100vw / 1440, 1.4);
          }
        }
      `}</style>
    </footer>
  )
}

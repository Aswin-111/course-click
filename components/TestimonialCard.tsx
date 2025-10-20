'use client'
import QuoteIcon from './icons/QuoteIcon'

interface TestimonialCardProps {
  name: string
  title: string
  testimonial: string
  rating: number
  image?: string
}

export default function TestimonialCard({ name, title, testimonial, rating, image }: TestimonialCardProps) {
  return (
    <div className="bg-[rgba(110,87,115,0.08)] rounded-2xl p-6 hover:bg-[rgba(110,87,115,0.12)] transition-colors duration-300">
      {/* Quote Icon */}
      <div className="mb-4">
      <QuoteIcon width={29} height={22} color="#1f0d19" />
      </div>

      {/* Testimonial Text */}
      <p className="text-[#555555] text-sm leading-[14px] mb-8">
        {testimonial}
      </p>

      {/* Profile Section */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-xl bg-gray-200 overflow-hidden flex-shrink-0">
            {image ? (
              <img 
                src={image} 
                alt={name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  if (target.parentElement) {
                    target.parentElement.innerHTML = `<div class="w-full h-full bg-gradient-to-br from-[#D67252] to-[#50223C] flex items-center justify-center text-white font-bold text-sm">${name.charAt(0)}</div>`;
                  }
                }}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[#D67252] to-[#50223C] flex items-center justify-center text-white font-bold text-sm">
                {name.charAt(0)}
              </div>
            )}
          </div>
          <div>
            <h4 className="font-bold text-[#11060C] text-[9px]">{name}</h4>
            <p className="text-[7px] text-[#555555]">{title}</p>
          </div>
        </div>

        {/* Star Rating */}
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              className={`w-4 h-4 ${index < rating ? 'text-[#D67252] fill-current' : 'text-gray-300'}`}
              viewBox="0 0 26 26"
            >
              <path d="M13 0L15.9187 9.32827H25.3637L17.7225 15.0935L20.6412 24.4217L13 18.6565L5.35879 24.4217L8.27747 15.0935L0.636266 9.32827H10.0813L13 0Z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  )
}


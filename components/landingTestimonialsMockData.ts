// Mock data for landing page testimonials section

export interface TestimonialType {
  id: number;
  quote: string;
  name: string;
  title: string;
  avatar: string;
  rating: number;
}

export interface StatType {
  value: string;
  label: string;
}

// Data passed as props to the root component
export const mockRootProps = {
  testimonials: [
    {
      id: 1,
      quote: "Court Click has completely changed the way I manage my practice. I no longer have to juggle between different tools-everything is right there in one dashboard. It saves me hours every week and keeps my cases well-organized.",
      name: "Adv. Arun Menon",
      title: "Lawyer at Kerala High Court",
      avatar: "/images/testimonials/avatar-arun-menon.jpg",
      rating: 5
    },
    {
      id: 2,
      quote: "Court Click has completely changed the way I manage my practice. I no longer have to juggle between different tools-everything is right there in one dashboard. It saves me hours every week and keeps my cases well-organized.",
      name: "Neha Suresh",
      title: "Public Litigant, Kerala(Kochi)",
      avatar: "/images/testimonials/avatar-neha-suresh.jpg",
      rating: 5
    },
    {
      id: 3,
      quote: "Court Click has completely changed the way I manage my practice. I no longer have to juggle between different tools-everything is right there in one dashboard. It saves me hours every week and keeps my cases well-organized.",
      name: "Adv. Arun Menon",
      title: "Lawyer at Kerala High Court",
      avatar: "/images/testimonials/avatar-arun-menon.jpg",
      rating: 5
    }
  ],
  stats: [
    {
      value: "10K+",
      label: "Total Downloads"
    },
    {
      value: "2K+",
      label: "Trusted by Lawyers and Litigants"
    },
    {
      value: "4.7 / 5",
      label: "Review Ratings"
    }
  ]
}
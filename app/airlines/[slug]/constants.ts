export interface AirlineData {
  name: string;
  code: string;
  description: string;
  hub: string;
  founded: string;
  fleet: string;
  destinations: string;
  alliance?: string;
  website?: string;
  rating?: number;
  reviews?: number;
  highlights?: string[];
  phoneNumber: string;
  email?: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export const airlinesData: Record<string, AirlineData> = {
  "all-airlines": {
    name: "All Airlines",
    code: "ALL",
    description: "CheapFlightsSolution works with all major airlines to bring you the best deals and cheapest fares. Whether you're flying domestically or internationally, we help you find the most affordable options for your travel needs.",
    hub: "Worldwide",
    founded: "2024",
    fleet: "All Airlines",
    destinations: "Worldwide",
    alliance: "All Alliances",
    website: "https://www.cheapflightsolution.com",
    rating: 4.5,
    reviews: 1500,
    highlights: ["Best Price Guarantee", "24/7 Support", "Easy Booking", "Flexible Options", "Worldwide Coverage"],
    phoneNumber: "18338409465",
    email: "support@cheapflightsolution.com",
    faqs: [
      {
        question: "How do I change my flight booking?",
        answer: "You can change your flight booking by calling our customer service at +1-833-840-9465. Our agents will assist you with your flight change requests and help you find the best available options."
      },
      {
        question: "What is the cancellation policy?",
        answer: "Cancellation policies vary by airline and fare type. We recommend checking the specific airline's policy at the time of booking. Our agents can help you understand your options if you need to cancel."
      },
      {
        question: "Can I reschedule my flight without penalty?",
        answer: "Rescheduling options depend on the airline and fare type. Some airlines offer free changes, while others may charge a fee. Contact us at +1-833-840-9465 and we'll help you find the most cost-effective rescheduling option."
      },
      {
        question: "How do I correct a name error on my ticket?",
        answer: "Name corrections can be made by contacting our support team at +1-833-840-9465. Minor name changes are typically allowed within 24 hours of booking. Our agents will guide you through the process."
      },
      {
        question: "What fees apply for changing my flight?",
        answer: "Change fees vary by airline, route, and fare type. Some airlines offer free changes, while others may charge a fee. Contact us at +1-833-840-9465 for specific information about your booking."
      },
      {
        question: "How do I get a refund?",
        answer: "To request a refund, contact our customer service team at +1-833-840-9465. Refunds are processed based on the airline's policy and the fare type you booked. We'll assist you throughout the process."
      },
      {
        question: "Can I change my flight online?",
        answer: "Yes, you can change your flight online through our website. However, for complex changes or to ensure the best options, we recommend calling us at +1-833-840-9465 for personalized assistance."
      },
      {
        question: "What happens if my flight is canceled?",
        answer: "If your flight is canceled by the airline, you are entitled to a full refund or rebooking at no additional cost. Contact us at +1-833-840-9465 and we'll help you make alternative arrangements."
      }
    ]
  }
};

// Helper function to get airline by slug
export const getAirlineBySlug = (slug: string): AirlineData | undefined => {
  return airlinesData[slug];
};

// Get all airline slugs
export const getAirlineSlugs = (): string[] => {
  return Object.keys(airlinesData);
};

// Get all airlines
export const getAllAirlines = (): AirlineData[] => {
  return Object.values(airlinesData);
};
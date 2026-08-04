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
  "qantas-airlines": {
    name: "Qantas Airlines",
    code: "QF",
    description: "Qantas is the flag carrier of Australia and one of the world's oldest airlines. Known for its exceptional safety record, modern fleet, and world-class service, it connects Australia to destinations across Oceania, Asia, the Americas, and Europe.",
    hub: "Sydney Kingsford Smith Airport (SYD)",
    founded: "1920",
    fleet: "120+",
    destinations: "100+",
    alliance: "oneworld",
    website: "https://www.qantas.com",
    rating: 4.7,
    reviews: 2400,
    highlights: ["Business Class", "Premium Economy", "Qantas Club", "Qantas Frequent Flyer", "World-Class Safety"],
    phoneNumber: "18882375808",
    email: "support@qantas.com",
    faqs: [
      {
        question: "How do I change my Qantas flight?",
        answer: "You can change your Qantas flight online through the 'Manage Booking' section on their website. Enter your booking reference and last name to access your reservation. You can also call Qantas customer service at +1-888-237-5808 for assistance with changes."
      },
      {
        question: "What is the Qantas cancellation policy?",
        answer: "Qantas cancellation policy varies by fare type. Fully refundable tickets are eligible for a full refund. Non-refundable tickets may receive a travel credit for future travel. Cancellations made within 24 hours of booking are eligible for a full refund regardless of fare type."
      },
      {
        question: "Can I reschedule my Qantas flight without penalty?",
        answer: "Qantas offers flexible rescheduling options. Business and First Class tickets typically have no change fees. Premium Economy and Economy tickets may have change fees depending on the fare type. Qantas Frequent Flyer elite members may receive complimentary changes."
      },
      {
        question: "How do I correct a name error on my Qantas ticket?",
        answer: "Minor name corrections can be made on Qantas tickets. Contact Qantas customer service at +1-888-237-5808 for name correction assistance. Changes within 24 hours of booking are typically free."
      },
      {
        question: "What fees apply for changing my Qantas flight?",
        answer: "Qantas change fees vary by fare type, route, and timing. Business and First Class tickets typically have no change fees. Economy tickets may have fees depending on the fare rules."
      },
      {
        question: "How do I get a refund from Qantas?",
        answer: "To request a refund from Qantas, visit the 'Manage Booking' section on their website or call customer service at +1-888-237-5808. Refunds for eligible tickets are processed within 7-10 business days."
      },
      {
        question: "Can I change my Qantas flight online?",
        answer: "Yes, most Qantas flights can be changed online through the 'Manage Booking' portal on their website. You'll need your booking reference and last name."
      },
      {
        question: "What happens if Qantas cancels my flight?",
        answer: "If Qantas cancels your flight, you are entitled to a full refund or rebooking on the next available flight at no additional cost. You will be notified via email or text message."
      }
    ]
  },
  "air-new-zealand": {
    name: "Air New Zealand",
    code: "NZ",
    description: "Air New Zealand is the flag carrier of New Zealand, renowned for its innovative services, exceptional hospitality, and modern fleet. It connects Auckland to destinations across Oceania, Asia, the Americas, and Europe.",
    hub: "Auckland Airport (AKL)",
    founded: "1940",
    fleet: "100+",
    destinations: "50+",
    alliance: "Star Alliance",
    website: "https://www.airnewzealand.com",
    rating: 4.6,
    reviews: 1950,
    highlights: ["Business Premier", "Premium Economy", "Economy", "Airpoints", "Kiwi Hospitality"],
    phoneNumber: "18335806816",
    email: "support@airnewzealand.com",
    faqs: [
      {
        question: "How do I change my Air New Zealand flight?",
        answer: "You can change your Air New Zealand flight online through the 'Manage Booking' section on their website. Enter your booking reference and last name. You can also call Air New Zealand customer service at +1-833-580-6816 for assistance."
      },
      {
        question: "What is the Air New Zealand cancellation policy?",
        answer: "Air New Zealand cancellation policy varies by fare type. Fully refundable tickets get a full refund. Non-refundable tickets may receive a travel credit. Cancellations within 24 hours of booking are fully refundable."
      },
      {
        question: "Can I reschedule my Air New Zealand flight without penalty?",
        answer: "Air New Zealand offers free changes for Business Premier tickets. Premium Economy and Economy tickets may have change fees depending on the fare type. Airpoints members with elite status may receive complimentary changes."
      },
      {
        question: "How do I correct a name error on my Air New Zealand ticket?",
        answer: "Contact Air New Zealand customer service at +1-833-580-6816 for name correction assistance on your ticket. Minor name corrections can be made within 24 hours of booking."
      },
      {
        question: "What fees apply for changing my Air New Zealand flight?",
        answer: "Air New Zealand change fees vary by fare type. Business Premier tickets typically have no change fees. Economy tickets may have fees depending on the fare rules."
      },
      {
        question: "How do I get a refund from Air New Zealand?",
        answer: "To request a refund from Air New Zealand, visit the 'Manage Booking' section or call customer service at +1-833-580-6816."
      },
      {
        question: "Can I change my Air New Zealand flight online?",
        answer: "Yes, most Air New Zealand flights can be changed online through their website. You'll need your booking reference and last name."
      },
      {
        question: "What happens if Air New Zealand cancels my flight?",
        answer: "If Air New Zealand cancels your flight, you are entitled to a full refund or rebooking on the next available flight."
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
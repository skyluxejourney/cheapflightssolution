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
  "ethiopian-airlines": {
    name: "Ethiopian Airlines",
    code: "ET",
    description: "Ethiopian Airlines is the flag carrier of Ethiopia and one of the fastest-growing airlines in Africa. It connects Addis Ababa to over 125 destinations across Africa, Europe, Asia, and the Americas. Known for its modern fleet and exceptional service.",
    hub: "Addis Ababa Bole International Airport (ADD)",
    founded: "1945",
    fleet: "140+",
    destinations: "125+",
    alliance: "Star Alliance",
    website: "https://www.ethiopianairlines.com",
    rating: 4.5,
    reviews: 2100,
    highlights: ["Business Class", "Cloud Nine", "ShebaMiles", "Modern Fleet", "African Hospitality"],
    phoneNumber: "18554678570",
    email: "support@ethiopianairlines.com",
    faqs: [
      {
        question: "How do I change my Ethiopian Airlines flight?",
        answer: "You can change your Ethiopian Airlines flight online through the 'Manage Booking' section on their website. Enter your booking reference and last name to access your reservation. You can also call Ethiopian Airlines customer service at +1-855-467-8570 for assistance with changes."
      },
      {
        question: "What is the Ethiopian Airlines cancellation policy?",
        answer: "Ethiopian Airlines cancellation policy varies by fare type. Fully refundable tickets are eligible for a full refund. Non-refundable tickets may receive a travel credit for future travel. Cancellations made within 24 hours of booking are eligible for a full refund regardless of fare type."
      },
      {
        question: "Can I reschedule my Ethiopian Airlines flight without penalty?",
        answer: "Ethiopian Airlines offers flexible rescheduling options. Business Class tickets typically have no change fees. Economy tickets may have change fees depending on the fare type. ShebaMiles elite members may receive complimentary changes."
      },
      {
        question: "How do I correct a name error on my Ethiopian Airlines ticket?",
        answer: "Minor name corrections can be made on Ethiopian Airlines tickets. Contact Ethiopian Airlines customer service at +1-855-467-8570 for name correction assistance. Changes within 24 hours of booking are typically free."
      },
      {
        question: "What fees apply for changing my Ethiopian Airlines flight?",
        answer: "Ethiopian Airlines change fees vary by fare type, route, and timing. Business Class tickets typically have no change fees. Economy tickets may have fees depending on the fare rules."
      },
      {
        question: "How do I get a refund from Ethiopian Airlines?",
        answer: "To request a refund from Ethiopian Airlines, visit the 'Manage Booking' section on their website or call customer service at +1-855-467-8570. Refunds for eligible tickets are processed within 7-10 business days."
      },
      {
        question: "Can I change my Ethiopian Airlines flight online?",
        answer: "Yes, most Ethiopian Airlines flights can be changed online through the 'Manage Booking' portal on their website. You'll need your booking reference and last name."
      },
      {
        question: "What happens if Ethiopian Airlines cancels my flight?",
        answer: "If Ethiopian Airlines cancels your flight, you are entitled to a full refund or rebooking on the next available flight at no additional cost. You will be notified via email or text message."
      }
    ]
  },
  "egyptair": {
    name: "EgyptAir",
    code: "MS",
    description: "EgyptAir is the flag carrier of Egypt, offering authentic Egyptian hospitality and connecting Cairo to destinations across Africa, the Middle East, Europe, Asia, and the Americas. Known for its rich history and reliable service.",
    hub: "Cairo International Airport (CAI)",
    founded: "1932",
    fleet: "70+",
    destinations: "80+",
    alliance: "Star Alliance",
    website: "https://www.egyptair.com",
    rating: 4.2,
    reviews: 1650,
    highlights: ["Business Class", "Premium Economy", "EgyptAir Plus", "Egyptian Hospitality", "Historical Routes"],
    phoneNumber: "18889101589",
    email: "support@egyptair.com",
    faqs: [
      {
        question: "How do I change my EgyptAir flight?",
        answer: "You can change your EgyptAir flight online through the 'Manage Booking' section on their website. Enter your booking reference and last name. You can also call EgyptAir customer service at +1-888-910-1589 for assistance."
      },
      {
        question: "What is the EgyptAir cancellation policy?",
        answer: "EgyptAir cancellation policy varies by fare type. Fully refundable tickets get a full refund. Non-refundable tickets may receive a travel credit. Cancellations within 24 hours of booking are fully refundable."
      },
      {
        question: "Can I reschedule my EgyptAir flight without penalty?",
        answer: "EgyptAir offers free changes for Business Class tickets. Economy tickets may have change fees depending on the fare type. EgyptAir Plus members with elite status may receive complimentary changes."
      },
      {
        question: "How do I correct a name error on my EgyptAir ticket?",
        answer: "Contact EgyptAir customer service at +1-888-910-1589 for name correction assistance on your ticket. Minor name corrections can be made within 24 hours of booking."
      },
      {
        question: "What fees apply for changing my EgyptAir flight?",
        answer: "EgyptAir change fees vary by fare type. Business Class tickets typically have no change fees. Economy tickets may have fees depending on the fare rules."
      },
      {
        question: "How do I get a refund from EgyptAir?",
        answer: "To request a refund from EgyptAir, visit the 'Manage Booking' section or call customer service at +1-888-910-1589."
      },
      {
        question: "Can I change my EgyptAir flight online?",
        answer: "Yes, most EgyptAir flights can be changed online through their website. You'll need your booking reference and last name."
      },
      {
        question: "What happens if EgyptAir cancels my flight?",
        answer: "If EgyptAir cancels your flight, you are entitled to a full refund or rebooking on the next available flight."
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
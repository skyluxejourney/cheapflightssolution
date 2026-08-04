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
  "singapore-airlines": {
    name: "Singapore Airlines",
    code: "SQ",
    description: "Singapore Airlines is the flag carrier of Singapore, renowned for its exceptional service, modern fleet, and world-class amenities. It is consistently rated as one of the best airlines in the world.",
    hub: "Singapore Changi Airport (SIN)",
    founded: "1947",
    fleet: "150+",
    destinations: "130+",
    alliance: "Star Alliance",
    website: "https://www.singaporeair.com",
    rating: 4.8,
    reviews: 2150,
    highlights: ["First Class Suites", "Business Class", "Premium Economy", "KrisFlyer", "Book the Cook"],
    phoneNumber: "18557546902",
    email: "support@singaporeair.com",
    faqs: [
      {
        question: "How do I change my Singapore Airlines flight?",
        answer: "You can change your Singapore Airlines flight online through the 'Manage Booking' section on their website. Enter your booking reference and last name to access your reservation. You can also call Singapore Airlines customer service at +1-855-754-6902 for assistance with changes."
      },
      {
        question: "What is the Singapore Airlines cancellation policy?",
        answer: "Singapore Airlines cancellation policy varies by fare type. Fully refundable tickets are eligible for a full refund. Non-refundable tickets may receive a travel credit for future travel. Cancellations made within 24 hours of booking are eligible for a full refund regardless of fare type."
      },
      {
        question: "Can I reschedule my Singapore Airlines flight without penalty?",
        answer: "Singapore Airlines offers flexible rescheduling options. Business and First Class tickets typically have no change fees. Premium Economy and Economy tickets may have change fees depending on the fare type. KrisFlyer elite members may receive complimentary changes."
      },
      {
        question: "How do I correct a name error on my Singapore Airlines ticket?",
        answer: "Minor name corrections can be made on Singapore Airlines tickets. Contact Singapore Airlines customer service at +1-855-754-6902 for name correction assistance. Changes within 24 hours of booking are typically free."
      },
      {
        question: "What fees apply for changing my Singapore Airlines flight?",
        answer: "Singapore Airlines change fees vary by fare type, route, and timing. Business and First Class tickets typically have no change fees. Economy tickets may have fees depending on the fare rules."
      },
      {
        question: "How do I get a refund from Singapore Airlines?",
        answer: "To request a refund from Singapore Airlines, visit the 'Manage Booking' section on their website or call customer service at +1-855-754-6902. Refunds for eligible tickets are processed within 7-10 business days."
      },
      {
        question: "Can I change my Singapore Airlines flight online?",
        answer: "Yes, most Singapore Airlines flights can be changed online through the 'Manage Booking' portal on their website. You'll need your booking reference and last name."
      },
      {
        question: "What happens if Singapore Airlines cancels my flight?",
        answer: "If Singapore Airlines cancels your flight, you are entitled to a full refund or rebooking on the next available flight at no additional cost. You will be notified via email or text message."
      }
    ]
  },
  "cathay-pacific": {
    name: "Cathay Pacific",
    code: "CX",
    description: "Cathay Pacific is the flag carrier of Hong Kong, offering premium services and extensive connections across Asia, Europe, and North America. Known for exceptional hospitality and modern aircraft.",
    hub: "Hong Kong International Airport (HKG)",
    founded: "1946",
    fleet: "150+",
    destinations: "90+",
    alliance: "oneworld",
    website: "https://www.cathaypacific.com",
    rating: 4.7,
    reviews: 1870,
    highlights: ["First Class", "Business Class", "Premium Economy", "Marco Polo Club", "Asia Miles"],
    phoneNumber: "18882910137",
    email: "support@cathaypacific.com",
    faqs: [
      {
        question: "How do I change my Cathay Pacific flight?",
        answer: "You can change your Cathay Pacific flight online through the 'Manage Booking' section on their website. Enter your booking reference and last name. You can also call Cathay Pacific customer service at +1-888-291-0137 for assistance."
      },
      {
        question: "What is the Cathay Pacific cancellation policy?",
        answer: "Cathay Pacific cancellation policy varies by fare type. Fully refundable tickets get a full refund. Non-refundable tickets may receive a travel credit. Cancellations within 24 hours of booking are fully refundable."
      },
      {
        question: "Can I reschedule my Cathay Pacific flight without penalty?",
        answer: "Cathay Pacific offers free changes for First and Business Class tickets. Premium Economy and Economy tickets may have fees depending on the fare type. Marco Polo Club members with elite status may receive complimentary changes."
      },
      {
        question: "How do I correct a name error on my Cathay Pacific ticket?",
        answer: "Contact Cathay Pacific customer service at +1-888-291-0137 for name correction assistance on your ticket. Minor name corrections can be made within 24 hours of booking."
      },
      {
        question: "What fees apply for changing my Cathay Pacific flight?",
        answer: "Cathay Pacific change fees vary by fare type. First and Business Class tickets typically have no change fees. Economy tickets may have fees depending on the fare rules."
      },
      {
        question: "How do I get a refund from Cathay Pacific?",
        answer: "To request a refund from Cathay Pacific, visit the 'Manage Booking' section or call customer service at +1-888-291-0137."
      },
      {
        question: "Can I change my Cathay Pacific flight online?",
        answer: "Yes, most Cathay Pacific flights can be changed online through their website. You'll need your booking reference and last name."
      },
      {
        question: "What happens if Cathay Pacific cancels my flight?",
        answer: "If Cathay Pacific cancels your flight, you are entitled to a full refund or rebooking on the next available flight."
      }
    ]
  },
  "korean-air": {
    name: "Korean Air",
    code: "KE",
    description: "Korean Air is the flag carrier of South Korea, offering world-class service and extensive connections across Asia, Americas, and Europe. Known for its modern fleet and exceptional Korean hospitality.",
    hub: "Incheon International Airport (ICN)",
    founded: "1969",
    fleet: "160+",
    destinations: "120+",
    alliance: "SkyTeam",
    website: "https://www.koreanair.com",
    rating: 4.6,
    reviews: 1650,
    highlights: ["First Class", "Prestige Class", "Business Class", "SKYPASS", "Korean Hospitality"],
    phoneNumber: "18338397273",
    email: "support@koreanair.com",
    faqs: [
      {
        question: "How do I change my Korean Air flight?",
        answer: "You can change your Korean Air flight online through the 'Manage My Booking' section on their website. Enter your booking reference and last name. Call Korean Air customer service at +1-833-839-7273 for assistance."
      },
      {
        question: "What is the Korean Air cancellation policy?",
        answer: "Korean Air cancellation policy varies by fare type. Fully refundable tickets get a full refund. Non-refundable tickets may receive a travel credit. Cancellations within 24 hours of booking are fully refundable."
      },
      {
        question: "Can I reschedule my Korean Air flight without penalty?",
        answer: "Korean Air offers free changes for First and Prestige Class tickets. Economy tickets may have change fees depending on the fare type. SKYPASS members with elite status may receive complimentary changes."
      },
      {
        question: "How do I correct a name error on my Korean Air ticket?",
        answer: "Contact Korean Air customer service at +1-833-839-7273 for name correction assistance. Minor name corrections can be made within 24 hours of booking."
      },
      {
        question: "What fees apply for changing my Korean Air flight?",
        answer: "Korean Air change fees vary by fare type. First and Prestige Class tickets typically have no change fees. Economy tickets may have fees depending on the fare rules."
      },
      {
        question: "How do I get a refund from Korean Air?",
        answer: "To request a refund from Korean Air, visit the 'Manage My Booking' section or call customer service at +1-833-839-7273."
      },
      {
        question: "Can I change my Korean Air flight online?",
        answer: "Yes, most Korean Air flights can be changed online through their website. You'll need your booking reference and last name."
      },
      {
        question: "What happens if Korean Air cancels my flight?",
        answer: "If Korean Air cancels your flight, you are entitled to a full refund or rebooking on the next available flight."
      }
    ]
  },
  "philippine-airlines": {
    name: "Philippine Airlines",
    code: "PR",
    description: "Philippine Airlines is the flag carrier of the Philippines, offering warm Filipino hospitality and extensive connections across Asia, Americas, and the Pacific.",
    hub: "Ninoy Aquino International Airport (MNL)",
    founded: "1941",
    fleet: "70+",
    destinations: "60+",
    alliance: "None",
    website: "https://www.philippineairlines.com",
    rating: 4.4,
    reviews: 1250,
    highlights: ["Business Class", "Premium Economy", "Economy", "Mabuhay Miles", "Warm Filipino Service"],
    phoneNumber: "18664242536",
    email: "support@philippineairlines.com",
    faqs: [
      {
        question: "How do I change my Philippine Airlines flight?",
        answer: "You can change your Philippine Airlines flight online through the 'Manage Booking' section on their website. Enter your booking reference and last name. Call Philippine Airlines customer service at +1-866-424-2536 for assistance."
      },
      {
        question: "What is the Philippine Airlines cancellation policy?",
        answer: "Philippine Airlines cancellation policy varies by fare type. Fully refundable tickets get a full refund. Non-refundable tickets may receive a travel credit. Cancellations within 24 hours of booking are fully refundable."
      },
      {
        question: "Can I reschedule my Philippine Airlines flight without penalty?",
        answer: "Philippine Airlines offers free changes for Business Class tickets. Premium Economy and Economy tickets may have change fees depending on the fare type. Mabuhay Miles members may receive complimentary changes."
      },
      {
        question: "How do I correct a name error on my Philippine Airlines ticket?",
        answer: "Contact Philippine Airlines customer service at +1-866-424-2536 for name correction assistance. Minor name corrections can be made within 24 hours of booking."
      },
      {
        question: "What fees apply for changing my Philippine Airlines flight?",
        answer: "Philippine Airlines change fees vary by fare type. Business Class tickets typically have no change fees. Economy tickets may have fees depending on the fare rules."
      },
      {
        question: "How do I get a refund from Philippine Airlines?",
        answer: "To request a refund from Philippine Airlines, visit the 'Manage Booking' section or call customer service at +1-866-424-2536."
      },
      {
        question: "Can I change my Philippine Airlines flight online?",
        answer: "Yes, most Philippine Airlines flights can be changed online through their website. You'll need your booking reference and last name."
      },
      {
        question: "What happens if Philippine Airlines cancels my flight?",
        answer: "If Philippine Airlines cancels your flight, you are entitled to a full refund or rebooking on the next available flight."
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
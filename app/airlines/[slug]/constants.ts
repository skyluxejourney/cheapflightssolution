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
  "american-airlines": {
    name: "American Airlines",
    code: "AA",
    description: "American Airlines is one of the largest airlines in the world, offering extensive domestic and international routes across North America, Europe, Asia, and Latin America. Known for its reliable service and modern fleet.",
    hub: "Dallas/Fort Worth International Airport (DFW)",
    founded: "1930",
    fleet: "950+",
    destinations: "350+",
    alliance: "oneworld",
    website: "https://www.aa.com",
    rating: 4.4,
    reviews: 2500,
    highlights: ["Business Class", "Premium Economy", "Admirals Club", "AAdvantage", "Main Cabin Extra"],
    phoneNumber: "18556355220",
    email: "support@aa.com",
    faqs: [
      {
        question: "How do I change my American Airlines flight?",
        answer: "You can change your American Airlines flight online through the 'Manage Booking' section on their website. Enter your booking reference and last name to access your reservation. You can also call American Airlines customer service at +1-855-635-5220 for assistance with changes."
      },
      {
        question: "What is the American Airlines cancellation policy?",
        answer: "American Airlines cancellation policy varies by fare type. Fully refundable tickets are eligible for a full refund. Non-refundable tickets may receive a travel credit for future travel. Cancellations made within 24 hours of booking are eligible for a full refund regardless of fare type."
      },
      {
        question: "Can I reschedule my American Airlines flight without penalty?",
        answer: "American Airlines offers flexible rescheduling options. Business and First Class tickets typically have no change fees. Premium Economy and Economy tickets may have change fees depending on the fare type. AAdvantage elite members may receive complimentary changes."
      },
      {
        question: "How do I correct a name error on my American Airlines ticket?",
        answer: "Minor name corrections can be made on American Airlines tickets. Contact American Airlines customer service at +1-855-635-5220 for name correction assistance. Changes within 24 hours of booking are typically free."
      },
      {
        question: "What fees apply for changing my American Airlines flight?",
        answer: "American Airlines change fees vary by fare type, route, and timing. Business and First Class tickets typically have no change fees. Economy tickets may have fees depending on the fare rules."
      },
      {
        question: "How do I get a refund from American Airlines?",
        answer: "To request a refund from American Airlines, visit the 'Manage Booking' section on their website or call customer service at +1-855-635-5220. Refunds for eligible tickets are processed within 7-10 business days."
      },
      {
        question: "Can I change my American Airlines flight online?",
        answer: "Yes, most American Airlines flights can be changed online through the 'Manage Booking' portal on their website. You'll need your booking reference and last name."
      },
      {
        question: "What happens if American Airlines cancels my flight?",
        answer: "If American Airlines cancels your flight, you are entitled to a full refund or rebooking on the next available flight at no additional cost. You will be notified via email or text message."
      }
    ]
  },
  "united-airlines": {
    name: "United Airlines",
    code: "UA",
    description: "United Airlines is a major American airline with a extensive global network, connecting passengers to destinations across North America, Europe, Asia, and beyond. Known for its innovative services and modern fleet.",
    hub: "Chicago O'Hare International Airport (ORD)",
    founded: "1926",
    fleet: "800+",
    destinations: "340+",
    alliance: "Star Alliance",
    website: "https://www.united.com",
    rating: 4.3,
    reviews: 2300,
    highlights: ["Polaris Business Class", "Premium Plus", "United Clubs", "MileagePlus", "Economy Plus"],
    phoneNumber: "18556355220",
    email: "support@united.com",
    faqs: [
      {
        question: "How do I change my United Airlines flight?",
        answer: "You can change your United Airlines flight online through the 'Manage Booking' section on their website. Enter your booking reference and last name. You can also call United Airlines customer service at +1-855-635-5220 for assistance."
      },
      {
        question: "What is the United Airlines cancellation policy?",
        answer: "United Airlines cancellation policy varies by fare type. Fully refundable tickets get a full refund. Non-refundable tickets may receive a travel credit. Cancellations within 24 hours of booking are fully refundable."
      },
      {
        question: "Can I reschedule my United Airlines flight without penalty?",
        answer: "United Airlines offers free changes for Business and First Class tickets. Premium Economy and Economy tickets may have fees depending on the fare type. MileagePlus members with elite status may receive complimentary changes."
      },
      {
        question: "How do I correct a name error on my United Airlines ticket?",
        answer: "Contact United Airlines customer service at +1-855-635-5220 for name correction assistance on your ticket. Minor name corrections can be made within 24 hours of booking."
      },
      {
        question: "What fees apply for changing my United Airlines flight?",
        answer: "United Airlines change fees vary by fare type. Business and First Class tickets typically have no change fees. Economy tickets may have fees depending on the fare rules."
      },
      {
        question: "How do I get a refund from United Airlines?",
        answer: "To request a refund from United Airlines, visit the 'Manage Booking' section or call customer service at +1-855-635-5220."
      },
      {
        question: "Can I change my United Airlines flight online?",
        answer: "Yes, most United Airlines flights can be changed online through their website. You'll need your booking reference and last name."
      },
      {
        question: "What happens if United Airlines cancels my flight?",
        answer: "If United Airlines cancels your flight, you are entitled to a full refund or rebooking on the next available flight."
      }
    ]
  },
  "delta-airlines": {
    name: "Delta Airlines",
    code: "DL",
    description: "Delta Airlines is a premier American airline offering exceptional service and an extensive network across North America, Europe, Asia, and Latin America. Known for its reliability and customer satisfaction.",
    hub: "Hartsfield-Jackson Atlanta International Airport (ATL)",
    founded: "1924",
    fleet: "800+",
    destinations: "300+",
    alliance: "SkyTeam",
    website: "https://www.delta.com",
    rating: 4.5,
    reviews: 2700,
    highlights: ["Delta One", "Business Class", "Premium Select", "SkyMiles", "Delta Sky Club"],
    phoneNumber: "18669795016",
    email: "support@delta.com",
    faqs: [
      {
        question: "How do I change my Delta Airlines flight?",
        answer: "You can change your Delta Airlines flight online through the 'Manage Booking' section on their website. Enter your booking reference and last name. Call Delta Airlines customer service at +1-866-979-5016 for assistance."
      },
      {
        question: "What is the Delta Airlines cancellation policy?",
        answer: "Delta Airlines cancellation policy varies by fare type. Fully refundable tickets get a full refund. Non-refundable tickets may receive a travel credit. Cancellations within 24 hours of booking are fully refundable."
      },
      {
        question: "Can I reschedule my Delta Airlines flight without penalty?",
        answer: "Delta Airlines offers free changes for Delta One and Business Class tickets. Premium Economy and Economy tickets may have fees depending on the fare type. SkyMiles members with elite status may receive complimentary changes."
      },
      {
        question: "How do I correct a name error on my Delta Airlines ticket?",
        answer: "Contact Delta Airlines customer service at +1-866-979-5016 for name correction assistance. Minor name corrections can be made within 24 hours of booking."
      },
      {
        question: "What fees apply for changing my Delta Airlines flight?",
        answer: "Delta Airlines change fees vary by fare type. Delta One and Business Class tickets typically have no change fees. Economy tickets may have fees depending on the fare rules."
      },
      {
        question: "How do I get a refund from Delta Airlines?",
        answer: "To request a refund from Delta Airlines, visit the 'Manage Booking' section or call customer service at +1-866-979-5016."
      },
      {
        question: "Can I change my Delta Airlines flight online?",
        answer: "Yes, most Delta Airlines flights can be changed online through their website. You'll need your booking reference and last name."
      },
      {
        question: "What happens if Delta Airlines cancels my flight?",
        answer: "If Delta Airlines cancels your flight, you are entitled to a full refund or rebooking on the next available flight."
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
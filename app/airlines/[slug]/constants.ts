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
  "emirates": {
    name: "Emirates",
    code: "EK",
    description: "Emirates is the flag carrier of the United Arab Emirates, renowned for its luxurious services, modern fleet, and world-class amenities. It connects Dubai to over 150 destinations across six continents.",
    hub: "Dubai International Airport (DXB)",
    founded: "1985",
    fleet: "260+",
    destinations: "150+",
    alliance: "None",
    website: "https://www.emirates.com",
    rating: 4.9,
    reviews: 3200,
    highlights: ["First Class Suites", "Business Class", "Premium Economy", "Skywards", "Chauffeur Drive"],
    phoneNumber: "18557640399",
    email: "support@emirates.com",
    faqs: [
      {
        question: "How do I change my Emirates flight?",
        answer: "You can change your Emirates flight online through the 'Manage Booking' section on their website. Enter your booking reference and last name to access your reservation. You can also call Emirates customer service at +1-855-764-0399 for assistance with changes."
      },
      {
        question: "What is the Emirates cancellation policy?",
        answer: "Emirates cancellation policy varies by fare type. Fully refundable tickets are eligible for a full refund. Non-refundable tickets may receive a travel credit for future travel. Cancellations made within 24 hours of booking are eligible for a full refund regardless of fare type."
      },
      {
        question: "Can I reschedule my Emirates flight without penalty?",
        answer: "Emirates offers flexible rescheduling options. Business and First Class tickets typically have no change fees. Premium Economy and Economy tickets may have change fees depending on the fare type. Skywards elite members may receive complimentary changes."
      },
      {
        question: "How do I correct a name error on my Emirates ticket?",
        answer: "Minor name corrections can be made on Emirates tickets. Contact Emirates customer service at +1-855-764-0399 for name correction assistance. Changes within 24 hours of booking are typically free."
      },
      {
        question: "What fees apply for changing my Emirates flight?",
        answer: "Emirates change fees vary by fare type, route, and timing. Business and First Class tickets typically have no change fees. Economy tickets may have fees depending on the fare rules."
      },
      {
        question: "How do I get a refund from Emirates?",
        answer: "To request a refund from Emirates, visit the 'Manage Booking' section on their website or call customer service at +1-855-764-0399. Refunds for eligible tickets are processed within 7-10 business days."
      },
      {
        question: "Can I change my Emirates flight online?",
        answer: "Yes, most Emirates flights can be changed online through the 'Manage Booking' portal on their website. You'll need your booking reference and last name."
      },
      {
        question: "What happens if Emirates cancels my flight?",
        answer: "If Emirates cancels your flight, you are entitled to a full refund or rebooking on the next available flight at no additional cost. You will be notified via email or text message."
      }
    ]
  },
  "qatar-airways": {
    name: "Qatar Airways",
    code: "QR",
    description: "Qatar Airways is the flag carrier of Qatar, offering award-winning service and extensive global connections. Known for its exceptional hospitality and modern fleet, it connects Doha to over 160 destinations worldwide.",
    hub: "Hamad International Airport (DOH)",
    founded: "1993",
    fleet: "200+",
    destinations: "160+",
    alliance: "oneworld",
    website: "https://www.qatarairways.com",
    rating: 4.8,
    reviews: 2800,
    highlights: ["Qsuite", "Business Class", "Premium Economy", "Privilege Club", "Al Mourjan Lounge"],
    phoneNumber: "18778099955",
    email: "support@qatarairways.com",
    faqs: [
      {
        question: "How do I change my Qatar Airways flight?",
        answer: "You can change your Qatar Airways flight online through the 'Manage Booking' section on their website. Enter your booking reference and last name. You can also call Qatar Airways customer service at +1-877-809-9955 for assistance."
      },
      {
        question: "What is the Qatar Airways cancellation policy?",
        answer: "Qatar Airways cancellation policy varies by fare type. Fully refundable tickets get a full refund. Non-refundable tickets may receive a travel credit. Cancellations within 24 hours of booking are fully refundable."
      },
      {
        question: "Can I reschedule my Qatar Airways flight without penalty?",
        answer: "Qatar Airways offers free changes for Business and First Class tickets. Premium Economy and Economy tickets may have fees depending on the fare type. Privilege Club members with elite status may receive complimentary changes."
      },
      {
        question: "How do I correct a name error on my Qatar Airways ticket?",
        answer: "Contact Qatar Airways customer service at +1-877-809-9955 for name correction assistance on your ticket. Minor name corrections can be made within 24 hours of booking."
      },
      {
        question: "What fees apply for changing my Qatar Airways flight?",
        answer: "Qatar Airways change fees vary by fare type. Business and First Class tickets typically have no change fees. Economy tickets may have fees depending on the fare rules."
      },
      {
        question: "How do I get a refund from Qatar Airways?",
        answer: "To request a refund from Qatar Airways, visit the 'Manage Booking' section or call customer service at +1-877-809-9955."
      },
      {
        question: "Can I change my Qatar Airways flight online?",
        answer: "Yes, most Qatar Airways flights can be changed online through their website. You'll need your booking reference and last name."
      },
      {
        question: "What happens if Qatar Airways cancels my flight?",
        answer: "If Qatar Airways cancels your flight, you are entitled to a full refund or rebooking on the next available flight."
      }
    ]
  },
  "etihad-airways": {
    name: "Etihad Airways",
    code: "EY",
    description: "Etihad Airways is the flag carrier of the United Arab Emirates, offering luxurious services and connecting Abu Dhabi to destinations across the Middle East, Asia, Europe, and the Americas.",
    hub: "Zayed International Airport (AUH)",
    founded: "2003",
    fleet: "90+",
    destinations: "80+",
    alliance: "None",
    website: "https://www.etihad.com",
    rating: 4.7,
    reviews: 2100,
    highlights: ["The Residence", "First Class", "Business Class", "Etihad Guest", "Chauffeur Service"],
    phoneNumber: "18557391017",
    email: "support@etihad.com",
    faqs: [
      {
        question: "How do I change my Etihad Airways flight?",
        answer: "You can change your Etihad Airways flight online through the 'Manage Booking' section on their website. Enter your booking reference and last name. Call Etihad Airways customer service at +1-855-739-1017 for assistance."
      },
      {
        question: "What is the Etihad Airways cancellation policy?",
        answer: "Etihad Airways cancellation policy varies by fare type. Fully refundable tickets get a full refund. Non-refundable tickets may receive a travel credit. Cancellations within 24 hours of booking are fully refundable."
      },
      {
        question: "Can I reschedule my Etihad Airways flight without penalty?",
        answer: "Etihad Airways offers free changes for First and Business Class tickets. Economy tickets may have change fees depending on the fare type. Etihad Guest members with elite status may receive complimentary changes."
      },
      {
        question: "How do I correct a name error on my Etihad Airways ticket?",
        answer: "Contact Etihad Airways customer service at +1-855-739-1017 for name correction assistance. Minor name corrections can be made within 24 hours of booking."
      },
      {
        question: "What fees apply for changing my Etihad Airways flight?",
        answer: "Etihad Airways change fees vary by fare type. First and Business Class tickets typically have no change fees. Economy tickets may have fees depending on the fare rules."
      },
      {
        question: "How do I get a refund from Etihad Airways?",
        answer: "To request a refund from Etihad Airways, visit the 'Manage Booking' section or call customer service at +1-855-739-1017."
      },
      {
        question: "Can I change my Etihad Airways flight online?",
        answer: "Yes, most Etihad Airways flights can be changed online through their website. You'll need your booking reference and last name."
      },
      {
        question: "What happens if Etihad Airways cancels my flight?",
        answer: "If Etihad Airways cancels your flight, you are entitled to a full refund or rebooking on the next available flight."
      }
    ]
  },
  "kuwait-airways": {
    name: "Kuwait Airways",
    code: "KU",
    description: "Kuwait Airways is the flag carrier of Kuwait, offering authentic Arabian hospitality and connecting Kuwait City to destinations across the Middle East, Asia, Europe, and North America.",
    hub: "Kuwait International Airport (KWI)",
    founded: "1954",
    fleet: "30+",
    destinations: "60+",
    alliance: "None",
    website: "https://www.kuwaitairways.com",
    rating: 4.3,
    reviews: 980,
    highlights: ["Business Class", "Premium Economy", "Economy", "Oasis Club", "Arabian Hospitality"],
    phoneNumber: "18663722767",
    email: "support@kuwaitairways.com",
    faqs: [
      {
        question: "How do I change my Kuwait Airways flight?",
        answer: "You can change your Kuwait Airways flight online through the 'Manage Booking' section on their website. Enter your booking reference and last name. Call Kuwait Airways customer service at +1-866-372-2767 for assistance."
      },
      {
        question: "What is the Kuwait Airways cancellation policy?",
        answer: "Kuwait Airways cancellation policy varies by fare type. Fully refundable tickets get a full refund. Non-refundable tickets may receive a travel credit. Cancellations within 24 hours of booking are fully refundable."
      },
      {
        question: "Can I reschedule my Kuwait Airways flight without penalty?",
        answer: "Kuwait Airways offers free changes for Business Class tickets. Economy tickets may have change fees depending on the fare type. Oasis Club members may receive complimentary changes."
      },
      {
        question: "How do I correct a name error on my Kuwait Airways ticket?",
        answer: "Contact Kuwait Airways customer service at +1-866-372-2767 for name correction assistance. Minor name corrections can be made within 24 hours of booking."
      },
      {
        question: "What fees apply for changing my Kuwait Airways flight?",
        answer: "Kuwait Airways change fees vary by fare type. Business Class tickets typically have no change fees. Economy tickets may have fees depending on the fare rules."
      },
      {
        question: "How do I get a refund from Kuwait Airways?",
        answer: "To request a refund from Kuwait Airways, visit the 'Manage Booking' section or call customer service at +1-866-372-2767."
      },
      {
        question: "Can I change my Kuwait Airways flight online?",
        answer: "Yes, most Kuwait Airways flights can be changed online through their website. You'll need your booking reference and last name."
      },
      {
        question: "What happens if Kuwait Airways cancels my flight?",
        answer: "If Kuwait Airways cancels your flight, you are entitled to a full refund or rebooking on the next available flight."
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
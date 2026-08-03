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
  "british-airways": {
    name: "British Airways",
    code: "BA",
    description: "British Airways is the flag carrier airline of the United Kingdom, headquartered in London. It offers premium services to destinations across Europe, North America, and beyond.",
    hub: "London Heathrow (LHR)",
    founded: "1974",
    fleet: "280+",
    destinations: "200+",
    alliance: "oneworld",
    website: "https://www.britishairways.com",
    rating: 4.5,
    reviews: 1247,
    highlights: ["Premium Economy", "Business Class", "Executive Club", "First Class"],
    phoneNumber: "18559630556",
    email: "support@britishairways.com",
    faqs: [
      {
        question: "How do I change my British Airways flight?",
        answer: "You can change your British Airways flight online through the 'Manage Booking' section on the airline's website. Simply enter your confirmation number and last name to access your reservation, then select 'Change Flight' and choose your new travel dates. You can also call British Airways customer service at +1-888-845-0220 for assistance with changes. Changes made within 24 hours of booking are typically free."
      },
      {
        question: "What is the British Airways cancellation policy?",
        answer: "British Airways cancellation policy varies by fare type. Fully refundable tickets are eligible for a full refund. Non-refundable tickets may receive an eCredit for future travel, valid for one year. Cancellations made within 24 hours of booking are eligible for a full refund regardless of fare type. Refunds typically take 7-10 business days to process."
      },
      {
        question: "Can I reschedule my British Airways flight without penalty?",
        answer: "Yes, British Airways offers rescheduling options with no change fees for tickets booked in Business or First Class. Main Cabin tickets may have a change fee but no fare difference if you reschedule to a lower-priced flight. Basic Economy tickets cannot be rescheduled without paying the fare difference. Elite status members may receive complimentary changes."
      },
      {
        question: "How do I correct a name error on my British Airways ticket?",
        answer: "Minor name corrections (typos up to 3 characters) can be corrected for free on British Airways within 24 hours of booking. For major name changes, you may need to pay a fee or reissue the ticket. Contact British Airways customer service at +1-888-845-0220 for name correction assistance."
      },
      {
        question: "What fees apply for changing my British Airways flight?",
        answer: "Change fees on British Airways vary based on your fare type, route, and how close to departure you make the change. Basic Economy tickets typically have the highest change fees, while Business and First Class tickets often have no change fees. Same-day changes usually have a lower fee than changes made days before departure."
      },
      {
        question: "How do I get a refund from British Airways?",
        answer: "To request a refund from British Airways, visit the 'Manage Booking' section on their website and select 'Cancel Flight' or 'Request Refund'. You can also call British Airways customer service at +1-888-845-0220 to initiate the refund process. Refunds for eligible tickets are processed within 7-10 business days."
      },
      {
        question: "Can I change my British Airways flight online?",
        answer: "Yes, most British Airways flights can be changed online through the 'Manage Booking' portal on the airline's website. You'll need your confirmation number and last name. Online changes are available up to 1 hour before departure for most flights. Some complex bookings may require calling customer service."
      },
      {
        question: "What happens if British Airways cancels my flight?",
        answer: "If British Airways cancels your flight, you are entitled to a full refund to your original form of payment. You can also choose to rebook on the next available flight at no additional cost. British Airways will typically notify you of cancellations via email or text message. For immediate assistance, call +1-888-845-0220."
      }
    ]
  },
  "lufthansa": {
    name: "Lufthansa",
    code: "LH",
    description: "Lufthansa is the flag carrier of Germany and the largest airline in Europe. Known for exceptional service and extensive global network.",
    hub: "Frankfurt (FRA)",
    founded: "1953",
    fleet: "300+",
    destinations: "220+",
    alliance: "Star Alliance",
    website: "https://www.lufthansa.com",
    rating: 4.4,
    reviews: 985,
    highlights: ["First Class", "Business Class", "Premium Economy", "Miles & More"],
    phoneNumber: "18668025082",
    email: "support@lufthansa.com",
    faqs: [
      {
        question: "How do I change my Lufthansa flight?",
        answer: "You can change your Lufthansa flight online through the 'Manage Booking' section on the airline's website. Simply enter your booking reference and last name to access your reservation. You can also call Lufthansa customer service at +1-888-845-0220 for assistance with changes."
      },
      {
        question: "What is the Lufthansa cancellation policy?",
        answer: "Lufthansa cancellation policy varies by fare type. Fully refundable tickets get a full refund. Non-refundable tickets may receive a voucher for future travel. Cancellations made within 24 hours of booking are eligible for a full refund regardless of fare type."
      },
      {
        question: "Can I reschedule my Lufthansa flight without penalty?",
        answer: "Lufthansa offers free rescheduling for Business and First Class tickets. Economy tickets may have change fees depending on the fare type. Miles & More members with elite status may receive complimentary changes."
      },
      {
        question: "How do I correct a name error on my Lufthansa ticket?",
        answer: "Minor name corrections can be made on Lufthansa tickets within 24 hours of booking. Contact Lufthansa customer service at +1-888-845-0220 for name correction assistance."
      },
      {
        question: "What fees apply for changing my Lufthansa flight?",
        answer: "Lufthansa change fees vary by fare type, route, and timing. Business and First Class tickets typically have no change fees, while Economy tickets may have fees ranging from $75-$300 depending on the fare rules."
      },
      {
        question: "How do I get a refund from Lufthansa?",
        answer: "To request a refund from Lufthansa, visit the 'Manage Booking' section on their website. You can also call Lufthansa customer service at +1-888-845-0220 to initiate the refund process."
      },
      {
        question: "Can I change my Lufthansa flight online?",
        answer: "Yes, most Lufthansa flights can be changed online through the 'Manage Booking' portal on their website. You'll need your booking reference and last name."
      },
      {
        question: "What happens if Lufthansa cancels my flight?",
        answer: "If Lufthansa cancels your flight, you are entitled to a full refund or rebooking on the next available flight at no additional cost. Call +1-888-845-0220 for immediate assistance."
      }
    ]
  },
  "air-france": {
    name: "Air France",
    code: "AF",
    description: "Air France is the flag carrier of France, offering elegant service and extensive routes across Europe, Africa, Asia, and the Americas.",
    hub: "Paris Charles de Gaulle (CDG)",
    founded: "1933",
    fleet: "200+",
    destinations: "180+",
    alliance: "SkyTeam",
    website: "https://www.airfrance.com",
    rating: 4.3,
    reviews: 876,
    highlights: ["La Première", "Business Class", "Premium Economy", "Flying Blue"],
    phoneNumber: "18666520433",
    email: "support@airfrance.com",
    faqs: [
      {
        question: "How do I change my Air France flight?",
        answer: "You can change your Air France flight online through the 'Manage My Booking' section on their website. Enter your booking reference and last name to access your reservation. Call +1-888-845-0220 for assistance."
      },
      {
        question: "What is the Air France cancellation policy?",
        answer: "Air France cancellation policy varies by fare type. Refundable tickets get a full refund. Non-refundable tickets may receive a travel credit. Cancellations within 24 hours of booking are fully refundable."
      },
      {
        question: "Can I reschedule my Air France flight without penalty?",
        answer: "Air France offers free changes for Business and First Class tickets. Economy tickets may have fees depending on the fare type. Flying Blue members with elite status may receive complimentary changes."
      },
      {
        question: "How do I correct a name error on my Air France ticket?",
        answer: "Minor name corrections can be made on Air France tickets. Contact Air France customer service at +1-888-845-0220 for assistance with name corrections."
      },
      {
        question: "What fees apply for changing my Air France flight?",
        answer: "Air France change fees vary by fare type. Business and First Class tickets typically have no change fees. Economy tickets may have fees ranging from $50-$200 depending on the fare rules."
      },
      {
        question: "How do I get a refund from Air France?",
        answer: "To request a refund from Air France, visit the 'Manage My Booking' section on their website or call customer service at +1-888-845-0220."
      },
      {
        question: "Can I change my Air France flight online?",
        answer: "Yes, most Air France flights can be changed online through their website. You'll need your booking reference and last name."
      },
      {
        question: "What happens if Air France cancels my flight?",
        answer: "If Air France cancels your flight, you are entitled to a full refund or rebooking on the next available flight. Call +1-888-845-0220 for immediate assistance."
      }
    ]
  },
  "klm-royal-dutch-airlines": {
    name: "KLM Royal Dutch Airlines",
    code: "KL",
    description: "KLM Royal Dutch Airlines is the flag carrier of the Netherlands, known for its reliability and extensive European network.",
    hub: "Amsterdam Schiphol (AMS)",
    founded: "1919",
    fleet: "150+",
    destinations: "160+",
    alliance: "SkyTeam",
    website: "https://www.klm.com",
    rating: 4.2,
    reviews: 765,
    highlights: ["Business Class", "Premium Comfort", "World Business Class", "Flying Blue"],
    phoneNumber: "18774800746",
    email: "support@klm.com",
    faqs: [
      {
        question: "How do I change my KLM flight?",
        answer: "You can change your KLM flight online through the 'My Trip' section on their website. Enter your booking code and last name. Call +1-888-845-0220 for assistance with changes."
      },
      {
        question: "What is the KLM cancellation policy?",
        answer: "KLM cancellation policy varies by fare type. Refundable tickets get a full refund. Non-refundable tickets may receive a travel credit valid for one year."
      },
      {
        question: "Can I reschedule my KLM flight without penalty?",
        answer: "KLM offers free changes for Business Class tickets. Economy tickets may have change fees depending on the fare type."
      },
      {
        question: "How do I correct a name error on my KLM ticket?",
        answer: "Contact KLM customer service at +1-888-845-0220 for name correction assistance on your KLM ticket."
      },
      {
        question: "What fees apply for changing my KLM flight?",
        answer: "KLM change fees vary by fare type. Business Class tickets typically have no change fees. Economy tickets may have fees depending on the fare rules."
      },
      {
        question: "How do I get a refund from KLM?",
        answer: "To request a refund from KLM, visit the 'My Trip' section on their website or call customer service at +1-888-845-0220."
      },
      {
        question: "Can I change my KLM flight online?",
        answer: "Yes, most KLM flights can be changed online through their website. You'll need your booking code and last name."
      },
      {
        question: "What happens if KLM cancels my flight?",
        answer: "If KLM cancels your flight, you are entitled to a full refund or rebooking. Call +1-888-845-0220 for immediate assistance."
      }
    ]
  },
  "turkish-airlines": {
    name: "Turkish Airlines",
    code: "TK",
    description: "Turkish Airlines is the flag carrier of Turkey, offering excellent service and one of the most extensive route networks in the world.",
    hub: "Istanbul Airport (IST)",
    founded: "1933",
    fleet: "350+",
    destinations: "300+",
    alliance: "Star Alliance",
    website: "https://www.turkishairlines.com",
    rating: 4.6,
    reviews: 1543,
    highlights: ["Business Class", "Comfort Class", "Miles&Smiles", "Chef on Board"],
    phoneNumber: "18886042280",
    email: "support@turkishairlines.com",
    faqs: [
      {
        question: "How do I change my Turkish Airlines flight?",
        answer: "You can change your Turkish Airlines flight online through the 'Manage My Booking' section on their website. Enter your reservation code and last name. Call +1-888-845-0220 for assistance."
      },
      {
        question: "What is the Turkish Airlines cancellation policy?",
        answer: "Turkish Airlines cancellation policy varies by fare type. Fully refundable tickets get a full refund. Non-refundable tickets may receive an open ticket for future travel."
      },
      {
        question: "Can I reschedule my Turkish Airlines flight without penalty?",
        answer: "Turkish Airlines offers free changes for Business Class tickets. Comfort Class and Economy tickets may have change fees depending on the fare type."
      },
      {
        question: "How do I correct a name error on my Turkish Airlines ticket?",
        answer: "Contact Turkish Airlines customer service at +1-888-845-0220 for name correction assistance on your ticket."
      },
      {
        question: "What fees apply for changing my Turkish Airlines flight?",
        answer: "Turkish Airlines change fees vary by fare type. Business Class tickets typically have no change fees. Economy tickets may have fees depending on the fare rules."
      },
      {
        question: "How do I get a refund from Turkish Airlines?",
        answer: "To request a refund from Turkish Airlines, visit the 'Manage My Booking' section or call +1-888-845-0220."
      },
      {
        question: "Can I change my Turkish Airlines flight online?",
        answer: "Yes, most Turkish Airlines flights can be changed online through their website."
      },
      {
        question: "What happens if Turkish Airlines cancels my flight?",
        answer: "If Turkish Airlines cancels your flight, you are entitled to a full refund or rebooking. Call +1-888-845-0220 for immediate assistance."
      }
    ]
  },
  "swiss-international-airlines": {
    name: "SWISS International Airlines",
    code: "LX",
    description: "SWISS International Airlines is the flag carrier of Switzerland, renowned for precision, quality service, and Swiss hospitality.",
    hub: "Zurich Airport (ZRH)",
    founded: "2002",
    fleet: "90+",
    destinations: "100+",
    alliance: "Star Alliance",
    website: "https://www.swiss.com",
    rating: 4.5,
    reviews: 654,
    highlights: ["SWISS First", "Business Class", "Premium Economy", "SWISS Travel Club"],
    phoneNumber: "18889960735",
    email: "support@swiss.com",
    faqs: [
      {
        question: "How do I change my SWISS flight?",
        answer: "You can change your SWISS flight online through the 'Manage My Booking' section on their website. Call +1-888-845-0220 for assistance with changes."
      },
      {
        question: "What is the SWISS cancellation policy?",
        answer: "SWISS cancellation policy varies by fare type. Fully refundable tickets get a full refund. Non-refundable tickets may receive a travel voucher."
      },
      {
        question: "Can I reschedule my SWISS flight without penalty?",
        answer: "SWISS offers free changes for First and Business Class tickets. Economy tickets may have change fees depending on the fare type."
      },
      {
        question: "How do I correct a name error on my SWISS ticket?",
        answer: "Contact SWISS customer service at +1-888-845-0220 for name correction assistance."
      },
      {
        question: "What fees apply for changing my SWISS flight?",
        answer: "SWISS change fees vary by fare type. First and Business Class tickets typically have no change fees."
      },
      {
        question: "How do I get a refund from SWISS?",
        answer: "To request a refund from SWISS, visit the 'Manage My Booking' section or call +1-888-845-0220."
      },
      {
        question: "Can I change my SWISS flight online?",
        answer: "Yes, most SWISS flights can be changed online through their website."
      },
      {
        question: "What happens if SWISS cancels my flight?",
        answer: "If SWISS cancels your flight, you are entitled to a full refund or rebooking. Call +1-888-845-0220 for immediate assistance."
      }
    ]
  },
  "virgin-atlantic": {
    name: "Virgin Atlantic",
    code: "VS",
    description: "Virgin Atlantic is a British airline founded by Sir Richard Branson, offering innovative services and exceptional customer experience.",
    hub: "London Heathrow (LHR)",
    founded: "1984",
    fleet: "40+",
    destinations: "30+",
    alliance: "None",
    website: "https://www.virginatlantic.com",
    rating: 4.3,
    reviews: 543,
    highlights: ["Upper Class", "Premium", "Economy Delight", "Virgin Flying Club"],
    phoneNumber: "18772177078",
    email: "support@virginatlantic.com",
    faqs: [
      {
        question: "How do I change my Virgin Atlantic flight?",
        answer: "You can change your Virgin Atlantic flight online through the 'Manage My Booking' section on their website. Call +1-888-845-0220 for assistance with changes."
      },
      {
        question: "What is the Virgin Atlantic cancellation policy?",
        answer: "Virgin Atlantic cancellation policy varies by fare type. Fully refundable tickets get a full refund. Non-refundable tickets may receive a travel credit."
      },
      {
        question: "Can I reschedule my Virgin Atlantic flight without penalty?",
        answer: "Virgin Atlantic offers free changes for Upper Class tickets. Premium and Economy tickets may have change fees depending on the fare type."
      },
      {
        question: "How do I correct a name error on my Virgin Atlantic ticket?",
        answer: "Contact Virgin Atlantic customer service at +1-888-845-0220 for name correction assistance."
      },
      {
        question: "What fees apply for changing my Virgin Atlantic flight?",
        answer: "Virgin Atlantic change fees vary by fare type. Upper Class tickets typically have no change fees."
      },
      {
        question: "How do I get a refund from Virgin Atlantic?",
        answer: "To request a refund from Virgin Atlantic, visit the 'Manage My Booking' section or call +1-888-845-0220."
      },
      {
        question: "Can I change my Virgin Atlantic flight online?",
        answer: "Yes, most Virgin Atlantic flights can be changed online through their website."
      },
      {
        question: "What happens if Virgin Atlantic cancels my flight?",
        answer: "If Virgin Atlantic cancels your flight, you are entitled to a full refund or rebooking. Call +1-888-845-0220 for immediate assistance."
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
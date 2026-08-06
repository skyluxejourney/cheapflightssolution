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
    description: "British Airways is the flag carrier airline of the United Kingdom, offering premium travel experiences to destinations worldwide.",
    hub: "London Heathrow (LHR)",
    founded: "1974",
    fleet: "250+",
    destinations: "200+",
    alliance: "Oneworld",
    website: "https://www.britishairways.com",
    rating: 4.3,
    reviews: 1200,
    highlights: ["Premium Service", "Global Network", "Oneworld Alliance", "Modern Fleet"],
    phoneNumber: "18559630556",
    faqs: [
      {
        question: "How do I change my British Airways flight?",
        answer: "You can change your British Airways flight online through the 'Manage Booking' section on their website. You can also call British Airways customer service at 1-855-963-0556 for assistance with changes."
      },
      {
        question: "What is British Airways cancellation policy?",
        answer: "British Airways cancellation policy varies by fare type. Fully refundable tickets are eligible for a full refund. Non-refundable tickets may receive a voucher for future travel. Contact 1-855-963-0556 for specific details."
      },
      {
        question: "How do I get a refund from British Airways?",
        answer: "To request a refund from British Airways, visit the 'Manage Booking' section on their website or call 1-855-963-0556. Refunds for eligible tickets are processed within 7-10 business days."
      },
      {
        question: "Can I change my British Airways flight online?",
        answer: "Yes, most British Airways flights can be changed online through the 'Manage Booking' portal. You'll need your booking reference and last name. For complex changes, call 1-855-963-0556."
      }
    ],
  },
  "singapore-airlines": {
    name: "Singapore Airlines",
    code: "SQ",
    description: "Singapore Airlines is the flag carrier of Singapore, renowned for its exceptional service and luxurious travel experience.",
    hub: "Singapore Changi (SIN)",
    founded: "1972",
    fleet: "150+",
    destinations: "130+",
    alliance: "Star Alliance",
    website: "https://www.singaporeair.com",
    rating: 4.7,
    reviews: 1500,
    highlights: ["5-Star Airline", "Premium Economy", "Suites Class", "World-Class Service"],
    phoneNumber: "18557546902",
    faqs: [
      {
        question: "How do I change my Singapore Airlines flight?",
        answer: "You can change your Singapore Airlines flight online through their website or mobile app. For assistance, call 1-855-754-6902."
      },
      {
        question: "What is Singapore Airlines cancellation policy?",
        answer: "Singapore Airlines offers flexible cancellation options. Fully refundable tickets get a full refund, while others may receive travel credits. Call 1-855-754-6902 for details."
      },
      {
        question: "How do I get a refund from Singapore Airlines?",
        answer: "Refund requests can be submitted online or by calling 1-855-754-6902. Processing times vary based on the fare type."
      },
      {
        question: "Can I change my Singapore Airlines flight online?",
        answer: "Yes, changes can be made online through the 'Manage Booking' section. For immediate assistance, call 1-855-754-6902."
      }
    ],
  },
  "emirates": {
    name: "Emirates",
    code: "EK",
    description: "Emirates is one of the world's leading airlines, connecting travelers to over 150 destinations across six continents.",
    hub: "Dubai International (DXB)",
    founded: "1985",
    fleet: "260+",
    destinations: "150+",
    website: "https://www.emirates.com",
    rating: 4.6,
    reviews: 1800,
    highlights: ["A380 Fleet", "First Class Suites", "Global Network", "ICE Entertainment"],
    phoneNumber: "18557640399",
    faqs: [
      {
        question: "How do I change my Emirates flight?",
        answer: "Changes can be made online through 'Manage Your Booking' on the Emirates website. Call 1-855-764-0399 for assistance."
      },
      {
        question: "What is Emirates cancellation policy?",
        answer: "Emirates offers flexible cancellation policies. Refundable tickets qualify for full refunds. Contact 1-855-764-0399 for your specific fare type."
      },
      {
        question: "How do I get a refund from Emirates?",
        answer: "Refunds can be requested online or by calling 1-855-764-0399. Processing typically takes 7-14 business days."
      },
      {
        question: "Can I change my Emirates flight online?",
        answer: "Yes, most changes can be made online. For complex changes, call 1-855-764-0399."
      }
    ],
  },
  "american-airlines": {
    name: "American Airlines",
    code: "AA",
    description: "American Airlines is one of the largest airlines in the world, serving destinations across North America, Latin America, Europe, and Asia.",
    hub: "Dallas/Fort Worth (DFW)",
    founded: "1930",
    fleet: "900+",
    destinations: "350+",
    alliance: "Oneworld",
    website: "https://www.aa.com",
    rating: 4.0,
    reviews: 2000,
    highlights: ["Largest US Airline", "Global Network", "Oneworld Alliance", "Modern Fleet"],
    phoneNumber: "18336160546",
    faqs: [
      {
        question: "How do I change my American Airlines flight?",
        answer: "You can change your flight online at aa.com or by calling 1-833-616-0546."
      },
      {
        question: "What is American Airlines cancellation policy?",
        answer: "Cancellation policies vary by fare type. Call 1-833-616-0546 for information about your specific booking."
      },
      {
        question: "How do I get a refund from American Airlines?",
        answer: "Refund requests can be submitted online or by calling 1-833-616-0546."
      },
      {
        question: "Can I change my American Airlines flight online?",
        answer: "Yes, online changes are available. For help, call 1-833-616-0546."
      }
    ],
  },
  "ethiopian-airlines": {
    name: "Ethiopian Airlines",
    code: "ET",
    description: "Ethiopian Airlines is the flag carrier of Ethiopia and one of the fastest-growing airlines in Africa.",
    hub: "Addis Ababa Bole (ADD)",
    founded: "1945",
    fleet: "130+",
    destinations: "125+",
    alliance: "Star Alliance",
    website: "https://www.ethiopianairlines.com",
    rating: 4.2,
    reviews: 800,
    highlights: ["Largest African Airline", "Star Alliance", "Modern Fleet", "Cargo Services"],
    phoneNumber: "18554678570",
    faqs: [
      {
        question: "How do I change my Ethiopian Airlines flight?",
        answer: "Changes can be made online or by calling 1-855-467-8570."
      },
      {
        question: "What is Ethiopian Airlines cancellation policy?",
        answer: "Call 1-855-467-8570 for information about cancellation policies and refunds."
      },
      {
        question: "How do I get a refund from Ethiopian Airlines?",
        answer: "Refund requests can be submitted by calling 1-855-467-8570."
      },
      {
        question: "Can I change my Ethiopian Airlines flight online?",
        answer: "Yes, online changes are available. Call 1-855-467-8570 for assistance."
      }
    ],
  },
  "qantas-airlines": {
    name: "Qantas Airlines",
    code: "QF",
    description: "Qantas is the flag carrier of Australia and one of the world's oldest airlines, known for its safety and service excellence.",
    hub: "Sydney (SYD)",
    founded: "1920",
    fleet: "120+",
    destinations: "85+",
    alliance: "Oneworld",
    website: "https://www.qantas.com",
    rating: 4.4,
    reviews: 1100,
    highlights: ["World's Safest Airline", "Oneworld Alliance", "Premium Service", "Long-Haul Specialist"],
    phoneNumber: "18882375808",
    faqs: [
      {
        question: "How do I change my Qantas flight?",
        answer: "Changes can be made online at qantas.com or by calling 1-888-237-5808."
      },
      {
        question: "What is Qantas cancellation policy?",
        answer: "Call 1-888-237-5808 for information about cancellation policies and fees."
      },
      {
        question: "How do I get a refund from Qantas?",
        answer: "Refund requests can be submitted online or by calling 1-888-237-5808."
      },
      {
        question: "Can I change my Qantas flight online?",
        answer: "Yes, most changes can be made online. Call 1-888-237-5808 for assistance."
      }
    ],
  },
  "lufthansa": {
    name: "Lufthansa",
    code: "LH",
    description: "Lufthansa is the flag carrier of Germany and one of the largest airlines in Europe.",
    hub: "Frankfurt (FRA)",
    founded: "1953",
    fleet: "300+",
    destinations: "220+",
    alliance: "Star Alliance",
    website: "https://www.lufthansa.com",
    rating: 4.2,
    reviews: 1400,
    highlights: ["Star Alliance", "European Network", "Premium Service", "Modern Fleet"],
    phoneNumber: "18668025082",
    faqs: [
      {
        question: "How do I change my Lufthansa flight?",
        answer: "Changes can be made online at lufthansa.com or by calling 1-866-802-5082."
      },
      {
        question: "What is Lufthansa cancellation policy?",
        answer: "Call 1-866-802-5082 for information about cancellation policies."
      },
      {
        question: "How do I get a refund from Lufthansa?",
        answer: "Refund requests can be submitted by calling 1-866-802-5082."
      },
      {
        question: "Can I change my Lufthansa flight online?",
        answer: "Yes, online changes are available. Call 1-866-802-5082 for help."
      }
    ],
  },
  "cathay-pacific": {
    name: "Cathay Pacific",
    code: "CX",
    description: "Cathay Pacific is the flag carrier of Hong Kong, offering premium travel services across Asia and beyond.",
    hub: "Hong Kong (HKG)",
    founded: "1946",
    fleet: "150+",
    destinations: "80+",
    alliance: "Oneworld",
    website: "https://www.cathaypacific.com",
    rating: 4.5,
    reviews: 1300,
    highlights: ["5-Star Airline", "Oneworld Alliance", "Premium Service", "Modern Fleet"],
    phoneNumber: "18882910137",
    faqs: [
      {
        question: "How do I change my Cathay Pacific flight?",
        answer: "Changes can be made online or by calling 1-888-291-0137."
      },
      {
        question: "What is Cathay Pacific cancellation policy?",
        answer: "Call 1-888-291-0137 for cancellation policy details."
      },
      {
        question: "How do I get a refund from Cathay Pacific?",
        answer: "Refund requests can be submitted by calling 1-888-291-0137."
      },
      {
        question: "Can I change my Cathay Pacific flight online?",
        answer: "Yes, online changes are available. Call 1-888-291-0137 for assistance."
      }
    ],
  },
  "qatar-airways": {
    name: "Qatar Airways",
    code: "QR",
    description: "Qatar Airways is the flag carrier of Qatar, known for its luxurious service and modern fleet.",
    hub: "Doha (DOH)",
    founded: "1993",
    fleet: "200+",
    destinations: "160+",
    alliance: "Oneworld",
    website: "https://www.qatarairways.com",
    rating: 4.7,
    reviews: 1600,
    highlights: ["5-Star Airline", "Oneworld Alliance", "Qsuite", "Global Network"],
    phoneNumber: "18778099955",
    faqs: [
      {
        question: "How do I change my Qatar Airways flight?",
        answer: "Changes can be made online at qatarairways.com or by calling 1-877-809-9955."
      },
      {
        question: "What is Qatar Airways cancellation policy?",
        answer: "Call 1-877-809-9955 for information about cancellation policies."
      },
      {
        question: "How do I get a refund from Qatar Airways?",
        answer: "Refund requests can be submitted by calling 1-877-809-9955."
      },
      {
        question: "Can I change my Qatar Airways flight online?",
        answer: "Yes, online changes are available. Call 1-877-809-9955 for help."
      }
    ],
  },
  "united-airlines": {
    name: "United Airlines",
    code: "UA",
    description: "United Airlines is a major American airline with a extensive global network.",
    hub: "Chicago O'Hare (ORD)",
    founded: "1926",
    fleet: "800+",
    destinations: "340+",
    alliance: "Star Alliance",
    website: "https://www.united.com",
    rating: 3.9,
    reviews: 2200,
    highlights: ["Star Alliance", "Global Network", "Modern Fleet", "Premium Service"],
    phoneNumber: "18556355220",
    faqs: [
      {
        question: "How do I change my United Airlines flight?",
        answer: "Changes can be made online at united.com or by calling 1-855-635-5220."
      },
      {
        question: "What is United Airlines cancellation policy?",
        answer: "Call 1-855-635-5220 for cancellation policy information."
      },
      {
        question: "How do I get a refund from United Airlines?",
        answer: "Refund requests can be submitted by calling 1-855-635-5220."
      },
      {
        question: "Can I change my United Airlines flight online?",
        answer: "Yes, online changes are available. Call 1-855-635-5220 for assistance."
      }
    ],
  },
  "egyptair": {
    name: "EgyptAir",
    code: "MS",
    description: "EgyptAir is the flag carrier of Egypt, connecting Africa, Asia, and Europe.",
    hub: "Cairo (CAI)",
    founded: "1932",
    fleet: "70+",
    destinations: "80+",
    alliance: "Star Alliance",
    website: "https://www.egyptair.com",
    rating: 3.8,
    reviews: 600,
    highlights: ["Star Alliance", "African Network", "Modern Fleet", "Historical Routes"],
    phoneNumber: "18889101589",
    faqs: [
      {
        question: "How do I change my EgyptAir flight?",
        answer: "Changes can be made online or by calling 1-888-910-1589."
      },
      {
        question: "What is EgyptAir cancellation policy?",
        answer: "Call 1-888-910-1589 for cancellation policy details."
      },
      {
        question: "How do I get a refund from EgyptAir?",
        answer: "Refund requests can be submitted by calling 1-888-910-1589."
      },
      {
        question: "Can I change my EgyptAir flight online?",
        answer: "Yes, online changes are available. Call 1-888-910-1589 for assistance."
      }
    ],
  },
  "air-new-zealand": {
    name: "Air New Zealand",
    code: "NZ",
    description: "Air New Zealand is the flag carrier of New Zealand, known for its innovative service and safety record.",
    hub: "Auckland (AKL)",
    founded: "1940",
    fleet: "100+",
    destinations: "50+",
    alliance: "Star Alliance",
    website: "https://www.airnewzealand.com",
    rating: 4.5,
    reviews: 900,
    highlights: ["Star Alliance", "Innovative Service", "Safety Record", "Premium Economy"],
    phoneNumber: "18335806816",
    faqs: [
      {
        question: "How do I change my Air New Zealand flight?",
        answer: "Changes can be made online or by calling 1-833-580-6816."
      },
      {
        question: "What is Air New Zealand cancellation policy?",
        answer: "Call 1-833-580-6816 for cancellation policy information."
      },
      {
        question: "How do I get a refund from Air New Zealand?",
        answer: "Refund requests can be submitted by calling 1-833-580-6816."
      },
      {
        question: "Can I change my Air New Zealand flight online?",
        answer: "Yes, online changes are available. Call 1-833-580-6816 for help."
      }
    ],
  },
  "air-france": {
    name: "Air France",
    code: "AF",
    description: "Air France is the flag carrier of France, offering premium European and international travel.",
    hub: "Paris Charles de Gaulle (CDG)",
    founded: "1933",
    fleet: "200+",
    destinations: "200+",
    alliance: "SkyTeam",
    website: "https://www.airfrance.com",
    rating: 4.1,
    reviews: 1300,
    highlights: ["SkyTeam Alliance", "European Network", "Premium Service", "Modern Fleet"],
    phoneNumber: "18666520433",
    faqs: [
      {
        question: "How do I change my Air France flight?",
        answer: "Changes can be made online at airfrance.com or by calling 1-866-652-0433."
      },
      {
        question: "What is Air France cancellation policy?",
        answer: "Call 1-866-652-0433 for cancellation policy details."
      },
      {
        question: "How do I get a refund from Air France?",
        answer: "Refund requests can be submitted by calling 1-866-652-0433."
      },
      {
        question: "Can I change my Air France flight online?",
        answer: "Yes, online changes are available. Call 1-866-652-0433 for assistance."
      }
    ],
  },
  "korean-air": {
    name: "Korean Air",
    code: "KE",
    description: "Korean Air is the flag carrier of South Korea, offering premium Asian and international travel.",
    hub: "Seoul Incheon (ICN)",
    founded: "1962",
    fleet: "160+",
    destinations: "120+",
    alliance: "SkyTeam",
    website: "https://www.koreanair.com",
    rating: 4.3,
    reviews: 1000,
    highlights: ["SkyTeam Alliance", "Asian Network", "Premium Service", "Modern Fleet"],
    phoneNumber: "18338397273",
    faqs: [
      {
        question: "How do I change my Korean Air flight?",
        answer: "Changes can be made online or by calling 1-833-839-7273."
      },
      {
        question: "What is Korean Air cancellation policy?",
        answer: "Call 1-833-839-7273 for cancellation policy information."
      },
      {
        question: "How do I get a refund from Korean Air?",
        answer: "Refund requests can be submitted by calling 1-833-839-7273."
      },
      {
        question: "Can I change my Korean Air flight online?",
        answer: "Yes, online changes are available. Call 1-833-839-7273 for help."
      }
    ],
  },
  "etihad-airways": {
    name: "Etihad Airways",
    code: "EY",
    description: "Etihad Airways is the flag carrier of UAE, known for its luxurious service and modern fleet.",
    hub: "Abu Dhabi (AUH)",
    founded: "2003",
    fleet: "80+",
    destinations: "80+",
    website: "https://www.etihad.com",
    rating: 4.4,
    reviews: 1200,
    highlights: ["Luxury Service", "Modern Fleet", "Global Network", "Premium Cabins"],
    phoneNumber: "18557391017",
    faqs: [
      {
        question: "How do I change my Etihad Airways flight?",
        answer: "Changes can be made online at etihad.com or by calling 1-855-739-1017."
      },
      {
        question: "What is Etihad Airways cancellation policy?",
        answer: "Call 1-855-739-1017 for cancellation policy details."
      },
      {
        question: "How do I get a refund from Etihad Airways?",
        answer: "Refund requests can be submitted by calling 1-855-739-1017."
      },
      {
        question: "Can I change my Etihad Airways flight online?",
        answer: "Yes, online changes are available. Call 1-855-739-1017 for assistance."
      }
    ],
  },
  "delta-airlines": {
    name: "Delta Airlines",
    code: "DL",
    description: "Delta Airlines is a major American airline with a extensive global network.",
    hub: "Atlanta (ATL)",
    founded: "1924",
    fleet: "800+",
    destinations: "300+",
    alliance: "SkyTeam",
    website: "https://www.delta.com",
    rating: 4.1,
    reviews: 2100,
    highlights: ["SkyTeam Alliance", "Global Network", "Modern Fleet", "Premium Service"],
    phoneNumber: "18669795016",
    faqs: [
      {
        question: "How do I change my Delta Airlines flight?",
        answer: "Changes can be made online at delta.com or by calling 1-866-979-5016."
      },
      {
        question: "What is Delta Airlines cancellation policy?",
        answer: "Call 1-866-979-5016 for cancellation policy information."
      },
      {
        question: "How do I get a refund from Delta Airlines?",
        answer: "Refund requests can be submitted by calling 1-866-979-5016."
      },
      {
        question: "Can I change my Delta Airlines flight online?",
        answer: "Yes, online changes are available. Call 1-866-979-5016 for help."
      }
    ],
  },
  "virgin-atlantic": {
    name: "Virgin Atlantic",
    code: "VS",
    description: "Virgin Atlantic is a British airline known for its innovative service and premium travel experience.",
    hub: "London Heathrow (LHR)",
    founded: "1984",
    fleet: "40+",
    destinations: "30+",
    website: "https://www.virginatlantic.com",
    rating: 4.4,
    reviews: 1000,
    highlights: ["Innovative Service", "Premium Experience", "Modern Fleet", "Unique Style"],
    phoneNumber: "18772177078",
    faqs: [
      {
        question: "How do I change my Virgin Atlantic flight?",
        answer: "Changes can be made online or by calling 1-877-217-7078."
      },
      {
        question: "What is Virgin Atlantic cancellation policy?",
        answer: "Call 1-877-217-7078 for cancellation policy details."
      },
      {
        question: "How do I get a refund from Virgin Atlantic?",
        answer: "Refund requests can be submitted by calling 1-877-217-7078."
      },
      {
        question: "Can I change my Virgin Atlantic flight online?",
        answer: "Yes, online changes are available. Call 1-877-217-7078 for assistance."
      }
    ],
  },
  "swiss-international": {
    name: "SWISS International Air Lines",
    code: "LX",
    description: "SWISS International Air Lines is the flag carrier of Switzerland, known for its quality service.",
    hub: "Zurich (ZRH)",
    founded: "2002",
    fleet: "90+",
    destinations: "100+",
    alliance: "Star Alliance",
    website: "https://www.swiss.com",
    rating: 4.3,
    reviews: 1100,
    highlights: ["Star Alliance", "Swiss Quality", "Premium Service", "Modern Fleet"],
    phoneNumber: "18889960735",
    faqs: [
      {
        question: "How do I change my SWISS flight?",
        answer: "Changes can be made online at swiss.com or by calling 1-888-996-0735."
      },
      {
        question: "What is SWISS cancellation policy?",
        answer: "Call 1-888-996-0735 for cancellation policy information."
      },
      {
        question: "How do I get a refund from SWISS?",
        answer: "Refund requests can be submitted by calling 1-888-996-0735."
      },
      {
        question: "Can I change my SWISS flight online?",
        answer: "Yes, online changes are available. Call 1-888-996-0735 for help."
      }
    ],
  },
  "turkish-airlines": {
    name: "Turkish Airlines",
    code: "TK",
    description: "Turkish Airlines is the flag carrier of Turkey, connecting Europe, Asia, and Africa.",
    hub: "Istanbul (IST)",
    founded: "1933",
    fleet: "350+",
    destinations: "300+",
    alliance: "Star Alliance",
    website: "https://www.turkishairlines.com",
    rating: 4.2,
    reviews: 1500,
    highlights: ["Star Alliance", "Global Network", "Modern Fleet", "Premium Service"],
    phoneNumber: "18886042280",
    faqs: [
      {
        question: "How do I change my Turkish Airlines flight?",
        answer: "Changes can be made online or by calling 1-888-604-2280."
      },
      {
        question: "What is Turkish Airlines cancellation policy?",
        answer: "Call 1-888-604-2280 for cancellation policy details."
      },
      {
        question: "How do I get a refund from Turkish Airlines?",
        answer: "Refund requests can be submitted by calling 1-888-604-2280."
      },
      {
        question: "Can I change my Turkish Airlines flight online?",
        answer: "Yes, online changes are available. Call 1-888-604-2280 for assistance."
      }
    ],
  },
  "klm": {
    name: "KLM Royal Dutch Airlines",
    code: "KL",
    description: "KLM Royal Dutch Airlines is the flag carrier of the Netherlands, the oldest airline in the world still operating.",
    hub: "Amsterdam Schiphol (AMS)",
    founded: "1919",
    fleet: "110+",
    destinations: "170+",
    alliance: "SkyTeam",
    website: "https://www.klm.com",
    rating: 4.2,
    reviews: 1400,
    highlights: ["World's Oldest Airline", "SkyTeam Alliance", "European Network", "Premium Service"],
    phoneNumber: "18774800746",
    faqs: [
      {
        question: "How do I change my KLM flight?",
        answer: "Changes can be made online at klm.com or by calling 1-877-480-0746."
      },
      {
        question: "What is KLM cancellation policy?",
        answer: "Call 1-877-480-0746 for cancellation policy information."
      },
      {
        question: "How do I get a refund from KLM?",
        answer: "Refund requests can be submitted by calling 1-877-480-0746."
      },
      {
        question: "Can I change my KLM flight online?",
        answer: "Yes, online changes are available. Call 1-877-480-0746 for help."
      }
    ],
  },
  "philippine-airlines": {
    name: "Philippine Airlines",
    code: "PR",
    description: "Philippine Airlines is the flag carrier of the Philippines, serving destinations across Asia and the Pacific.",
    hub: "Manila (MNL)",
    founded: "1941",
    fleet: "70+",
    destinations: "60+",
    website: "https://www.philippineairlines.com",
    rating: 3.9,
    reviews: 700,
    highlights: ["Asian Network", "Pacific Routes", "Modern Fleet", "Filipino Hospitality"],
    phoneNumber: "18664242536",
    faqs: [
      {
        question: "How do I change my Philippine Airlines flight?",
        answer: "Changes can be made online or by calling 1-866-424-2536."
      },
      {
        question: "What is Philippine Airlines cancellation policy?",
        answer: "Call 1-866-424-2536 for cancellation policy details."
      },
      {
        question: "How do I get a refund from Philippine Airlines?",
        answer: "Refund requests can be submitted by calling 1-866-424-2536."
      },
      {
        question: "Can I change my Philippine Airlines flight online?",
        answer: "Yes, online changes are available. Call 1-866-424-2536 for assistance."
      }
    ],
  },
  "kuwait-airways": {
    name: "Kuwait Airways",
    code: "KU",
    description: "Kuwait Airways is the flag carrier of Kuwait, offering travel services across the Middle East and beyond.",
    hub: "Kuwait City (KWI)",
    founded: "1954",
    fleet: "30+",
    destinations: "60+",
    website: "https://www.kuwaitairways.com",
    rating: 3.8,
    reviews: 500,
    highlights: ["Middle East Network", "Modern Fleet", "Premium Service", "Regional Hub"],
    phoneNumber: "18663722767",
    faqs: [
      {
        question: "How do I change my Kuwait Airways flight?",
        answer: "Changes can be made online or by calling 1-866-372-2767."
      },
      {
        question: "What is Kuwait Airways cancellation policy?",
        answer: "Call 1-866-372-2767 for cancellation policy information."
      },
      {
        question: "How do I get a refund from Kuwait Airways?",
        answer: "Refund requests can be submitted by calling 1-866-372-2767."
      },
      {
        question: "Can I change my Kuwait Airways flight online?",
        answer: "Yes, online changes are available. Call 1-866-372-2767 for help."
      }
    ],
  },
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
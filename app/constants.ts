// Company Information
export const COMPANY = {
  name: "CheapFlightsSolution",
  domain: "cheapflightsolution.com",
  email: "Reservations@cheapflightssolution.com",
  phone: "+1-8776852739",
  phoneRaw: "18776852739",
  address: "Basement Plot Number 35 Sector 11 Dwarka New Delhi 110075",
  year: new Date().getFullYear(),
};



// Contact Information
export const CONTACT = {
  phone: COMPANY.phone,
  phoneRaw: COMPANY.phoneRaw,
  email: COMPANY.email,
  address: COMPANY.address,
  supportHours: "24/7 Customer Support",
};

// Brand Assets
export const BRAND = {
  name: COMPANY.name,
  tagline: "Travel & Adventures",
  logo: "/logo/planelogo.png" ,// Consider updating logo path if you have a new logo
  favicon: "/favicon.ico",
};

// Default Meta Information
export const META = {
  title: `${COMPANY.name} | Cheap Flights & Travel Deals`,
  description: `Find cheap flights, exclusive travel deals, and affordable holiday packages with ${COMPANY.name}. Book your next adventure today!`,
  keywords: [
    COMPANY.name,
    "cheap flights",
    "travel deals",
    "budget travel",
    "affordable flights",
    "flight deals",
    "discount airfare",
    "cheap travel",
  ],
};

export default {
  COMPANY,
  CONTACT,
  BRAND,
  META,
};
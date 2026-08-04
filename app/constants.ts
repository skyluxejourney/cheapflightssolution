// Company Information
export const COMPANY = {
  name: "Ticket to Middle East",
  domain: "tickettomiddleeast.com",
  email: "bookings@tickettomiddleeast.com",
  phone: "+1-8666521753",
  phoneRaw: "18666521753",
  address: "123 Travel Street, New York, USA",
  year: new Date().getFullYear(),
};

// Social Media Links
export const SOCIAL = {
  facebook: "https://facebook.com/tickettomiddleeast",
  twitter: "https://twitter.com/tickettomiddleeast",
  instagram: "https://instagram.com/tickettomiddleeast",
  youtube: "https://youtube.com/tickettomiddleeast",
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
  logo: "/logo/ticket.png", // Consider updating logo path if you have a new logo
  favicon: "/favicon.ico",
};

// Default Meta Information
export const META = {
  title: `${COMPANY.name} | Luxury Travel & Holiday Packages`,
  description: `Book luxury holiday packages, flights, hotels and customized trips with ${COMPANY.name}.`,
  keywords: [
    COMPANY.name,
    "travel agency",
    "holiday packages",
    "flights",
    "hotels",
    "Dubai package",
    "Doha package",
    "Abu Dhabi package",
    "Kuwait package",
  ],
};

export default {
  COMPANY,
  SOCIAL,
  CONTACT,
  BRAND,
  META,
};
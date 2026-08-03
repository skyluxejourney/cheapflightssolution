// Company Information
export const COMPANY = {
  name: "Ticket to Europe",
  domain: "tickettoeurope.com",
  email: "bookings@tickettoeurope.com",
  phone: "+1-18554937655",
  phoneRaw: "18554937655",
  address: "123 Travel Street, New York, USA",
  year: new Date().getFullYear(),
};

// Social Media Links
export const SOCIAL = {
  facebook: "https://facebook.com/tickettoeurope",
  twitter: "https://twitter.com/tickettoeurope",
  instagram: "https://instagram.com/tickettoeurope",
  youtube: "https://youtube.com/tickettoeurope",
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
  logo: "/logo/ticket.png",
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
    "Bali package",
    "Maldives package",
  ],
};

export default {
  COMPANY,
  SOCIAL,
  CONTACT,
  BRAND,
  META,
};
"use client";

import { useState } from "react";
import { 
  LayoutGrid, 
  Plane, 
  Scale, 
  ChevronRight,
  Phone,
  Home,
  Info,
  FileText,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { BRAND, CONTACT } from "@/app/constants";
import { airlinesDataMap } from "@/app/airlines/[slug]/data";
import type { AirlineData } from "@/app/airlines/[slug]/airlines-data";

export default function SitemapPage() {
  const [showModal, setShowModal] = useState(false);
  const [selectedLink, setSelectedLink] = useState("");

  // Exact arrays taken from the Footer component
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Disclaimer", href: "/disclaimer" },
    { name: "Contact Us", href: "#", isModal: true },
    { name: "Site Map", href: "/sitemap" },
  ];

  const legalLinks = [
    { name: "Terms & Conditions", href: "/terms-and-conditions" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Price Match Promise", href: "/price-match-policy" },
    { name: "Fulfillment Policy", href: "/fulfillment-policy" },
    { name: "Fare Disclosure", href: "/fare-disclosure-policy" },
    { name: "Advertiser Disclosure", href: "/advertiser-disclosure-policy" },
    { name: "Cookies Policy", href: "/cookies-policy" },
    { name: "Cancellation and Refund", href: "/cancellation-refund-policy" },
    { name: "Taxes and Fees", href: "/taxes-fees-policy" },
    { name: "Post-Ticketing Service Fees", href: "/post-ticketing-service-fees" },
  ];

  // Helper function to generate slug from airline name - with safety check
  function getSlugFromName(name: string): string {
    if (!name || typeof name !== 'string') return "";
    return name
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');
  }

  // Get all airlines from the airlinesDataMap
  const allAirlines = Object.values(airlinesDataMap);
  const airlines = allAirlines
    .filter((airline: AirlineData) => airline.airline?.name)
    .map((airline: AirlineData) => ({
      name: airline.airline.name,
      slug: getSlugFromName(airline.airline.name)
    }));

  // Split airlines into three columns
  const midPoint1 = Math.ceil(airlines.length / 3);
  const midPoint2 = Math.ceil((airlines.length * 2) / 3);
  const firstColumnAirlines = airlines.slice(0, midPoint1);
  const secondColumnAirlines = airlines.slice(midPoint1, midPoint2);
  const thirdColumnAirlines = airlines.slice(midPoint2);

  const handleLinkClick = (e: React.MouseEvent, linkName: string, isModal?: boolean) => {
    if (isModal) {
      e.preventDefault();
      setSelectedLink(linkName);
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedLink("");
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm mb-6">
            <Link href="/" className="text-black hover:text-black/60 transition-colors">
              Home
            </Link>
            <span className="text-black/30">›</span>
            <span className="text-black/60">Sitemap</span>
          </nav>

          <div className="max-w-6xl mx-auto">
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black leading-tight">
                Sitemap
              </h1>
              <p className="text-sm text-black/60 mt-2 leading-relaxed text-justify">
                Welcome to {BRAND.name}. This sitemap provides a comprehensive 
                overview of all the main pages, legal policies, and airline partners available 
                on our website to help you navigate our services.
              </p>
              <div className="w-12 h-1 bg-black rounded-full mt-3" />
            </div>

            {/* Sitemap Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              
              {/* Quick Links Column */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <LayoutGrid size={16} className="text-black" />
                  </div>
                  <h2 className="text-lg font-bold text-black">Quick Links</h2>
                </div>
                <ul className="space-y-2.5 border-l-2 border-gray-200 pl-4">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      {link.isModal ? (
                        <a
                          href={link.href}
                          onClick={(e) => handleLinkClick(e, link.name, true)}
                          className="flex items-center gap-2 text-sm text-black/60 hover:text-black transition-colors duration-200 cursor-pointer group"
                        >
                          <ChevronRight size={14} className="text-black/30 group-hover:text-black transition-colors flex-shrink-0" />
                          <span className="group-hover:underline">{link.name}</span>
                        </a>
                      ) : link.name === "Home" ? (
                        <a
                          href={link.href}
                          onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className="flex items-center gap-2 text-sm text-black/60 hover:text-black transition-colors duration-200 cursor-pointer group"
                        >
                          <ChevronRight size={14} className="text-black/30 group-hover:text-black transition-colors flex-shrink-0" />
                          <span className="group-hover:underline">{link.name}</span>
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="flex items-center gap-2 text-sm text-black/60 hover:text-black transition-colors duration-200 group"
                        >
                          <ChevronRight size={14} className="text-black/30 group-hover:text-black transition-colors flex-shrink-0" />
                          <span className="group-hover:underline">{link.name}</span>
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Top Airlines Column - 3 columns */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <Plane size={16} className="text-black" />
                  </div>
                  <h2 className="text-lg font-bold text-black">Top Airlines</h2>
                  <span className="text-xs text-black/40 bg-gray-100 px-2 py-0.5 rounded-full">
                    {airlines.length}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-1.5 border-l-2 border-gray-200 pl-4">
                  <div className="space-y-2.5">
                    {firstColumnAirlines.map((airline) => (
                      <Link
                        key={airline.name}
                        href={`/airlines/${airline.slug}`}
                        className="flex items-center gap-2 text-sm text-black/60 hover:text-black transition-colors duration-200 group"
                      >
                        <ChevronRight size={14} className="text-black/30 group-hover:text-black transition-colors flex-shrink-0" />
                        <span className="group-hover:underline truncate">{airline.name}</span>
                      </Link>
                    ))}
                  </div>
                  <div className="space-y-2.5">
                    {secondColumnAirlines.map((airline) => (
                      <Link
                        key={airline.name}
                        href={`/airlines/${airline.slug}`}
                        className="flex items-center gap-2 text-sm text-black/60 hover:text-black transition-colors duration-200 group"
                      >
                        <ChevronRight size={14} className="text-black/30 group-hover:text-black transition-colors flex-shrink-0" />
                        <span className="group-hover:underline truncate">{airline.name}</span>
                      </Link>
                    ))}
                  </div>
                  <div className="space-y-2.5">
                    {thirdColumnAirlines.map((airline) => (
                      <Link
                        key={airline.name}
                        href={`/airlines/${airline.slug}`}
                        className="flex items-center gap-2 text-sm text-black/60 hover:text-black transition-colors duration-200 group"
                      >
                        <ChevronRight size={14} className="text-black/30 group-hover:text-black transition-colors flex-shrink-0" />
                        <span className="group-hover:underline truncate">{airline.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Legal Links Column */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <Scale size={16} className="text-black" />
                  </div>
                  <h2 className="text-lg font-bold text-black">Legal & Policies</h2>
                </div>
                <ul className="space-y-2.5 border-l-2 border-gray-200 pl-4">
                  {legalLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="flex items-center gap-2 text-sm text-black/60 hover:text-black transition-colors duration-200 group"
                      >
                        <ChevronRight size={14} className="text-black/30 group-hover:text-black transition-colors flex-shrink-0" />
                        <span className="group-hover:underline">{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-10 p-6 bg-black rounded-lg text-white">
              <h3 className="text-lg sm:text-xl font-bold mb-2 !text-white">
                Can't Find What You're Looking For?
              </h3>
              <p className="text-sm mb-4 !text-white/80">
                Our travel experts are here to assist you with flight bookings, changes, and any questions you may have.
              </p>
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="inline-flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:scale-105"
              >
                <Phone size={16} />
                Call Us Now: {CONTACT.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      
      {/* Contact Modal */}
      <ContactModal 
        isOpen={showModal}
        onClose={closeModal}
        selectedItem={selectedLink}
      />
    </>
  );
}
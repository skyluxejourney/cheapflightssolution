"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Clock,
  Award,
  Shield,
  AlertCircle,
} from "lucide-react";
import ContactModal from "./ContactModal";
import Link from "next/link";
import Image from "next/image";
import { COMPANY, CONTACT, BRAND } from "@/app/constants";
import { airlinesDataMap } from "@/app/airlines/[slug]/data";
import type { AirlineData } from "@/app/airlines/[slug]/airlines-data";

export default function Footer() {
  const [showModal, setShowModal] = useState(false);
  const [selectedLink, setSelectedLink] = useState("");

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Disclaimer", href: "/disclaimer" },
    { name: "Contact Us", href: "#", isModal: true },
    { name: "Site Map", href: "/sitemap" },
  ];

  const legalLinks = [
    { name: "Terms & Conditions", href: "/terms-of-service" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Price Match Promise", href: "/price-match-policy" },
    { name: "Fulfillment Policy", href: "/fulfillment-policy" },
    { name: "Fare Disclosure", href: "/fare-disclosure-policy" },
    { name: "Advertiser Disclosure", href: "/advertiser-disclosure-policy" },
    { name: "Cookies Policy", href: "/cookies-policy" },
    
    { name: "Cancellation and Refund", href: "/cancellation-refund-policy" },
    { name: "Post Ticketing Service Fees", href: "/post-ticketing-service-fees" },
    { name: "Taxes and Fees", href: "/taxes-fees-policy" },
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
      <footer className="bg-white text-black border-t border-black/10">
        {/* Main Footer */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">

            {/* Brand Section */}
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3 mb-5">
                <Image
                  src={BRAND.logo}
                  alt={BRAND.name}
                  width={44}
                  height={44}
                  className="object-contain flex-shrink-0"
                />

                <div>
                  <h2 className="text-lg font-bold text-black tracking-wide italic">
                    {BRAND.name}
                  </h2>
                  <p className="text-[11px] text-black font-medium tracking-[0.2em] uppercase">
                    {BRAND.tagline}
                  </p>
                </div>
              </div>

              <p className="text-sm leading-7 text-black/60 max-w-md mb-6">
                Your trusted travel partner for flights, holidays, and unforgettable
                journeys across the world. We provide secure bookings, expert support,
                and the best travel deals for every traveler.
              </p>

              <div className="grid grid-cols-2 gap-4 max-w-sm">
                <div className="bg-black/5 border border-black/10 px-4 py-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Award size={16} className="text-black" />
                    <span className="text-sm font-semibold text-black">Trusted</span>
                  </div>
                  <p className="text-xs text-black/40">5+ years of service</p>
                </div>

                <div className="bg-black/5 border border-black/10 px-4 py-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Shield size={16} className="text-black" />
                    <span className="text-sm font-semibold text-black">Secure</span>
                  </div>
                  <p className="text-xs text-black/40">Safe payments</p>
                </div>
              </div>
            </div>

            {/* Quick Links Section */}
            <div className="lg:col-span-2">
              <h3 className="text-base font-semibold text-black mb-5 border-b border-black/10 pb-3">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    {link.isModal ? (
                      <a
                        href={link.href}
                        onClick={(e) => handleLinkClick(e, link.name, true)}
                        className="group flex items-center gap-2 text-sm text-black/60 hover:text-black transition-colors duration-200 cursor-pointer"
                      >
                        <span className="w-1 h-1 bg-black/30 group-hover:bg-black transition-colors" />
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="group flex items-center gap-2 text-sm text-black/60 hover:text-black transition-colors duration-200"
                      >
                        <span className="w-1 h-1 bg-black/30 group-hover:bg-black transition-colors" />
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Airlines Section - 3 Columns */}
            <div className="lg:col-span-4">
              <h3 className="text-base font-semibold text-black mb-5 border-b border-black/10 pb-3">
                Top Airlines
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-1.5">
                <div className="space-y-1.5">
                  {firstColumnAirlines.map((airline) => (
                    <Link
                      key={airline.name}
                      href={`/airlines/${airline.slug}`}
                      className="group flex items-center gap-2 py-1.5 text-sm text-black/60 hover:text-black transition-colors duration-200"
                    >
                      <span className="w-1 h-1 bg-black/30 group-hover:bg-black transition-colors flex-shrink-0" />
                      <span className="truncate">{airline.name}</span>
                    </Link>
                  ))}
                </div>
                <div className="space-y-1.5">
                  {secondColumnAirlines.map((airline) => (
                    <Link
                      key={airline.name}
                      href={`/airlines/${airline.slug}`}
                      className="group flex items-center gap-2 py-1.5 text-sm text-black/60 hover:text-black transition-colors duration-200"
                    >
                      <span className="w-1 h-1 bg-black/30 group-hover:bg-black transition-colors flex-shrink-0" />
                      <span className="truncate">{airline.name}</span>
                    </Link>
                  ))}
                </div>
                <div className="space-y-1.5">
                  {thirdColumnAirlines.map((airline) => (
                    <Link
                      key={airline.name}
                      href={`/airlines/${airline.slug}`}
                      className="group flex items-center gap-2 py-1.5 text-sm text-black/60 hover:text-black transition-colors duration-200"
                    >
                      <span className="w-1 h-1 bg-black/30 group-hover:bg-black transition-colors flex-shrink-0" />
                      <span className="truncate">{airline.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Legal Links Section */}
            <div className="lg:col-span-3">
              <h3 className="text-base font-semibold text-black mb-5 border-b border-black/10 pb-3">
                Legal Links
              </h3>
              <div className="grid grid-cols-1 gap-y-1.5">
                {legalLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-black/60 hover:text-black transition-colors duration-200"
                  >
                    <span className="w-1 h-1 bg-black/30 group-hover:bg-black transition-colors flex-shrink-0" />
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="mt-12 pt-8 border-t border-black/10">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div>
                <h4 className="text-black font-semibold text-base mb-1">
                  Subscribe to our newsletter
                </h4>
                <p className="text-sm text-black/40">
                  Get exclusive flight deals and travel updates directly in your inbox.
                </p>
              </div>

              <div className="flex w-full lg:w-auto max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 text-sm bg-white border border-black/20 text-black placeholder-black/30 focus:outline-none focus:border-black"
                />
                <button className="px-5 py-3 text-sm bg-black text-white font-semibold transition-all duration-300 hover:bg-black/90 flex items-center gap-2 whitespace-nowrap">
                  <Send size={14} />
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer Section - Full Width */}
        <div 
          className="w-full"
          style={{ 
            backgroundColor: '#00000005', 
            borderTop: '1px solid #0000001A', 
            borderBottom: '1px solid #0000001A'
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5">
            <div className="flex items-start gap-2 sm:gap-3">
              <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5 text-black" />
              <p className="text-[10px] sm:text-xs leading-relaxed text-black/60">
                <span className="font-semibold text-black">Disclaimer:</span>{" "}
                This Disclaimer governs the use of the website www.cheapflightssolution.com 
                (the "Website"), operated by Noam Flyers Inc. ("Company," "we," "us," 
                or "our"), a USA-registered travel company. CheapFlightsSolution is an 
                independent online travel agency and is not an airline. We are not 
                affiliated with, owned by, or operated by any airline. Our role is to 
                facilitate travel bookings and provide customers with access to available 
                travel options from airlines and other travel service providers.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-black/10 bg-black/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-black/40">
              <p>
                &copy; {COMPANY.year || new Date().getFullYear()} {COMPANY.name || BRAND.name}. All rights reserved.
              </p>
              <div className="flex items-center gap-4">
                <Link href="/privacy-policy" className="hover:text-black transition-colors">
                  Privacy Policy
                </Link>
                <span className="w-px h-3 bg-black/10" />
                <Link href="/terms-of-service" className="hover:text-black transition-colors">
                  Terms of Service
                </Link>
                <span className="w-px h-3 bg-black/10" />
                <Link href="/cookies-policy" className="hover:text-black transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={showModal}
        onClose={closeModal}
        selectedItem={selectedLink}
      />
    </>
  );
}
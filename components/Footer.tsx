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
} from "lucide-react";
import ContactModal from "./ContactModal";
import Link from "next/link";
import Image from "next/image";
import { COMPANY, CONTACT, BRAND } from "@/app/constants";
import { getAllAirlines, AirlineData } from "@/app/airlines/[slug]/constants";

export default function Footer() {
  const [showModal, setShowModal] = useState(false);
  const [selectedLink, setSelectedLink] = useState("");

  const quickLinks = [
    { name: "About Us", href: "#" },
    { name: "Flights", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Contact", href: "#" },
  ];

  // Get all airlines from the airlinesData
  const allAirlines = getAllAirlines();
  const airlines = allAirlines.map((airline: AirlineData) => ({
    name: airline.name,
    slug: getSlugFromName(airline.name)
  }));

  // Helper function to generate slug from airline name
  function getSlugFromName(name: string): string {
    return name
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');
  }

  const handleLinkClick = (e: React.MouseEvent, linkName: string) => {
    e.preventDefault();
    setSelectedLink(linkName);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedLink("");
  };

  // Split airlines into two columns
  const midPoint = Math.ceil(airlines.length / 2);
  const firstColumnAirlines = airlines.slice(0, midPoint);
  const secondColumnAirlines = airlines.slice(midPoint);

  return (
    <>
      <footer className="bg-white text-black border-t border-black/10">
        {/* Main Footer */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
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

            {/* Airlines Section - All Airlines (2 columns) */}
            <div className="lg:col-span-6">
              <h3 className="text-base font-semibold text-black mb-5 border-b border-black/10 pb-3">
                Top Airlines
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1.5">
                <div className="space-y-1.5">
                  {firstColumnAirlines.map((airline) => (
                    <Link
                      key={airline.name}
                      href={`/airlines/${airline.slug}`}
                      className="group flex items-center gap-3 py-1.5 text-sm text-black/60 hover:text-black transition-colors duration-200"
                    >
                      <span className="w-1 h-1 bg-black/30 group-hover:bg-black transition-colors" />
                      <span className="truncate">{airline.name}</span>
                    </Link>
                  ))}
                </div>
                <div className="space-y-1.5">
                  {secondColumnAirlines.map((airline) => (
                    <Link
                      key={airline.name}
                      href={`/airlines/${airline.slug}`}
                      className="group flex items-center gap-3 py-1.5 text-sm text-black/60 hover:text-black transition-colors duration-200"
                    >
                      <span className="w-1 h-1 bg-black/30 group-hover:bg-black transition-colors" />
                      <span className="truncate">{airline.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="lg:col-span-3">
              <h3 className="text-base font-semibold text-black mb-5 border-b border-black/10 pb-3">
                Contact Us
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-9 w-9 items-center justify-center bg-black/5 border border-black/10 flex-shrink-0">
                    <Phone size={16} className="text-black" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-medium uppercase tracking-wide text-black/40 mb-1">
                      Phone
                    </p>
                    <p className="text-sm text-black/70 break-words">
                      {CONTACT.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-9 w-9 items-center justify-center bg-black/5 border border-black/10 flex-shrink-0">
                    <Mail size={16} className="text-black" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-medium uppercase tracking-wide text-black/40 mb-1">
                      Email
                    </p>
                    <p className="text-sm text-black/70 break-all">
                      {COMPANY.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-9 w-9 items-center justify-center bg-black/5 border border-black/10 flex-shrink-0">
                    <MapPin size={16} className="text-black" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-medium uppercase tracking-wide text-black/40 mb-1">
                      Address
                    </p>
                    <p className="text-sm leading-6 text-black/70 break-words">
                      {COMPANY.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-9 w-9 items-center justify-center bg-black/5 border border-black/10 flex-shrink-0">
                    <Clock size={16} className="text-black" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-medium uppercase tracking-wide text-black/40 mb-1">
                      Support
                    </p>
                    <p className="text-sm text-black/70 break-words">
                      {CONTACT.supportHours}
                    </p>
                  </div>
                </div>
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

        {/* Bottom Bar */}
        <div className="border-t border-black/10 bg-black/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-black/40">
              <p>
                &copy; {COMPANY.year} {COMPANY.name}. All rights reserved.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="hover:text-black transition-colors">
                  Privacy Policy
                </a>
                <span className="w-px h-3 bg-black/10" />
                <a href="#" className="hover:text-black transition-colors">
                  Terms of Service
                </a>
                <span className="w-px h-3 bg-black/10" />
                <a href="#" className="hover:text-black transition-colors">
                  Cookie Policy
                </a>
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
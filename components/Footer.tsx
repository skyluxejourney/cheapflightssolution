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

export default function Footer() {
  const [showModal, setShowModal] = useState(false);
  const [selectedLink, setSelectedLink] = useState("");

  const quickLinks = [
    { name: "About Us", href: "#" },
    { name: "Flights", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Contact", href: "#" },
  ];

  const topAirlines = [
    { name: "British Airways", slug: "british-airways" },
    { name: "Lufthansa", slug: "lufthansa" },
    { name: "Air France", slug: "air-france" },
    { name: "KLM Royal Dutch Airlines", slug: "klm-royal-dutch-airlines" },
    { name: "Turkish Airlines", slug: "turkish-airlines" },
    { name: "SWISS International Airlines", slug: "swiss-international-airlines" },
    { name: "Virgin Atlantic", slug: "virgin-atlantic" },
  ];

  const handleLinkClick = (e: React.MouseEvent, linkName: string) => {
    e.preventDefault();
    setSelectedLink(linkName);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedLink("");
  };

  return (
    <>
      <footer className="bg-[#F8F5EF] text-[#0A1628]/80">
        {/* Main Footer */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
            {/* Brand & About */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0">
                  <Image
                    src={BRAND.logo}
                    alt={BRAND.name}
                    width={56}
                    height={56}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[#0A1628] tracking-wide font-heading italic">
                    {BRAND.name}
                  </h2>
                  <p className="text-xs text-[#1A3A6B] font-medium tracking-wider uppercase">
                    {BRAND.tagline}
                  </p>
                </div>
              </div>
              <p className="text-sm text-[#0A1628]/60 leading-relaxed mb-4 max-w-xs">
                Your trusted partner for unforgettable travel experiences. We help
                you discover the world with ease and comfort.
              </p>
              <div className="flex items-center gap-3 text-sm text-[#0A1628]/60">
                <div className="flex items-center gap-1">
                  <Award size={14} className="text-[#1A3A6B]" />
                  <span>5 Years of Trust</span>
                </div>
                <div className="flex items-center gap-1">
                  <Shield size={14} className="text-[#1A3A6B]" />
                  <span>Secure Booking</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-[#0A1628] font-semibold text-lg mb-4 relative">
                Quick Links
                <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-[#1A3A6B] to-[#4A8BCF] rounded-full" />
              </h3>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.name)}
                      className="text-sm text-[#0A1628]/60 hover:text-[#1A3A6B] transition-colors duration-200 flex items-center gap-2 group cursor-pointer"
                    >
                      <span className="w-1 h-1 bg-[#1A3A6B]/40 rounded-full group-hover:bg-[#1A3A6B] transition-colors" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Top Airlines */}
            <div>
              <h3 className="text-[#0A1628] font-semibold text-lg mb-4 relative">
                Top Airlines
                <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-[#1A3A6B] to-[#4A8BCF] rounded-full" />
              </h3>
              <ul className="space-y-2.5">
                {topAirlines.map((airline) => (
                  <li key={airline.name}>
                    <Link
                      href={`/airlines/${airline.slug}`}
                      className="text-sm text-[#0A1628]/60 hover:text-[#1A3A6B] transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-[#1A3A6B]/40 rounded-full group-hover:bg-[#1A3A6B] transition-colors" />
                      {airline.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="text-[#0A1628] font-semibold text-lg mb-4 relative">
                Contact Us
                <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-[#1A3A6B] to-[#4A8BCF] rounded-full" />
              </h3>
              <ul className="space-y-3.5">
                <li className="flex items-start gap-3 text-sm text-[#0A1628]/60 hover:text-[#0A1628] transition-colors group">
                  <Phone size={16} className="text-[#1A3A6B] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span>{CONTACT.phone}</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-[#0A1628]/60 hover:text-[#0A1628] transition-colors group">
                  <Mail size={16} className="text-[#1A3A6B] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span>{COMPANY.email}</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-[#0A1628]/60 hover:text-[#0A1628] transition-colors group">
                  <MapPin size={16} className="text-[#1A3A6B] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span>{COMPANY.address}</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-[#0A1628]/60 hover:text-[#0A1628] transition-colors group">
                  <Clock size={16} className="text-[#1A3A6B] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span>{CONTACT.supportHours}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="mt-12 pt-8 border-t border-[#1A3A6B]/10">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-[#0A1628] font-semibold text-base">
                  Subscribe to Our Newsletter
                </h4>
                <p className="text-sm text-[#0A1628]/40">
                  Get the best travel deals straight to your inbox
                </p>
              </div>
              <div className="flex w-full sm:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 sm:w-64 px-4 py-2.5 bg-white/80 border border-[#1A3A6B]/20 rounded-l-full text-[#0A1628] placeholder-[#0A1628]/30 focus:outline-none focus:border-[#1A3A6B] transition-colors text-sm"
                />
                <button className="px-5 py-2.5 bg-gradient-to-r from-[#1A3A6B] to-[#4A8BCF] hover:from-[#2B5A9E] hover:to-[#7BAEE0] text-white rounded-r-full font-semibold transition-all duration-300 flex items-center gap-2 text-sm whitespace-nowrap shadow-lg shadow-[#1A3A6B]/20">
                  <Send size={14} />
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#1A3A6B]/10 bg-[#F8F5EF]/80">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#0A1628]/40">
              <p>
                &copy; {COMPANY.year} {COMPANY.name}. All rights reserved.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="hover:text-[#1A3A6B] transition-colors">
                  Privacy Policy
                </a>
                <span className="w-px h-3 bg-[#1A3A6B]/10" />
                <a href="#" className="hover:text-[#1A3A6B] transition-colors">
                  Terms of Service
                </a>
                <span className="w-px h-3 bg-[#1A3A6B]/10" />
                <a href="#" className="hover:text-[#1A3A6B] transition-colors">
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
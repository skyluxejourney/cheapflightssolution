"use client";

import {
  Phone,
  Mail,
  MapPin,
  Plane,
  Send,
  Clock,
  Award,
  Shield,
} from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "About Us", href: "#" },
    { name: "Flights", href: "#" },
    { name: "Hotels", href: "#" },
    { name: "Packages", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Contact", href: "#" },
  ];

  const topDestinations = [
    { name: "Paris, France", href: "#" },
    { name: "Bali, Indonesia", href: "#" },
    { name: "Dubai, UAE", href: "#" },
    { name: "Tokyo, Japan", href: "#" },
    { name: "Santorini, Greece", href: "#" },
    { name: "Maldives", href: "#" },
  ];

  return (
    <footer className="bg-[#111111] text-white/80">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Brand & About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#AF935B] flex items-center justify-center">
                <Plane size={20} className="text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white tracking-wide">
                  Skyluxe
                </h2>
                <p className="text-xs text-[#AF935B] font-medium tracking-wider uppercase">
                  Journey
                </p>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-4 max-w-xs">
              Your trusted partner for unforgettable travel experiences. We help
              you discover the world with ease and comfort.
            </p>
            <div className="flex items-center gap-3 text-sm text-white/60">
              <div className="flex items-center gap-1">
                <Award size={14} className="text-[#AF935B]" />
                <span>5 Years of Trust</span>
              </div>
              <div className="flex items-center gap-1">
                <Shield size={14} className="text-[#AF935B]" />
                <span>Secure Booking</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 relative">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-[#AF935B] rounded-full" />
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-[#AF935B] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-[#AF935B]/40 rounded-full group-hover:bg-[#AF935B] transition-colors" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Destinations */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 relative">
              Top Destinations
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-[#AF935B] rounded-full" />
            </h3>
            <ul className="space-y-2.5">
              {topDestinations.map((destination) => (
                <li key={destination.name}>
                  <a
                    href={destination.href}
                    className="text-sm text-white/60 hover:text-[#AF935B] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-[#AF935B]/40 rounded-full group-hover:bg-[#AF935B] transition-colors" />
                    {destination.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 relative">
              Contact Us
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-[#AF935B] rounded-full" />
            </h3>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3 text-sm text-white/60 hover:text-white transition-colors group">
                <Phone size={16} className="text-[#AF935B] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span>+1-888-845-0220</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/60 hover:text-white transition-colors group">
                <Mail size={16} className="text-[#AF935B] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span>bookings@skyluxejourney.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/60 hover:text-white transition-colors group">
                <MapPin size={16} className="text-[#AF935B] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span>123 Travel Street, New York, USA</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/60 hover:text-white transition-colors group">
                <Clock size={16} className="text-[#AF935B] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span>24/7 Customer Support</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-white font-semibold text-base">
                Subscribe to Our Newsletter
              </h4>
              <p className="text-sm text-white/40">
                Get the best travel deals straight to your inbox
              </p>
            </div>
            <div className="flex w-full sm:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 sm:w-64 px-4 py-2.5 bg-white/5 border border-white/10 rounded-l-full text-white placeholder-white/30 focus:outline-none focus:border-[#AF935B] transition-colors text-sm"
              />
              <button className="px-5 py-2.5 bg-[#AF935B] hover:bg-[#725B29] text-white rounded-r-full font-semibold transition-colors flex items-center gap-2 text-sm whitespace-nowrap">
                <Send size={14} />
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 bg-black/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
            <p>
              &copy; {new Date().getFullYear()} Skyluxe Journey. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white/70 transition-colors">
                Privacy Policy
              </a>
              <span className="w-px h-3 bg-white/10" />
              <a href="#" className="hover:text-white/70 transition-colors">
                Terms of Service
              </a>
              <span className="w-px h-3 bg-white/10" />
              <a href="#" className="hover:text-white/70 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
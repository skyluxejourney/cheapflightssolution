// app/contact/page.tsx
"use client";

import { useState } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ZoomIn,
  ZoomOut,
  Maximize
} from "lucide-react";
import { CONTACT } from "@/app/constants";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [mapZoom, setMapZoom] = useState(15);

  const handleZoomIn = () => {
    setMapZoom(prev => Math.min(prev + 1, 20));
  };

  const handleZoomOut = () => {
    setMapZoom(prev => Math.max(prev - 1, 1));
  };

  const handleResetZoom = () => {
    setMapZoom(15);
  };

  const mapSrc = `https://www.google.com/maps/embed/v1/place?q=${encodeURIComponent(CONTACT.address)}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&zoom=${mapZoom}`;

  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-white pt-28 pb-12">
        <div className="w-full px-4 sm:px-6 lg:px-20">
          {/* Header Section */}
          <div className="max-w-7xl mx-auto border-b pb-6 mb-8" style={{ borderColor: '#e5e5e5' }}>
            <h1 className="text-3xl sm:text-4xl font-light mb-2 tracking-tight text-black">
              Get In <span className="font-bold text-black">Touch</span>
            </h1>
            <p className="text-sm max-w-xl font-light text-black/60">
              Have questions about your next adventure? We're here to help you plan the perfect journey.
            </p>
          </div>

          {/* Contact Information Grid - 4 Cards */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {/* Phone */}
            <div className="p-4 hover:bg-gray-50 transition-colors duration-300 flex flex-col items-center text-center border border-gray-200 bg-white">
              <div className="w-12 h-12 flex items-center justify-center mb-3 bg-black">
                <Phone size={20} className="text-white" />
              </div>
              <h3 className="text-[9px] font-semibold uppercase tracking-wider mb-1.5 text-black/40">
                Phone
              </h3>
              <a 
                href={`tel:${CONTACT.phoneRaw}`} 
                className="text-xs font-medium hover:transition-colors text-black"
              >
                {CONTACT.phone}
              </a>
            </div>

            {/* Email */}
            <div className="p-4 hover:bg-gray-50 transition-colors duration-300 flex flex-col items-center text-center border border-gray-200 bg-white">
              <div className="w-12 h-12 flex items-center justify-center mb-3 bg-black">
                <Mail size={20} className="text-white" />
              </div>
              <h3 className="text-[9px] font-semibold uppercase tracking-wider mb-1.5 text-black/40">
                Email
              </h3>
              <a 
                href={`mailto:${CONTACT.email}`} 
                className="text-xs font-medium hover:transition-colors break-all w-full text-black"
              >
                {CONTACT.email}
              </a>
            </div>

            {/* Address */}
            <div className="p-4 hover:bg-gray-50 transition-colors duration-300 flex flex-col items-center text-center border border-gray-200 bg-white">
              <div className="w-12 h-12 flex items-center justify-center mb-3 bg-black">
                <MapPin size={20} className="text-white" />
              </div>
              <h3 className="text-[9px] font-semibold uppercase tracking-wider mb-1.5 text-black/40">
                Address
              </h3>
              <p className="text-xs font-medium leading-relaxed text-black">
                Basement Plot Number 35<br />
                Sector 11, Dwarka<br />
                New Delhi, 110075
              </p>
            </div>

            {/* Support Hours */}
            <div className="p-4 hover:bg-gray-50 transition-colors duration-300 flex flex-col items-center text-center border border-gray-200 bg-white">
              <div className="w-12 h-12 flex items-center justify-center mb-3 bg-black">
                <Clock size={20} className="text-white" />
              </div>
              <h3 className="text-[9px] font-semibold uppercase tracking-wider mb-1.5 text-black/40">
                Support Hours
              </h3>
              <p className="text-xs font-medium text-black">
                {CONTACT.supportHours}
              </p>
            </div>
          </div>

          {/* Trust Badge */}
          <div className="max-w-7xl mx-auto p-6 text-white flex flex-wrap items-center justify-center gap-8 md:gap-12 mb-8 bg-black">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border border-white/30 flex items-center justify-center text-base font-bold">
                24/7
              </div>
              <span className="text-xs font-light uppercase tracking-wider opacity-70">Support</span>
            </div>
            
            <div className="hidden md:block w-px h-8 bg-white/20" />
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border border-white/30 flex items-center justify-center text-base font-bold">
                100%
              </div>
              <span className="text-xs font-light uppercase tracking-wider opacity-70">Satisfaction</span>
            </div>
            
            <div className="hidden md:block w-px h-8 bg-white/20" />
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border border-white/30 flex items-center justify-center text-base font-bold">
                ✓
              </div>
              <span className="text-xs font-light uppercase tracking-wider opacity-70">Verified</span>
            </div>
            
            <div className="hidden md:block w-px h-8 bg-white/20" />
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border border-white/30 flex items-center justify-center text-base font-bold">
                ★
              </div>
              <span className="text-xs font-light uppercase tracking-wider opacity-70">Premium</span>
            </div>
          </div>

          {/* Google Maps */}
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-semibold tracking-wider uppercase flex items-center gap-2 text-black">
                <MapPin size={14} className="text-black" />
                Find Us
              </h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleZoomOut}
                  className="p-1.5 text-white hover:opacity-80 transition-colors bg-black"
                  title="Zoom Out"
                >
                  <ZoomOut size={14} />
                </button>
                <span className="text-[10px] font-medium min-w-[30px] text-center text-black/60">
                  {mapZoom}x
                </span>
                <button
                  onClick={handleZoomIn}
                  className="p-1.5 text-white hover:opacity-80 transition-colors bg-black"
                  title="Zoom In"
                >
                  <ZoomIn size={14} />
                </button>
                <button
                  onClick={handleResetZoom}
                  className="p-1.5 transition-colors bg-gray-100 text-black"
                  title="Reset Zoom"
                >
                  <Maximize size={14} />
                </button>
                <div className="w-px h-6 bg-gray-200" />
                <a 
                  href={`https://www.google.com/maps/search/${encodeURIComponent(CONTACT.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-medium hover:transition-colors text-black"
                >
                  View on Maps →
                </a>
              </div>
            </div>
            <div className="h-64 sm:h-80 md:h-96 overflow-hidden relative bg-gray-100">
              <iframe
                src={mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Company Location - Basement Plot Number 35, Sector 11, Dwarka, New Delhi"
              />
            </div>
            <div className="mt-1 text-[9px] text-right text-black/30">
              Use + and - buttons to zoom, or scroll on the map
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
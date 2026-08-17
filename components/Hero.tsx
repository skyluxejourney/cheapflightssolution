"use client";

import { useState, useEffect } from "react";
import SearchEngine from "./SearchEngine";
import { Phone, Headphones } from "lucide-react";
import { CONTACT } from "@/app/constants";

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="object-cover w-full h-full"
        >
          <source src="/video/herobackgroundvid.mp4" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <img src="/images/herobackgroundimage.jpg" alt="Hero Background" className="object-cover w-full h-full" />
        </video>
        {/* Clean Dark Overlay - No Bluish Tint */}
      </div>

      {/* Premium Texture Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSIjZmZmIj48cGF0aCBkPSJNMzYgMzRjMCAxLjEuOSAyIDIgMnMyLS45IDItMi0uOS0yLTItMiAtMiAuOS0yIDJ6LTEyIDRjMCAxLjEuOSAyIDIgMnMyLS45IDItMi0uOS0yLTItMiAtMiAuOS0yIDJ6Ii8+PC9nPjwvc3ZnPg==')]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Heading - Two Lines Only with Shadow */}
          <h1 className="max-w-4xl mx-auto mb-3 sm:mb-5">
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight drop-shadow-[0_4px_30px_rgba(0,0,0,0.6)]">
              Ready for Takeoff?
            </span>
            <span className="relative inline-block">
              <span className="p-5 relative z-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-white leading-[1.1] tracking-tight italic drop-shadow-[0_4px_40px_rgba(0,0,0,0.7)]">
                Where Can We Fly You Today?
              </span>
              <span className="absolute -bottom-0.5 left-0 w-full h-1 bg-gradient-to-r from-white/30 to-white/5 rounded-full blur-sm" />
            </span>
          </h1>

          {/* Subtitle - Centered with Enhanced Shadow */}
          <p className="text-white italic text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-6 sm:mb-8 font-light tracking-wide leading-relaxed drop-shadow-[0_4px_30px_rgba(0,0,0,0.7)] drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
            Start your beautiful journey with cheapflightssolution.
          </p>

          {/* Search Engine Component */}
          <div className="relative z-20">
            <SearchEngine />
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Positioned at bottom of section */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/20 hover:text-white/50 transition-colors cursor-pointer z-10">
        <div className="w-4 h-6 border border-white/10 rounded-full flex justify-center p-1">
          <div className="w-0.5 h-1.5 bg-white/30 rounded-full animate-bounce" />
        </div>
      </div>

      {/* Professional Floating Call Widget - Fixed hover behavior and pointer events */}
      <div 
        className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-3"
        style={{ pointerEvents: 'none' }}
      >
        {/* Chat Card - Only appears when hovering the button directly */}
        <div
          className={`
            hidden sm:block
            w-[260px]
            rounded-sm
            border border-gray-200/80
            bg-white/95
            backdrop-blur-xl
            p-4
            shadow-[0_20px_60px_rgba(0,0,0,0.18)]
            transition-all duration-400 
            ease-[cubic-bezier(0.34,1.56,0.64,1)]
            will-change-transform
            ${isHovered 
              ? 'opacity-100 translate-x-0 scale-100 pointer-events-auto' 
              : 'opacity-0 translate-x-4 scale-95 pointer-events-none'
            }
          `}
        >
          <div className="flex items-start gap-3">
            {/* Support Icon */}
            <div className="relative mt-0.5 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 transition-transform duration-300 group-hover:scale-105">
              <span className="absolute inset-0 rounded-full bg-gray-800/20 animate-ping"></span>
              <Headphones className="relative z-10 h-5 w-5 text-gray-800 transition-transform duration-300 group-hover:rotate-12" />
            </div>

            {/* Text */}
            <div className="min-w-0 flex-1">
              <div className="mb-1 flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                </span>
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-500">
                  24/7 Call Assistance
                </p>
              </div>
              <p className="text-base font-bold text-gray-900 transition-colors duration-300">
                {CONTACT.phone}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-gray-500">
                Flight booking, changes and cancellations.
              </p>
            </div>
          </div>
        </div>

        {/* Circle Call Button */}
        <a
          href={`tel:${CONTACT.phoneRaw}`}
          aria-label="Call support"
          className="relative flex h-16 w-16 items-center justify-center rounded-full text-white shadow-[0_12px_32px_rgba(0,0,0,0.45)] transition-all duration-400 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-110 hover:shadow-[0_20px_45px_rgba(0,0,0,0.55)] focus:outline-none focus:ring-4 focus:ring-gray-800/30 active:scale-95 will-change-transform bg-gradient-to-r from-gray-800 to-gray-600"
          style={{ pointerEvents: 'auto' }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Wave Rings */}
          <span className="absolute inset-0 rounded-full border-2 border-gray-800/60 animate-[ping_2s_ease-in-out_infinite]"></span>
          <span className="absolute inset-[-4px] rounded-full border-2 border-gray-800/40 animate-[pulse_2.5s_ease-in-out_infinite_0.5s]"></span>
          <span className="absolute inset-[-8px] rounded-full border-2 border-gray-800/25 animate-[pulse_3s_ease-in-out_infinite_1s]"></span>
          
          {/* Inner Circle */}
          <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/12 backdrop-blur-md border border-white/20 group-hover:bg-white/20 transition-all duration-300">
            <Phone className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
          </span>

          {/* Hover glow */}
          <span className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-800/0 to-gray-600/0 group-hover:from-gray-800/30 group-hover:to-gray-600/30 transition-all duration-500 blur-xl"></span>
        </a>
      </div>
    </section>
  );
}
"use client";

import SearchEngine from "./SearchEngine";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      {/* Background Image with Clean Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/herobackgroundimage.jpg"
          alt="Modern Air Travel - Premium Flight Experience"
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
        {/* Clean Dark Overlay - No Bluish Tint */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Premium Texture Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSIjZmZmIj48cGF0aCBkPSJNMzYgMzRjMCAxLjEuOSAyIDIgMnMyLS45IDItMi0uOS0yLTItMiAtMiAuOS0yIDJ6LTEyIDRjMCAxLjEuOSAyIDIgMnMyLS45IDItMi0uOS0yLTItMiAtMiAuOS0yIDJ6Ii8+PC9nPjwvc3ZnPg==')]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Heading - Two Lines Only */}
          <h1 className="max-w-4xl mx-auto mb-3 sm:mb-5">
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
              Discover the World's
            </span>
            <span className="relative inline-block">
              <span className="relative z-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-white leading-[1.1] tracking-tight italic">
                Best Travel Experiences
              </span>
              <span className="absolute -bottom-0.5 left-0 w-full h-1 bg-gradient-to-r from-white/30 to-white/5 rounded-full blur-sm" />
            </span>
          </h1>

          {/* Subtitle - Centered */}
          <p className="text-white/60 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-6 sm:mb-8 font-light tracking-wide leading-relaxed">
            Curated luxury journeys to the most breathtaking destinations.
            <br className="hidden sm:block" />
            Let us craft your perfect escape.
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
    </section>
  );
}
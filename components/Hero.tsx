"use client";

import SearchEngine from "./SearchEngine";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 sm:pt-24">
      {/* Background Image with Vintage Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop')`,
          }}
        />
        {/* Vintage Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/70 via-[#111111]/60 to-[#111111]/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/50 via-transparent to-[#111111]/30" />
        <div className="absolute inset-0 bg-[#111111]/20" />
      </div>

      {/* Vintage Texture Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSIjZmZmIj48cGF0aCBkPSJNMzYgMzRjMCAxLjEgLjkgMiAyIDJzMi0uOSAyLTItLjktMi0yLTIgLTIgLjktMiAyei0xMiA0YzAgMS4xLjkgMiAyIDJzMi0uOSAyLTItLjktMi0yLTIgLTIgLjktMiAyeiIvPjwvZz48L3N2Zz4=')]" />

      {/* Decorative Gold Accents */}
      <div className="absolute top-0 right-0 w-1/2 h-2/3 bg-[#AF935B]/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-[#725B29]/5 blur-3xl rounded-full translate-y-1/2 -translate-x-1/4" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#AF935B]/[0.03] rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Heading - Two Lines Only */}
          <h1 className="max-w-4xl mx-auto mb-3 sm:mb-5">
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
              Discover the World's
            </span>
            <span className="relative inline-block">
              <span className="relative z-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#AF935B] via-[#D4B87A] to-[#AF935B] leading-[1.1] tracking-tight">
                Best Travel Experiences
              </span>
              <span className="absolute -bottom-0.5 left-0 w-full h-1 bg-gradient-to-r from-[#AF935B]/50 to-[#AF935B]/10 rounded-full blur-sm" />
            </span>
          </h1>

          {/* Subtitle - Centered */}
          <p className="text-white/70 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-6 sm:mb-8 font-light tracking-wide leading-relaxed">
            Curated luxury journeys to the most breathtaking destinations.
            <br className="hidden sm:block" />
            Let us craft your perfect escape.
          </p>

          {/* Search Engine Component */}
          <div className="relative z-20 ">
            <SearchEngine />
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Positioned at bottom of section */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/25 hover:text-white/50 transition-colors cursor-pointer z-10">
    
        <div className="w-4 h-6 border border-white/15 rounded-full flex justify-center p-1">
          <div className="w-0.5 h-1.5 bg-white/30 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
"use client";

import Image from "next/image";
import SearchEngine from "@/components/SearchEngine";
import heroImage from "@/public/images/skyluxe-hero-banner.jpg";

interface AirlineHeroProps {
  airlineName: string;
}

export default function AirlineHero({ airlineName }: AirlineHeroProps) {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-20 sm:pt-24">
      {/* Background Image with Clean Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/herobackground.jpg"
          alt={`${airlineName} flights - Ticket to Europe`}
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content - Left Aligned & Full Width */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="w-full text-left">
          <h1 className="mb-4 sm:mb-5">
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.2] tracking-tight">
              Need Help With a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A8BCF] via-[#7BAEE0] to-[#4A8BCF] italic whitespace-nowrap">
                {airlineName}
              </span>
              <span className="text-white"> Airlines</span>
              <br />
              <span className="text-white">Change, Cancellation & Upgrades?</span>
            </span>
          </h1>

          <p className="text-white/80 text-sm sm:text-base md:text-lg w-full mb-6 sm:mb-8 font-light tracking-wide leading-relaxed max-w-none">
            TickettoEurope is an independent travel agency. Our agents can help you understand {airlineName} Airlines' published change, cancellation, name-correction, and upgrade policies so you can decide on the right next step for your trip.
          </p>

          {/* Search Engine Component */}
          <div className="relative z-20">
            <SearchEngine />
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";

import { Users, DollarSign, Lock, Shield, Award, Headphones } from "lucide-react";

export default function WhyTrustSection() {
  const trustFeatures = [
    {
      icon: Users,
      title: "Team of Travel Professionals",
      description: "Our travel experts are available around the clock to assist with your flight bookings.",
    },
    {
      icon: DollarSign,
      title: "Best Price Guaranteed",
      description: "Say Goodbye to Expensive Flights – Grab Budget-Friendly Tickets Today.",
    },
    {
      icon: Lock,
      title: "Secure Payment",
      description: "Experience hassle-free and secure flight bookings with our user-friendly platform.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:pt-20 lg:py-5 bg-[#F5F9FF]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Heading - Left Aligned */}
          <div className="mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0A1628] leading-tight">
              Why Millions Trust
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A3A6B] to-[#4A8BCF]">
                Skyluxe Journey
              </span>
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-[#1A3A6B] to-[#4A8BCF] rounded-full mt-3" />
          </div>

          {/* Three Small Cards in a Row - Attached to each other with  */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {trustFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={`
                    group
                    bg-white
                    p-5 sm:p-6
                    transition-all duration-300
                    hover:bg-[#F5F9FF]
                    border-r border-[#E2E8F0]
                    
                    hover:shadow-xl
                    hover:z-10
                    relative
                    hover:border-[#4A8BCF]/30
                  `}
                >
                  {/* Icon on the left */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10  bg-[#E8F0FE] text-[#1A3A6B] flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-[#1A3A6B] group-hover:to-[#4A8BCF] group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-lg">
                        <Icon size={20} />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm sm:text-base font-bold text-[#0A1628] mb-1 group-hover:text-[#1A3A6B] transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#0A1628]/70 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
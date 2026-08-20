"use client";

import { Users, DollarSign, Lock, Shield, Award, Headphones } from "lucide-react";
import {BRAND } from "@/app/constants";

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
    <section className="py-12 sm:py-16 lg:pt-20 lg:py-5 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-auto mx-auto">
          {/* Heading - Left Aligned */}
          <div className="mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black leading-tight">
              Why Millions Trust
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-600">
                {BRAND.name}
              </span>
            </h2>
            <div className="w-12 h-1 bg-black rounded-full mt-3" />
          </div>

          {/* Three Small Cards in a Row - Attached to each other */}
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
                    hover:bg-white
                    border-r border-[#E2E8F0]
                    hover:shadow-xl
                    hover:z-10
                    relative
                    hover:border-black/30
                  `}
                >
                  {/* Icon on the left */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-white border border-black/10 text-black flex items-center justify-center group-hover:bg-black group-hover:text-white group-hover:border-black transition-all duration-300 shadow-sm group-hover:shadow-lg">
                        <Icon size={20} />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm sm:text-base font-bold text-black mb-1 group-hover:text-black transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-black/70 leading-relaxed group-hover:text-black/80 transition-colors duration-300">
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
"use client";

import { Phone, ArrowRight, Star, Users, Shield, Tag, Sparkles } from "lucide-react";
import { COMPANY, CONTACT } from "@/app/constants";

export default function ExclusiveDealsPoster() {
  // Use static positions instead of Math.random() to avoid hydration mismatches
  const particles = [
    { left: "10%", top: "20%", delay: "0s", duration: "4s" },
    { left: "25%", top: "45%", delay: "0.5s", duration: "5s" },
    { left: "40%", top: "15%", delay: "1s", duration: "3.5s" },
    { left: "55%", top: "60%", delay: "1.5s", duration: "4.5s" },
    { left: "70%", top: "25%", delay: "0.3s", duration: "5.5s" },
    { left: "85%", top: "50%", delay: "0.8s", duration: "4s" },
    { left: "15%", top: "75%", delay: "1.2s", duration: "3s" },
    { left: "35%", top: "85%", delay: "0.6s", duration: "6s" },
    { left: "50%", top: "35%", delay: "1.8s", duration: "4.2s" },
    { left: "65%", top: "80%", delay: "0.2s", duration: "5s" },
    { left: "80%", top: "15%", delay: "0.9s", duration: "3.8s" },
    { left: "5%", top: "50%", delay: "1.4s", duration: "4.7s" },
    { left: "45%", top: "70%", delay: "0.7s", duration: "5.2s" },
    { left: "75%", top: "40%", delay: "1.1s", duration: "3.3s" },
    { left: "95%", top: "30%", delay: "0.4s", duration: "4.8s" },
    { left: "20%", top: "10%", delay: "1.6s", duration: "5.8s" },
    { left: "60%", top: "90%", delay: "0.1s", duration: "3.9s" },
    { left: "30%", top: "55%", delay: "1.3s", duration: "4.3s" },
    { left: "88%", top: "70%", delay: "0.5s", duration: "5.1s" },
    { left: "12%", top: "90%", delay: "0.8s", duration: "4.6s" },
  ];

  return (
    <section className="py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-r from-black via-[#1a1a1a] to-[#333333] overflow-hidden shadow-2xl">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gray-500 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gray-400 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gray-500 rounded-full blur-3xl" />
          </div>

          {/* Static Particles - No Math.random() */}
          <div className="absolute inset-0 overflow-hidden">
            {particles.map((particle, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
                style={{
                  left: particle.left,
                  top: particle.top,
                  animationDelay: particle.delay,
                  animationDuration: particle.duration,
                }}
              />
            ))}
          </div>

          <div className="relative flex flex-col lg:flex-row items-stretch">
            {/* Left Content */}
            <div className="flex-1 p-6 sm:p-8 lg:p-10 xl:p-12 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-4">
                <Sparkles size={16} className="text-gray-300" />
                <span className="text-white text-xs sm:text-sm font-semibold tracking-wider uppercase">
                  Exclusive Savings
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white !text-white mb-4 leading-tight">
                Save Up to{" "}
                <span className="text-gray-300 relative">
                  20%
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-gray-300/30 rounded-full blur-sm" />
                </span>
              </h2>

              <p className="text-white/90 !text-white/90 text-sm sm:text-base lg:text-lg max-w-lg mx-auto lg:mx-0 mb-6">
                Call now and let our professional agents book your ticket at the best price.
                Limited time offer – don't miss out!
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 mb-6">
                <div className="flex items-center gap-2 text-white/80 !text-white/80">
                  <Star size={16} className="text-yellow-400 fill-yellow-400" />
                  <span className="text-sm font-medium">4.9/5 Rating</span>
                </div>
                <div className="flex items-center gap-2 text-white/80 !text-white/80">
                  <Users size={16} className="text-white/80" />
                  <span className="text-sm font-medium">2.5M+ Bookings</span>
                </div>
                <div className="flex items-center gap-2 text-white/80 !text-white/80">
                  <Shield size={16} className="text-white/80" />
                  <span className="text-sm font-medium">Secure Payment</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <a
                  href={`tel:${CONTACT.phoneRaw}`}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-5 sm:px-6 py-3 w-full sm:w-auto hover:bg-white/20 transition-colors border border-white/20"
                >
                  <Phone size={20} className="text-gray-300 animate-pulse" />
                  <span className="text-white !text-white font-bold text-base sm:text-lg tracking-wider">
                    {CONTACT.phone}
                  </span>
                </a>
                <a
                  href={`tel:${CONTACT.phoneRaw}`}
                  className="bg-gray-200 text-black !text-black px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-gray-300 transition-all duration-300 shadow-lg shadow-black/40 hover:shadow-xl hover:shadow-black/50 whitespace-nowrap w-full sm:w-auto flex items-center justify-center gap-2"
                >
                  <span>Call Now</span>
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>

            {/* Right Image - New exclusive deals image */}
            <div className="relative lg:w-1/2 min-h-[200px] sm:min-h-[250px] lg:min-h-[300px] xl:min-h-[350px]">
              <img
                src="/images/exclusivediscount.jpg"
                alt="Exclusive Travel Deals"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-black/60 to-transparent" />
              
              {/* Floating Savings Badge */}
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-white p-2 sm:p-3 shadow-xl">
                <div className="bg-black px-4 sm:px-6 py-2 sm:py-3 text-white text-center">
                  <div className="text-xs sm:text-sm font-bold">Save Up To</div>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold">20%</div>
                </div>
              </div>

              {/* Destination Tag */}
              <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm px-4 py-2">
                <div className="flex items-center gap-2 text-white text-xs sm:text-sm">
                  <Tag size={14} className="text-gray-300" />
                  <span>Exclusive Deals Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0) translateX(0) rotate(0deg); 
            opacity: 0.3; 
          }
          25% { 
            transform: translateY(-10px) translateX(5px) rotate(5deg); 
            opacity: 0.6; 
          }
          50% { 
            transform: translateY(0) translateX(-5px) rotate(0deg); 
            opacity: 0.3; 
          }
          75% { 
            transform: translateY(10px) translateX(5px) rotate(-5deg); 
            opacity: 0.6; 
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
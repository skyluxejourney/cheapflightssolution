"use client";

import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Compass,
  PhoneCall,
} from "lucide-react";

const navItems = [
  { name: "FLIGHTS" },
  { name: "HOTELS" },
  { name: "LIVE HELP?" },
  { name: "BLOG" },
  { name: "MY RESERVATION" },
  { name: "CUSTOMER SUPPORT" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 px-4 sm:px-6
        transition-all duration-500 ease-in-out
        ${scrolled ? "pt-2 sm:pt-3" : "pt-4 sm:pt-6"}
      `}
    >
      <div
        className={`
          max-w-7xl
          mx-auto
          rounded-2xl sm:rounded-full
          border
          transition-all
          duration-500
          ease-in-out
          ${
            scrolled
              ? "border-white/30 bg-[#F8F5EF]/95 backdrop-blur-xl shadow-2xl py-0"
              : "border-white/20 bg-[#F8F5EF]/80 backdrop-blur-xl shadow-lg"
          }
        `}
      >
        <div
          className={`
            flex items-center justify-between px-4 sm:px-6
            transition-all duration-500 ease-in-out
            ${scrolled ? "py-2 sm:py-2.5" : "py-3 sm:py-4"}
          `}
        >
          {/* LOGO - Unique & Professional */}
          <div className="flex items-center gap-3 sm:gap-4 group cursor-pointer">
            <div className="relative">
              {/* Outer ring */}
              <div
                className={`
                  absolute inset-0 rounded-full
                  bg-gradient-to-br from-[#AF935B]/30 to-[#725B29]/20
                  blur-md transition-all duration-500
                  group-hover:blur-lg group-hover:scale-110
                `}
              />
              {/* Main logo circle */}
              <div
                className={`
                  relative
                  rounded-full
                  bg-gradient-to-br from-[#AF935B] to-[#725B29]
                  flex items-center justify-center
                  text-white font-bold
                  shadow-lg
                  transition-all duration-500 ease-in-out
                  ${
                    scrolled
                      ? "w-9 h-9 sm:w-10 sm:h-10"
                      : "w-10 h-10 sm:w-12 sm:h-12"
                  }
                `}
              >
                <Compass
                  size={scrolled ? 16 : 20}
                  className="sm:w-5 sm:h-5 transition-all duration-500 group-hover:rotate-45"
                />
                {/* Small accent dot */}
                <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-[#F8F5EF] rounded-full border border-[#AF935B]" />
              </div>
            </div>

            <div>
              <h1
                className={`
                  font-heading
                  font-bold
                  text-[#111111]
                  tracking-tight
                  leading-tight
                  transition-all duration-500 ease-in-out
                  relative
                  ${scrolled ? "text-lg sm:text-xl" : "text-xl sm:text-2xl"}
                `}
              >
                Skyluxe
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-[#AF935B] to-[#725B29] transition-all duration-500 group-hover:w-full" />
              </h1>
              <p
                className={`
                  font-body
                  text-[#725B29]
                  leading-tight
                  font-medium
                  tracking-[0.3em]
                  uppercase
                  transition-all duration-500 ease-in-out
                  ${scrolled ? "text-[8px] sm:text-[10px]" : "text-[10px] sm:text-xs"}
                `}
              >
                Luxury Journey
              </p>
            </div>
          </div>

          {/* DESKTOP NAV - Centered with small text, no icons */}
          <nav className="hidden xl:flex items-center justify-center flex-1 gap-0.5 lg:gap-1 xl:gap-2 px-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                className={`
                  group
                  flex items-center
                  font-body
                  font-medium
                  text-[#111111]
                  hover:text-[#AF935B]
                  transition-all
                  duration-200
                  px-2.5 lg:px-3
                  py-1.5
                  rounded-full
                  hover:bg-[#AF935B]/10
                  ${scrolled ? "text-[9px] lg:text-[10px]" : "text-[10px] lg:text-[11px]"}
                  tracking-wider
                  relative
                `}
              >
                {item.name}
                <span className="absolute inset-x-2.5 -bottom-0.5 h-0.5 bg-[#AF935B] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
              </button>
            ))}
          </nav>

          {/* RIGHT SIDE - Call Only Deals with Black Background */}
          <div className="hidden md:flex items-center gap-3 sm:gap-4">
            <a
              href="tel:+18888450220"
              className={`
                flex items-center gap-3 sm:gap-4
                bg-black
                hover:bg-[#1a1a1a]
                transition-all duration-300
                rounded-full
                border border-[#AF935B]/30
                ${scrolled ? "px-3 sm:px-4 py-1.5 sm:py-2" : "px-4 sm:px-5 py-2 sm:py-2.5"}
                cursor-pointer
                hover:scale-105 active:scale-95
                group
                shadow-lg
              `}
            >
              {/* Image/Icon section */}
              <div className="flex-shrink-0">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-[#AF935B] to-[#725B29] flex items-center justify-center shadow-lg">
                  <PhoneCall
                    size={scrolled ? 14 : 16}
                    className="text-white"
                  />
                </div>
              </div>
              
              {/* Text section with phone number on second line */}
              <div className="flex flex-col">
                <span
                  className={`
                    font-body
                    font-medium
                    text-white/90
                    transition-all duration-300
                    ${scrolled ? "text-[10px] sm:text-xs" : "text-xs sm:text-sm"}
                  `}
                >
                  Call Only Deals
                </span>
                <span
                  className={`
                    font-body
                    font-bold
                    text-[#AF935B]
                    transition-all duration-300
                    ${scrolled ? "text-[10px] sm:text-xs" : "text-xs sm:text-sm"}
                    group-hover:text-[#D4B87A]
                  `}
                >
                  +1-888-845-0220
                </span>
              </div>
            </a>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="
              xl:hidden
              text-[#111111]
              hover:text-[#AF935B]
              transition-colors
              p-1.5
              rounded-full
              hover:bg-[#AF935B]/10
            "
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div
            className="
              xl:hidden
              px-4 sm:px-6
              pb-4 sm:pb-6
              space-y-1
              animate-in
              slide-in-from-top-2
              duration-200
            "
          >
            <div className="pt-2 border-t border-[#AF935B]/10">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  className="
                    w-full
                    flex items-center gap-3
                    text-[#111111]
                    hover:text-[#AF935B]
                    hover:bg-[#AF935B]/5
                    px-3 py-3
                    rounded-xl
                    transition-all
                    duration-200
                    font-body
                    text-xs
                    font-semibold
                    tracking-wider
                  "
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </button>
              ))}
              <div className="mt-3 pt-3 border-t border-[#AF935B]/10">
                <a
                  href="tel:+18888450220"
                  className="flex items-center gap-3 bg-black rounded-xl px-4 py-3 hover:bg-[#1a1a1a] transition-colors border border-[#AF935B]/20"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#AF935B] to-[#725B29] flex items-center justify-center flex-shrink-0">
                    <PhoneCall size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="font-body text-xs font-medium text-white/60">
                      Call Only Deals
                    </p>
                    <p className="font-body text-sm font-bold text-[#AF935B]">
                      +1-888-845-0220
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
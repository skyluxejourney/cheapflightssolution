"use client";

import { useState, useEffect } from "react";
import {
  Menu,
  X,
  PhoneCall,
  Phone,
} from "lucide-react";
import ContactModal from "./ContactModal";
import Link from "next/link";
import Image from "next/image";
import { COMPANY, CONTACT, BRAND } from "@/app/constants";

const navItems = [
  { name: "FLIGHTS", isActive: true },
  { name: "LIVE HELP?" },
  { name: "BLOG" },
  { name: "CUSTOMER SUPPORT" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedTab, setSelectedTab] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (item: { name: string; isActive?: boolean }) => {
    if (item.isActive) {
      return;
    }
    
    setSelectedTab(item.name);
    setShowModal(true);
    
    if (open) {
      setOpen(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedTab("");
  };

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 w-full z-50
          transition-all duration-500 ease-in-out
          ${scrolled ? "py-0" : "py-0"}
        `}
      >
        <div
          className={`
          w-full transition-all duration-500 ease-in-out
            ${
              scrolled
                ? "bg-black/95 backdrop-blur-xl shadow-2xl"
                : "bg-black/90 backdrop-blur-xl shadow-lg"
            }
          `}
        >
          <div
            className={`
              flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12
              transition-all duration-500 ease-in-out
              ${scrolled ? "py-2 sm:py-3" : "py-3 sm:py-4"}
            `}
          >
            {/* LOGO */}
            <Link href="/" className="flex items-center gap-2 sm:gap-3 md:gap-3 group cursor-pointer flex-shrink-0">
              <div className="relative flex-shrink-0">
                <Image
                  src={BRAND.logo}
                  alt={BRAND.name}
                  width={scrolled ? 32 : 36}
                  height={scrolled ? 32 : 48}
                  className="transition-all invert duration-500 group-hover:scale-105 group-hover:rotate-6"
                  priority
                />
              </div>

              <div>
                <h1
                  className={`
                    font-heading
                    font-bold
                    italic
                    text-white
                    tracking-tight
                    leading-tight
                    transition-all duration-500 ease-in-out
                    relative
                    ${scrolled ? "text-sm sm:text-base" : "text-base sm:text-lg md:text-xl"}
                  `}
                >
                  {BRAND.name}
                </h1>
               
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden xl:flex items-center justify-center flex-1 gap-1.5 lg:gap-3 xl:gap-4 px-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className={`
                    group
                    flex items-center
                    font-body
                    font-medium
                    transition-all
                    duration-200
                    px-1.5 lg:px-2.5
                    py-1
                    rounded-none
                    hover:bg-transparent
                    ${scrolled ? "text-[7px] lg:text-[8px] xl:text-[10px]" : "text-[8px] lg:text-[9px] xl:text-[12px]"}
                    tracking-wider
                    relative
                    ${
                      item.isActive
                        ? "text-white bg-transparent"
                        : "text-white/70 hover:text-white"
                    }
                  `}
                >
                  {item.name}
                  {item.isActive && (
                    <span className="absolute inset-x-2 -bottom-0.5 h-0.5 bg-white" />
                  )}
                  {!item.isActive && (
                    <span className="absolute inset-x-2 -bottom-0.5 h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                  )}
                </button>
              ))}
            </nav>

            {/* RIGHT SIDE - Call Only Deals */}
            <div className="hidden xl:flex items-center gap-2 sm:gap-3">
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className={`
                  flex items-center gap-1.5 sm:gap-2 md:gap-3
                  bg-gradient-to-r from-white/10 to-white/5
                  hover:from-white/20 hover:to-white/10
                  transition-all duration-300
                  rounded-full
                  border border-white/20
                  ${scrolled ? "px-2 sm:px-3 py-1 sm:py-1.5" : "px-2.5 sm:px-3.5 py-1.5 sm:py-2"}
                  cursor-pointer
                  hover:scale-105 active:scale-95
                  group
                  shadow-lg
                  shadow-black/20
                `}
              >
                <div className="flex-shrink-0">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-white/30 to-white/10 flex items-center justify-center shadow-lg">
                    <Phone
                      size={scrolled ? 10 : 12}
                      className="text-white sm:w-3 sm:h-3"
                    />
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <span
                    className={`
                      font-body
                      font-bold
                      text-white/80
                      transition-all duration-300
                      ${scrolled ? "text-[6px] sm:text-[7px]" : "text-[7px] sm:text-[8px]"}
                    `}
                  >
                    Call Only Deals
                  </span>
                  <span
                    className={`
                      font-body
                      font-bold
                      text-white/60
                      transition-all duration-300
                      ${scrolled ? "text-[6px] sm:text-[7px]" : "text-[7px] sm:text-[8px]"}
                      group-hover:text-white/80
                    `}
                  >
                    {CONTACT.phone}
                  </span>
                </div>
              </a>
            </div>

            {/* MOBILE/TABLET BUTTON */}
            <button
              onClick={() => setOpen(!open)}
              className="
                xl:hidden
                text-white
                hover:text-white/80
                transition-colors
                p-1
                rounded-full
                hover:bg-white/10
                flex-shrink-0
              "
              aria-label="Toggle menu"
            >
              {open ? <X size={18} className="sm:w-5 sm:h-5" /> : <Menu size={18} className="sm:w-5 sm:h-5" />}
            </button>
          </div>

          {/* MOBILE MENU */}
          {open && (
            <div
              className="
                xl:hidden
                px-4 sm:px-6 md:px-8
                pb-4 sm:pb-6
                space-y-1
                animate-in
                slide-in-from-top-2
                duration-200
                bg-black/95
                backdrop-blur-xl
              "
            >
              <div className="pt-2 border-t border-white/10">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => {
                      handleNavClick(item);
                    }}
                    className={`
                      w-full
                      flex items-center gap-3
                      transition-all
                      duration-200
                      px-3 py-2.5 sm:py-3
                      rounded-xl
                      font-body
                      text-xs sm:text-sm
                      font-semibold
                      tracking-wider
                      ${
                        item.isActive
                          ? "text-white bg-transparent"
                          : "text-white/70 hover:text-white hover:bg-white/5"
                      }
                    `}
                  >
                    {item.name}
                    {item.isActive && (
                      <span className="ml-auto w-1.5 h-1.5 rounded-full bg-white" />
                    )}
                  </button>
                ))}
                
                <div className="mt-3 pt-3 border-t border-white/10">
                  <a
                    href={`tel:${CONTACT.phoneRaw}`}
                    className="flex items-center gap-3 bg-gradient-to-r from-white/10 to-white/5 rounded-xl px-4 py-3 hover:from-white/20 hover:to-white/10 transition-all duration-300 border border-white/10"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-white/30 to-white/10 flex items-center justify-center flex-shrink-0">
                      <Phone size={14} className="text-white" />
                    </div>
                    <div>
                      <p className="font-body text-[10px] font-medium text-white/60">
                        Call Only Deals
                      </p>
                      <p className="font-body text-xs font-bold text-white/80">
                        {CONTACT.phone}
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={showModal}
        onClose={closeModal}
        selectedItem={selectedTab}
      />
    </>
  );
}
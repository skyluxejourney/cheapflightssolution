"use client";

import { Phone, Mail, Ticket, PhoneCall, X as XIcon } from "lucide-react";
import { COMPANY, CONTACT } from "@/app/constants";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedItem?: string;
}

export default function ContactModal({ isOpen, onClose, selectedItem = "" }: ContactModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center px-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white  max-w-md w-full shadow-2xl animate-in slide-in-from-bottom-4 duration-300 border border-[#E2E8F0]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-10"
        >
          <XIcon size={24} />
        </button>

        {/* Header */}
        <div className="bg-black p-6 text-white">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2 ">
              <Ticket size={24} className="text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold !text-white">
                Contact Us
              </h3>
              <p className="text-white/80 text-sm">
                Book Your Ticket - Get in touch with us
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="text-center mb-6">
            <p className="text-black/70 text-sm leading-relaxed">
              Our team is ready to assist you with any questions about{" "}
              <span className="font-semibold text-black">{selectedItem}</span>.
              Call us now for immediate support!
            </p>
          </div>

          {/* Contact Options */}
          <div className="space-y-3">
            {/* Phone */}
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="flex items-center gap-4 p-4 bg-gray-50  hover:bg-gray-100 transition-all duration-300 group border border-[#E2E8F0] hover:border-black/30"
            >
              <div className="bg-black p-3  text-white shadow-lg shadow-black/20 group-hover:shadow-black/30 transition-shadow">
                <Phone size={20} />
              </div>
              <div className="flex-1">
                <p className="text-xs text-black/60">Call Us Now</p>
                <p className="text-sm font-semibold text-black group-hover:text-black transition-colors">
                  {CONTACT.phone}
                </p>
              </div>
              <PhoneCall size={16} className="text-black opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            {/* Email */}
            <a
              href={`mailto:${COMPANY.email}`}
              className="flex items-center gap-4 p-4 bg-gray-50  hover:bg-gray-100 transition-all duration-300 group border border-[#E2E8F0] hover:border-black/30"
            >
              <div className="bg-black p-3  text-white shadow-lg shadow-black/20 group-hover:shadow-black/30 transition-shadow">
                <Mail size={20} />
              </div>
              <div className="flex-1">
                <p className="text-xs text-black/60">Email Us</p>
                <p className="text-sm font-semibold text-black group-hover:text-black transition-colors">
                  {COMPANY.email}
                </p>
              </div>
            </a>
          </div>

          {/* Special Note */}
          <div className="mt-6 p-4 bg-gray-100  border border-black/20">
            <p className="text-xs text-black/70 text-center">
              {CONTACT.supportHours} for all your travel needs
            </p>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="w-full mt-4 bg-gray-50 hover:bg-gray-100 text-black font-semibold py-3  transition-colors border border-[#E2E8F0]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
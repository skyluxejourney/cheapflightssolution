"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Phone, HelpCircle } from "lucide-react";
import type { AirlineData } from "../constants";

interface AirlineFAQProps {
  airline: AirlineData;
}

export default function AirlineFAQ({ airline }: AirlineFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Get data from airline object
  const airlineName = airline.airline.name;
  const phoneNumber = airline.airline.phoneNumber || "+1-888-845-0220";
  
  // Get ONLY non-policy FAQs (general questions)
  const generalFaqs = airline.faqs.filter((faq) => {
    const question = faq.question.toLowerCase();
    return (
      !question.includes('policy') &&
      !question.includes('change') &&
      !question.includes('cancel') &&
      !question.includes('reschedule') &&
      !question.includes('refund') &&
      !question.includes('fee') &&
      !question.includes('same-day') &&
      !question.includes('modification') &&
      !question.includes('difference') &&
      !question.includes('fare type') &&
      !question.includes('class') &&
      !question.includes('fare')
    );
  });

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // If no general FAQs, don't render the section
  if (generalFaqs.length === 0) {
    return null;
  }

  return (
    <section className="py-4 sm:py-6 bg-white border-t border-[#E2E8F0]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Left Aligned */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <HelpCircle className="w-5 h-5 text-black" />
            <span className="text-xs font-semibold text-black uppercase tracking-wider">
              FAQ
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-black">
            Frequently Asked Questions
          </h2>
          <p className="text-black/60 text-sm mt-1">
            Find answers to the most common questions about {airlineName} flights
          </p>
          <div className="w-12 h-0.5 bg-black mt-2" />
        </div>

        {/* FAQ List - Full Width */}
        <div className="space-y-2">
          {generalFaqs.map((faq, index) => (
            <div
              key={index}
              className={`
                bg-gray-50 border border-[#E2E8F0] 
                transition-all duration-300 overflow-hidden
                ${openIndex === index ? 'border-black shadow-md' : 'hover:border-black/30 hover:shadow-sm'}
              `}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 sm:px-5 py-3 flex items-center justify-between gap-4 text-left"
              >
                <span className="text-sm sm:text-base font-semibold text-black flex-1">
                  {faq.question}
                </span>
                <span className={`
                  flex-shrink-0 w-7 h-7 flex items-center justify-center
                  transition-all duration-300
                  ${openIndex === index 
                    ? 'bg-black text-white' 
                    : 'bg-gray-100 text-black'
                  }
                `}>
                  {openIndex === index ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronDown size={16} />
                  )}
                </span>
              </button>
              
              {openIndex === index && (
                <div className="px-4 sm:px-5 pb-4">
                  <div className="pt-3 border-t border-[#E2E8F0]">
                    <p className="text-sm text-black/70 leading-relaxed">
                      {faq.answer}
                    </p>
                    <div className="mt-3 flex items-center gap-2 text-xs text-black">
                      <Phone size={14} />
                      <span>Need help? Call us: </span>
                      <a 
                        href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                        className="font-semibold hover:text-gray-600 transition-colors"
                      >
                        {phoneNumber}
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-6 text-left">
          <p className="text-sm text-black/60">
            Still have questions? Our travel experts are here to help you 24/7
          </p>
          <a
            href={`tel:${phoneNumber.replace(/\s/g, '')}`}
            className="inline-flex items-center gap-2 mt-2 px-5 py-2.5 bg-black text-white font-semibold hover:bg-black/90 transition-all duration-300 shadow-lg shadow-black/20"
          >
            <Phone size={16} />
            Call Us Now: {phoneNumber}
          </a>
        </div>
      </div>
    </section>
  );
}
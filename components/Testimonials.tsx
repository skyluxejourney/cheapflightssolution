"use client";

import { Star, Quote, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { BRAND } from "@/app/constants"; 

export default function TestimonialsSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York, USA",
      shortText: `Absolutely incredible experience! ${BRAND.name} made our dream vacation to Bali seamless.`,
      fullText: `Absolutely incredible experience! ${BRAND.name} made our dream vacation to Bali seamless. The attention to detail was outstanding and the booking process was so smooth. From the moment we booked until we returned home, everything was perfectly organized. The team went above and beyond to ensure we had the best experience possible. I can't recommend them enough!`,
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "London, UK",
      shortText: `I've booked over 10 trips with ${BRAND.name} and every single one was perfect.`,
      fullText: `I've booked over 10 trips with ${BRAND.name} and every single one was perfect. Their customer support is unmatched and they always find the best deals. The prices are competitive, the service is exceptional, and the entire experience is stress-free. Whether it's a quick weekend getaway or a month-long adventure, they never disappoint. They've earned a customer for life!`,
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Davis",
      location: "Sydney, Australia",
      shortText: `From booking to returning home, everything was handled perfectly.`,
      fullText: `From booking to returning home, everything was handled perfectly. I'll never travel with anyone else. Highly recommend ${BRAND.name} to everyone! The team is professional, responsive, and genuinely cares about their customers. They made our family vacation unforgettable and we've already booked our next trip with them. If you're looking for a travel agency you can trust, look no further.`,
      rating: 5,
    },
  ];

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="py-8 sm:py-10 lg:py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Heading - Left Aligned */}
          <div className="mb-4">
            <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-1.5 mb-4">
              <Quote size={16} className="text-black" />
              <span className="text-black text-xs sm:text-sm font-semibold tracking-wider uppercase">
                Testimonials
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black leading-tight">
              What Our Customers Say About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-600">
                {BRAND.name}
              </span>
            </h2>
            <div className="w-12 h-1 bg-black mt-3" />
          </div>

          {/* Content - Left Aligned */}
          <div className="mb-6 sm:mb-8">
            <p className="text-black/70 text-sm sm:text-base max-w-2xl">
              Nothing speaks louder than the voices of our happy travelers. Here's
              what real customers are saying about their experience booking with us.
            </p>
          </div>
        </div>

        {/* Three Testimonial Cards */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gray-50 p-5 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-black/30 border border-[#E2E8F0]"
              >
                {/* Rating Stars */}
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-black fill-black"
                    />
                  ))}
                </div>

                {/* Testimonial Text - Short or Full */}
                <div className="mb-3">
                  <p className="text-black/80 text-sm sm:text-base leading-relaxed">
                    "{expandedId === testimonial.id ? testimonial.fullText : testimonial.shortText}"
                  </p>
                </div>

                {/* Customer Info */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-black text-sm sm:text-base">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-black">
                      {testimonial.location}
                    </div>
                  </div>

                  {/* View Testimonial Link */}
                  <button
                    onClick={() => toggleExpand(testimonial.id)}
                    className="flex items-center gap-1 text-black hover:text-gray-600 font-medium text-xs sm:text-sm transition-colors whitespace-nowrap ml-2"
                  >
                    {expandedId === testimonial.id ? (
                      <>
                        <span>Show Less</span>
                        <ChevronUp size={14} />
                      </>
                    ) : (
                      <>
                        <span>View Testimonial</span>
                        <ChevronDown size={14} />
                      </>
                    )}
                  </button>
                </div>

                {/* Expand/Collapse Animation */}
                {expandedId === testimonial.id && (
                  <div className="mt-3 pt-3 border-t border-[#E2E8F0]">
                    <div className="flex items-center gap-2 text-xs text-black/40">
                      <Quote size={12} className="text-black" />
                      <span>Full review</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
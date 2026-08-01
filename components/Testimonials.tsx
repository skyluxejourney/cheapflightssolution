"use client";

import { Star, Quote, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function TestimonialsSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York, USA",
      shortText: "Absolutely incredible experience! Skyluxe Journey made our dream vacation to Bali seamless.",
      fullText: "Absolutely incredible experience! Skyluxe Journey made our dream vacation to Bali seamless. The attention to detail was outstanding and the booking process was so smooth. From the moment we booked until we returned home, everything was perfectly organized. The team went above and beyond to ensure we had the best experience possible. I can't recommend them enough!",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "London, UK",
      shortText: "I've booked over 10 trips with Skyluxe Journey and every single one was perfect.",
      fullText: "I've booked over 10 trips with Skyluxe Journey and every single one was perfect. Their customer support is unmatched and they always find the best deals. The prices are competitive, the service is exceptional, and the entire experience is stress-free. Whether it's a quick weekend getaway or a month-long adventure, they never disappoint. They've earned a customer for life!",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Davis",
      location: "Sydney, Australia",
      shortText: "From booking to returning home, everything was handled perfectly.",
      fullText: "From booking to returning home, everything was handled perfectly. I'll never travel with anyone else. Highly recommend Skyluxe Journey to everyone! The team is professional, responsive, and genuinely cares about their customers. They made our family vacation unforgettable and we've already booked our next trip with them. If you're looking for a travel agency you can trust, look no further.",
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
            <div className="inline-flex items-center gap-2 bg-[#AF935B]/10 px-4 py-1.5 mb-4">
              <Quote size={16} className="text-[#AF935B]" />
              <span className="text-[#725B29] text-xs sm:text-sm font-semibold tracking-wider uppercase">
                Testimonials
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111111] leading-tight">
              What Our Customers Say About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AF935B] to-[#725B29]">
                Skyluxe Journey
              </span>
            </h2>
            <div className="w-12 h-1 bg-[#AF935B] mt-3" />
          </div>

          {/* Content - Left Aligned */}
          <div className="mb-6 sm:mb-8">
            <p className="text-[#111111]/70 text-sm sm:text-base max-w-2xl">
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
                className="bg-[#F8F5EF] p-5 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Rating Stars */}
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-[#AF935B] fill-[#AF935B]"
                    />
                  ))}
                </div>

                {/* Testimonial Text - Short or Full */}
                <div className="mb-3">
                  <p className="text-[#111111]/80 text-sm sm:text-base leading-relaxed">
                    "{expandedId === testimonial.id ? testimonial.fullText : testimonial.shortText}"
                  </p>
                </div>

                {/* Customer Info */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-[#111111] text-sm sm:text-base">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-[#725B29]">
                      {testimonial.location}
                    </div>
                  </div>

                  {/* View Testimonial Link */}
                  <button
                    onClick={() => toggleExpand(testimonial.id)}
                    className="flex items-center gap-1 text-[#AF935B] hover:text-[#725B29] font-medium text-xs sm:text-sm transition-colors whitespace-nowrap ml-2"
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
                  <div className="mt-3 pt-3 border-t border-[#AF935B]/10">
                    <div className="flex items-center gap-2 text-xs text-[#111111]/40">
                      <Quote size={12} className="text-[#AF935B]" />
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
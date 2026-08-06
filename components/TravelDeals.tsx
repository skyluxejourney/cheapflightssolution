"use client";

import { useState } from "react";
import {
  Plane,
  MapPin,
  Calendar,
  Users,
  Star,
  Clock,
  Tag,
  Phone,
  Mail,
  X,
  ArrowRight,
  Hotel,
  Utensils,
  Wifi,
  Coffee,
  Dumbbell,
  PlaneTakeoff,
  PlaneLanding,
} from "lucide-react";

// Define the Deal type
interface Deal {
  id: number;
  title: string;
  destination: string;
  origin: string;
  price: string;
  originalPrice: string;
  image: string;
  departureDate: string;
  returnDate: string;
  duration: string;
  rating: number;
  reviews: number;
  tag: string;
  amenities: string[];
  airline: string;
  flightNumber: string;
}

export default function TravelDealsSection() {
  const [selectedDeal, setSelectedDeal] = useState<Deal | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const deals: Deal[] = [
    {
      id: 1,
      title: "Paris Romantic Getaway",
      destination: "Paris, France",
      origin: "New York, USA",
      price: "$149",
      originalPrice: "$299",
      image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&h=400&fit=crop&crop=center",
      departureDate: "May 15, 2026",
      returnDate: "May 18, 2026",
      duration: "3 Days / 2 Nights",
      rating: 4.8,
      reviews: 234,
      tag: "Save 50%",
      amenities: ["Hotel Included", "Breakfast", "City Tour", "Wine Tasting"],
      airline: "Air France",
      flightNumber: "AF 1234",
    },
    {
      id: 2,
      title: "Bali Tropical Escape",
      destination: "Bali, Indonesia",
      origin: "Los Angeles, USA",
      price: "$158",
      originalPrice: "$279",
      image: "https://images.unsplash.com/photo-1573790387438-4da905039392?w=600&h=400&fit=crop&crop=center",
      departureDate: "June 20, 2026",
      returnDate: "June 25, 2026",
      duration: "5 Days / 4 Nights",
      rating: 4.9,
      reviews: 189,
      tag: "Save 43%",
      amenities: ["Villa Stay", "Spa Treatment", "Dinner Cruise", "Yoga Classes"],
      airline: "Singapore Airlines",
      flightNumber: "SQ 3456",
    },
    {
      id: 3,
      title: "Dubai Luxury Experience",
      destination: "Dubai, UAE",
      origin: "Chicago, USA",
      price: "$155",
      originalPrice: "$399",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&h=400&fit=crop&crop=center",
      departureDate: "July 10, 2026",
      returnDate: "July 13, 2026",
      duration: "4 Days / 3 Nights",
      rating: 4.7,
      reviews: 312,
      tag: "Save 61%",
      amenities: ["5-Star Hotel", "Desert Safari", "Burj Khalifa", "Shopping Tour"],
      airline: "Emirates",
      flightNumber: "EK 5678",
    },
    {
      id: 4,
      title: "Tokyo Cultural Adventure",
      destination: "Tokyo, Japan",
      origin: "San Francisco, USA",
      price: "$157",
      originalPrice: "$389",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&h=400&fit=crop&crop=center",
      departureDate: "August 5, 2026",
      returnDate: "August 10, 2026",
      duration: "5 Days / 4 Nights",
      rating: 4.9,
      reviews: 267,
      tag: "Save 60%",
      amenities: ["Bullet Train Pass", "Temple Tours", "Sushi Class", "Robot Restaurant"],
      airline: "Japan Airlines",
      flightNumber: "JL 7890",
    },
    {
      id: 5,
      title: "Santorini Sunset Escape",
      destination: "Santorini, Greece",
      origin: "Boston, USA",
      price: "$152",
      originalPrice: "$329",
      image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=600&h=400&fit=crop&crop=center",
      departureDate: "September 12, 2026",
      returnDate: "September 16, 2026",
      duration: "4 Days / 3 Nights",
      rating: 4.9,
      reviews: 198,
      tag: "Save 54%",
      amenities: ["Sea View Villa", "Sunset Cruise", "Wine Tasting", "Breakfast Included"],
      airline: "Aegean Airlines",
      flightNumber: "A3 5678",
    },
    {
      id: 6,
      title: "Rome Historical Tour",
      destination: "Rome, Italy",
      origin: "Miami, USA",
      price: "$145",
      originalPrice: "$279",
      image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&h=400&fit=crop&crop=center",
      departureDate: "October 8, 2026",
      returnDate: "October 12, 2026",
      duration: "4 Days / 3 Nights",
      rating: 4.7,
      reviews: 156,
      tag: "Save 48%",
      amenities: ["City Tour", "Colosseum Visit", "Pasta Class", "Hotel Included"],
      airline: "ITA Airways",
      flightNumber: "AZ 9012",
    },
  ];

  const handleBookNow = (deal: Deal) => {
    setSelectedDeal(deal);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDeal(null);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Heading - Left Aligned */}
          <div className="mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-4 py-1.5 mb-4">
              <Tag size={16} className="text-black" />
              <span className="text-black text-xs sm:text-sm font-semibold tracking-wider uppercase">
                Limited Time Offers
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-tight">
              Travel Deals Under{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-600">
                $158
              </span>
            </h2>
            <div className="w-12 h-1 bg-black rounded-full mt-3" />
          </div>

          {/* Content Description - Left Aligned */}
          <div className="mb-8 sm:mb-10 max-w-full">
            <p className="text-black/70 text-base sm:text-lg leading-relaxed">
              Discover amazing getaways without breaking the bank! Find travel
              deals under $158 to top destinations worldwide. Enjoy smooth
              booking, flexible options, and trusted service. Start your next
              adventure today with Skyluxe Journey!
            </p>
          </div>

          {/* Deals Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {deals.map((deal) => (
              <div
                key={deal.id}
                className="group bg-white overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col border border-[#E2E8F0] hover:border-black/30"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden flex-shrink-0">
                  <img
                    src={deal.image}
                    alt={deal.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  
                  {/* Tag */}
                  <div className="absolute top-3 left-3 bg-black text-white text-xs font-bold px-3 py-1.5">
                    {deal.tag}
                  </div>

                  {/* Price */}
                  <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm px-3 py-1.5">
                    <div className="text-white font-bold text-lg">{deal.price}</div>
                    <div className="text-white/60 text-xs line-through">
                      {deal.originalPrice}
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-black/60 backdrop-blur-sm px-3 py-1">
                    <Star size={12} className="text-yellow-400 fill-yellow-400" />
                    <span className="text-white text-xs font-semibold">{deal.rating}</span>
                    <span className="text-white/60 text-xs">({deal.reviews})</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="text-base font-bold text-black mb-2 line-clamp-1">
                    {deal.title}
                  </h3>

                  {/* Arrival to Destination UI */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-1.5">
                        <PlaneTakeoff size={14} className="text-black/60" />
                        <span className="text-xs font-medium text-black/70 truncate">
                          {deal.origin}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <PlaneLanding size={14} className="text-black" />
                        <span className="text-xs font-semibold text-black truncate">
                          {deal.destination}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-black/40 text-xs">
                      <span className="w-8 h-px bg-black/30" />
                      <Plane size={12} className="text-black flex-shrink-0" />
                    </div>
                  </div>

                  {/* Duration & Airline */}
                  <div className="flex items-center gap-3 text-xs text-black/60 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      <span>{deal.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={12} />
                      <span>{deal.departureDate}</span>
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {deal.amenities.slice(0, 2).map((item, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-50 text-black/60 px-2 py-0.5"
                      >
                        {item}
                      </span>
                    ))}
                    {deal.amenities.length > 2 && (
                      <span className="text-xs text-black font-medium">
                        +{deal.amenities.length - 2} more
                      </span>
                    )}
                  </div>

                  {/* Book Now Button */}
                  <button
                    onClick={() => handleBookNow(deal)}
                    className="w-full bg-black hover:bg-black/90 text-white font-semibold py-2 transition-all duration-300 flex items-center justify-center gap-2 text-sm mt-auto shadow-lg shadow-black/20 hover:shadow-black/30"
                  >
                    <span>Book Now</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {isModalOpen && selectedDeal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeModal}
          />

          {/* Modal */}
          <div className="relative bg-white max-w-md w-full shadow-2xl animate-in slide-in-from-bottom-4 duration-300 border border-[#E2E8F0]">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-black transition-colors z-10"
            >
              <X size={24} />
            </button>

            {/* Header */}
            <div className="bg-black rounded-t-lg p-6 text-white">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2">
                  <Plane size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Book Your Trip</h3>
                  <p className="text-white/80 text-sm">
                    {selectedDeal.title}
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Deal Summary */}
              <div className="bg-gray-50 p-4 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-black/60">Destination</span>
                  <span className="text-sm font-semibold text-black">
                    {selectedDeal.destination}
                  </span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-black/60">Price</span>
                  <span className="text-lg font-bold text-black">
                    {selectedDeal.price}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-black/60">Duration</span>
                  <span className="text-sm text-black">
                    {selectedDeal.duration}
                  </span>
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-black">
                  Contact Our Travel Experts
                </h4>
                
                <div className="space-y-3">
                  {/* Phone */}
                  <div className="flex items-center gap-4 p-3 bg-gray-50 hover:bg-gray-100 transition-colors">
                    <div className="bg-black p-2 text-white">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-black/60">Call Us Now</p>
                      <a
                        href="tel:+18888450220"
                        className="text-sm font-semibold text-black hover:text-black transition-colors"
                      >
                        +1-888-845-0220
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-4 p-3 bg-gray-50 hover:bg-gray-100 transition-colors">
                    <div className="bg-black p-2 text-white">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-black/60">Email Us</p>
                      <a
                        href="mailto:bookings@skyluxejourney.com"
                        className="text-sm font-semibold text-black hover:text-black transition-colors"
                      >
                        bookings@skyluxejourney.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Special Request Note */}
                <div className="mt-4 p-3 bg-gray-100 border border-black/20">
                  <p className="text-xs text-black/70 text-center">
                    📞 Call now for instant confirmation & best rates!
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-4">
                  <a
                    href="tel:+18888450220"
                    className="flex-1 bg-black hover:bg-black/90 text-white font-semibold py-3 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-black/20"
                  >
                    <Phone size={16} />
                    <span>Call Now</span>
                  </a>
                  <button
                    onClick={closeModal}
                    className="flex-1 bg-gray-50 hover:bg-gray-100 text-black font-semibold py-3 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
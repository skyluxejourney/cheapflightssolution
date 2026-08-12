"use client";

import { 
  Shield, 
  Users, 
  Award, 
  Globe, 
  CheckCircle, 
  Heart,
  Star,
  Phone,
  Info,
  Compass,
  Lightbulb,
  Package,
  TrendingUp,
  Clock,
} from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BRAND, CONTACT } from "@/app/constants";

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: "Transparency",
      description: "We aim to provide customers with clear information about available fares, services, and applicable terms before they complete a booking."
    },
    {
      icon: Heart,
      title: "Customer First",
      description: "Our customers are at the center of our service. We listen to feedback and continuously work to improve the booking experience."
    },
    {
      icon: Globe,
      title: "Choice",
      description: "As an independent travel platform, we provide access to flight options from multiple airlines and routes."
    },
    {
      icon: Award,
      title: "Reliability",
      description: "We work to provide dependable booking assistance and customer support throughout the travel process."
    },
    {
      icon: Star,
      title: "Innovation",
      description: "We use modern technology and digital tools to make searching and arranging travel more convenient."
    },
    {
      icon: Users,
      title: "Responsibility",
      description: "We encourage travelers to consider itinerary efficiency and available options when making their travel decisions."
    },
  ];

  const services = [
    "Domestic and international flight searches",
    "Flight fare comparison",
    "One-way and round-trip bookings",
    "Multi-city and complex itinerary planning",
    "Economy, Premium Economy, and Business Class options",
    "Flexible fare options where available",
    "Assistance with eligible flight changes",
    "Assistance with eligible cancellations and refunds",
    "Seat selection assistance where available",
    "Travel itinerary assistance",
    "Corporate and business travel support",
    "Travel planning assistance",
    "Customer support for booking-related questions",
  ];

  const commitments = [
    "Secure payment processing",
    "Protected booking transactions",
    "Access to multiple airline and itinerary options",
    "Assistance with eligible booking changes and disruptions",
    "Clear information regarding applicable booking terms and conditions",
    "Customer support throughout the travel process",
    "Continuous improvements based on customer feedback",
  ];

  const independenceFactors = [
    "Fare",
    "Travel dates",
    "Departure and arrival times",
    "Number of stops",
    "Total journey duration",
    "Available fare types",
    "Baggage provisions",
    "Cabin class",
    "Airline preferences",
  ];

  const futureCommitments = [
    "Easier flight searching",
    "Convenient booking experiences",
    "Greater access to travel choices",
    "Helpful customer assistance",
    "Clearer travel information",
    "Continuous platform improvements",
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm mb-6">
            <Link href="/" className="text-black hover:text-black/60 transition-colors">
              Home
            </Link>
            <span className="text-black/30">›</span>
            <span className="text-black/60">About Us</span>
          </nav>

          <div className="w-full">
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black leading-tight">
                About {BRAND.name}
              </h1>
              <p className="text-sm text-black/60 mt-2">
                Independent Travel Agency • Operated by Noam Flyers Inc. • ARC Accredited • Customer Driven
              </p>
              <div className="w-12 h-1 bg-black rounded-full mt-3" />
            </div>

            {/* About Cheapflightssolution.com - Full Width */}
            <div className="space-y-4 text-sm sm:text-base text-black/70 leading-relaxed text-justify w-full">
              <p>
                {BRAND.name} is an independent online flight booking platform operated by Noam Flyers Inc., 
                a travel services company focused on making air travel simpler, more transparent, and more 
                convenient for travelers.
              </p>
              <p>
                As an independent travel agency, {BRAND.name} provides customers with access to flight options 
                from multiple airlines and travel providers without being tied to a single carrier. We are not 
                an airline and do not represent ourselves as an airline. Our goal is to give travelers the 
                flexibility to compare available flight options and choose the itinerary that best fits their 
                needs.
              </p>
              <p>
                From finding competitive fares to assisting customers before and after their booking, our focus 
                is on combining modern technology with knowledgeable travel support.
              </p>
            </div>

            {/* Our Commitment to You - Full Width */}
            <div className="mt-10">
              <h2 className="text-xl sm:text-2xl font-bold text-black mb-4">
                Our Commitment to You
              </h2>
              <p className="text-sm sm:text-base text-black/70 leading-relaxed mb-4 text-justify w-full">
                At {BRAND.name}, we believe customers should have confidence when making their travel arrangements. 
                As an independently operated travel platform under Noam Flyers Inc., we are committed to providing 
                a straightforward booking experience and responsive customer assistance.
              </p>
              <p className="text-sm sm:text-base text-black/70 leading-relaxed mb-3 text-justify w-full">
                Our commitment includes:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                {commitments.map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle size={16} className="flex-shrink-0 mt-0.5 text-black" />
                    <span className="text-sm text-black/60">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Who We Are - Full Width */}
            <div className="mt-10">
              <h2 className="text-xl sm:text-2xl font-bold text-black mb-4">
                Who We Are
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-black/70 leading-relaxed text-justify w-full">
                <p>
                  {BRAND.name} was created with a simple objective: make flight booking easier for travelers.
                </p>
                <p>
                  We understand that arranging international or domestic travel can sometimes be complicated. 
                  Travelers may have to compare different airlines, schedules, connection times, fare conditions, 
                  and available services before making a decision.
                </p>
                <p>
                  Our platform brings these considerations together in a convenient digital experience while 
                  maintaining access to human travel assistance when customers need additional support.
                </p>
                <p>
                  Noam Flyers Inc. operates {BRAND.name} as an independent travel platform, combining technology, 
                  travel-industry knowledge, and customer service to support travelers throughout their booking journey.
                </p>
              </div>
            </div>

            {/* Our Independence – Your Choice - Full Width */}
            <div className="mt-10">
              <h2 className="text-xl sm:text-2xl font-bold text-black mb-4">
                Our Independence – Your Choice
              </h2>
              <p className="text-sm sm:text-base text-black/70 leading-relaxed mb-3 text-justify w-full">
                Our independence is an important part of the {BRAND.name} experience.
              </p>
              <p className="text-sm sm:text-base text-black/70 leading-relaxed mb-3 text-justify w-full">
                Because we are not an airline, our platform is designed to present flight options from different 
                carriers rather than limiting travelers to the services of one airline. Customers can evaluate 
                available itineraries based on factors such as:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 w-full">
                {independenceFactors.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-black" />
                    <span className="text-sm text-black/60">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm sm:text-base text-black/70 leading-relaxed mt-3 text-justify w-full">
                Our objective is to help customers make informed travel decisions based on their individual requirements.
              </p>
            </div>

            {/* ARC Accreditation - Full Width */}
            <div className="mt-10">
              <h2 className="text-xl sm:text-2xl font-bold text-black mb-4">
                ARC Accreditation
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-black/70 leading-relaxed text-justify w-full">
                <p>
                  {BRAND.name} is operated by Noam Flyers Inc., an ARC-accredited travel agency.
                </p>
                <p>
                  Airlines Reporting Corporation (ARC) is an established organization supporting the airline and 
                  travel industry in the United States. Our ARC relationship forms part of our operational framework 
                  for airline ticketing and travel services.
                </p>
                <p>
                  Customers should always review the applicable fare rules, ticket conditions, cancellation terms, 
                  and other restrictions associated with their individual reservation before completing a purchase.
                </p>
              </div>
            </div>

            {/* Our Mission - Full Width */}
            <div className="mt-10">
              <h2 className="text-xl sm:text-2xl font-bold text-black mb-4">
                Our Mission
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-black/70 leading-relaxed text-justify w-full">
                <p>
                  Our mission is to make travel planning simple, accessible, and customer focused.
                </p>
                <p>
                  Whether you are arranging a family vacation, planning an international trip, traveling for business, 
                  or organizing a complex multi-city itinerary, {BRAND.name} is designed to help you navigate your 
                  available flight choices more efficiently.
                </p>
                <p>
                  We combine technology with travel expertise so customers can spend less time dealing with complicated 
                  booking processes and more time preparing for their journey.
                </p>
              </div>
            </div>

            {/* Our Core Values - Full Width */}
            <div className="mt-10">
              <h2 className="text-xl sm:text-2xl font-bold text-black mb-4">
                Our Core Values
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <div
                      key={index}
                      className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-black/30 hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                          <Icon size={16} className="text-black" />
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-black">{value.title}</h3>
                          <p className="text-xs text-black/60 mt-1 leading-relaxed text-justify">{value.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* What We Offer - Full Width */}
            <div className="mt-10">
              <h2 className="text-xl sm:text-2xl font-bold text-black mb-4">
                What We Offer
              </h2>
              <p className="text-sm sm:text-base text-black/70 leading-relaxed mb-4 text-justify w-full">
                {BRAND.name} is more than a flight search interface. We provide a range of travel booking and 
                assistance services designed around different types of travelers.
              </p>
              <p className="text-sm sm:text-base text-black/70 leading-relaxed mb-3 text-justify w-full">
                Our services include:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-black" />
                    <span className="text-sm text-black/60">{service}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-black/40 mt-3 text-justify w-full">
                Available services and conditions may vary depending on the airline, fare type, route, and individual reservation.
              </p>
            </div>

            {/* Technology Meets Travel Expertise - Full Width */}
            <div className="mt-10">
              <h2 className="text-xl sm:text-2xl font-bold text-black mb-4">
                Technology Meets Travel Expertise
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-black/70 leading-relaxed text-justify w-full">
                <p>
                  {BRAND.name} combines digital technology with human travel assistance.
                </p>
                <p>
                  Our platform is designed to help customers search and evaluate available flight options efficiently. 
                  At the same time, our travel support team can assist customers who require additional guidance during 
                  the booking process.
                </p>
                <p>
                  We recognize that technology alone cannot address every travel situation. Flight schedules can change, 
                  plans can evolve, and travelers may sometimes require personalized assistance. That is why we believe 
                  the best travel experience combines convenient technology with human support.
                </p>
              </div>
            </div>

            {/* Our Story - Full Width */}
            <div className="mt-10">
              <h2 className="text-xl sm:text-2xl font-bold text-black mb-4">
                Our Story
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-black/70 leading-relaxed text-justify w-full">
                <p>
                  {BRAND.name} was developed by Noam Flyers Inc. to provide travelers with a modern alternative for 
                  arranging air travel.
                </p>
                <p>
                  The travel industry continues to evolve, and customers increasingly expect the convenience of online 
                  booking while still valuing access to knowledgeable assistance when something unexpected happens.
                </p>
                <p>
                  {BRAND.name} was created around this principle.
                </p>
                <p>
                  Our approach is straightforward: provide customers with convenient access to flight choices, clear 
                  booking information, and travel assistance when it is needed.
                </p>
                <p>
                  As we grow, we remain focused on improving our technology, expanding our travel services, and listening 
                  to the people who use our platform.
                </p>
              </div>
            </div>

            {/* The Cheapflightssolution.com Difference - Full Width */}
            <div className="mt-10">
              <h2 className="text-xl sm:text-2xl font-bold text-black mb-4">
                The {BRAND.name} Difference
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-black/70 leading-relaxed text-justify w-full">
                <p>
                  What distinguishes {BRAND.name} is the combination of independence, technology, and customer service.
                </p>
                <p>
                  We understand that every traveler has different priorities. Some customers are focused on price, 
                  while others prioritize convenient schedules, fewer connections, baggage allowances, cabin class, 
                  or flexibility.
                </p>
                <p>
                  Our role is to help customers evaluate the options available to them and make a decision that suits 
                  their individual travel requirements.
                </p>
                <p>
                  We do not believe travel should be unnecessarily complicated. From the initial flight search through 
                  the booking process and eligible post-booking assistance, our objective is to make the experience as 
                  straightforward as possible.
                </p>
              </div>
            </div>

            {/* Travel With Confidence - Full Width */}
            <div className="mt-10 p-6 bg-gray-50 rounded-lg border border-gray-200 w-full">
              <h2 className="text-xl sm:text-2xl font-bold text-black mb-4">
                Travel With Confidence
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-black/70 leading-relaxed text-justify w-full">
                <p>
                  Every journey is different. Whether you are visiting family overseas, taking a European vacation, 
                  traveling for work, or connecting multiple destinations into one itinerary, {BRAND.name} is here to 
                  help you arrange your travel.
                </p>
                <p>
                  Our team understands that a flight reservation represents more than a ticket. It may represent an 
                  important family event, a business opportunity, a long-awaited vacation, or a journey to somewhere new. 
                  That is why we treat every customer interaction with care and professionalism.
                </p>
              </div>
            </div>

            {/* Our Commitment to the Future - Full Width */}
            <div className="mt-10">
              <h2 className="text-xl sm:text-2xl font-bold text-black mb-4">
                Our Commitment to the Future
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-black/70 leading-relaxed text-justify w-full">
                <p>
                  As the travel industry changes, {BRAND.name} will continue investing in technology, service, and 
                  customer experience.
                </p>
                <p>
                  Our goal is to build a travel platform that customers can return to whenever they need help arranging 
                  their next journey.
                </p>
                <p className="mb-3 text-justify w-full">
                  We are committed to providing:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full">
                  {futureCommitments.map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle size={16} className="flex-shrink-0 mt-0.5 text-black" />
                      <span className="text-sm text-black/60">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-base font-medium text-black mt-4 text-justify w-full">
                  At {BRAND.name}, our goal is simple:
                </p>
                <p className="text-base font-medium italic text-black text-justify w-full">
                  Make it easier for you to get where you want to go.
                </p>
                <p className="mt-4 text-justify w-full">
                  Thank you for choosing {BRAND.name}, operated by Noam Flyers Inc.
                </p>
                <p className="text-justify w-full">
                  We look forward to being part of your next journey.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-10 p-6 rounded-lg text-white w-full bg-black">
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">
                Need Help With Your Travel Plans?
              </h3>
              <p className="text-sm mb-4 text-white/80">
                Our travel experts are here to assist you with flight bookings, changes, and more.
              </p>
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="inline-flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:scale-105"
              >
                <Phone size={16} />
                Call Us Now: {CONTACT.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
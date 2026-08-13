"use client";

import { 
  Scale, 
  CheckCircle, 
  Clock, 
  Globe, 
  FileText, 
  Shield, 
  AlertCircle,
  Phone,
  Info,
  Heart,
} from "lucide-react";
import NextLink from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BRAND, CONTACT } from "@/app/constants";

export default function PriceMatchPolicyPage() {
  const sections = [
    {
      icon: FileText,
      title: "Price Match Summary",
      content: [
        "Claim Component: Cheapflightssolution.com Rule",
        "Claim Window: Within 24 hours of booking and before the first departure",
        "Compared Price: Same itinerary, passenger mix, cabin, fare conditions, and mandatory charges",
        "Proof Required: Booking reference, comparison URL where available, screenshots/evidence, timestamp, and currency",
        "Mandatory Charges: Base fare, applicable airline charges, known taxes, and known mandatory agency charges",
        "Excluded Prices: Optional ancillary services, member-only fares, coupon-only savings, opaque fares, loyalty redemptions, and non-public fares",
        "Remedies: Verified difference refund, agency credit, or eligible cancellation/reversal where operationally feasible",
        "Online vs. Assisted: Must be compared on a like-for-like service basis"
      ],
      twoColumn: true
    },
    {
      icon: Shield,
      title: "Verification Requirement",
      content: [
        "Any approved Price Match claim will be resolved only after Noam Flyers Inc. independently verifies that the lower fare was publicly available, bookable, and materially identical to the confirmed Cheapflightssolution.com itinerary.",
        "Dynamic price differences, stale cached fares, membership-only promotions, unavailable fares, and prices that exclude mandatory charges will not qualify."
      ]
    },
    {
      icon: Heart,
      title: "Our Commitment",
      content: [
        "Cheapflightssolution.com aims to make airfare pricing as transparent and understandable as possible.",
        "Our Price Match Promise is designed to give customers a clear process for bringing a potentially lower publicly available fare to our attention while recognizing the highly dynamic nature of airline pricing and inventory.",
        "We encourage customers to provide complete and accurate documentation so that claims can be reviewed efficiently and consistently.",
        "",
        "Cheapflightssolution.com",
        "Operated by Noam Flyers Inc."
      ]
    }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm mb-6">
            <NextLink href="/" className="text-black hover:text-gray-600 transition-colors">
              Home
            </NextLink>
            <span className="text-black/30">›</span>
            <span className="text-black/60">Price Match Policy</span>
          </nav>

          <div className="w-full">
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black leading-tight">
                Price Match Policy
              </h1>
              <p className="text-sm text-black/60 mt-2 text-justify">
                Our Price Match Promise is designed to give customers a clear process for bringing a potentially lower publicly available fare to our attention while recognizing the highly dynamic nature of airline pricing and inventory.
              </p>
              <div className="w-12 h-1 bg-gradient-to-r from-black to-gray-600 rounded-full mt-3" />
            </div>

            {/* Sections */}
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <div key={index} className="mt-8">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={16} className="text-black" />
                    </div>
                    <h2 className="text-lg sm:text-xl font-bold text-black">
                      {section.title}
                    </h2>
                  </div>
                  <div className="space-y-3 text-sm sm:text-base text-black/70 leading-relaxed">
                    {section.content.map((paragraph, pIndex) => {
                      // Check if paragraph starts with "•" to render as list item
                      if (paragraph.startsWith("•")) {
                        return (
                          <div key={pIndex} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-black" />
                            <span className="text-justify">{paragraph.substring(2)}</span>
                          </div>
                        );
                      }
                      // Check if paragraph is empty for spacing
                      if (paragraph === "") {
                        return <div key={pIndex} className="h-2" />;
                      }
                      // Check if paragraph is a table heading (contains colon)
                      if (paragraph.includes(":")) {
                        return (
                          <p key={pIndex} className="text-justify font-semibold text-black">
                            {paragraph}
                          </p>
                        );
                      }
                      return <p key={pIndex} className="text-justify">{paragraph}</p>;
                    })}
                  </div>
                </div>
              );
            })}

            {/* Footer Note */}
            <div className="mt-10 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <div className="space-y-2 text-sm text-black/70 leading-relaxed">
                <p className="font-semibold text-black">{BRAND.name}</p>
                <p>Operated by Noam Flyers Inc.</p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-10 p-6 bg-gradient-to-r from-black to-gray-700 rounded-lg text-white">
              <h3 className="text-lg sm:text-xl font-bold mb-2 !text-white">
                Need Help With Your Travel Plans?
              </h3>
              <p className="text-sm mb-4 !text-white/80">
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
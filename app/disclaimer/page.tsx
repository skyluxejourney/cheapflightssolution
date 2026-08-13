"use client";

import { 
  Shield, 
  AlertCircle, 
  FileText, 
  Scale, 
  Globe, 
  Info, 
  CheckCircle,
  Phone,
} from "lucide-react";
import NextLink from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BRAND, CONTACT } from "@/app/constants";

export default function DisclaimerPage() {
  const sections = [
    {
      icon: FileText,
      title: "Disclaimer",
      content: [
        `This Disclaimer governs the use of the website www.${BRAND.name.toLowerCase()}.com (the "Website"), operated by Noam Flyers Inc. ("Company," "we," "us," or "our"), a USA-registered travel company.`,
        `${BRAND.name} is an independent online travel agency and is not an airline. We are not affiliated with, owned by, or operated by any airline. Our role is to facilitate travel bookings and provide customers with access to available travel options from airlines and other travel service providers.`
      ]
    },
    {
      icon: Info,
      title: "Information Accuracy",
      content: [
        "All information, including fares, flight schedules, availability, baggage allowances, travel restrictions, and other travel details displayed on the Website may be obtained from third-party airline, reservation, and supplier systems.",
        "While we make reasonable efforts to maintain accurate and current information, we do not guarantee that all information displayed on the Website will always be accurate, complete, reliable, current, or available.",
        "Flight prices, schedules, seat availability, baggage allowances, and other travel conditions may change without prior notice and are subject to availability. The final details of a reservation are determined at the time of booking, payment, and ticket issuance and remain subject to the applicable airline or travel provider's terms."
      ]
    },
    {
      icon: Scale,
      title: "Booking and Contracts",
      content: [
        `When you make a reservation through ${BRAND.name}, the applicable transportation or travel service may be provided by an airline or other third-party travel service provider.`,
        `${BRAND.name} and Noam Flyers Inc. may act as an intermediary or travel agent in facilitating such reservations.`,
        "The applicable airline's or service provider's terms and conditions may govern matters including:",
        "• Conditions of carriage",
        "• Fare restrictions",
        "• Cancellation policies",
        "• Refund eligibility",
        "• Flight changes",
        "• Baggage allowances",
        "• Seat assignments",
        "• Schedule changes",
        "• Delays and disruptions",
        "Customers are responsible for reviewing the applicable terms and conditions associated with their reservation.",
        `${BRAND.name} and Noam Flyers Inc. are not responsible for the acts, omissions, policies, schedules, operational decisions, or performance of an airline or other third-party service provider, except to the extent required by applicable law.`
      ],
      twoColumn: true
    },
    {
      icon: Globe,
      title: "Pricing and Taxes",
      content: [
        `Prices displayed on ${BRAND.name} are based on the information and availability provided by airlines and other applicable suppliers at the time of search.`,
        "Displayed prices may include applicable taxes and fees, where indicated. However, additional charges may apply depending on the selected itinerary and services, including but not limited to:",
        "• Checked or excess baggage",
        "• Seat selection",
        "• Optional airline services",
        "• Flight changes",
        "• Fare differences",
        "• Cancellation or service fees",
        "• Other charges imposed by the airline or service provider",
        "All prices and availability are subject to change until the reservation has been successfully completed, payment has been accepted, and the applicable ticket or travel document has been issued."
      ],
      twoColumn: true
    },
    {
      icon: AlertCircle,
      title: "No Warranties",
      content: [
        "The Website and its content are provided on an 'as is' and 'as available' basis, to the fullest extent permitted by applicable law.",
        "Noam Flyers Inc. makes no warranties, representations, or guarantees, express or implied, regarding the Website or the information made available through it, including warranties of merchantability, fitness for a particular purpose, non-infringement, accuracy, availability, or uninterrupted operation."
      ]
    },
    {
      icon: Shield,
      title: "Limitation of Liability",
      content: [
        "To the fullest extent permitted by applicable law, Noam Flyers Inc., Cheapflightssolution.com, and their respective officers, directors, employees, agents, and representatives shall not be liable for any direct, indirect, incidental, consequential, special, exemplary, or punitive damages arising from or related to the use of the Website or services facilitated through the Website.",
        "This may include, to the extent permitted by law, matters arising from:",
        "• Flight delays or cancellations",
        "• Schedule changes",
        "• Flight disruptions",
        "• Airline overbooking",
        "• Denied boarding",
        "• Baggage delays, loss, or damage",
        "• Airline operational issues",
        "• Changes in airline schedules",
        "• Travel restrictions",
        "• Third-party service interruptions",
        "Nothing in this Disclaimer is intended to exclude or limit any liability that cannot legally be excluded or limited under applicable law."
      ],
      twoColumn: true
    },
    {
      icon: CheckCircle,
      title: "Independent Agency Status",
      content: [
        `${BRAND.name} is operated by Noam Flyers Inc. as an independent travel agency.`,
        "Any ARC accreditation held by Noam Flyers Inc. reflects the company's participation in the applicable ARC travel-industry framework. It does not mean that Cheapflightssolution.com is an airline, nor does it imply that Noam Flyers Inc. controls or is responsible for the operations, policies, or services of individual airlines."
      ]
    },
    {
      icon: Globe,
      title: "Third-Party Websites and Services",
      content: [
        "The Website may contain information, links, integrations, or services provided by third parties, including airlines, travel suppliers, payment providers, technology providers, and other service partners.",
        "Noam Flyers Inc. does not control the content, policies, availability, or operations of third-party websites or services. Your use of third-party services may be subject to the applicable provider's own terms, conditions, and privacy policies."
      ]
    },
    {
      icon: Scale,
      title: "Governing Law",
      content: [
        "This Disclaimer shall be governed by and interpreted in accordance with the applicable laws of the United States and, where applicable, the laws of the jurisdiction in which Noam Flyers Inc. is organized or operates.",
        "Any dispute arising from or relating to the Website or services provided through it shall be subject to the jurisdiction of the applicable courts, subject to any mandatory rights or protections provided by applicable law."
      ]
    },
    {
      icon: Info,
      title: "Changes to This Disclaimer",
      content: [
        "Noam Flyers Inc. reserves the right to modify or update this Disclaimer at any time.",
        `Any changes will become effective when the updated Disclaimer is posted on the Website. Your continued use of www.${BRAND.name.toLowerCase()}.com after changes are posted constitutes your acknowledgment of the updated Disclaimer, to the extent permitted by law.`
      ]
    },
    {
      icon: CheckCircle,
      title: "Your Acceptance",
      content: [
        `By accessing or using ${BRAND.name}, you acknowledge that you have read, understood, and agreed to this Disclaimer and the applicable terms governing your use of the Website and travel services.`,
        "If you do not agree with this Disclaimer, please discontinue use of the Website."
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
            <span className="text-black/60">Disclaimer</span>
          </nav>

          <div className="w-full">
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black leading-tight">
                Disclaimer
              </h1>
              <p className="text-sm text-black/60 mt-2 text-justify">
                This Disclaimer governs the use of the website www.{BRAND.name.toLowerCase()}.com (the "Website"), operated by Noam Flyers Inc. ("Company," "we," "us," or "our"), a USA-registered travel company.
              </p>
              <p className="text-sm text-black/60 mt-1 text-justify">
                {BRAND.name} is an independent online travel agency and is not an airline. We are not affiliated with, owned by, or operated by any airline. Our role is to facilitate travel bookings and provide customers with access to available travel options from airlines and other travel service providers.
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
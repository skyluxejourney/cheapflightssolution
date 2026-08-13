"use client";

import { 
  FileText, 
  DollarSign, 
  AlertCircle, 
  CreditCard, 
  Globe, 
  Info, 
  CheckCircle,
  Phone,
  Shield,
  Building,
  Landmark,
} from "lucide-react";
import NextLink from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BRAND, CONTACT } from "@/app/constants";

export default function TaxesFeesPolicyPage() {
  const sections = [
    {
      icon: FileText,
      title: "Taxes & Fees",
      content: [
        `${BRAND.name} is operated by Noam Flyers Inc. ${BRAND.name} is an independent travel agency and is not an airline. This page explains the difference between government taxes, airport or passenger charges, airline-imposed charges, and Noam Flyers Inc.'s own service fees.`,
        "The purpose of this page is to provide customers with a clear understanding of the different components that may make up the total price of an airline booking. Airline taxation and fee structures can vary by itinerary, country, airport, airline, fare type, passenger type, and date of travel. The final amount presented before payment should therefore always be treated as the applicable price for the transaction.",
        "When a customer books air travel through Cheapflightssolution.com, the total amount may include the airline's base fare, airline-imposed surcharges or carrier charges, government taxes, airport or passenger charges, security or inspection fees, and, where applicable, a service fee charged by Noam Flyers Inc.",
        "Optional services selected by the customer may result in additional charges. These may include checked baggage, seat selection, upgrades, priority services, travel protection, or other airline or third-party ancillary products."
      ]
    },
    {
      icon: Landmark,
      title: "Government Taxes and Airport Charges",
      content: [
        "Government taxes and airport-related charges are generally imposed by the applicable government authority, airport, security agency, or other regulatory body. These amounts are normally collected through the airline ticketing and settlement process.",
        "The amount applicable to a specific booking may depend on the origin, destination, connecting airports, country of travel, point of sale, cabin class, passenger type, fare construction, and date of travel.",
        "Accordingly, amounts shown in general examples on this page should not be interpreted as a guaranteed tax amount for any particular itinerary.",
        "For U.S.-related travel, commonly applicable charges may include federal air transportation excise taxes, domestic segment taxes, international facilities taxes, Transportation Security Administration security fees, Passenger Facility Charges, and other applicable government or airport charges.",
        "International itineraries may also include passenger duties, airport charges, inspection fees, customs or immigration-related charges, or other government-imposed amounts."
      ]
    },
    {
      icon: Globe,
      title: "Airline-Imposed Charges",
      content: [
        "Airlines may impose charges in addition to the base fare. Depending on the airline and fare purchased, these may include carrier-imposed surcharges, change penalties, cancellation penalties, reissue charges, no-show penalties, or other amounts associated with the airline's fare rules.",
        "Airline-imposed charges are separate from any service fee charged by Noam Flyers Inc.",
        "Cheapflightssolution.com does not represent an airline-imposed charge as a government tax or as a Cheapflightssolution.com agency fee.",
        "Airline charges may vary based on the airline, route, fare family, cabin, ticket conditions, passenger type, and timing of the transaction."
      ]
    },
    {
      icon: DollarSign,
      title: "Noam Flyers Inc. Service Fees",
      content: [
        "Noam Flyers Inc. may charge a service fee for certain services provided through Cheapflightssolution.com.",
        "These fees compensate Noam Flyers Inc. for travel-agency services and are separate from airline fares, government taxes, airport charges, airline penalties, and optional ancillary services.",
        "Where a service fee applies, the applicable amount will be disclosed before the customer authorises payment or before the requested service is performed, as applicable."
      ]
    },
    {
      icon: FileText,
      title: "Noam Flyers Inc. Transaction-Fee Schedule",
      content: [
        "The following schedule should be published only if these amounts accurately reflect Noam Flyers Inc.'s actual operations and are consistently disclosed through applicable booking and customer-service channels.",
        "",
        "Noam Flyers Inc. Fee Type: Online self-service air booking fee",
        "Draft Amount: USD 0.00 to USD 60.00 per passenger, per ticket",
        "",
        "Noam Flyers Inc. Fee Type: Online premium-cabin or high-touch air booking fee",
        "Draft Amount: Up to USD 120.00 per passenger",
        "",
        "Noam Flyers Inc. Fee Type: Assisted standard booking fee",
        "Draft Amount: USD 15.00 to USD 150.00 per passenger, per ticket",
        "",
        "Noam Flyers Inc. Fee Type: Assisted complex/multi-city/manual itinerary fee",
        "Draft Amount: Up to USD 250.00 per passenger",
        "",
        "Noam Flyers Inc. Fee Type: Assisted search variation fee — alternate dates / nearby airports on request",
        "Draft Amount: Up to USD 50.00 per passenger",
        "",
        "Noam Flyers Inc. Fee Type: Group or non-standard research fee",
        "Draft Amount: As quoted before payment",
        "",
        "The amounts above are agency service fees and are not government taxes, airport charges, airline-imposed penalties, or airline surcharges."
      ],
      twoColumn: true
    },
    {
      icon: Globe,
      title: "Online and Assisted Booking Fees",
      content: [
        "Cheapflightssolution.com may provide both online self-service booking and assisted booking support.",
        "A customer completing a booking independently through the online booking process may receive a different service-fee structure from a customer who requests assistance from a Noam Flyers Inc. representative.",
        "Assisted bookings may involve additional manual work, including itinerary research, fare comparison, passenger-detail verification, payment assistance, manual ticketing, special requests, or other support.",
        "Any difference in service fees between online and assisted booking channels will be disclosed before the customer commits to the transaction."
      ]
    },
    {
      icon: CreditCard,
      title: "Optional Services and Ancillaries",
      content: [
        "The displayed airfare may not include optional services that have not been selected by the customer.",
        "Additional charges may apply for:",
        "• Checked baggage",
        "• Seat selection",
        "• Preferred seating",
        "• Priority boarding",
        "• Cabin upgrades",
        "• Meals or other onboard services",
        "• Travel protection or insurance",
        "• Airline-specific ancillary services",
        "• Other optional products or services",
        "Where an optional service is selected during the booking process, the applicable charge should be displayed before payment is completed."
      ],
      twoColumn: true
    },
    {
      icon: AlertCircle,
      title: "Dynamic Taxes and Pricing",
      content: [
        "Airfare, taxes, fees, and availability may change before a booking is fully confirmed and ticketed.",
        "A fare or tax amount displayed during an initial search may change because of airline inventory changes, fare-class availability, government tax changes, airport charges, currency fluctuations, supplier updates, or other factors.",
        "The final amount displayed or quoted to the customer before payment authorisation is the amount that should be reviewed before completing the transaction.",
        "Cheapflightssolution.com does not guarantee that an initially displayed fare or tax amount will remain available until ticketing unless the fare has been successfully confirmed and ticketed.",
        "If the applicable fare or total price changes before completion of the transaction, the customer may be informed of the revised amount and, where applicable, given the opportunity to accept or decline the revised price."
      ]
    },
    {
      icon: Info,
      title: "Tax Codes and Ticket Receipts",
      content: [
        "Airline tickets and booking confirmations may display taxes and charges using industry-standard tax codes rather than full descriptions.",
        "Tax codes and their application may vary depending on the itinerary, country, airport, passenger type, and other characteristics of the booking.",
        "Customers requiring a detailed explanation of the taxes and charges applicable to a specific reservation should refer to the final ticket receipt, booking confirmation, invoice, or other transaction documentation provided for that reservation."
      ]
    },
    {
      icon: FileText,
      title: "Illustrative Tax and Fee Table",
      content: [
        "The following table is provided for general informational purposes only. It does not constitute a quotation of the taxes applicable to any specific itinerary.",
        "",
        "Component: U.S. Air Transportation Excise Tax",
        "Typical Basis: Percentage of applicable taxable fare",
        "Official/Public Anchor or Treatment: 7.5% where applicable",
        "",
        "Component: U.S. Domestic Segment Tax",
        "Typical Basis: Per taxable domestic segment",
        "Official/Public Anchor or Treatment: USD 5.30 per applicable segment",
        "",
        "Component: U.S. International Facilities Tax",
        "Typical Basis: Per qualifying international passenger",
        "Official/Public Anchor or Treatment: USD 23.40 where applicable",
        "",
        "Component: TSA September 11 Security Fee",
        "Typical Basis: Passenger/trip basis",
        "Official/Public Anchor or Treatment: TSA-collected security fee",
        "",
        "Component: Passenger Facility Charge",
        "Typical Basis: Per eligible airport segment",
        "Official/Public Anchor or Treatment: Up to USD 4.50 per eligible segment, subject to applicable route limits",
        "",
        "Component: Other International Inspection/User Fees",
        "Typical Basis: Itinerary-specific",
        "Official/Public Anchor or Treatment: Varies depending on country and itinerary",
        "",
        "Component: Airport and Passenger Charges",
        "Typical Basis: Airport/route specific",
        "Official/Public Anchor or Treatment: Varies",
        "",
        "Component: Airline-Imposed Charges",
        "Typical Basis: Airline and fare specific",
        "Official/Public Anchor or Treatment: Varies",
        "",
        "Component: Noam Flyers Inc. Service Fee",
        "Typical Basis: Agency-specific",
        "Official/Public Anchor or Treatment: As disclosed before payment",
        "",
        "Component: Optional Ancillary Services",
        "Typical Basis: Service selected by customer",
        "Official/Public Anchor or Treatment: As displayed before purchase",
        "",
        "The tax and fee amounts above are illustrative and may change according to applicable law, regulation, airline rules, airport requirements, itinerary, or other applicable circumstances."
      ],
      twoColumn: true
    },
    {
      icon: CreditCard,
      title: "Refundability of Taxes and Fees",
      content: [
        "Government taxes, airport charges, passenger duties, and other authority-imposed amounts are not necessarily refundable in every cancellation or refund situation.",
        "Whether a particular tax or charge is refundable may depend on applicable law, the airline's rules, the fare conditions, whether the ticket was used, whether the charge was actually collected or remitted, and the applicable refund procedure.",
        "Noam Flyers Inc.'s own service fees are separate from airline fares and government charges. A service fee may be non-refundable once the related agency service has been performed, subject to the applicable service-fee terms and any legal requirement to refund the amount.",
        "Customers should review the applicable Cancellation & Refund Policy and Post-Ticketing Service Fees before requesting a cancellation, refund, exchange, or other post-ticketing service."
      ]
    },
    {
      icon: CreditCard,
      title: "Payment and Collection",
      content: [
        "Noam Flyers Inc. may collect amounts associated with an airline booking, including airfare, applicable taxes, charges, and any disclosed agency service fee, depending on the applicable booking and payment structure.",
        "Where permitted by the applicable payment and ticketing arrangements, the total transaction may consist of multiple payment components. Where multiple components are used, the combined amount should correspond to the total amount agreed to by the customer before payment.",
        "Customers should carefully review the total amount, currency, passenger names, itinerary, fare conditions, baggage inclusions, optional services, and applicable agency service fees before submitting payment."
      ]
    },
    {
      icon: FileText,
      title: "Tax and Fee Responsibility",
      content: [
        "Charge Type: Airline base fare",
        "Typically Determined By: Airline",
        "Treatment: Forms the transportation price",
        "",
        "Charge Type: Airline-imposed surcharge",
        "Typically Determined By: Airline",
        "Treatment: Subject to airline pricing and fare rules",
        "",
        "Charge Type: Government tax",
        "Typically Determined By: Government authority",
        "Treatment: Collected as applicable to the itinerary",
        "",
        "Charge Type: Airport charge",
        "Typically Determined By: Airport or applicable authority",
        "Treatment: Varies by airport and itinerary",
        "",
        "Charge Type: Security fee",
        "Typically Determined By: Government/security authority",
        "Treatment: Applies where required",
        "",
        "Charge Type: Passenger Facility Charge",
        "Typically Determined By: Applicable airport/authority",
        "Treatment: Applies to eligible itineraries",
        "",
        "Charge Type: Optional baggage or seat fee",
        "Typically Determined By: Airline or service provider",
        "Treatment: Applies only when selected or otherwise applicable",
        "",
        "Charge Type: Noam Flyers Inc. service fee",
        "Typically Determined By: Noam Flyers Inc.",
        "Treatment: Agency charge disclosed before payment",
        "",
        "Charge Type: Post-ticketing service fee",
        "Typically Determined By: Noam Flyers Inc.",
        "Treatment: Applies where a qualifying after-sale service is requested"
      ],
      twoColumn: true
    },
    {
      icon: CheckCircle,
      title: "Final Price Disclosure",
      content: [
        "The final price presented to the customer before payment is the most important price in the transaction.",
        "Before authorising payment, customers should review:",
        "• The total price",
        "• The applicable currency",
        "• Passenger names",
        "• Travel dates",
        "• Origin and destination",
        "• Flight details",
        "• Cabin and fare type",
        "• Included baggage",
        "• Optional services selected",
        "• Airline fare restrictions",
        "• Cancellation and refund conditions",
        "• Any Noam Flyers Inc. service fee",
        "If the customer does not agree with the final price or applicable conditions, the customer should not proceed with payment."
      ],
      twoColumn: true
    },
    {
      icon: Shield,
      title: "Legal Clause",
      content: [
        "Government taxes, passenger duties, airport charges, security fees, and other authority-imposed amounts are not controlled by Noam Flyers Inc. and may change before ticketing or travel.",
        "Noam Flyers Inc.'s own service fees are agency charges for services provided through Cheapflightssolution.com and are separate from government taxes, airport charges, airline-imposed penalties, airline surcharges, fare differences, and optional ancillary charges.",
        "Payment of an agency service fee does not create or guarantee any right to an airline refund, waiver, exchange, cancellation, or other airline-approved remedy.",
        "The final taxes, fees, and total amount payable are determined by the applicable itinerary, fare, supplier conditions, taxes, regulations, and services selected by the customer at the time of booking."
      ]
    },
    {
      icon: AlertCircle,
      title: "Important Disclaimer",
      content: [
        "The examples and descriptions on this page are provided for general informational purposes only and do not guarantee the taxes, fees, or charges applicable to any specific reservation.",
        "The final price and applicable charges presented during the booking process and reflected in the issued ticket, invoice, receipt, or confirmation will govern the applicable transaction."
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
            <span className="text-black/60">Taxes & Fees Policy</span>
          </nav>

          <div className="w-full">
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black leading-tight">
                Taxes & Fees Policy
              </h1>
              <p className="text-sm text-black/60 mt-2 text-justify">
                {BRAND.name} is operated by Noam Flyers Inc. {BRAND.name} is an independent travel agency and is not an airline. This page explains the difference between government taxes, airport or passenger charges, airline-imposed charges, and Noam Flyers Inc.'s own service fees.
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
                      // Check if paragraph is "Component:", "Noam Flyers Inc. Fee Type:", or "Charge Type:"
                      if (paragraph.startsWith("Component:") || 
                          paragraph.startsWith("Noam Flyers Inc. Fee Type:") || 
                          paragraph.startsWith("Charge Type:")) {
                        return (
                          <p key={pIndex} className="text-justify font-semibold text-black">
                            {paragraph}
                          </p>
                        );
                      }
                      // Check if paragraph is "Draft Amount:", "Typical Basis:", "Official/Public Anchor or Treatment:", or "Treatment:"
                      if (paragraph.startsWith("Draft Amount:") || 
                          paragraph.startsWith("Typical Basis:") || 
                          paragraph.startsWith("Official/Public Anchor or Treatment:") ||
                          paragraph.startsWith("Treatment:")) {
                        return (
                          <p key={pIndex} className="text-justify text-gray-600">
                            {paragraph}
                          </p>
                        );
                      }
                      // Check if paragraph is "Typically Determined By:"
                      if (paragraph.startsWith("Typically Determined By:")) {
                        return (
                          <p key={pIndex} className="text-justify text-black/80">
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
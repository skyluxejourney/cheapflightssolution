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
  Clock,
} from "lucide-react";
import NextLink from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BRAND, CONTACT } from "@/app/constants";

export default function FareDisclosurePolicyPage() {
  const sections = [
    {
      icon: FileText,
      title: "Fare Disclosure",
      content: [
        `This Fare Disclosure explains how pricing is presented on ${BRAND.name}, what an advertised or displayed fare may include, what may be excluded, why airline prices can change, how online and assisted-booking prices may differ, and what customers should verify before authorizing payment.`,
        `${BRAND.name} is operated by Noam Flyers Inc. and is an independent travel agency. ${BRAND.name} is not an airline and is not affiliated with, owned by, or operated by any airline unless expressly stated otherwise.`,
        "Our objective is to present travel pricing clearly and to distinguish between airline fares, mandatory charges, agency service fees, and optional services."
      ]
    },
    {
      icon: DollarSign,
      title: "1. What Makes Up an Airfare?",
      content: [
        "An airfare displayed on Cheapflightssolution.com may consist of several pricing components.",
        "Depending on the itinerary and booking channel, these may include:",
        "• Airline base fare",
        "• Airline-imposed surcharges or carrier-imposed charges",
        "• Government taxes",
        "• Airport or passenger facility charges",
        "• Other mandatory charges",
        "• Applicable Noam Flyers Inc. service fees",
        "• Optional services selected by the customer",
        "The total amount displayed immediately before payment authorization is the most important price for the transaction and should be reviewed carefully before payment is submitted."
      ],
      twoColumn: true
    },
    {
      icon: Globe,
      title: "2. Displayed and Promotional Fares",
      content: [
        "Prices displayed on Cheapflightssolution.com may appear in different contexts, including:",
        "• Search results",
        "• Fare displays",
        "• Route pages",
        "• Promotional offers",
        "• Destination pages",
        "• Marketing communications",
        "A displayed price may be presented as a one-way fare, round-trip fare, or other itinerary-specific amount depending on the search and display context.",
        "Unless the applicable fare or itinerary specifically states otherwise, customers should not assume that the displayed fare automatically includes optional services such as:",
        "• Checked baggage",
        "• Seat selection",
        "• Priority boarding",
        "• Lounge access",
        "• Travel protection",
        "• Optional upgrades",
        "• Change flexibility",
        "• Airline loyalty benefits",
        "These services may be unavailable, optional, airline-specific, or sold separately."
      ],
      twoColumn: true
    },
    {
      icon: Info,
      title: "3. Online vs. Assisted Booking Pricing",
      content: [
        "Cheapflightssolution.com may provide both online self-service booking and assisted booking through telephone, chat, email, or other supported channels.",
        "Online Self-Service Fare",
        "An online self-service fare is the price presented through the Website's booking process when a customer completes the transaction without agent assistance.",
        "Assisted-Booking Fare",
        "An assisted-booking fare is a price quoted through a supported customer-service channel where a Noam Flyers Inc. representative assists with matters such as:",
        "• Itinerary selection",
        "• Fare information",
        "• Manual booking",
        "• Payment processing",
        "• Travel planning",
        "• Booking support",
        "• Post-booking assistance",
        "An assisted-booking transaction may include an applicable agency service fee that is different from an online self-service transaction.",
        "Any applicable service fee should be disclosed before the customer authorizes payment.",
        "A difference between online and assisted pricing does not by itself mean that either price is inaccurate, provided the total amount payable and applicable services are clearly communicated before the transaction is completed."
      ],
      twoColumn: true
    },
    {
      icon: Clock,
      title: "4. Dynamic Airline Pricing",
      content: [
        "Airline fares and availability are dynamic and may change without prior notice.",
        "A fare may change because:",
        "• The last seat in a particular booking class was sold",
        "• The airline withdrew a fare",
        "• The airline changed its fare filing",
        "• A different fare brand became available",
        "• Taxes or carrier-imposed charges changed",
        "• Another customer completed a purchase",
        "• Supplier inventory was revalidated",
        "• The selected itinerary was no longer available",
        "For these reasons, Noam Flyers Inc. does not guarantee that a price displayed during an initial search will remain available until payment is successfully authorized and the applicable reservation is confirmed or ticketed.",
        "If the fare changes before the transaction is completed, the customer should be informed of the revised amount where applicable and given the opportunity to accept or decline the revised price."
      ],
      twoColumn: true
    },
    {
      icon: AlertCircle,
      title: "5. Search Price vs. Final Price",
      content: [
        "The first fare displayed during a search is not necessarily the final amount payable.",
        "The booking process may require the fare and availability to be revalidated after the customer selects an itinerary and enters passenger information.",
        "The final amount may change if the airline or supplier updates availability, fare conditions, taxes, mandatory charges, or other applicable pricing components.",
        "The final total presented to the customer before payment authorization is the amount that should be carefully reviewed before proceeding."
      ]
    },
    {
      icon: CheckCircle,
      title: "6. Booking Completion and Ticket Issuance",
      content: [
        "A search result or booking request does not by itself constitute a completed ticketed reservation.",
        "For an air booking to be considered completed, the applicable reservation generally must be accepted, payment must be successfully authorized or captured, and the applicable ticket number or confirmation identifier must be issued.",
        "If a booking request fails before ticket issuance, Noam Flyers Inc. will not represent the itinerary as a completed ticketed booking.",
        "Depending on the circumstances, the transaction may be:",
        "• Retried",
        "• Repriced",
        "• Revalidated",
        "• Revised",
        "• Cancelled",
        "• Reversed or refunded where applicable",
        "A temporary payment authorization or hold does not necessarily mean that a ticket has been issued."
      ],
      twoColumn: true
    },
    {
      icon: Globe,
      title: "7. Historical and Promotional Fares",
      content: [
        "Historical, recently observed, promotional, or 'from' fares should be treated as illustrative rather than guaranteed.",
        "A fare shown in a route page, destination page, blog post, advertisement, or promotional communication may no longer be available when another customer searches for the same itinerary.",
        "Where applicable, Cheapflightssolution.com may identify such prices as:",
        "• 'From' prices",
        "• Recently found fares",
        "• Sample fares",
        "• Historical fares",
        "• Promotional fares",
        "A promotional fare may also be subject to specific conditions involving:",
        "• Travel dates",
        "• Booking dates",
        "• Specific routes",
        "• Passenger eligibility",
        "• Coupon requirements",
        "• Membership",
        "• Limited inventory",
        "• Specific booking channels",
        "Any material restrictions applicable to a promotion should be disclosed with or near the applicable offer."
      ],
      twoColumn: true
    },
    {
      icon: AlertCircle,
      title: "8. Fare Restrictions",
      content: [
        "Airline fares can contain significant restrictions.",
        "Depending on the selected fare, conditions may include:",
        "• Non-refundable status",
        "• Non-transferability",
        "• Name restrictions",
        "• No-show restrictions",
        "• Change fees",
        "• Fare differences for changes",
        "• Limited cancellation rights",
        "• Limited travel-credit eligibility",
        "• Restrictions on route changes",
        "• Baggage limitations",
        "• Seat-selection restrictions",
        "Many promotional and basic-economy fares may carry particularly restrictive conditions.",
        "Customers should carefully review the applicable fare rules before authorizing payment.",
        "Name changes may be prohibited, while even certain name corrections may require airline approval and may be subject to additional requirements or charges."
      ],
      twoColumn: true
    },
    {
      icon: DollarSign,
      title: "9. Taxes and Government Charges",
      content: [
        "Government taxes, airport charges, passenger facility charges, and other mandatory charges may be displayed separately depending on the itinerary, jurisdiction, and booking environment.",
        "The applicable amount may vary based on factors such as:",
        "• Origin",
        "• Destination",
        "• Number of flight segments",
        "• Point of sale",
        "• Passenger type",
        "• Travel dates",
        "• Applicable government rules",
        "• Airline or supplier fare construction",
        "Some charges may be recalculated when the itinerary or point of sale changes.",
        "The customer should rely on the final applicable total presented during the booking process rather than an isolated tax estimate or promotional fare displayed elsewhere."
      ],
      twoColumn: true
    },
    {
      icon: CreditCard,
      title: "10. Optional Services and Ancillaries",
      content: [
        "Optional services are not necessarily included in the advertised base airfare.",
        "Depending on the airline and itinerary, optional services may include:",
        "• Checked baggage",
        "• Additional baggage",
        "• Seat selection",
        "• Preferred seating",
        "• Priority services",
        "• Meals",
        "• Travel protection",
        "• Cabin upgrades",
        "• Other airline ancillary services",
        "Where an optional service is selected during the booking process and added to the transaction, its applicable charge should be reflected in the final amount before payment authorization."
      ],
      twoColumn: true
    },
    {
      icon: CreditCard,
      title: "11. Payment and Final Total",
      content: [
        "Noam Flyers Inc. processes payments for bookings made through Cheapflightssolution.com.",
        "Depending on the applicable payment pathway, the final transaction may appear as:",
        "• One charge",
        "• Multiple component charges",
        "• A temporary authorization followed by a completed charge",
        "• Another payment presentation determined by the applicable processor",
        "Where multiple charges are used, they should collectively correspond to the applicable amount disclosed or quoted to the customer before authorization, subject to any subsequently agreed or separately authorized services.",
        "Before submitting payment, customers should carefully review:",
        "• Final total",
        "• Currency",
        "• Passenger names",
        "• Itinerary",
        "• Cabin class",
        "• Fare conditions",
        "• Baggage provisions",
        "• Change and cancellation restrictions",
        "• Selected optional services",
        "• Applicable agency service fees",
        "If the customer does not agree with the final amount or applicable fare conditions, the customer should not proceed with payment."
      ],
      twoColumn: true
    },
    {
      icon: FileText,
      title: "12. Fare Component Table",
      content: [
        "Fare Component: Base fare",
        "Typically Controlled By: Airline",
        "Included in Core Fare Total?: Generally yes",
        "Explanation: Core transportation price",
        "",
        "Fare Component: Airline-imposed surcharge",
        "Typically Controlled By: Airline",
        "Included in Core Fare Total?: Generally yes",
        "Explanation: Carrier-controlled and dependent on itinerary/fare",
        "",
        "Fare Component: Government taxes and airport charges",
        "Typically Controlled By: Government authorities, airports, or applicable collection systems",
        "Included in Core Fare Total?: Generally included in final displayed total where applicable",
        "Explanation: May vary by itinerary and jurisdiction",
        "",
        "Fare Component: Noam Flyers Inc. online service fee",
        "Typically Controlled By: Noam Flyers Inc.",
        "Included in Core Fare Total?: If applicable, yes",
        "Explanation: Agency fee applicable to the transaction",
        "",
        "Fare Component: Noam Flyers Inc. assisted-booking fee",
        "Typically Controlled By: Noam Flyers Inc.",
        "Included in Core Fare Total?: If applicable, yes",
        "Explanation: Service fee associated with assisted booking",
        "",
        "Fare Component: Optional seats, baggage, insurance, or other services",
        "Typically Controlled By: Airline or third-party provider",
        "Included in Core Fare Total?: No, unless selected",
        "Explanation: Added where applicable and disclosed before payment"
      ],
      twoColumn: true
    },
    {
      icon: DollarSign,
      title: "13. Illustrative Pricing Example",
      content: [
        "The following example is illustrative only and does not represent a guaranteed fare or tax calculation for any specific itinerary.",
        "For example, a hypothetical domestic round-trip booking might consist of:",
        "",
        "Component: Base airfare",
        "Illustrative Amount: USD 180.00",
        "",
        "Component: Applicable government taxes and charges",
        "Illustrative Amount: USD 45.00",
        "",
        "Component: Applicable agency service fee",
        "Illustrative Amount: USD 24.00",
        "",
        "Component: Illustrative total",
        "Illustrative Amount: USD 249.00",
        "",
        "Actual taxes, airline charges, agency fees, and total prices vary by itinerary, airline, booking channel, travel dates, passenger details, and applicable fare rules.",
        "Optional baggage, seats, upgrades, travel protection, and other services may increase the final total.",
        "The actual amount payable is the final total presented to the customer before payment authorization."
      ],
      twoColumn: true
    },
    {
      icon: Shield,
      title: "14. Important Pricing Principle",
      content: [
        "Nothing in this Fare Disclosure creates an obligation on the part of an airline beyond the airline's own fare rules, conditions of carriage, and applicable law.",
        "Cheapflightssolution.com and Noam Flyers Inc., however, are committed to:",
        "• Clearly identifying applicable agency fees",
        "• Distinguishing mandatory charges from optional services",
        "• Avoiding misleading airline-affiliation or 'official airline' implications",
        "• Providing the final applicable total before payment authorization",
        "• Communicating material fare changes before the customer commits to the revised price",
        "• Presenting applicable fare restrictions as clearly as reasonably possible"
      ]
    },
    {
      icon: CheckCircle,
      title: "15. Customer Review Before Payment",
      content: [
        "Before authorizing payment, customers should review the final booking information carefully.",
        "By selecting 'Pay Now' or an equivalent payment button, the customer confirms that they have had an opportunity to review:",
        "• The final total price",
        "• The currency",
        "• Passenger names",
        "• Travel itinerary",
        "• Cabin class",
        "• Applicable baggage provisions",
        "• Selected optional services",
        "• Applicable fare restrictions",
        "• Change and cancellation conditions",
        "• Any disclosed agency service fee",
        "Once payment is submitted and ticketing or booking processing begins, the applicable fare conditions and change or refund restrictions will govern the transaction."
      ],
      twoColumn: true
    },
    {
      icon: Clock,
      title: "16. Pricing Process",
      content: [
        "The typical pricing process may be summarized as follows:",
        "Search Result Fare",
        "↓",
        "Passenger and Itinerary Details",
        "↓",
        "Live Fare and Availability Revalidation",
        "↓",
        "Mandatory Taxes and Applicable Agency Fees",
        "↓",
        "Customer Selects Optional Services",
        "↓",
        "Final Total Displayed",
        "↓",
        "Customer Reviews Fare Conditions",
        "↓",
        "Payment Authorization",
        "↓",
        "Ticketing / Reservation Confirmation",
        "Pricing and availability may change at any stage before the transaction is successfully completed."
      ]
    },
    {
      icon: Info,
      title: "17. Changes to This Fare Disclosure",
      content: [
        "Noam Flyers Inc. may update this Fare Disclosure from time to time to reflect changes in airline pricing practices, booking technology, service fees, payment processes, or applicable legal requirements.",
        "The current version will be made available on Cheapflightssolution.com.",
        "Where appropriate, material changes may be accompanied by an updated 'Last Updated' date.",
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
            <span className="text-black/60">Fare Disclosure</span>
          </nav>

          <div className="w-full">
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black leading-tight">
                Fare Disclosure
              </h1>
              <p className="text-sm text-black/60 mt-2 text-justify">
                This Fare Disclosure explains how pricing is presented on {BRAND.name}, what an advertised or displayed fare may include, what may be excluded, why airline prices can change, how online and assisted-booking prices may differ, and what customers should verify before authorizing payment.
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
                      // Check if paragraph is "↓" for arrow
                      if (paragraph === "↓") {
                        return (
                          <p key={pIndex} className="text-center text-gray-500 font-bold">
                            {paragraph}
                          </p>
                        );
                      }
                      // Check if paragraph starts with "Component:" or "Fare Component:"
                      if (paragraph.startsWith("Component:") || paragraph.startsWith("Fare Component:")) {
                        return (
                          <p key={pIndex} className="text-justify font-semibold text-black">
                            {paragraph}
                          </p>
                        );
                      }
                      // Check if paragraph is a table label
                      if (paragraph.startsWith("Typically Controlled By:") || 
                          paragraph.startsWith("Included in Core Fare Total?:") ||
                          paragraph.startsWith("Explanation:")) {
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
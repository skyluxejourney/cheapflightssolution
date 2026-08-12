"use client";

import { 
  FileText, 
  Shield, 
  AlertCircle, 
  CreditCard, 
  Clock, 
  Info, 
  CheckCircle,
  Phone,
  DollarSign,
  Users,
  XCircle,
} from "lucide-react";
import NextLink from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BRAND, CONTACT } from "@/app/constants";

export default function CancellationRefundPolicyPage() {
  const sections = [
    {
      icon: FileText,
      title: "Cancellation & Refund Policy",
      content: [
        `${BRAND.name} is operated by Noam Flyers Inc. ${BRAND.name} is an independent travel agency and is not an airline. Noam Flyers Inc. facilitates the sale of airline inventory and may provide both online self-service booking and optional assisted booking and customer-support services.`,
        "Airline tickets, airline schedules, aircraft changes, baggage handling, fare-family restrictions, no-show consequences, and many refund rights are controlled by the applicable airline and its fare rules, rather than by Noam Flyers Inc. Noam Flyers Inc. does, however, control its own agency service fees, its refund-request handling process, and refunds of amounts that Noam Flyers Inc. is required to return when it is the applicable merchant of record.",
        "This Cancellation & Refund Policy explains how voluntary cancellations, voluntary refund requests, airline disruptions, future travel credits, airline waivers, ancillary-service refunds, and Noam Flyers Inc. service-fee reversals are handled.",
        "This policy should be read together with the applicable Fare Disclosure, Taxes & Fees, and Post-Ticketing Service Fees information published on Cheapflightssolution.com.",
        "Where this policy refers to 'our fees', this means fees charged by Noam Flyers Inc. for its own agency services. It does not refer to airline penalties, fare differences, airport charges, government taxes, baggage charges, seat fees, or other supplier-imposed amounts."
      ]
    },
    {
      icon: XCircle,
      title: "1. Voluntary and Involuntary Cancellations",
      content: [
        "A voluntary cancellation occurs when a customer chooses not to travel, changes their plans, cannot use their itinerary, or wishes to replace the booking with another travel arrangement.",
        "An involuntary cancellation or refund situation generally occurs when the airline or another protected event causes the itinerary to be cancelled or materially disrupted. Depending on the circumstances, this may include:",
        "• An airline cancellation",
        "• A significant schedule change",
        "• Certain class-of-service downgrades",
        "• Certain airline operational disruptions",
        "• Other circumstances recognized under applicable law or airline policy",
        "These situations may be subject to different refund and rebooking rules. Customers should not assume that a refund right applicable to an involuntary airline disruption automatically applies to a voluntary cancellation."
      ],
      twoColumn: true
    },
    {
      icon: AlertCircle,
      title: "2. Airline Rules Control the Underlying Ticket",
      content: [
        "For airline tickets, the applicable airline fare rules are the starting point for determining whether a ticket can be cancelled, refunded, exchanged, or converted into a future travel credit.",
        "Depending on the fare purchased:",
        "• A ticket may be fully refundable",
        "• A ticket may be refundable subject to deductions",
        "• A ticket may be changeable but non-refundable",
        "• A ticket may qualify only for future travel credit",
        "• A ticket may have no remaining value after cancellation or no-show",
        "• An airline may require direct handling for certain low-cost-carrier or ancillary services",
        "Noam Flyers Inc.'s agency service fees do not change the underlying airline fare rules.",
        "A non-refundable airline ticket does not become refundable merely because a customer requests a refund through Cheapflightssolution.com."
      ],
      twoColumn: true
    },
    {
      icon: Shield,
      title: "3. Airline Cancellation or Significant Schedule Change",
      content: [
        "If an airline cancels a flight or makes a significant schedule change and the customer does not accept the alternative offered, the customer may be entitled to a refund depending on applicable law, airline rules, and the merchant-of-record structure of the transaction.",
        "Where Noam Flyers Inc. is the merchant of record for the applicable airfare and a refund is legally or contractually due, Noam Flyers Inc. will process the applicable airfare refund to the original form of payment within the timeframe required by applicable law.",
        "For qualifying transactions, applicable U.S. Department of Transportation refund requirements may establish different processing periods depending on the payment method.",
        "Where the airline is responsible for a particular ancillary refund, such as certain baggage or other services that were not provided, Noam Flyers Inc. may assist with documentation and routing of the request. However, Noam Flyers Inc. cannot accelerate a carrier-controlled decision beyond the authority available to the agency."
      ]
    },
    {
      icon: XCircle,
      title: "4. Voluntary Cancellation Requests",
      content: [
        "For voluntary cancellations, the fare rules applicable to the purchased airline ticket determine the underlying refund or credit entitlement.",
        "A customer may be eligible for:",
        "• A full or partial refund",
        "• A future travel credit",
        "• A ticket exchange",
        "• A refund after applicable airline deductions",
        "• No remaining ticket value",
        "Even when an airline permits a voluntary refund, Noam Flyers Inc. may charge a separate post-ticketing processing or service fee for the work involved in reviewing and processing the request.",
        "Such work may include:",
        "• Reviewing the ticket and fare rules",
        "• Determining refund eligibility",
        "• Contacting the airline or supplier",
        "• Requesting a waiver where appropriate",
        "• Processing the refund request",
        "• Updating the reservation",
        "• Calculating applicable amounts",
        "• Communicating the outcome to the customer",
        "Noam Flyers Inc. will not represent its own service fee as an airline tax, government charge, or airline-imposed penalty.",
        "Any applicable agency fee will be disclosed separately or included in the applicable total before payment or service authorization."
      ],
      twoColumn: true
    },
    {
      icon: Clock,
      title: "5. Requests Within 24 Hours of Booking",
      content: [
        "Customers who wish to cancel shortly after making a reservation should submit their request immediately through the contact method provided in their booking confirmation.",
        "Customers should understand that statutory airline 24-hour reservation and refund requirements do not necessarily apply in the same manner to reservations purchased through third-party travel agencies or online travel agencies.",
        "Where the applicable airline policy, ticketing status, fare conditions, purchase timing, and other eligibility requirements permit a full reversal, Noam Flyers Inc. may process the eligible cancellation and refund.",
        "Where the airline's applicable policy does not permit a reversal, or the request falls outside the applicable conditions, the booking will be handled according to the fare rules governing the ticket.",
        "A customer should therefore not assume that every booking made through Cheapflightssolution.com automatically qualifies for a 24-hour cancellation or refund."
      ]
    },
    {
      icon: Clock,
      title: "6. Refunds After Travel Has Started",
      content: [
        "Once travel has commenced, only the unused portion of a ticket may potentially be refundable, exchangeable, or creditable, and only when permitted by the applicable fare rules.",
        "The refundable amount on a partially used ticket may be substantially different from the original amount paid.",
        "Airline fare calculations may require:",
        "• Fare reconstruction",
        "• Recalculation of used and unused segments",
        "• Reassessment of taxes",
        "• Application of fare restrictions",
        "• Recalculation based on the original fare conditions",
        "The unused portion of a ticket is therefore not necessarily valued by simply subtracting the price of the used flight from the original purchase price.",
        "Additional review time may be required for partially used tickets, and an applicable post-ticketing service fee may apply."
      ],
      twoColumn: true
    },
    {
      icon: AlertCircle,
      title: "7. No-Show Cancellations",
      content: [
        "A no-show generally occurs when a passenger fails to travel on a scheduled flight without cancelling or changing the reservation in accordance with the applicable airline rules.",
        "No-show consequences can be significant.",
        "Depending on the airline and fare purchased:",
        "• The remaining ticket value may be forfeited",
        "• Future segments may be cancelled",
        "• A refund may no longer be available",
        "• A reinstatement may require airline approval",
        "• A future credit may not be available",
        "• Additional fees may apply",
        "Noam Flyers Inc. may assist in requesting reinstatement, a waiver, or recovery of remaining ticket value where such an option exists.",
        "However, no reinstatement, refund, waiver, or credit is guaranteed unless approved under the applicable airline rules.",
        "Customers should contact Cheapflightssolution.com as soon as possible if they know they will miss a scheduled departure."
      ],
      twoColumn: true
    },
    {
      icon: Shield,
      title: "8. Special Refund and Waiver Requests",
      content: [
        "Certain circumstances may qualify for special review or an airline waiver.",
        "Depending on the airline and applicable rules, examples may include:",
        "• Medical incapacity",
        "• Bereavement",
        "• Visa refusal",
        "• Duplicate bookings",
        "• Denied boarding",
        "• Certain military orders",
        "• Significant airline schedule disruptions",
        "• Other circumstances specifically recognized by an airline",
        "These situations do not automatically create a refund entitlement unless required by applicable law or the airline's applicable policy.",
        "Noam Flyers Inc. may request supporting documentation where required.",
        "Documentation may include, depending on the situation:",
        "• Medical documentation",
        "• Death certificate or other bereavement documentation",
        "• Visa refusal documentation",
        "• Military orders",
        "• Airline disruption records",
        "• Other supporting evidence requested by the applicable airline",
        "Noam Flyers Inc. may submit or escalate an eligible waiver request to the airline on the customer's behalf.",
        "If the airline approves the request, the refund, credit, or other waiver will be processed according to the airline's decision.",
        "If the airline declines the request, the customer will be informed of the outcome and the booking will remain subject to the applicable fare rules.",
        "An applicable Noam Flyers Inc. service fee may still apply where substantive agency work has been performed, unless the applicable published fee schedule states otherwise."
      ],
      twoColumn: true
    },
    {
      icon: DollarSign,
      title: "9. Ancillary Services and Additional Purchases",
      content: [
        "Refunds involving airline ancillary services are treated separately from the underlying airfare.",
        "Ancillary services may include:",
        "• Checked baggage",
        "• Seat selection",
        "• Seat upgrades",
        "• Priority services",
        "• Special-service requests",
        "• Other airline-provided services",
        "If Noam Flyers Inc. collected an agency service fee and the related booking never ticketed, or if Noam Flyers Inc. is otherwise required to reverse that fee, the applicable agency-fee component will be handled by Noam Flyers Inc.",
        "If an airline ancillary service was purchased but was not provided, the refund obligation may depend on the airline, the merchant-of-record structure, applicable law, and the specific service involved.",
        "Noam Flyers Inc. may assist customers by collecting and submitting relevant documentation, which may include:",
        "• Ticket numbers",
        "• Booking references",
        "• Receipts",
        "• EMD references",
        "• Baggage documentation",
        "• Seat-selection records",
        "• Other proof of purchase or non-provision of service",
        "Where the airline controls the applicable refund, the final decision may remain with the carrier."
      ],
      twoColumn: true
    },
    {
      icon: CreditCard,
      title: "10. Future Travel Credits",
      content: [
        "Some non-refundable tickets may qualify for a future travel credit instead of a cash refund.",
        "Where an airline provides a future travel credit, the credit may be subject to conditions such as:",
        "• Expiration dates",
        "• Passenger-name restrictions",
        "• Transfer restrictions",
        "• Route restrictions",
        "• Fare differences",
        "• Change fees",
        "• Airline-specific redemption requirements",
        "Noam Flyers Inc. will communicate the applicable credit information available from the airline.",
        "Customers should carefully review the expiration date and conditions of any future travel credit."
      ],
      twoColumn: true
    },
    {
      icon: CreditCard,
      title: "11. Refunds to the Original Form of Payment",
      content: [
        "Where a refund is approved, refunds are generally returned to the original form of payment used for the transaction.",
        "Noam Flyers Inc. may require identity verification before discussing refund amounts or making changes to refund-related information.",
        "Customers may be required to provide information such as:",
        "• Booking reference",
        "• Ticket number",
        "• Passenger name",
        "• Email address used for the booking",
        "• Other information reasonably necessary to verify the transaction",
        "Refunds should not normally be redirected to a different payment method unless permitted by applicable law, payment-processing requirements, or operational circumstances and appropriately authorized."
      ]
    },
    {
      icon: CreditCard,
      title: "12. Payment Authorizations and Failed Bookings",
      content: [
        "A payment authorization, pending bank transaction, or temporary hold does not necessarily mean that a ticket has been issued.",
        "A booking may remain subject to:",
        "• Payment verification",
        "• Fare revalidation",
        "• Availability confirmation",
        "• Fraud screening",
        "• Manual review",
        "• Airline ticketing",
        "• Supplier confirmation",
        "If payment has been authorized but the booking cannot ultimately be ticketed, Noam Flyers Inc. will take appropriate steps to reverse, void, or refund the applicable amount in accordance with the payment processor, bank, supplier, and applicable transaction circumstances.",
        "The time required for a pending authorization to disappear may depend on the customer's bank or payment provider."
      ],
      twoColumn: true
    },
    {
      icon: Info,
      title: "13. Refund Request Information",
      content: [
        "When submitting a cancellation or refund request, customers should provide:",
        "• Cheapflightssolution.com booking reference",
        "• Airline confirmation or PNR",
        "• Ticket number, where available",
        "• Passenger name",
        "• Email address used for the booking",
        "• Travel dates",
        "• Reason for cancellation or refund request",
        "• Supporting documentation, where applicable",
        "Providing complete information helps Noam Flyers Inc. review the request efficiently.",
        "Customers should submit cancellation requests as soon as they know they will not travel because airline rules may become more restrictive as departure approaches."
      ],
      twoColumn: true
    },
    {
      icon: Info,
      title: "14. Refund Processing and Communication",
      content: [
        "After receiving a refund request, Noam Flyers Inc. may need to determine:",
        "• Whether the ticket has been issued",
        "• Whether the ticket has been partially or fully used",
        "• Whether the cancellation is voluntary or involuntary",
        "• Which airline fare rules apply",
        "• Whether an airline waiver is available",
        "• Whether the transaction qualifies for a refund under applicable law",
        "• Whether an agency service fee applies",
        "• Whether an airline or another supplier must approve the refund",
        "Customers will be informed of the applicable outcome once the review is completed or when the airline provides its decision.",
        "A request being submitted does not mean that a refund has been approved."
      ],
      twoColumn: true
    },
    {
      icon: XCircle,
      title: "15. Refund Denials",
      content: [
        "If an airline denies a refund request, Noam Flyers Inc. will communicate the applicable result and, where reasonably available, identify potential next steps.",
        "Depending on the circumstances, available options may include:",
        "• Rebooking",
        "• Using remaining ticket value",
        "• Applying for an airline future travel credit",
        "• Requesting an airline waiver",
        "• Providing additional supporting documentation",
        "• Appealing through an applicable airline process",
        "If the issue concerns a Noam Flyers Inc. agency service fee rather than the airline fare, the customer may request a review through the applicable customer-service escalation process."
      ],
      twoColumn: true
    },
    {
      icon: DollarSign,
      title: "16. Agency Service Fees",
      content: [
        "Noam Flyers Inc. service fees are separate from airline fare rules and airline-imposed charges.",
        "Depending on the service requested, an agency fee may apply for:",
        "• Cancellation processing",
        "• Refund processing",
        "• Ticket changes",
        "• Rebooking",
        "• Waiver requests",
        "• Complex itinerary servicing",
        "• Post-ticketing assistance",
        "• Other agency services",
        "An agency service fee does not represent an airline penalty or government charge.",
        "Where applicable, the customer will be informed of the agency service fee before the relevant service is authorized.",
        "Unless expressly stated otherwise, completion of agency work may result in the applicable service fee remaining payable even if the airline subsequently denies the requested refund or waiver."
      ],
      twoColumn: true
    },
    {
      icon: Shield,
      title: "17. Merchant-of-Record Considerations",
      content: [
        "The entity responsible for processing or refunding a particular amount may depend on the transaction structure.",
        "For this reason, customers should distinguish between:",
        "• Airline airfare",
        "• Airline taxes and charges",
        "• Airline ancillary services",
        "• Noam Flyers Inc. agency service fees",
        "• Third-party supplier charges",
        "Where Noam Flyers Inc. is the applicable merchant of record and is responsible for a refund, it will process the refund in accordance with applicable law and the terms governing the transaction.",
        "Where another supplier or airline is responsible for the applicable amount, Noam Flyers Inc. may assist with communication and documentation but cannot guarantee the supplier's decision or processing time."
      ],
      twoColumn: true
    },
    {
      icon: FileText,
      title: "18. Cancellation and Refund Responsibility Table",
      content: [
        "Scenario: Customer changes plans before departure",
        "Primary Decision-Maker: Airline fare rules + Noam Flyers Inc. processing",
        "Typical Result: Future credit, refund, exchange, or no remaining value depending on fare",
        "",
        "Scenario: Request shortly after booking",
        "Primary Decision-Maker: Airline policy + ticket status + agency process",
        "Typical Result: Possible reversal if eligible and timely; not automatically guaranteed",
        "",
        "Scenario: Airline cancels or significantly changes flight",
        "Primary Decision-Maker: Airline event + applicable merchant of record",
        "Typical Result: Refund, rebooking, or applicable airline alternative",
        "",
        "Scenario: Unused baggage, seat, or ancillary service",
        "Primary Decision-Maker: Airline or applicable merchant of record",
        "Typical Result: Ancillary refund where required or permitted",
        "",
        "Scenario: Medical, bereavement, or visa-related request",
        "Primary Decision-Maker: Airline waiver review",
        "Typical Result: Possible refund or credit if waiver is approved or required",
        "",
        "Scenario: No-show",
        "Primary Decision-Maker: Airline",
        "Typical Result: Possible loss of value unless reinstatement or waiver is approved",
        "",
        "Scenario: Agency service-fee dispute",
        "Primary Decision-Maker: Noam Flyers Inc.",
        "Typical Result: Review based on disclosed fee and service performed"
      ],
      twoColumn: true
    },
    {
      icon: AlertCircle,
      title: "19. Important Refund Disclaimer",
      content: [
        "A refund request does not itself guarantee that a refund will be issued.",
        "Refund eligibility depends on the applicable airline fare rules, ticket status, airline policies, applicable law, merchant-of-record structure, and the specific circumstances of the cancellation.",
        "Noam Flyers Inc. cannot guarantee a refund, waiver, credit, or reinstatement where the applicable airline or supplier does not authorize it and no independent legal right requires it."
      ]
    },
    {
      icon: Shield,
      title: "20. Legal and Policy Clause",
      content: [
        "Voluntary cancellations and voluntary refund requests remain subject to the rules of the airline and the fare purchased.",
        "Noam Flyers Inc.'s own service fees do not convert a non-refundable airline ticket into a refundable ticket and do not create rights that the airline has not granted.",
        "Where a refund is required by applicable law or where Noam Flyers Inc. is responsible for returning funds as the applicable merchant of record, the refund will be handled in accordance with the applicable legal requirements and transaction terms."
      ]
    },
    {
      icon: Users,
      title: "21. Customer Responsibility",
      content: [
        "Customers are responsible for reviewing their booking confirmation, ticket conditions, cancellation restrictions, refund conditions, travel-credit expiration dates, and applicable service fees.",
        "Customers should contact Cheapflightssolution.com promptly if:",
        "• They need to cancel",
        "• They will not be able to travel",
        "• Their airline has cancelled or significantly changed their flight",
        "• They believe a refund is due",
        "• They did not receive a purchased ancillary service",
        "• They received a notice that their ticket has been cancelled",
        "• They need assistance with a future travel credit",
        "Delaying a cancellation or refund request may affect the available options under the applicable airline rules."
      ],
      twoColumn: true
    },
    {
      icon: FileText,
      title: "22. Final Statement",
      content: [
        "Cheapflightssolution.com and Noam Flyers Inc. are committed to providing clear information about cancellation and refund procedures.",
        "Because Cheapflightssolution.com acts as an independent travel agency, customers should understand that airline fare rules and supplier policies can differ significantly between airlines, routes, fare types, and ticket conditions.",
        "Our role is to facilitate the booking, provide applicable agency services, communicate available options, and process refunds or other transactions within the authority available to us.",
        "",
        "Cheapflightssolution.com",
        "Operated by Noam Flyers Inc."
      ]
    }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white pt-16 sm:pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm mb-4 sm:mb-6">
            <NextLink href="/" className="transition-colors" style={{ color: '#000000' }}>
              Home
            </NextLink>
            <span className="text-black/30">›</span>
            <span className="text-black/60">Cancellation & Refund Policy</span>
          </nav>

          {/* Full width container */}
          <div className="w-full">
            {/* Header Section */}
            <div className="mb-6 sm:mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight" style={{ color: '#000000' }}>
                Cancellation & Refund Policy
              </h1>
              <div 
                className="w-10 sm:w-12 h-0.5 sm:h-1 mt-2 sm:mt-3 rounded-full"
                style={{
                  background: `linear-gradient(to right, #000000, #666666)`
                }}
              />
            </div>

            {/* Cancellation & Refund Policy Sections */}
            {sections.map((section, index) => {
              const Icon = section.icon;
              const isTwoColumn = section.twoColumn;
              
              return (
                <div key={index} className="mt-6 sm:mt-8">
                  {/* Heading with icon */}
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <div 
                      className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#f0f0f0' }}
                    >
                      <Icon size={16} className="sm:w-4 sm:h-4" style={{ color: '#000000' }} />
                    </div>
                    <h2 className="text-sm sm:text-base lg:text-xl font-bold leading-tight" style={{ color: '#000000' }}>
                      {section.title}
                    </h2>
                  </div>
                  
                  {/* Content */}
                  <div className="w-full text-sm sm:text-base lg:text-base leading-relaxed text-justify">
                    {Array.isArray(section.content) ? (
                      <div className={isTwoColumn ? "grid grid-cols-1 md:grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-2 sm:gap-y-3 w-full" : "space-y-2 sm:space-y-3 w-full"}>
                        {section.content.map((paragraph, pIndex) => {
                          if (paragraph === "") {
                            return <div key={pIndex} className="h-1 sm:h-2 col-span-2" />;
                          }

                          if (paragraph.startsWith("•")) {
                            return (
                              <div key={pIndex} className="flex items-start gap-2 w-full col-span-2 md:col-span-1 text-justify">
                                <div 
                                  className="w-1.5 h-1.5 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"
                                  style={{ backgroundColor: '#000000' }}
                                />
                                <span className="leading-relaxed text-sm sm:text-base flex-1" style={{ color: '#000000/60' }}>
                                  {paragraph.substring(2)}
                                </span>
                              </div>
                            );
                          }

                          if (paragraph.startsWith("Scenario:") || paragraph.startsWith("Service Category:") || paragraph.startsWith("Noam Flyers Inc. Service Fee:")) {
                            return (
                              <p key={pIndex} className="w-full col-span-2 leading-relaxed text-sm sm:text-base font-semibold" style={{ color: '#000000' }}>
                                {paragraph}
                              </p>
                            );
                          }

                          return (
                            <p key={pIndex} className="w-full col-span-2 leading-relaxed text-sm sm:text-base" style={{ color: '#000000/60' }}>
                              {paragraph}
                            </p>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="w-full overflow-x-auto overflow-y-hidden">
                        <div className="min-w-[640px] sm:min-w-0">
                          {section.content}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Footer Note */}
            <div className="mt-8 sm:mt-10 p-4 sm:p-6 rounded-lg" style={{ backgroundColor: '#f5f5f5' }}>
              <p className="text-sm sm:text-base text-center" style={{ color: '#000000/60' }}>
                {BRAND.name}
              </p>
              <p className="text-sm sm:text-base text-center" style={{ color: '#000000/60' }}>
                Operated by Noam Flyers Inc.
              </p>
            </div>

            {/* Call to Action */}
            <div 
              className="mt-8 sm:mt-10 p-4 sm:p-6 rounded-lg text-white w-full"
              style={{
                background: `linear-gradient(to right, #000000, #333333)`
              }}
            >
              <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-1.5 sm:mb-2 !text-white">
                Need Help With Your Travel Plans?
              </h3>
              <p className="text-sm sm:text-base mb-3 sm:mb-4 text-white/80">
                Our travel experts are here to assist you with flight bookings, changes, and more.
              </p>
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:scale-105 text-sm sm:text-base"
                style={{
                  backgroundColor: '#ffffff',
                  color: '#000000'
                }}
              >
                <Phone size={16} className="sm:w-4 sm:h-4" />
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
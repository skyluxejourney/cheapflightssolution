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
  Heart,
} from "lucide-react";
import NextLink from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BRAND, CONTACT } from "@/app/constants";

export default function PostTicketingServiceFeesPage() {
  const sections = [
    {
      icon: FileText,
      title: "Post-Ticketing Service Fees",
      content: [
        `${BRAND.name} is operated by Noam Flyers Inc. ${BRAND.name} is an independent travel agency and is not an airline.`,
        "This page explains the post-ticketing service fees that Noam Flyers Inc. may charge after a reservation has been confirmed or an airline ticket has been issued. These fees may apply when customers request services such as cancellation processing, refund assistance, ticket exchanges, reissues, future-travel-credit handling, waiver requests, name-correction administration, duplicate-booking investigation, or other post-sale services.",
        "Noam Flyers Inc.'s post-ticketing service fees are separate from any charges imposed by an airline, airport, government authority, supplier, or other third party. Such additional amounts may include airline penalties, fare differences, government taxes, airport charges, baggage fees, seat-selection fees, supplier penalties, or other applicable charges."
      ]
    },
    {
      icon: Info,
      title: "1. Purpose of Post-Ticketing Service Fees",
      content: [
        "Post-ticketing services often require substantially more manual work than the original booking process.",
        "Depending on the request, Noam Flyers Inc. may need to:",
        "• Review the customer's ticket and fare rules",
        "• Determine whether the requested action is permitted",
        "• Contact the airline or supplier",
        "• Request a waiver or exception",
        "• Calculate applicable fare differences",
        "• Process a refund request",
        "• Process a ticket exchange or reissue",
        "• Review ticket usage and remaining value",
        "• Submit supporting documentation",
        "• Update reservation records",
        "• Coordinate payment or refund information",
        "• Communicate the outcome to the customer",
        "Because these services require additional agency resources, Noam Flyers Inc. may charge a separate post-ticketing service fee."
      ],
      twoColumn: true
    },
    {
      icon: Clock,
      title: "2. When a Post-Ticketing Fee May Apply",
      content: [
        "A post-ticketing service fee may apply when a customer requests assistance after a booking has been confirmed or a ticket has been issued.",
        "Examples include:",
        "• Voluntary cancellation",
        "• Refund requests",
        "• Ticket exchanges",
        "• Ticket reissues",
        "• Future travel credit assistance",
        "• Name corrections",
        "• Duplicate booking investigation",
        "• No-show recovery requests",
        "• Waiver requests",
        "• Medical or bereavement documentation handling",
        "• Visa-related waiver requests",
        "• Military waiver requests",
        "• Ancillary-service refund requests",
        "• Schedule-change assistance involving a customer-requested alternative",
        "• Other manual post-ticketing services",
        "The applicable fee depends on the type and complexity of the service requested."
      ],
      twoColumn: true
    },
    {
      icon: DollarSign,
      title: "3. Agency Fees Are Separate From Airline Charges",
      content: [
        "Noam Flyers Inc.'s post-ticketing service fees are agency fees.",
        "They are separate from:",
        "• Airline cancellation penalties",
        "• Airline change fees",
        "• Fare differences",
        "• Airline no-show penalties",
        "• Government taxes",
        "• Airport charges",
        "• Baggage charges",
        "• Seat-selection charges",
        "• Airline ancillary fees",
        "• Supplier penalties",
        "• Other third-party charges",
        "Payment of a Noam Flyers Inc. service fee does not eliminate or replace an airline-imposed charge.",
        "Where an airline requires an additional payment to complete a requested change, exchange, reissue, cancellation, or other transaction, that amount will be separate from the applicable Noam Flyers Inc. service fee."
      ],
      twoColumn: true
    },
    {
      icon: Users,
      title: "4. Fee Per Passenger, Ticket, or Service Request",
      content: [
        "Unless otherwise stated, post-ticketing service fees may be assessed per passenger, per ticket, or per service request, depending on the nature of the transaction.",
        "A booking involving multiple passengers or multiple tickets may therefore result in more than one service fee where separate work is required.",
        "For example, if individual passenger tickets must be processed separately, the applicable service may need to be performed separately for each ticket.",
        "Where a single service request covers multiple passengers and can reasonably be completed as one transaction, Noam Flyers Inc. may determine the applicable fee based on the published fee schedule or the amount quoted before the service begins."
      ]
    },
    {
      icon: AlertCircle,
      title: "5. Fee Does Not Guarantee Airline Approval",
      content: [
        "Payment of a post-ticketing service fee does not guarantee that an airline or supplier will approve the requested action.",
        "For example:",
        "• A requested name change may not be permitted",
        "• A refund may be prohibited by the fare rules",
        "• A waiver may be denied",
        "• A missed flight may have no remaining value",
        "• A low-cost-carrier reservation may require direct airline handling",
        "• An airline may reject a requested exception",
        "• A ticket may no longer qualify for a particular change or refund",
        "The Noam Flyers Inc. service fee compensates the agency for the applicable service work. It does not represent a guarantee that the airline will approve the requested outcome unless the specific service is expressly described as success-based."
      ],
      twoColumn: true
    },
    {
      icon: XCircle,
      title: "6. Requests That Cannot Be Completed",
      content: [
        "Noam Flyers Inc. may determine that a requested post-ticketing service cannot be completed because of airline rules, ticket status, timing, supplier restrictions, technical limitations, or other circumstances.",
        "Where a request is clearly impossible before substantive work begins, Noam Flyers Inc. will generally not charge the applicable service fee or will reverse a fee that was collected for that request.",
        "Where substantive agency work has already begun, the applicable service fee may remain payable even if the airline or supplier subsequently declines the requested action."
      ]
    },
    {
      icon: XCircle,
      title: "7. Voluntary Cancellation Assistance",
      content: [
        "Customers may request assistance cancelling an airline ticket after ticket issuance.",
        "The applicable airline fare rules determine whether the ticket is:",
        "• Refundable",
        "• Refundable subject to deductions",
        "• Eligible for future travel credit",
        "• Exchangeable",
        "• Subject to a cancellation penalty",
        "• Non-refundable",
        "• Without remaining value",
        "Where Noam Flyers Inc. provides cancellation assistance, an applicable post-ticketing service fee may be charged in addition to any airline-imposed cancellation penalty or other applicable amount."
      ],
      twoColumn: true
    },
    {
      icon: CreditCard,
      title: "8. Refund Processing",
      content: [
        "A refund request may require Noam Flyers Inc. to review the ticket, determine eligibility, contact the airline, submit documentation, calculate applicable amounts, and process or monitor the refund.",
        "An applicable refund-processing service fee may therefore apply.",
        "The service fee remains separate from the actual refund amount approved by the airline or otherwise required under applicable law.",
        "Where a refund is denied because the ticket is non-refundable or otherwise ineligible, Noam Flyers Inc. may still charge the disclosed service fee where substantive refund-processing work was performed."
      ]
    },
    {
      icon: CreditCard,
      title: "9. Ticket Exchange and Reissue",
      content: [
        "Customers requesting a ticket change or reissue may be responsible for:",
        "• The applicable Noam Flyers Inc. service fee;",
        "• Any airline change penalty, if applicable;",
        "• Any fare difference;",
        "• Any additional taxes or government charges; and",
        "• Any other supplier-imposed amount required to complete the transaction.",
        "Before processing an exchange or reissue, Noam Flyers Inc. may provide the customer with the applicable total amount required to complete the requested change."
      ]
    },
    {
      icon: CreditCard,
      title: "10. Future Travel Credit Assistance",
      content: [
        "Where an airline permits a cancelled ticket to retain value as a future travel credit, Noam Flyers Inc. may assist with documenting, reviewing, or applying the credit.",
        "A service fee may apply for manual assistance.",
        "Future travel credits may be subject to airline-specific conditions, including:",
        "• Expiration dates",
        "• Passenger restrictions",
        "• Transfer restrictions",
        "• Route restrictions",
        "• Fare differences",
        "• Change restrictions",
        "• Redemption requirements",
        "Noam Flyers Inc. does not control the airline's future-credit rules."
      ],
      twoColumn: true
    },
    {
      icon: Info,
      title: "11. Name Correction Services",
      content: [
        "Name corrections are subject to the applicable airline's rules.",
        "Where an airline permits a minor correction, Noam Flyers Inc. may assist with the correction process and charge the applicable service fee.",
        "A full passenger-name change may not be permitted by the airline.",
        "If the airline requires cancellation and rebooking instead of a name correction, the customer may be responsible for the applicable fare difference, airline charges, and Noam Flyers Inc. service fee.",
        "Payment of a name-correction service fee does not guarantee airline approval."
      ]
    },
    {
      icon: AlertCircle,
      title: "12. No-Show and Missed-Flight Assistance",
      content: [
        "A customer who misses a scheduled flight without cancelling or changing the reservation in accordance with the applicable airline rules may be considered a no-show.",
        "No-show consequences may include:",
        "• Loss of ticket value",
        "• Cancellation of remaining flight segments",
        "• Loss of future travel credit",
        "• Additional airline charges",
        "• Requirement for airline approval before reinstatement",
        "Noam Flyers Inc. may attempt to request reinstatement, recovery of remaining value, or an applicable waiver.",
        "A no-show recovery or reinstatement service fee may apply.",
        "Noam Flyers Inc. does not guarantee that the airline will approve reinstatement or recovery."
      ],
      twoColumn: true
    },
    {
      icon: Shield,
      title: "13. Waiver and Special-Case Requests",
      content: [
        "Noam Flyers Inc. may assist with requests involving circumstances such as:",
        "• Medical situations",
        "• Bereavement",
        "• Visa refusal",
        "• Military orders",
        "• Severe travel disruptions",
        "• Duplicate bookings",
        "• Other circumstances for which an airline may provide a discretionary waiver",
        "Supporting documentation may be required.",
        "A waiver-processing fee may apply depending on the type and complexity of the request.",
        "An airline may independently approve or deny the requested waiver.",
        "Any airline waiver applies only according to the airline's decision and does not automatically waive Noam Flyers Inc.'s own service fee."
      ]
    },
    {
      icon: DollarSign,
      title: "14. Ancillary-Service Refund Assistance",
      content: [
        "Customers may request assistance with refunds involving airline ancillary services, including:",
        "• Seats",
        "• Checked baggage",
        "• Priority services",
        "• Upgrades",
        "• Other paid airline services",
        "Where manual agency assistance is required, a service fee may apply.",
        "The actual refund entitlement remains subject to the airline's rules, applicable law, merchant-of-record structure, and whether the service was provided."
      ]
    },
    {
      icon: Clock,
      title: "15. Schedule-Change Assistance",
      content: [
        "When an airline makes a schedule change or cancellation, Noam Flyers Inc. may assist the customer with the airline's proposed alternative.",
        "Where the customer simply accepts an eligible airline-provided alternative, Noam Flyers Inc. may not charge a post-ticketing service fee for basic schedule-change assistance, subject to the applicable service terms.",
        "If the customer requests an alternative itinerary that requires additional agency work beyond the standard airline-provided solution, a post-ticketing service fee may apply.",
        "Any airline fare difference or other applicable airline charge will remain separate."
      ]
    },
    {
      icon: Info,
      title: "16. Duplicate Booking Investigation",
      content: [
        "Customers who believe that duplicate reservations have been created may request assistance investigating and consolidating the bookings.",
        "A nominal service fee may apply where manual investigation is required.",
        "Where a duplicate booking was clearly caused by an error attributable to Noam Flyers Inc., the applicable agency fee may be waived."
      ]
    },
    {
      icon: FileText,
      title: "17. Ticket Copies and Itinerary Resends",
      content: [
        "Basic requests for a ticket copy, itinerary resend, or booking-status confirmation may generally be provided without a post-ticketing service fee.",
        "However, if extensive manual research or retrieval from archived records is required, an administrative fee may apply where disclosed before the service is performed."
      ]
    },
    {
      icon: CreditCard,
      title: "18. Chargeback and Duplicate-Payment Investigations",
      content: [
        "Where a customer requests an investigation into a duplicate payment or billing issue, Noam Flyers Inc. may review the relevant booking, payment records, transaction history, and ticketing records.",
        "A service fee may apply for customer-requested research unless the investigation confirms that the issue resulted from a Noam Flyers Inc. billing error.",
        "This does not limit any customer's rights under applicable law or applicable payment-network dispute procedures."
      ]
    },
    {
      icon: FileText,
      title: "19. Proposed Post-Ticketing Service Fee Schedule",
      content: [
        "The following fee schedule should be published only after internal adoption and alignment with customer-service scripts, booking disclosures, payment procedures, and staff training.",
        "",
        "Service Category: Cancellation assistance within 24 hours where airline/fare permits reversal — online self-service",
        "Noam Flyers Inc. Service Fee: USD 0.00",
        "",
        "Service Category: Cancellation assistance within 24 hours where airline/fare permits reversal — agent-assisted",
        "Noam Flyers Inc. Service Fee: USD 25.00",
        "",
        "Service Category: Voluntary cancellation for future airline credit — domestic economy",
        "Noam Flyers Inc. Service Fee: USD 50.00",
        "",
        "Service Category: Voluntary cancellation for future airline credit — international economy",
        "Noam Flyers Inc. Service Fee: USD 75.00",
        "",
        "Service Category: Voluntary cancellation for future airline credit — premium cabin",
        "Noam Flyers Inc. Service Fee: USD 100.00",
        "",
        "Service Category: Voluntary refund processing — domestic economy",
        "Noam Flyers Inc. Service Fee: USD 100.00",
        "",
        "Service Category: Voluntary refund processing — international economy",
        "Noam Flyers Inc. Service Fee: USD 175.00",
        "",
        "Service Category: Voluntary refund processing — premium cabin",
        "Noam Flyers Inc. Service Fee: USD 200.00",
        "",
        "Service Category: Exchange/reissue more than 10 days before departure — domestic economy",
        "Noam Flyers Inc. Service Fee: USD 75.00",
        "",
        "Service Category: Exchange/reissue more than 10 days before departure — international economy",
        "Noam Flyers Inc. Service Fee: USD 150.00",
        "",
        "Service Category: Exchange/reissue within 10 days of departure — domestic economy",
        "Noam Flyers Inc. Service Fee: USD 125.00",
        "",
        "Service Category: Exchange/reissue within 10 days of departure — international economy or premium cabin",
        "Noam Flyers Inc. Service Fee: USD 200.00",
        "",
        "Service Category: Minor name-correction administration where permitted by airline",
        "Noam Flyers Inc. Service Fee: USD 50.00–USD 100.00",
        "",
        "Service Category: Full name-change or cancel/rebook handling where airline does not permit correction",
        "Noam Flyers Inc. Service Fee: Quoted before action",
        "",
        "Service Category: No-show reinstatement or missed-flight recovery request",
        "Noam Flyers Inc. Service Fee: USD 150.00",
        "",
        "Service Category: Duplicate-booking investigation and consolidation request",
        "Noam Flyers Inc. Service Fee: USD 25.00",
        "",
        "Service Category: Medical, bereavement, visa, military, or other documentary waiver request",
        "Noam Flyers Inc. Service Fee: USD 50.00–USD 150.00 depending on complexity",
        "",
        "Service Category: Ancillary refund assistance for seat, baggage, or unused paid service",
        "Noam Flyers Inc. Service Fee: USD 25.00 per ancillary item or service request",
        "",
        "Service Category: Airline schedule-change assistance where customer accepts the airline's proposed alternative",
        "Noam Flyers Inc. Service Fee: No Noam Flyers Inc. fee",
        "",
        "Service Category: Schedule-change assistance requiring a customer-requested alternative outside the airline's default offer",
        "Noam Flyers Inc. Service Fee: USD 50.00–USD 100.00",
        "",
        "Service Category: Ticket copy, itinerary resend, or basic booking-status request",
        "Noam Flyers Inc. Service Fee: No fee, unless extensive archive research is required",
        "",
        "Service Category: Customer-requested chargeback research or duplicate-payment investigation",
        "Noam Flyers Inc. Service Fee: USD 35.00 unless a Noam Flyers Inc. billing error is confirmed"
      ],
      twoColumn: true
    },
    {
      icon: Info,
      title: "20. Fee Disclosure Before Service",
      content: [
        "Where a post-ticketing service fee applies, Noam Flyers Inc. will disclose the applicable agency fee before the customer authorizes the service, unless the fee has already been clearly disclosed and accepted under the applicable booking or service terms.",
        "The customer should have an opportunity to review the applicable:",
        "• Agency service fee",
        "• Airline penalty",
        "• Fare difference",
        "• Taxes",
        "• Supplier charges",
        "• Other applicable amounts",
        "before authorizing a charge or proceeding with the requested service."
      ]
    },
    {
      icon: CreditCard,
      title: "21. Refundability of Post-Ticketing Service Fees",
      content: [
        "Post-ticketing service fees compensate Noam Flyers Inc. for agency work performed after the original booking.",
        "Unless expressly identified as a success-based service:",
        "• A service fee may be non-refundable once substantive work has begun.",
        "• An airline's denial of a request does not automatically make the agency service fee refundable.",
        "If Noam Flyers Inc. determines that a request is clearly impossible before substantive work begins, the applicable fee should generally not be charged or should be reversed.",
        "If a fee was collected but Noam Flyers Inc. performed no substantive work on the request, the fee may be refunded.",
        "Any fee waiver or reduction applies only to Noam Flyers Inc.'s own fee and does not automatically waive an airline or supplier charge."
      ]
    },
    {
      icon: Heart,
      title: "22. Compassionate Fee Reductions",
      content: [
        "Noam Flyers Inc. may, at its discretion, reduce or waive its own post-ticketing service fee in appropriate circumstances.",
        "Examples may include:",
        "• Bereavement",
        "• Active military orders",
        "• Severe accessibility-related inability to use available self-service tools",
        "• Other comparable hardship circumstances recognized by Noam Flyers Inc.",
        "Where a reduction or waiver is granted, it applies only to Noam Flyers Inc.'s own service fee.",
        "It does not automatically waive:",
        "• Airline penalties",
        "• Fare differences",
        "• Government charges",
        "• Airport fees",
        "• Supplier charges",
        "• Other third-party costs",
        "Any compassionate reduction should be based on reasonable supporting documentation and applied consistently according to Noam Flyers Inc.'s internal procedures."
      ],
      twoColumn: true
    },
    {
      icon: CreditCard,
      title: "23. Payment and Original Form of Payment",
      content: [
        "Where a refund or monetary adjustment is approved, Noam Flyers Inc. generally processes the applicable amount to the original form of payment, subject to applicable law, payment-provider requirements, fraud controls, and the transaction structure.",
        "Customers should not assume that a refund can automatically be transferred to:",
        "• A different credit card",
        "• Another person's card",
        "• A different bank account",
        "• A different payment method",
        "Identity verification may be required before a monetary adjustment is processed."
      ],
      twoColumn: true
    },
    {
      icon: CheckCircle,
      title: "24. Customer Acknowledgment",
      content: [
        "By authorizing a post-ticketing service, the customer acknowledges that:",
        "• The applicable Noam Flyers Inc. service fee has been disclosed.",
        "• The service fee is separate from airline and supplier charges.",
        "• Payment of the service fee does not guarantee airline approval.",
        "• The requested action remains subject to applicable airline rules.",
        "• Additional airline or supplier charges may apply.",
        "• The customer has had an opportunity to review the applicable charges before authorizing the service."
      ]
    },
    {
      icon: Shield,
      title: "25. Legal Clause",
      content: [
        "Noam Flyers Inc.'s post-ticketing service fees compensate the agency for after-sale travel services and administrative work.",
        "These fees are separate from airline-imposed penalties, fare differences, government taxes, airport charges, baggage fees, seat fees, supplier charges, and other third-party costs.",
        "Payment of a Noam Flyers Inc. post-ticketing service fee does not guarantee that an airline or supplier will approve a requested cancellation, refund, waiver, exchange, reissue, name correction, reinstatement, or other requested action.",
        "Any airline or supplier decision remains subject to that provider's applicable rules, policies, availability, and applicable law."
      ]
    },
    {
      icon: FileText,
      title: "26. Final Statement",
      content: [
        "Cheapflightssolution.com is committed to providing transparent information about post-ticketing service charges.",
        "Noam Flyers Inc. will distinguish its own agency service fees from charges imposed by airlines, suppliers, airports, governments, or other third parties.",
        "Customers will be informed of applicable agency fees before authorization of the relevant post-ticketing service, subject to the terms governing the original transaction and the applicable service requested.",
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
            <span className="text-black/60">Post-Ticketing Service Fees</span>
          </nav>

          <div className="w-full">
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black leading-tight">
                Post-Ticketing Service Fees
              </h1>
              <p className="text-sm text-black/60 mt-2 text-justify">
                {BRAND.name} is operated by Noam Flyers Inc. {BRAND.name} is an independent travel agency and is not an airline.
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
                      // Check if paragraph is "Service Category:" or "Noam Flyers Inc. Service Fee:"
                      if (paragraph.startsWith("Service Category:") || 
                          paragraph.startsWith("Noam Flyers Inc. Service Fee:")) {
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
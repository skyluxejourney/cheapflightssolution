"use client";

import { 
  FileText, 
  Shield, 
  Clock, 
  CreditCard, 
  CheckCircle, 
  AlertCircle, 
  Phone,
  Info,
  Globe,
  Users,
} from "lucide-react";
import NextLink from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BRAND, CONTACT } from "@/app/constants";

export default function FulfillmentPolicyPage() {
  const sections = [
    {
      icon: FileText,
      title: "Fulfillment Policy",
      content: [
        `This Fulfillment Policy explains how ${BRAND.name}, operated by Noam Flyers Inc., processes and fulfills travel booking requests, what happens after payment, how online and assisted booking channels operate, when a booking becomes final, and what confirmation customers should expect.`,
        `${BRAND.name} is an independent travel agency and is not an airline. Noam Flyers Inc. does not operate flights, control air-traffic operations, board passengers, load baggage, or determine airline schedules. Those operational functions remain the responsibility of the applicable airlines, airports, and other relevant service providers.`
      ]
    },
    {
      icon: Info,
      title: "1. How Fulfillment Works",
      content: [
        "Noam Flyers Inc. fulfills travel booking requests by providing access to available airline inventory, collecting the information required to create a booking request, processing payment or payment authorization, transmitting the booking or ticketing request through the applicable supplier or distribution channel, and communicating the resulting confirmation, ticket information, or failure status to the customer.",
        "The fulfillment process may involve airlines, Global Distribution Systems (GDS), airline-content systems, payment processors, technology providers, and other travel-service suppliers.",
        "The fact that a customer has submitted a booking request does not by itself mean that the reservation has been fully completed or ticketed."
      ]
    },
    {
      icon: Globe,
      title: "2. Online and Assisted Booking Channels",
      content: [
        `${BRAND.name} supports two primary booking channels.`,
        "Online Self-Service Booking",
        "With online self-service booking, the customer searches for available travel options, selects an itinerary, provides the required passenger information, and submits payment through the Website's booking process.",
        "Assisted Booking",
        "Customers may also receive assistance through available telephone, chat, email, or other customer-service channels.",
        "Assisted booking may include help with:",
        "• Route selection",
        "• Fare and itinerary information",
        "• Manual booking support",
        "• Passenger information",
        "• Payment processing",
        "• Documentation requirements",
        "• Complex itineraries",
        "• Multi-passenger reservations",
        "• Special-service requests",
        "• Schedule-change situations",
        "• Post-booking support",
        "Assisted booking may involve a different service fee than self-service booking. Any applicable service fee should be disclosed to the customer before payment authorization."
      ],
      twoColumn: true
    },
    {
      icon: Clock,
      title: "3. Booking and Fulfillment Process",
      content: [
        "A typical booking request may proceed through the following stages:",
        "Step 1 — Search and Selection",
        "The customer searches available flights and selects a proposed itinerary.",
        "Step 2 — Passenger Information",
        "Required passenger and contact information is entered or confirmed.",
        "Step 3 — Price Review",
        "The applicable total price is displayed, including known mandatory charges and any applicable Cheapflightssolution.com or Noam Flyers Inc. service fee.",
        "Step 4 — Payment Submission",
        "The customer submits payment information through the designated payment process.",
        "Step 5 — Payment and Transaction Validation",
        "Noam Flyers Inc. or its authorized payment providers may verify payment authorization, transaction status, availability, and applicable fraud or security signals.",
        "Step 6 — Supplier Confirmation or Ticketing",
        "The booking request is transmitted to the applicable airline, supplier, GDS, or other authorized distribution channel for confirmation and/or ticketing.",
        "Step 7 — Final Confirmation",
        "Once the applicable supplier confirms the reservation and, where applicable, the ticket has been issued, Cheapflightssolution.com communicates the resulting booking information to the customer.",
        "Until the applicable confirmation or ticketing process has been successfully completed, a booking request should not be considered fully fulfilled."
      ]
    },
    {
      icon: CreditCard,
      title: "4. Payment Processing",
      content: [
        "Noam Flyers Inc. processes payments for bookings made through Cheapflightssolution.com using applicable payment-processing systems and authorized payment providers.",
        "Depending on the payment pathway, a customer may see:",
        "• A payment authorization",
        "• A completed charge",
        "• Multiple component charges that together represent the agreed transaction",
        "• A temporary authorization hold",
        "• A delay between payment submission and final ticket issuance",
        "The exact appearance and timing of a transaction may depend on the payment method, financial institution, payment processor, airline, supplier, and booking pathway.",
        "If payment cannot be completed, the fare changes before ticketing, or the applicable supplier cannot confirm the itinerary, Noam Flyers Inc. may notify the customer and explain the available next steps.",
        "If a payment has been authorized or charged but the requested booking cannot be fulfilled, Noam Flyers Inc. will process the applicable reversal, release, refund, or other transaction adjustment in accordance with the payment method, processor requirements, supplier rules, and applicable circumstances."
      ],
      twoColumn: true
    },
    {
      icon: CheckCircle,
      title: "5. When Is a Booking Final?",
      content: [
        "Submitting a booking request does not necessarily mean that a ticket has been issued.",
        "A booking should generally be considered fully fulfilled only after:",
        "• Required payment or payment authorization has been successfully completed;",
        "• The applicable airline or travel supplier has confirmed the requested service; and",
        "• A reservation confirmation and/or ticket number has been issued and communicated to the customer, as applicable.",
        "A confirmation that merely acknowledges receipt of a booking request should not automatically be interpreted as proof that a ticket has been issued."
      ]
    },
    {
      icon: FileText,
      title: "6. Fulfillment Confirmation",
      content: [
        "For an air booking, the core fulfillment deliverable is a valid reservation record and, where applicable, an issued ticket number.",
        "A completed fulfillment communication should generally contain the essential booking information available for the transaction, which may include:",
        "• Passenger names",
        "• Origin and destination",
        "• Travel dates",
        "• Flight details",
        "• Departure and arrival times",
        "• Cabin class",
        "• Booking reference or PNR",
        "• Ticket number, where issued",
        "• Applicable payment summary",
        "• Relevant fare or booking conditions",
        "• Instructions for obtaining assistance or checking the booking status",
        "Customers should retain their confirmation and ticket information for future reference."
      ],
      twoColumn: true
    },
    {
      icon: AlertCircle,
      title: "7. Additional Review",
      content: [
        "Some transactions may require additional review before fulfillment is completed.",
        "This may include:",
        "• Payment verification",
        "• Identity verification",
        "• Fraud or risk review",
        "• Card validation",
        "• Manual ticketing",
        "• Supplier queue processing",
        "• Availability verification",
        "• Special-service validation",
        "• Documentation review",
        "• Customer recontact",
        "Additional review does not necessarily mean that a booking has failed.",
        "It may simply mean that the transaction has not yet reached its final fulfillment stage.",
        "Where reasonably possible, Cheapflightssolution.com will communicate the relevant status to the customer rather than allowing a customer to assume that a request has already resulted in an issued ticket."
      ],
      twoColumn: true
    },
    {
      icon: AlertCircle,
      title: "8. When a Booking Cannot Be Fulfilled as Requested",
      content: [
        "Not every booking request can necessarily be fulfilled exactly as originally selected.",
        "For example:",
        "• The selected fare may no longer be available.",
        "• Airline inventory may change before ticket issuance.",
        "• The airline may require a schedule or fare adjustment.",
        "• A payment method may fail validation.",
        "• A supplier may reject the requested itinerary.",
        "• A special-service request may require additional confirmation.",
        "• A supplier may require direct carrier servicing.",
        "When this occurs, Noam Flyers Inc. will seek to communicate the available options.",
        "Depending on the circumstances, available options may include:",
        "• A revised itinerary",
        "• A revised fare",
        "• An alternate routing",
        "• An alternative flight",
        "• Cancellation of the booking request",
        "• Applicable reversal or refund",
        "A failed fulfillment should not be represented as a successfully issued or fully delivered ticket."
      ],
      twoColumn: true
    },
    {
      icon: Users,
      title: "9. Post-Fulfillment Support",
      content: [
        "After fulfillment, Cheapflightssolution.com may provide applicable post-booking assistance.",
        "This may include:",
        "• Re-sending itinerary information",
        "• Booking-status assistance",
        "• Schedule-change communication",
        "• Assistance with eligible booking services",
        "• Post-ticketing service handling",
        "• Refund-routing assistance",
        "• General booking support",
        "However, certain functions remain under the control of the operating airline or travel supplier.",
        "Depending on the booking, customers may need to deal directly with the airline for matters such as:",
        "• Online check-in",
        "• Airport check-in",
        "• Passport or travel-document verification",
        "• Advance Passenger Information (API) requirements",
        "• Operating-carrier seat maps",
        "• Certain low-cost-carrier services",
        "• Airline-controlled ancillary services",
        "• Certain changes that must be processed directly by the carrier",
        "Cheapflightssolution.com will provide guidance where appropriate, but it cannot control airline systems or operational procedures."
      ],
      twoColumn: true
    },
    {
      icon: Shield,
      title: "10. Customer Responsibility",
      content: [
        "Customers are responsible for reviewing their fulfillment confirmation when received.",
        "Customers should verify:",
        "• Passenger names",
        "• Origin and destination",
        "• Travel dates",
        "• Departure times",
        "• Arrival times",
        "• Number of passengers",
        "• Cabin class",
        "• Baggage inclusions",
        "• Seat information, where applicable",
        "• Booking reference",
        "• Ticket number, where applicable",
        "• Any important fare conditions",
        "Any discrepancy should be reported to Cheapflightssolution.com as soon as possible through the support channel provided with the booking.",
        "Prompt reporting is important because airline rules, fare conditions, and correction options may become more restrictive after ticket issuance or after the first departure."
      ],
      twoColumn: true
    },
    {
      icon: Globe,
      title: "11. Delivery of Fulfillment Information",
      content: [
        "Noam Flyers Inc. may use available communication channels to deliver booking and fulfillment information, including:",
        "• Email",
        "• SMS",
        "• Telephone",
        "• Chat",
        "• In-account or Website messaging",
        "Customers are responsible for providing accurate and current contact information.",
        "Customers should also check spam, junk, promotions, or filtered folders if an expected confirmation email does not appear in their primary inbox.",
        "If travel is approaching and the expected confirmation or ticket information has not been received, customers should contact Cheapflightssolution.com promptly rather than assuming that the booking has been completed.",
        "Where appropriate, customers may also contact the applicable airline using the booking reference or ticket information provided."
      ],
      twoColumn: true
    },
    {
      icon: FileText,
      title: "12. Fulfillment Stage Table",
      content: [
        "Fulfillment Stage: Search and Selection",
        "Noam Flyers Inc. / Cheapflightssolution.com Role: Present available travel inventory",
        "Airline / Supplier Role: Provide inventory and applicable fare information",
        "Customer Action: Select itinerary",
        "",
        "Fulfillment Stage: Checkout and Payment",
        "Noam Flyers Inc. / Cheapflightssolution.com Role: Display applicable total, collect required information, and process payment",
        "Airline / Supplier Role: May provide fare/inventory information",
        "Customer Action: Review total and authorize payment",
        "",
        "Fulfillment Stage: Validation",
        "Noam Flyers Inc. / Cheapflightssolution.com Role: Payment, security, availability, and applicable transaction checks",
        "Airline / Supplier Role: Inventory and fare validation",
        "Customer Action: Respond if additional information is requested",
        "",
        "Fulfillment Stage: Ticketing or Confirmation",
        "Noam Flyers Inc. / Cheapflightssolution.com Role: Transmit booking/ticketing request and communicate outcome",
        "Airline / Supplier Role: Confirm reservation and/or issue ticket",
        "Customer Action: Review confirmation",
        "",
        "Fulfillment Stage: Post-Fulfillment Support",
        "Noam Flyers Inc. / Cheapflightssolution.com Role: Provide applicable booking assistance and communication",
        "Airline / Supplier Role: Operate flight and provide carrier-controlled services",
        "Customer Action: Check in, travel, and request applicable services"
      ],
      twoColumn: true
    },
    {
      icon: CheckCircle,
      title: "13. Sample Fulfillment Standard",
      content: [
        "A booking request is not considered fully fulfilled until Noam Flyers Inc. has received successful payment or payment authorization, the relevant airline or travel supplier has confirmed the requested service, and the applicable reservation confirmation and/or ticket number has been issued and communicated to the customer."
      ]
    },
    {
      icon: Info,
      title: "14. Important Distinction Between Booking Request and Ticket Issuance",
      content: [
        "Customers should understand that there may be a difference between:",
        "Booking Request Received",
        "The customer's request has been submitted and is being processed.",
        "Payment Authorized",
        "The payment method has been authorized or the transaction has been submitted for processing.",
        "Supplier Confirmation",
        "The airline or applicable supplier has confirmed the requested service.",
        "Ticket Issued",
        "Where ticketing is required, the applicable airline ticket number has been successfully issued.",
        "Fulfillment Complete",
        "The reservation and applicable travel documentation have been successfully confirmed and communicated to the customer.",
        "These stages may occur close together, but they are not necessarily identical."
      ]
    },
    {
      icon: Clock,
      title: "15. Changes to This Fulfillment Policy",
      content: [
        "Noam Flyers Inc. may update this Fulfillment Policy from time to time to reflect changes in its booking processes, technology, supplier relationships, payment procedures, or applicable legal requirements.",
        "The latest version will be made available on Cheapflightssolution.com.",
        "Where appropriate, material changes may be accompanied by an updated 'Last Updated' date."
      ]
    },
    {
      icon: Phone,
      title: "16. Contact",
      content: [
        "For questions regarding a booking, fulfillment status, ticket issuance, or confirmation, customers should use the contact information and support channels provided on Cheapflightssolution.com.",
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
            <span className="text-black/60">Fulfillment Policy</span>
          </nav>

          <div className="w-full">
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black leading-tight">
                Fulfillment Policy
              </h1>
              <p className="text-sm text-black/60 mt-2 text-justify">
                This Fulfillment Policy explains how {BRAND.name}, operated by Noam Flyers Inc., processes and fulfills travel booking requests, what happens after payment, how online and assisted booking channels operate, when a booking becomes final, and what confirmation customers should expect.
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
                      // Check if paragraph is a step or stage heading
                      if (paragraph.startsWith("Step") || paragraph.startsWith("Fulfillment Stage:")) {
                        return (
                          <p key={pIndex} className="text-justify font-semibold text-black">
                            {paragraph}
                          </p>
                        );
                      }
                      // Check if it's a stage label
                      if (paragraph.includes(":") && !paragraph.startsWith("•")) {
                        return (
                          <p key={pIndex} className="text-justify font-medium text-black/80">
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
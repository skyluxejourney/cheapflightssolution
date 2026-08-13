"use client";

import { 
  FileText, 
  Shield, 
  Info, 
  CheckCircle, 
  Globe, 
  Lock, 
  Eye, 
  AlertCircle,
  Phone,
  Clock,
  Sliders,
} from "lucide-react";
import NextLink from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BRAND, CONTACT } from "@/app/constants";

export default function CookiesPolicyPage() {
  const sections = [
    {
      icon: FileText,
      title: "Cookie Policy",
      content: [
        `This Cookie Policy explains how ${BRAND.name}, operated by Noam Flyers Inc., uses cookies and similar technologies when you visit or interact with the Website, booking pages, landing pages, communications, and related digital interfaces.`,
        `${BRAND.name} is an independent travel agency and is not an airline.`,
        "For purposes of this policy, the term 'cookies' is used broadly to include cookies and similar technologies that store information on, or access information from, a device, browser, or application environment. These technologies may include pixels, tags, scripts, software development kits (SDKs), local storage objects, and comparable identifiers."
      ]
    },
    {
      icon: Info,
      title: "1. What Are Cookies?",
      content: [
        "Cookies are small files or similar data elements that may be stored on your device when you visit a website.",
        "They can help websites:",
        "• Remember information",
        "• Maintain a secure session",
        "• Preserve booking information",
        "• Improve website functionality",
        "• Understand how visitors use a website",
        "• Measure advertising performance",
        "• Prevent fraud",
        "• Remember selected preferences",
        "• Support customer-service functions",
        "Some cookies are placed directly by Cheapflightssolution.com and Noam Flyers Inc. Others may be placed or triggered by carefully selected third-party service providers that provide services such as analytics, payment protection, advertising measurement, call tracking, or customer support."
      ],
      twoColumn: true
    },
    {
      icon: Sliders,
      title: "2. How We Use Cookies",
      content: [
        "Noam Flyers Inc. may use cookies and similar technologies for several different purposes.",
        "These purposes may include:",
        "• Website operation",
        "• Booking and checkout functionality",
        "• Security",
        "• Fraud prevention",
        "• Session management",
        "• Preference storage",
        "• Analytics",
        "• Performance measurement",
        "• Personalisation",
        "• Advertising",
        "• Campaign attribution",
        "• Call attribution",
        "• Social-media functionality",
        "• Customer-support functionality",
        "Not every technology is used for every visitor, and the technologies used may change as our Website and service providers evolve."
      ],
      twoColumn: true
    },
    {
      icon: CheckCircle,
      title: "3. Cookie Consent and Our Layered Approach",
      content: [
        "Cheapflightssolution.com uses a layered approach to cookie transparency.",
        "When you first visit the Website, a cookie notice or consent interface may explain that cookies and similar technologies are being used.",
        "Where applicable, the consent interface may allow you to:",
        "• Accept all applicable categories",
        "• Reject non-essential technologies",
        "• Customize your preferences",
        "• Change your preferences later",
        "Strictly necessary technologies may be used without marketing consent where they are genuinely required to provide a service that you have requested, operate the Website, maintain security, or complete a transaction.",
        "Non-essential categories, such as analytics, personalisation, advertising, and certain social-media technologies, should remain optional where consent is required by applicable law."
      ]
    },
    {
      icon: Shield,
      title: "4. Strictly Necessary Technologies",
      content: [
        "Strictly necessary cookies and similar technologies help Cheapflightssolution.com operate and provide core functionality.",
        "These technologies may be used to:",
        "• Maintain secure user sessions",
        "• Preserve booking and itinerary information",
        "• Support search and checkout functionality",
        "• Maintain shopping or booking-session information",
        "• Protect the booking process against fraud",
        "• Support payment or verification steps initiated by the customer",
        "• Remember necessary language or regional settings",
        "• Maintain website security",
        "• Support load balancing",
        "• Remember cookie-consent preferences",
        "If these technologies are disabled, some or all core Website functions may not operate correctly.",
        "Essential storage or similar technologies may also be used where necessary to complete a payment, verification, authentication, or booking step actively requested by the customer."
      ],
      twoColumn: true
    },
    {
      icon: Sliders,
      title: "5. Functional and Preference Technologies",
      content: [
        "Functional technologies help remember non-essential preferences and improve convenience.",
        "Depending on the Website's features, these technologies may remember:",
        "• Recently used airports",
        "• Cabin preferences",
        "• Passenger-search preferences",
        "• Language preferences",
        "• Regional preferences",
        "• Saved search settings",
        "• Communication preferences",
        "• Certain voluntarily saved account or profile information",
        "Functional technologies can make the booking experience easier, but they should not be treated as strictly necessary merely because they provide additional convenience."
      ],
      twoColumn: true
    },
    {
      icon: Eye,
      title: "6. Analytics and Measurement Technologies",
      content: [
        "Analytics technologies may help Noam Flyers Inc. understand how visitors use Cheapflightssolution.com and improve the Website.",
        "Analytics may be used to understand:",
        "• Which pages receive traffic",
        "• Which pages load slowly",
        "• Where users encounter technical problems",
        "• Which search filters are useful",
        "• Where customers abandon a booking journey",
        "• How the booking funnel performs",
        "• How Website functionality can be improved",
        "• Which routes or destinations generate interest",
        "• Campaign performance",
        "• Customer-support demand generated by Website activity",
        "Where permitted, aggregated measurement may also help Noam Flyers Inc. understand whether customers who previously visited the Website later contact the company through another support channel.",
        "Analytics technologies are generally not required for the core booking function and may therefore be subject to applicable consent requirements."
      ],
      twoColumn: true
    },
    {
      icon: Phone,
      title: "7. Call and Customer-Service Attribution",
      content: [
        "Cheapflightssolution.com may use technologies that help measure interactions between Website visits and customer-service contacts.",
        "For example, where the Website displays a telephone number, callback option, chat feature, or other support mechanism, applicable technology may help determine whether a customer previously visited the Website before initiating contact.",
        "Depending on the technology and applicable permissions, this information may be used for:",
        "• Service improvement",
        "• Performance measurement",
        "• Campaign attribution",
        "• Fraud prevention",
        "• Customer-support analysis",
        "• Training and operational purposes",
        "Where required by applicable law, non-essential call-attribution technologies will be subject to appropriate consent or privacy choices."
      ]
    },
    {
      icon: Sliders,
      title: "8. Personalisation Technologies",
      content: [
        "Where permitted, Cheapflightssolution.com may use personalisation technologies to make Website content more relevant to a visitor.",
        "These technologies may help present:",
        "• Relevant travel content",
        "• Route suggestions",
        "• Destination ideas",
        "• Search-related information",
        "• Previously viewed information",
        "• More relevant Website messages",
        "Personalisation technologies are generally optional unless a particular technology is genuinely necessary to provide a service specifically requested by the customer."
      ]
    },
    {
      icon: Globe,
      title: "9. Advertising and Marketing Technologies",
      content: [
        "Noam Flyers Inc. may use advertising and marketing technologies to measure campaigns, understand advertising effectiveness, limit repetitive advertisements, or present more relevant promotional content.",
        "Depending on applicable permissions, these technologies may be used to:",
        "• Measure advertising performance",
        "• Attribute bookings or conversions",
        "• Understand campaign reach",
        "• Reduce repeated advertisements",
        "• Create or manage advertising audiences",
        "• Support retargeting",
        "• Measure interactions with advertisements",
        "• Improve future marketing campaigns",
        "Advertising technologies are not required for the core booking function and should be subject to applicable consent requirements.",
        "If you reject non-essential advertising technologies, Cheapflightssolution.com should continue to provide core Website and booking functions, subject only to technologies genuinely necessary to operate the requested service."
      ],
      twoColumn: true
    },
    {
      icon: Globe,
      title: "10. Social-Media Technologies",
      content: [
        "Cheapflightssolution.com may use social-media technologies when the Website:",
        "• Embeds social content",
        "• Provides social-sharing functionality",
        "• Links to social-media channels",
        "• Measures engagement with travel content",
        "• Supports social-media campaigns",
        "These technologies may be controlled or triggered by third-party social-media providers.",
        "They are generally not necessary to complete an airline booking and may therefore be subject to applicable consent requirements."
      ]
    },
    {
      icon: Globe,
      title: "11. Third-Party Service Providers",
      content: [
        "Some cookies and similar technologies may be provided by third parties.",
        "These providers may support functions such as:",
        "• Website analytics",
        "• Advertising measurement",
        "• Payment protection",
        "• Fraud prevention",
        "• Customer support",
        "• Call tracking",
        "• Marketing attribution",
        "• Social-media functionality",
        "• Website performance monitoring",
        "The identity of technology providers may change as Noam Flyers Inc. changes or updates its technology stack.",
        "Where applicable, the cookie-management interface or technology inventory should identify the current provider, general purpose, category, and expected retention period."
      ],
      twoColumn: true
    },
    {
      icon: Clock,
      title: "12. Cookie Duration",
      content: [
        "Cookies and similar technologies may operate for different periods depending on their purpose.",
        "Session Technologies",
        "Some technologies expire when:",
        "• You close your browser",
        "• Your session ends",
        "• A defined period of inactivity occurs",
        "Persistent Technologies",
        "Other technologies may remain on your device for a defined period after you leave the Website.",
        "The retention period may depend on the purpose of the technology.",
        "Where reasonably practicable, Noam Flyers Inc. aims to use a retention-led approach so that analytics, personalisation, and marketing identifiers are not retained or active longer than reasonably necessary for their intended purpose."
      ]
    },
    {
      icon: FileText,
      title: "13. Cookie Category Table",
      content: [
        "Category: Strictly Necessary",
        "Typical Purpose: Security, session continuity, fraud prevention, consent storage, payment and checkout continuity",
        "Usually Required for Core Service?: Yes",
        "Typical Retention Approach: Session or short operational period",
        "",
        "Category: Functional",
        "Typical Purpose: Preferences, saved searches, convenience settings",
        "Usually Required for Core Service?: No, but useful",
        "Typical Retention Approach: Short to medium",
        "",
        "Category: Analytics",
        "Typical Purpose: Traffic analysis, booking-funnel measurement, UX improvement, attribution",
        "Usually Required for Core Service?: No",
        "Typical Retention Approach: Short to medium",
        "",
        "Category: Personalisation",
        "Typical Purpose: Route suggestions, content relevance, prior-search information",
        "Usually Required for Core Service?: No",
        "Typical Retention Approach: Medium",
        "",
        "Category: Advertising",
        "Typical Purpose: Retargeting, campaign measurement, audience management, frequency control",
        "Usually Required for Core Service?: No",
        "Typical Retention Approach: Medium",
        "",
        "Category: Social Media",
        "Typical Purpose: Sharing, embedded content, engagement measurement",
        "Usually Required for Core Service?: No",
        "Typical Retention Approach: Medium",
        "",
        "Actual cookie names, providers, purposes, and retention periods may vary over time and should be reviewed through the Website's applicable cookie-management interface."
      ],
      twoColumn: true
    },
    {
      icon: Sliders,
      title: "14. Managing Your Cookie Preferences",
      content: [
        "You may manage cookie preferences through the cookie settings or consent-management interface made available on Cheapflightssolution.com.",
        "Depending on the available functionality, you may be able to:",
        "• Accept all cookie categories",
        "• Reject non-essential categories",
        "• Accept selected categories",
        "• Change your choices later",
        "You may also use your browser or device settings to block or delete cookies.",
        "However, blocking all cookies may interfere with Website functionality, including:",
        "• Secure login",
        "• Booking-session continuity",
        "• Saved preferences",
        "• Search functionality",
        "• Payment processes",
        "• Fraud-prevention checks",
        "• Checkout functionality",
        "Deleting cookies after beginning a booking may also affect your ability to resume a partially completed search or booking journey."
      ],
      twoColumn: true
    },
    {
      icon: Shield,
      title: "15. Privacy Preference Signals",
      content: [
        "Where required or applicable, Noam Flyers Inc. may evaluate whether Cheapflightssolution.com recognizes browser-based privacy preference signals or other legally recognized opt-out mechanisms.",
        "The availability and treatment of such signals may depend on:",
        "• Applicable law",
        "• Technical capabilities",
        "• Browser or device configuration",
        "• The type of privacy signal received",
        "Where applicable, additional information will be provided through the Website's privacy-choice interface."
      ]
    },
    {
      icon: Lock,
      title: "16. Cookies and Personal Information",
      content: [
        "Information collected through cookies and similar technologies may sometimes constitute personal information or personal data, particularly where it can be connected to an identifiable or reasonably identifiable person, device, account, or booking.",
        "Where this occurs, the information will be handled in accordance with the applicable Privacy Policy and relevant privacy requirements.",
        "The Privacy Policy provides additional information concerning matters such as:",
        "• Data security",
        "• Retention",
        "• Service providers",
        "• Data sharing",
        "• Privacy rights",
        "• Requests concerning personal information",
        "This Cookie Policy should therefore be read together with the applicable Privacy Policy and any Your Privacy Choices interface provided on Cheapflightssolution.com."
      ]
    },
    {
      icon: CheckCircle,
      title: "17. Cookie Consent Does Not Affect Essential Services",
      content: [
        "Where consent is not required for a technology because it is genuinely necessary to provide a service requested by the customer, that technology may continue to operate even when non-essential categories have been rejected.",
        "For example, a customer may still need essential technologies to:",
        "• Maintain a secure booking session",
        "• Preserve an itinerary during checkout",
        "• Complete a payment step",
        "• Prevent fraudulent activity",
        "• Maintain essential Website security",
        "Rejecting analytics or advertising technologies should not, where technically and legally feasible, prevent customers from using core booking functionality."
      ]
    },
    {
      icon: Clock,
      title: "18. Changes to Cookie Technology",
      content: [
        "Noam Flyers Inc. may change the technologies used on Cheapflightssolution.com as its Website, booking systems, analytics infrastructure, advertising arrangements, security tools, or service providers evolve.",
        "The categories described in this policy are intended to remain relatively stable even if individual technology providers change.",
        "Where appropriate, the current cookie-management interface should provide more specific information regarding the technologies currently active on the Website."
      ]
    },
    {
      icon: Info,
      title: "19. Changes to This Cookie Policy",
      content: [
        "Noam Flyers Inc. may update this Cookie Policy from time to time to reflect:",
        "• Changes in technology",
        "• Website functionality",
        "• Analytics tools",
        "• Advertising practices",
        "• Third-party service providers",
        "• Privacy requirements",
        "• Legal requirements",
        "• Business operations",
        "The latest version will be made available on Cheapflightssolution.com.",
        "If changes materially affect how non-essential cookie information is used and applicable law requires renewed consent, Noam Flyers Inc. may request consent again rather than relying solely on a previous consent choice."
      ]
    },
    {
      icon: FileText,
      title: "20. Consent Banner",
      content: [
        "When applicable, Cheapflightssolution.com's cookie notice may state:",
        "We use necessary cookies to keep Cheapflightssolution.com secure and functioning. With your permission, we may also use analytics, personalisation, advertising, and similar technologies to understand how the Website is used, improve the booking experience, measure marketing performance, and provide more relevant travel content. You can accept all, reject non-essential technologies, or customize your choices at any time."
      ]
    },
    {
      icon: CheckCircle,
      title: "21. Cookie Preference Process",
      content: [
        "The general cookie-management process may be summarized as follows:",
        "User Visits Cheapflightssolution.com",
        "↓",
        "Cookie Notice / Consent Interface Appears",
        "↓",
        "User Selects a Preference",
        "↓",
        "Accept All → Necessary + Applicable Optional Categories",
        "Reject Non-Essential → Necessary Technologies Only",
        "Customize → User Selects Individual Categories",
        "↓",
        "Preference Is Stored Where Applicable",
        "↓",
        "Website Applies the Selected Preferences",
        "↓",
        "User Can Update Preferences Later"
      ]
    },
    {
      icon: Phone,
      title: "22. Contact",
      content: [
        "If you have questions regarding this Cookie Policy or the use of cookies and similar technologies on Cheapflightssolution.com, please use the contact information provided on the Website.",
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
            <span className="text-black/60">Cookie Policy</span>
          </nav>

          <div className="w-full">
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black leading-tight">
                Cookie Policy
              </h1>
              <p className="text-sm text-black/60 mt-2 text-justify">
                This Cookie Policy explains how {BRAND.name}, operated by Noam Flyers Inc., uses cookies and similar technologies when you visit or interact with the Website, booking pages, landing pages, communications, and related digital interfaces.
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
                      // Check if paragraph starts with "Category:" or "User Visits"
                      if (paragraph.startsWith("Category:") || 
                          paragraph.startsWith("User Visits") ||
                          paragraph.startsWith("Cookie Notice") ||
                          paragraph.startsWith("User Selects") ||
                          paragraph.startsWith("Accept All") ||
                          paragraph.startsWith("Reject Non-Essential") ||
                          paragraph.startsWith("Customize") ||
                          paragraph.startsWith("Preference Is Stored") ||
                          paragraph.startsWith("Website Applies") ||
                          paragraph.startsWith("User Can Update")) {
                        return (
                          <p key={pIndex} className="text-justify font-semibold text-black">
                            {paragraph}
                          </p>
                        );
                      }
                      // Check if paragraph is a table label
                      if (paragraph.startsWith("Typical Purpose:") || 
                          paragraph.startsWith("Usually Required for Core Service?:") ||
                          paragraph.startsWith("Typical Retention Approach:")) {
                        return (
                          <p key={pIndex} className="text-justify text-black/80">
                            {paragraph}
                          </p>
                        );
                      }
                      // Check if paragraph is a subheading like "Session Technologies" or "Persistent Technologies"
                      if (paragraph === "Session Technologies" || paragraph === "Persistent Technologies") {
                        return (
                          <p key={pIndex} className="text-justify font-medium text-black">
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
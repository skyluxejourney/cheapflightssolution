import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AirlineHero from "./components/AirlineHero";
import AirlinePolicy from "./components/AirlinePolicy";
import AirlineFAQ from "./components/AirlineFAQ";
import { getAirlineBySlug, getAirlineSlugs } from "./constants";

// Generate static params for all airlines
export async function generateStaticParams() {
  return getAirlineSlugs().map((slug) => ({
    slug: slug,
  }));
}

// For Next.js 15+, use this syntax
type Props = {
  params: Promise<{ slug: string }>;
};

export default async function AirlinePage({ params }: Props) {
  const { slug } = await params;
  const airline = getAirlineBySlug(slug);

  if (!airline) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero Section with Search Engine */}
        <AirlineHero airlineName={airline.name} />
        
        {/* Airline Policy Section */}
        <AirlinePolicy airlineName={airline.name} />
        
        {/* FAQ Section - Uses constants.ts internally */}
        <AirlineFAQ airlineName={airline.name} />
      </main>
      <Footer />
    </>
  );
}
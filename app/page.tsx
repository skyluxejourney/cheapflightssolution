import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";
import TravelDeals from "@/components/TravelDeals";

import ExclusiveDeals from "@/components/ExclusiveDeals";
import Whypaymore from "@/components/Whypaymoresection";
import Testimonials from "@/components/Testimonials";


export default function Home() {

  return (

    <>

      <Header />

      <main>

        <Hero />
        <WhyChooseUs />
        <TravelDeals />
        <ExclusiveDeals />
        <Whypaymore />
        <Testimonials />

      </main>


      <Footer />

    </>

  )

}
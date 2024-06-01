import Hero from "@/components/landing/hero";
import FeaturesSection from "@/components/landing/features";
import Testimonials from "@/components/landing/testimonials";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import Templates from "@/components/landing/templates";
import FAQSection from "@/components/landing/faq";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturesSection />
        <Templates />
        <Testimonials />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}

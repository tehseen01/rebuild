import Hero from "@/components/landing/hero";
import FeaturesSection from "@/components/landing/features";
import Testimonials from "@/components/landing/testimonials";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import Templates from "@/components/landing/templates";
import FAQSection from "@/components/landing/faq";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <Hero />
        <FeaturesSection />
        <Templates />
        <Testimonials />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}

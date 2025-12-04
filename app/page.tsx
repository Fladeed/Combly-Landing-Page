import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import UseCases from "@/components/UseCases";
import AIProviders from "@/components/AIProviders";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-bg-secondary">
      <Navigation />
      <Hero />
      <Features />
      <HowItWorks />
      <UseCases />
      <AIProviders />
      <CTA />
      <Footer />
    </main>
  );
}

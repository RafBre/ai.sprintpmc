"use client";

import { LanguageProvider } from "@/components/LanguageProvider";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import Technologies from "@/components/Technologies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <LanguageProvider>
      <Navigation />
      <main>
        <Hero />
        <Services />
        <About />
        <HowItWorks />
        <Technologies />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}

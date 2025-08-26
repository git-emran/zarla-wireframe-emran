import React from "react";

// --- App.tsx ---
import { Header, Hero, Services, WhyUs, Gallery, Reviews, FAQs, Contact, Footer } from "@/components/components";

const App: React.FC = () => (
  <div className="min-h-screen bg-gray-50 text-gray-900 p-6">
    <Header />
    <main className="max-w-6xl mx-auto space-y-6" id="main-content">
      <Hero />
      <Services />
      <WhyUs />
      <Gallery />
      <Reviews />
      <FAQs />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default App;

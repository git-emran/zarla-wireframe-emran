import React from "react";


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-6">
      {/* Site header with primary navigation */}
      <header className="mb-6" aria-label="Site header">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-28 h-12 border rounded flex items-center justify-center bg-white">Logo</div>
            <h1 className="text-xl font-semibold">ClearPath</h1>
          </div>

          <nav aria-label="Primary navigation">
            <ul className="flex gap-4 text-sm">
              <li><a href="#services">Services</a></li>
              <li><a href="#why-us">Why Us</a></li>
              <li><a href="#our-work">Our Work</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#reviews">Reviews</a></li>
              <li><a href="#faqs">FAQs</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#contact">Location</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto space-y-6" id="main-content">
        {/* Hero / Call to action */}
        <section id="hero" aria-label="Hero" className="border rounded p-6 bg-white">
          <header>
            <h2 className="text-2xl font-bold">Transform Your Property with ClearPath Pressure Washing</h2>
            <p className="text-sm">Austin, Texas — Free estimate</p>
          </header>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="h-40 border rounded bg-gray-100 flex items-center justify-center">Hero image / visual</div>
            <aside className="p-4 border rounded bg-gray-50">
              <h3 className="font-semibold">Primary CTA</h3>
              <button className="mt-3 px-4 bg-[#8806ce] text-white py-2 border rounded">Get Your Free Estimate</button>
            </aside>
          </div>
        </section>

        {/* Services list */}
        <section id="services" aria-label="Services" className="border rounded p-6 bg-white">
          <h3 className="text-lg font-semibold">Services</h3>
          <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <li className="p-4 border rounded" role="article" aria-label="Driveway Cleaning">Driveway Cleaning</li>
            <li className="p-4 border rounded" role="article" aria-label="House Exterior Washing">House Exterior Washing</li>
            <li className="p-4 border rounded" role="article" aria-label="Deck and Patio Restoration">Deck & Patio Restoration</li>
            <li className="p-4 border rounded" role="article" aria-label="Gutter Cleaning">Gutter Cleaning & Brightening</li>
            <li className="p-4 border rounded" role="article" aria-label="Concrete Cleaning">Concrete Cleaning</li>
          </ul>
        </section>

        {/* Why Us / Features */}
        <section id="why-us" aria-label="Why choose us" className="border rounded p-6 bg-white">
          <h3 className="text-lg font-semibold">Why Choose ClearPath</h3>
          <div className="mt-4 grid md:grid-cols-3 gap-4">
            <article className="p-4 border rounded">Expert Techniques & Equipment</article>
            <article className="p-4 border rounded">Eco-Friendly Solutions</article>
            <article className="p-4 border rounded">Satisfaction Guarantee</article>
          </div>
        </section>

        {/* Gallery / Our work */}
        <section id="our-work" aria-label="Our work gallery" className="border rounded p-6 bg-white">
          <h3 className="text-lg font-semibold">Our Work / Gallery</h3>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="h-28 border rounded bg-gray-100">Before / After 1</div>
            <div className="h-28 border rounded bg-gray-100">Before / After 2</div>
            <div className="h-28 border rounded bg-gray-100">Before / After 3</div>
            <div className="h-28 border rounded bg-gray-100">Before / After 4</div>
            <div className="h-28 border rounded bg-gray-100">Before / After 5</div>
          </div>
        </section>

        {/* Testimonials / Reviews */}
        <section id="reviews" aria-label="Customer reviews" className="border rounded p-6 bg-white">
          <h3 className="text-lg font-semibold">Reviews</h3>
          <ul className="mt-4 space-y-4">
            <li className="p-4 border rounded" role="article">"ClearPath transformed my driveway!" — Sarah J.</li>
            <li className="p-4 border rounded" role="article">"Professional, prompt, left no mess." — Mike R.</li>
            <li className="p-4 border rounded" role="article">"Best pressure washing I've used." — Lisa W.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section id="faqs" aria-label="Frequently asked questions" className="border rounded p-6 bg-white">
          <h3 className="text-lg font-semibold">FAQs</h3>
          <dl className="mt-4 space-y-3">
            <div>
              <dt className="font-medium">What types of surfaces can you pressure wash?</dt>
              <dd className="text-sm">Driveways, patios, decks, house exteriors — concrete, wood, vinyl siding, etc.</dd>
            </div>
            <div>
              <dt className="font-medium">How often should I have my property pressure washed?</dt>
              <dd className="text-sm">We recommend at least once a year, more for high-traffic or dusty areas.</dd>
            </div>
            <div>
              <dt className="font-medium">Is pressure washing safe for my home?</dt>
              <dd className="text-sm">Yes — we adjust pressure and use proper techniques for each surface.</dd>
            </div>
          </dl>
        </section>

        {/* Contact form + map */}
        <section id="contact" aria-label="Contact" className="border rounded p-6 bg-white">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <form className="p-4 border rounded bg-gray-50" aria-label="Contact form">
              <label className="block text-sm">Name</label>
              <input className="w-full mt-1 p-2 border rounded" />

              <label className="block text-sm mt-3">Email</label>
              <input className="w-full mt-1 p-2 border rounded" />

              <label className="block text-sm mt-3">Message</label>
              <textarea className="w-full mt-1 p-2 border rounded" rows={4} />

              <button type="submit" className=" bg-[#8806ce] text-white mt-3 px-4 py-2 border rounded">Send</button>
            </form>

            <aside className="p-4 border rounded">
              <h4 className="font-medium">Map & Location</h4>
              <div className="mt-3 h-40 border rounded bg-gray-100">Map placeholder</div>
              <address className="not-italic mt-3 text-sm">ClearPath — Austin, TX</address>
            </aside>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-6 border-t pt-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">© ClearPath</p>
          <p className="text-sm">Built with Zarla</p>
        </div>
      </footer>
    </div>
  );
}


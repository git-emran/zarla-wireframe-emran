// --- Header.tsx ---
export const Header: React.FC = () => (
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
);

// --- Hero.tsx ---
export const Hero: React.FC = () => (
  <section id="hero" aria-label="Hero" className="border rounded p-6 bg-white">
    <header>
      <h2 className="text-2xl font-bold">Transform Your Property with ClearPath Pressure Washing</h2>
      <p className="text-sm">Austin, Texas — Free estimate</p>
    </header>
    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="h-40 border rounded bg-gray-100 flex items-center justify-center">Hero image / visual</div>
      <aside className="p-4 border rounded bg-gray-50">
        <h3 className="font-semibold">Primary CTA</h3>
        <button className="mt-3 bg-purple-600 text-white px-4 py-2 border rounded">Get Your Free Estimate</button>
      </aside>
    </div>
  </section>
);

// --- Services.tsx ---
interface ServiceItemProps { name: string; }
const ServiceItem: React.FC<ServiceItemProps> = ({ name }) => (
  <li className="p-4 border rounded" role="article" aria-label={name}>{name}</li>
);

export const Services: React.FC = () => (
  <section id="services" aria-label="Services" className="border rounded p-6 bg-white">
    <h3 className="text-lg font-semibold">Services</h3>
    <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <ServiceItem name="Driveway Cleaning" />
      <ServiceItem name="House Exterior Washing" />
      <ServiceItem name="Deck & Patio Restoration" />
      <ServiceItem name="Gutter Cleaning & Brightening" />
      <ServiceItem name="Concrete Cleaning" />
    </ul>
  </section>
);

// --- WhyUs.tsx ---
interface FeatureProps { text: string; }
const Feature: React.FC<FeatureProps> = ({ text }) => (
  <article className="p-4 border rounded">{text}</article>
);

export const WhyUs: React.FC = () => (
  <section id="why-us" aria-label="Why choose us" className="border rounded p-6 bg-white">
    <h3 className="text-lg font-semibold">Why Choose ClearPath</h3>
    <div className="mt-4 grid md:grid-cols-3 gap-4">
      <Feature text="Expert Techniques & Equipment" />
      <Feature text="Eco-Friendly Solutions" />
      <Feature text="Satisfaction Guarantee" />
    </div>
  </section>
);

// --- Gallery.tsx ---
interface GalleryItemProps { label: string; }
const GalleryItem: React.FC<GalleryItemProps> = ({ label }) => (
  <div className="h-28 border rounded bg-gray-100">{label}</div>
);

export const Gallery: React.FC = () => (
  <section id="our-work" aria-label="Our work gallery" className="border rounded p-6 bg-white">
    <h3 className="text-lg font-semibold">Our Work / Gallery</h3>
    <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
      <GalleryItem label="Before / After 1" />
      <GalleryItem label="Before / After 2" />
      <GalleryItem label="Before / After 3" />
      <GalleryItem label="Before / After 4" />
      <GalleryItem label="Before / After 5" />
    </div>
  </section>
);

// --- Reviews.tsx ---
interface ReviewProps { text: string; author: string; }
const Review: React.FC<ReviewProps> = ({ text, author }) => (
  <li className="p-4 border rounded" role="article">"{text}" — {author}</li>
);

export const Reviews: React.FC = () => (
  <section id="reviews" aria-label="Customer reviews" className="border rounded p-6 bg-white">
    <h3 className="text-lg font-semibold">Reviews</h3>
    <ul className="mt-4 space-y-4">
      <Review text="ClearPath transformed my driveway!" author="Sarah J." />
      <Review text="Professional, prompt, left no mess." author="Mike R." />
      <Review text="Best pressure washing I've used." author="Lisa W." />
    </ul>
  </section>
);

// --- FAQs.tsx ---
interface FAQProps { question: string; answer: string; }
const FAQItem: React.FC<FAQProps> = ({ question, answer }) => (
  <div>
    <dt className="font-medium">{question}</dt>
    <dd className="text-sm">{answer}</dd>
  </div>
);

export const FAQs: React.FC = () => (
  <section id="faqs" aria-label="Frequently asked questions" className="border rounded p-6 bg-white">
    <h3 className="text-lg font-semibold">FAQs</h3>
    <dl className="mt-4 space-y-3">
      <FAQItem question="What types of surfaces can you pressure wash?" answer="Driveways, patios, decks, house exteriors — concrete, wood, vinyl siding, etc." />
      <FAQItem question="How often should I have my property pressure washed?" answer="We recommend at least once a year, more for high-traffic or dusty areas." />
      <FAQItem question="Is pressure washing safe for my home?" answer="Yes — we adjust pressure and use proper techniques for each surface." />
    </dl>
  </section>
);

// --- Contact.tsx ---
export const Contact: React.FC = () => (
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
        <button type="submit" className="mt-3 bg-purple-600 text-white px-4 py-2 border rounded">Send</button>
      </form>
      <aside className="p-4 border rounded">
        <h4 className="font-medium">Map & Location</h4>
        <div className="mt-3 h-40 border rounded bg-gray-100">Map placeholder</div>
        <address className="not-italic mt-3 text-sm">ClearPath — Austin, TX</address>
      </aside>
    </div>
  </section>
);

// --- Footer.tsx ---
export const Footer: React.FC = () => (
  <footer className="mt-6 border-t pt-4">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm">© ClearPath</p>
      <p className="text-sm">Built with Zarla</p>
    </div>
  </footer>
);



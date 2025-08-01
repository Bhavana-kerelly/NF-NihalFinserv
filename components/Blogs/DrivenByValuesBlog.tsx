'use client';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
 import Footer from '@/components/Footer';
export default function DrivenByValuesBlog() {
  return (<>
  <Navbar />
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-purple-100 px-6 py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
        className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-10 space-y-6"
      >
        <h1 className="text-4xl font-extrabold text-black leading-tight tracking-tight ont-serif">
          Nihal Finserv – Driven by Values, Focused on You
        </h1>

        <p className="text-black font-serif leading-relaxed">
          In a financial world filled with endless options, confusing terms, and complicated procedures,
          trust and clarity have become rare. That’s where Nihal Finserv makes the difference.
        </p>

        <p className="text-black font-serif leading-relaxed">
          At Nihal Finserv, we don’t just offer loan services — we build relationships based on
          commitment, ethics, and mutual growth. We understand that behind every loan application is
          a story, a dream, or a challenge that deserves a personalized solution — not a one-size-fits-all product.
        </p>

        <h2 className="text-2xl font-bold text-black mt-10 font-serif">Our Core Values Define Us</h2>
        <p className="text-black font-serif leading-relaxed">
          Every action at Nihal Finserv is guided by a strong set of values that place people before
          profits. Integrity, empathy, transparency, and diligence form the pillars of our customer service.
          We take the time to understand your situation, evaluate the best options, and walk you through
          the journey — honestly and openly.
        </p>

        <p className="text-black font-serif leading-relaxed">
          We believe in educating our clients so that they make confident, informed financial decisions
          that align with both their current needs and long-term vision. You’ll never find us pushing
          unsuitable loans or hiding behind technical jargon.
        </p>

        <h2 className="text-2xl font-bold text-black mt-10 font-serif">Real Support. Real People.</h2>
       <p className="text-black font-serif leading-relaxed">
          Our team isn't made up of salespeople, but financial experts who genuinely care about your
          success. Whether you’re applying for your first home loan, restructuring a business loan,
          or financing a new venture, we are with you every step of the way.
        </p>

        <p className="text-black font-serif leading-relaxed">
          Every interaction is rooted in human connection — you’ll speak with real people who listen,
          respond, and work to find real solutions for you. This personal touch is what makes our
          clients feel secure and supported.
        </p>

        <h2 className="text-2xl font-bold text-black mt-10 font-serif">Ethical Lending with a Human Touch</h2>
        <p className="text-black font-serif leading-relaxed">
          We stand against the culture of misleading practices, complex terms, and unjustified rejections.
          Nihal Finserv ensures that all services follow RBI regulations and ethical lending practices
          while keeping things simple and approachable for our clients.
        </p>

        <p className="text-black font-serif leading-relaxed">
          Our aim is not just to get you a loan — it’s to empower you financially. We evaluate your
          risk profile, cash flow, and future goals to recommend the best loan option and structure.
        </p>

        <h2 className="text-2xl font-bold text-black mt-10 font-serif">Client Stories Speak Louder</h2>
        <p className="text-black font-serif leading-relaxed">
          Over the years, hundreds of individuals and businesses have placed their trust in us. From
          salaried professionals to SMEs, from real estate developers to startups — our work speaks
          through their success.
        </p>

        <p className="text-black leading-relaxed font-serif">
          Their testimonials often mention not just the financial outcome, but the emotional reassurance,
          clarity, and confidence they gained through our partnership. That is the true measure of our success.
        </p>

        <h2 className="text-2xl font-bold text-black mt-10 font-serif">Final Thoughts</h2>
        <p className="text-black font-serif leading-relaxed">
          At Nihal Finserv, values aren’t just a part of our culture — they are our strategy. In a
          market that’s often impersonal and profit-driven, we stand out as a people-driven, value-centered
          financial partner.
        </p>

        <p className="text-lg font-semibold text-white mt-6 font-serif">
          We’re here not just to process your loan — but to earn your trust, solve your problems,
          and celebrate your wins. That’s what makes us different. That’s what makes us Nihal Finserv.
        </p>
      </motion.div>
    </div>
    <Footer />
  </>
  );
}

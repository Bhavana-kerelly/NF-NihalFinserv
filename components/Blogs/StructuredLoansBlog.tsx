'use client';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
 import Footer from '@/components/Footer';

export default function StructuredLoanBlog() {
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-100 px-6 py-20 font-serif">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
        className="max-w-5xl mx-auto bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-10 space-y-6"
      >
        <h1 className="text-4xl font-extrabold text-black leading-tight tracking-tight">
          Structured Loans: Customized Financial Solutions by Nihal Finserv
        </h1>

        <p className= "text-gray-950 leading-relaxed font-serif">
          In today's dynamic financial landscape, businesses and individuals often find themselves
          facing complex financial needs that traditional loans cannot fulfill. That’s where Structured
          Loans come in — tailored solutions designed to meet specific financing requirements with
          greater flexibility and strategic planning.
        </p>

        <p className= "text-gray-950 leading-relaxed font-serif">
          At <strong>Nihal Finserv</strong>, we specialize in designing and facilitating structured loans
          that are in line with RBI guidelines, ensuring complete transparency and compliance. As an
          authorized channel partner with leading banks and NBFCs, Nihal Finserv serves as your trusted
          advisor in securing the most effective financial solution suited to your goals.
        </p>

        <h2 className="text-2xl font-bold text-black mt-10">What are Structured Loans?</h2>
        <p className= "text-gray-950 leading-relaxed font-serif">
          A Structured Loan is not a one-size-fits-all product. Instead, it is a highly customized
          loan solution that considers the borrower’s cash flow, repayment ability, project milestones,
          business cycles, or specific asset requirements.
        </p>
        <p className= "text-gray-950 leading-relaxed font-serif">
          These loans may include multiple components such as term loans, working capital, bullet
          payments, interest-only periods, and asset-based lending, combined strategically to optimize
          the borrower’s financial performance.
        </p>
        <p className= "text-gray-950 leading-relaxed font-serif">
          Unlike traditional lending models, structured loans are negotiated, assessed, and tailored
          to each borrower’s financial ecosystem.
        </p>

        <h2 className="text-2xl font-bold text-black mt-10">Why Choose Structured Loans?</h2>
        <p className= "text-gray-950 leading-relaxed font-serif">
          The key advantage lies in its flexibility and adaptability — borrowers can access larger
          amounts with customized repayment schedules, interest structures, and collateral options.
        </p>
        <p className= "text-gray-950 leading-relaxed font-serif">
          Businesses undergoing expansion, real estate developers, infrastructure projects, and companies
          with seasonal cash flow can benefit significantly. Structured loans also suit objectives like
          debt restructuring, refinancing, or capex funding.
        </p>

        <h2 className="text-2xl font-bold text-black mt-10">Role of Nihal Finserv in Structured Lending</h2>
        <p className= "text-gray-950 leading-relaxed font-serif">
          Our expertise lies in identifying borrower needs, assessing financial viability, and designing
          a structure that aligns with short and long-term goals.
        </p>
        <p className= "text-gray-950 leading-relaxed font-serif">
          As a channel partner with reputed banks and NBFCs, Nihal Finserv offers end-to-end services:
          from consultation and documentation to disbursement — all within RBI regulations.
        </p>

        <h2 className="text-2xl font-bold text-black mt-10">Key Features of Structured Loans</h2>
        <ul className="list-disc ml-6 space-y-2 font-serif text-black">
          {[
            'Custom Repayment Schedules – Options like interest-only, balloon, or step-up repayments.',
            'Collateral Flexibility – Use property, inventory, receivables, or fixed assets.',
            'Multi-Purpose Usage – Fund expansion, refinance debt, or bridge cash gaps.',
            'Longer Tenure Options – Suits short, medium, or long-term needs.',
            'Better Risk Mitigation – Aligns with project milestones or income cycles.'
          ].map((item, idx) => (
            <motion.li
              key={idx}
              whileHover={{ scale: 1.03, color: '#4f46e5' }}
              transition={{ duration: 0.2 }}
              className="transition-colors cursor-default"
            >
              <strong>{item.split(' – ')[0]}:</strong> {item.split(' – ')[1]}
            </motion.li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold text-black mt-10">Who Should Consider Structured Loans?</h2>
        <ul className="list-disc ml-6 space-y-2 font-serif text-black">
          <li>Businesses with seasonal income or cash flow fluctuations</li>
          <li>Companies seeking project-specific funding with milestone disbursements</li>
          <li>Corporates looking to restructure their debt</li>
          <li>High-net-worth individuals planning asset acquisitions</li>
          <li>Real estate firms seeking flexible project finance</li>
        </ul>
        <p className= "text-gray-950 leading-relaxed font-serif">
          If your financial needs fall outside traditional loan structures, a structured loan offers
          the agility and customization you need — and Nihal Finserv is here to help.
        </p>

        <h2 className="text-2xl font-bold text-black mt-10">Why Trust Nihal Finserv?</h2>
        <p className= "text-gray-950 leading-relaxed font-serif">
          Nihal Finserv has earned the trust of countless clients with transparent services and ethical
          lending practices. Our team brings deep knowledge of RBI guidelines and lending ecosystems.
        </p>
        <p className= "text-gray-950 leading-relaxed font-serif">
          We negotiate favorable terms, ensure smooth documentation, and deliver a seamless borrowing
          experience with confidence and compliance.
        </p>

        <h2 className="text-2xl font-bold text-black mt-10">Final Thoughts</h2>
        <p className= "text-gray-950 leading-relaxed font-serif">
          In a world of evolving financial needs, structured loans represent a modern approach to lending.
          With Nihal Finserv, you're not just securing a loan — you're building a financial strategy that’s
          secure, flexible, and fully aligned with your goals.
        </p>
        <p className="text-lg font-semibold text-black mt-6">
          Structure your financial future — one loan at a time, with Nihal Finserv.
        </p>
      </motion.div>
    </div>
    <Footer />
    </>
  );
}

"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";
import ContactSection from '@/components/ContactSection';
import ServiceSection from '@/components/ServiceSection';

const documents = [
  "ID & Address Proof",
  "Income Proof (Salary Slip/ITR)",
  "Bank Statements",
  "Car Quotation / Valuation Report",
  "Business Proof (for self-employed)",
];

export default function CarLoanFinancing() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-6 bg-[#132b4a] text-white flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/equipmentfinancing/C3.jpg"
            alt="Car Loan Financing"
            width={800}
            height={500}
            className="rounded shadow w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-5">
            Drive Your Dreams Today. <br /> With Nihal Finserv Car Loans.
          </h2>
          <p className="text-base mb-6">
            Whether it’s your first car, a family upgrade, or a vehicle for business, Nihal Finserv offers competitive interest rates, fast approvals, and flexible tenures so you can hit the road — hassle-free.
          </p>
          <p className="text-base">
            Buy new or used, personal or commercial — we finance all.
          </p>
        </div>
      </section>

      {/* Car Types */}
      <section className="w-full px-6 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <Image
              src="/equipmentfinancing/C2.jpg"
              alt="Types of Cars Financed"
              width={700}
              height={400}
              className="w-full h-auto object-cover rounded shadow"
            />
          </div>
          <div className="text-gray-700 text-lg space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              We Finance All Types of Cars
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>🚗 Brand New Cars – All major brands and models</li>
              <li>🚙 Pre-Owned / Used Cars – Well-maintained vehicles up to 5–7 years old</li>
              <li>🚐 Utility & Commercial Cars – For business or transport use</li>
              <li>💼 Luxury Cars – High-end models for premium buyers</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="bg-[#132b4a] text-white px-8 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h4 className="uppercase text-sm font-semibold underline underline-offset-4 mb-4">
              Benefits of Choosing Nihal Finserv
            </h4>
            <h2 className="text-4xl font-bold leading-tight mb-4">
              Car Loans Tailored for You
            </h2>
            <p className="text-gray-300 mb-8 max-w-md">
              We offer complete support from selection to disbursal. Finance your next vehicle with ease.
            </p>
            <button className="border border-red-500 text-white px-6 py-3 hover:bg-red-500 transition flex items-center gap-2">
              <span className="text-red-500">&#8213;</span> Apply Now
            </button>
          </div>

          <div className="space-y-6">
            <div className="border border-gray-700 p-6">
              <h3 className="text-xl font-semibold mb-2">✅ Up to 100% On-Road Funding</h3>
              <p className="text-gray-400">Covers insurance, registration, and accessories — not just ex-showroom price.</p>
            </div>
            <div className="border border-gray-700 p-6">
              <h3 className="text-xl font-semibold mb-2">✅ Fast Approvals & Minimal Documentation</h3>
              <p className="text-gray-400">Quick digital process with doorstep document pickup.</p>
            </div>
            <div className="border border-gray-700 p-6">
              <h3 className="text-xl font-semibold mb-2">✅ Attractive Interest Rates</h3>
              <p className="text-gray-400">Available for salaried, self-employed, and business owners.</p>
            </div>
            <div className="border border-gray-700 p-6">
              <h3 className="text-xl font-semibold mb-2">✅ Custom Tenures</h3>
              <p className="text-gray-400">Choose terms from 1 to 7 years, based on your budget.</p>
            </div>
            <div className="border border-gray-700 p-6">
              <h3 className="text-xl font-semibold mb-2">✅ Loans for Pre-Owned Cars</h3>
              <p className="text-gray-400">Transparent valuation and low-interest rates.</p>
            </div>
            <div className="border border-gray-700 p-6">
              <h3 className="text-xl font-semibold mb-2">✅ No Hidden Charges</h3>
              <p className="text-gray-400">Crystal-clear terms and zero surprise costs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Apply */}
      <section className="bg-[#f5f5f5] px-6 py-12 md:py-20 w-full">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Who Can Apply?
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            Our car loan solutions are perfect for:
          </p>
          <ul className="list-disc list-inside text-gray-800 space-y-2 text-lg">
            <li>Salaried Professionals</li>
            <li>Self-Employed Individuals</li>
            <li>Business Owners</li>
            <li>First-Time Car Buyers</li>
            <li>Fleet & Logistics Operators</li>
          </ul>
        </div>
      </section>

      {/* Document Checklist */}
      <section className="w-full bg-white px-6 py-12 md:py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Documents Required
            </h2>
            <p className="text-gray-600 text-lg mb-6 max-w-xl">
              Our team will assist you through every step with ease.
            </p>
            <ul className="space-y-4">
              {documents.map((doc, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-800 text-base md:text-lg">
                  <CheckCircle className="text-red-500 mt-1" size={20} />
                  {doc}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full rounded-xl overflow-hidden shadow-md">
            <Image
              src="/equipmentfinancing/C1.jpg"
              alt="Documents"
              width={800}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white text-black py-16 px-6 md:px-20">
        <div className="bg-[#132b4a] text-white mt-20 py-16 px-6 md:px-20">
          <h2 className="text-4xl font-bold text-center mb-6">
            Why Choose Nihal Finserv?
          </h2>
          <p className="text-center text-lg max-w-4xl mx-auto mb-14">
            From first-time buyers to fleet owners — we simplify the loan experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="border border-gray-700 p-6 rounded-lg">
              <ul className="text-gray-300 list-disc list-inside space-y-3">
                <li>Trusted Network of Lenders – We compare and connect you with the best deals</li>
                <li>Digital-First Process – Apply from anywhere, anytime</li>
                <li>Dedicated Loan Advisors – Personalized guidance for faster disbursal</li>
                <li>Flexible EMI Options – Choose step-up, balloon, or standard plans</li>
                <li>Support for All Credit Profiles – Prime or non-prime, we help everyone</li>
              </ul>
            </div>
            <div className="border border-gray-700 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-white">Client Testimonial</h3>
              <p className="text-gray-300 leading-relaxed">
                “Nihal Finserv helped me get my first car loan without any hassle. Great rate, fast processing, and clear communication throughout.”
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <ServiceSection />
    </>
  );
}

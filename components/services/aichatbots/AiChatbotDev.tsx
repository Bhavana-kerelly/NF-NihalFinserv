"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";

import ContactSection from '@/components/ContactSection';
import ServiceSection from '@/components/ServiceSection';

const steps = [
  "Business Registration / GST Certificate",
  "Quotation or Project Scope for Chatbot Development",
  "Last 6–12 months’ bank statements",
  "KYC of Proprietor / Partner / Director",
];

export default function AIChatbotFinancing() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-6 bg-[#132b4a] text-white flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/aichatbot/ACD1.jpg"
            alt="AI Chatbot Financing"
            width={800}
            height={500}
            className="rounded shadow w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-5">
            Empower Conversations. <br />We Empower Your Budget.
          </h2>
          <p className="text-base mb-6">
            AI chatbots are transforming customer service and automation across industries. Nihal Finserv helps you finance custom chatbot development — so you can scale, support, and serve better, without heavy upfront costs.
          </p>
          <p className="text-base">
            Whether for support, sales, HR, or automation — we enable AI deployment without disrupting your cash flow.
          </p>
        </div>
      </section>

      {/* What We Finance */}
      <section className="w-full px-6 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/aichatbot/ACD2.jpg"
                alt="Chatbot Financing Scope"
                width={700}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="text-gray-700 text-lg space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight mb-6">
              What We Finance
            </h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>Custom AI Chatbot Development</li>
              <li>Natural Language Processing (NLP) Tools</li>
              <li>Machine Learning Model Training</li>
              <li>Chatbot Integration with Apps & Websites</li>
              <li>SaaS Chatbot Platforms & Licenses</li>
              <li>UI/UX Design & Deployment Services</li>
              <li>Security, Hosting & Maintenance</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="bg-[#132b4a] text-white px-8 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h4 className="uppercase text-sm font-semibold underline underline-offset-4 mb-4">
              Key Benefits
            </h4>
            <h2 className="text-5xl font-bold leading-tight mb-4">
              Nihal Finserv -<br />
              <span className="text-gray-400">Your Tech</span> <br />
              <span className="text-red-500">Finance Ally</span>{" "}
              <span className="text-gray-500">for AI Projects</span>
            </h2>
            <p className="text-gray-300 mb-8 max-w-md">
              Deploy your AI chatbot quickly and affordably — with leasing and funding solutions designed for innovation-led businesses.
            </p>
            <button className="border border-red-500 text-white px-6 py-3 hover:bg-red-500 transition flex items-center gap-2">
              <span className="text-red-500">&#8213;</span> Get In Touch
            </button>
          </div>

          <div className="space-y-6">
            <div className="border border-gray-700 p-6">
              <h3 className="text-2xl font-semibold mb-2">Zero Upfront Investment</h3>
              <p className="text-gray-400">Pay in EMIs and preserve your working capital</p>
            </div>
            <div className="border border-gray-700 p-6">
              <h3 className="text-2xl font-semibold mb-2">Flexible Leasing</h3>
              <p className="text-gray-400">Lease short-term or opt for long-term repayment plans</p>
            </div>
            <div className="border border-gray-700 p-6">
              <h3 className="text-2xl font-semibold mb-2">Faster Go-to-Market</h3>
              <p className="text-gray-400">Quick funding lets you launch faster than competitors</p>
            </div>
            <div className="border border-gray-700 p-6">
              <h3 className="text-2xl font-semibold mb-2">Upgrade-Ready Plans</h3>
              <p className="text-gray-400">Adapt to tech evolution without budget worries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Document Checklist */}
      <section className="bg-[#f5f5f5] px-6 py-12 md:py-20 w-full">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              Documents Required
            </h2>
            <p className="text-gray-600 text-lg mb-6 max-w-xl">
              We'll help you through each step — from proposal to payout.
            </p>
            <ul className="space-y-4">
              {steps.map((step, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-800 text-base md:text-lg">
                  <CheckCircle className="text-red-500 mt-1" size={20} />
                  {step}
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full rounded-xl overflow-hidden shadow-md">
            <Image
              src="/aichatbot/ACD3.jpg"
              alt="Documents"
              width={800}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Who Can Apply & Use Cases */}
      <section className="bg-white text-black py-16 px-6 md:px-20">
        <div className="bg-[#132b4a] text-white mt-20 py-16 px-6 md:px-20">
          <h2 className="text-4xl font-bold text-center mb-6">
            AI Chatbot Development Financing
          </h2>
          <p className="text-center text-lg max-w-4xl mx-auto mb-14">
            Let your bot talk. We’ll handle the costs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                city: "Who Should Use This",
                points: [
                  "E-commerce Brands",
                  "Hospitals & Clinics (Virtual Assistants)",
                  "Financial Institutions & Fintech Startups",
                  "Customer Support Teams",
                  "Educational Institutions",
                  "Travel & Hospitality Services",
                  "Product Startups",
                ],
              },
              {
                city: "Why Nihal Finserv",
                points: [
                  "Tech-savvy financing support",
                  "Fast approvals & disbursals",
                  "Growth-aligned EMI structuring",
                  "Trusted by SMEs & Enterprises alike",
                ],
              },
              {
                city: "Use Cases",
                points: [
                  "Customer Service Bots",
                  "HR & Internal Process Assistants",
                  "Lead Generation & Sales Chatbots",
                  "Appointment Booking Interfaces",
                  "AI Assistants for E-commerce or Banking",
                ],
              },
              {
                city: "Client Testimonial",
                text: "Thanks to Nihal Finserv, we built our AI support chatbot in weeks. They handled the financials while we focused on training the model and UX.",
              },
            ].map(({ city, text, points }) => (
              <div key={city} className="border border-gray-700 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-white">{city}</h3>
                {points ? (
                  <ul className="text-gray-300 list-disc list-inside space-y-2">
                    {points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-300 leading-relaxed">{text}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
      <ServiceSection />
    </>
  );
}

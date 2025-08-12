"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";

import ContactSection from '@/components/ContactSection';
import ServiceSection from '@/components/ServiceSection';

const industries = [
    { name: "ChatGPT Solutions", link: "/services/structuredproducts/chatgptsolutions" },
    { name: "AI ChatBot Dev", link: "/services/structuredproducts/aichatbotdev" },
]
const steps = [
  "Business KYC & registration",
  "Chatbot software proposal or cost estimate",
  "Bank statements (6–12 months)",
  "ITR or audited financials (Optional: Tech deck for custom bots)",
];

export default function AIChatbotFinancing() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-6 bg-[#132b4a] text-white flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/aichatbot/A1.jpg"
            alt="AI Chatbot Financing"
            width={800}
            height={500}
            className="rounded shadow w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-5">
            Empower with AI. <br /> Finance Smarter.
          </h2>
          <p className="text-base mb-6">
            AI-powered chatbots are reshaping how businesses engage, serve, and convert. At Nihal Finserv, we provide financing options that let you automate and scale — without budget disruptions.
          </p>
          <p className="text-base">
            Get started with leasing and EMI plans for both ready-made and custom conversational AI tools.
          </p>
        </div>
      </section>

      {/* What We Finance */}
      <section className="w-full px-6 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/aichatbot/A2.jpg"
                alt="AI Chatbot Financing Scope"
                width={700}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="text-gray-700 text-lg space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight mb-6">
              What Can Be Financed
            </h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>AI Chatbot Licenses (Monthly/Annual)</li>
              <li>Customization & Development Costs</li>
              <li>CRM & Website Integrations</li>
              <li>NLP, Machine Learning & Training</li>
              <li>Multichannel Bots (Web, WhatsApp, Instagram)</li>
              <li>Analytics & Automation Dashboards</li>
              <li>Ongoing Maintenance & Upgrades</li>
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
              <span className="text-gray-400">Finance Partner</span> <br />
              <span className="text-red-500">for Conversational AI</span>
            </h2>
            <p className="text-gray-300 mb-8 max-w-md">
              Automate lead generation, support, and engagement — we fund your AI chatbot rollout with flexible options.
            </p>
            <button className="border border-red-500 text-white px-6 py-3 hover:bg-red-500 transition flex items-center gap-2">
              <span className="text-red-500">&#8213;</span> Get In Touch
            </button>
          </div>

          <div className="space-y-6">
            <div className="border border-gray-700 p-6">
              <h3 className="text-2xl font-semibold mb-2">Zero Upfront Investment</h3>
              <p className="text-gray-400">Pay over time and maintain healthy cash flow.</p>
            </div>
            <div className="border border-gray-700 p-6">
              <h3 className="text-2xl font-semibold mb-2">Quick Deployment</h3>
              <p className="text-gray-400">Launch faster with instant funding support.</p>
            </div>
            <div className="border border-gray-700 p-6">
              <h3 className="text-2xl font-semibold mb-2">Future-Proof AI Tools</h3>
              <p className="text-gray-400">Stay upgraded with the latest AI chatbot models and tools.</p>
            </div>
            <div className="border border-gray-700 p-6">
              <h3 className="text-2xl font-semibold mb-2">Flexible Leasing Plans</h3>
              <p className="text-gray-400">Monthly, quarterly, or custom tenures based on your model.</p>
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
              Simple documents. Speedy processing.
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
              src="/aichatbot/A3.jpg"
              alt="Documents"
              width={800}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>
      

      <section>
        <div className="bg-black text-white px-6 py-16">
      <h2 className="text-3xl font-bold mb-4">
        AI CHAT BOT
      </h2>
      

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {industries.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="border border-gray-600 rounded-md py-6 px-4 flex items-center justify-center hover:bg-gray-800 transition text-sm font-medium text-center"
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
      </section>


      {/* Who Can Apply & Use Cases */}
      <section className="bg-white text-black py-16 px-6 md:px-20">
        <div className="bg-[#132b4a] text-white mt-20 py-16 px-6 md:px-20">
          <h2 className="text-4xl font-bold text-center mb-6">
            AI Chatbots Financing
          </h2>
          <p className="text-center text-lg max-w-4xl mx-auto mb-14">
            Power customer interaction — without draining your capital.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                city: "Ideal for Businesses",
                points: [
                  "E-Commerce & D2C Brands",
                  "Call Centers & BPOs",
                  "Hotels, Clinics & Service Providers",
                  "Banks, Fintechs & Insurance Firms",
                  "Retail Chains & Franchise Networks",
                  "Marketing & SaaS Companies",
                  "EdTech, HealthTech & HRTech Startups",
                ],
              },
              {
                city: "Why Nihal Finserv",
                points: [
                  "Experts in AI & SaaS Financing",
                  "Flexible Leasing Plans",
                  "Quick Approval with Minimal Paperwork",
                  "End-to-End Financial Support",
                ],
              },
              {
                city: "Use Cases",
                points: [
                  "Customer Support & Live Chat",
                  "Lead Capture & Qualification",
                  "Multilingual Bot Deployment",
                  "CRM & Backend Integrations",
                  "AI Chat on WhatsApp, Instagram, etc.",
                ],
              },
              {
                city: "Client Testimonial",
                text: "Nihal Finserv gave us the financial runway to build a multi-channel AI chatbot across our sales and support teams. Easy, fast, and supportive throughout.",
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

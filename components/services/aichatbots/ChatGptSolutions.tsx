"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";

import ContactSection from '@/components/ContactSection';
import ServiceSection from '@/components/ServiceSection';

const steps = [
  "Business registration documents",
  "ChatGPT licensing or service quote",
  "Recent bank statements (6–12 months)",
  "Basic KYC (with optional AI workflow brief)",
];

export default function ChatGPTSolutionsFinancing() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-6 bg-[#132b4a] text-white flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/aichatbot/CGS1.jpg"
            alt="ChatGPT Solutions Financing"
            width={800}
            height={500}
            className="rounded shadow w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-5">
            Accelerate AI Integration. <br />We’ll Ease the Financial Load.
          </h2>
          <p className="text-base mb-6">
            ChatGPT is transforming how businesses operate — from customer support to automation. Nihal Finserv helps finance ChatGPT-powered deployments with tailored EMI and leasing solutions.
          </p>
          <p className="text-base">
            Focus on building smarter workflows while we help you spread your AI investment over time.
          </p>
        </div>
      </section>

      {/* What We Finance */}
      <section className="w-full px-6 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/aichatbot/CGS2.jpg"
                alt="What We Finance"
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
              <li>ChatGPT Enterprise Licenses</li>
              <li>API Integration & Custom Workflows</li>
              <li>Content Automation Tools & Prompts</li>
              <li>Data Security & Compliance Features</li>
              <li>Analytics Dashboards</li>
              <li>Training & Deployment Services</li>
              <li>Plugins & Third-Party App Integration</li>
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
              <span className="text-gray-400">AI-First</span> <br />
              <span className="text-red-500">Finance Partner</span>{" "}
              <span className="text-gray-500">for GPT Integration</span>
            </h2>
            <p className="text-gray-300 mb-8 max-w-md">
              Turn AI into ROI — with cost-effective, scalable financing for ChatGPT tools, training, and deployment.
            </p>
            <button className="border border-red-500 text-white px-6 py-3 hover:bg-red-500 transition flex items-center gap-2">
              <span className="text-red-500">&#8213;</span> Get In Touch
            </button>
          </div>

          <div className="space-y-6">
            <div className="border border-gray-700 p-6">
              <h3 className="text-2xl font-semibold mb-2">Spread Costs Over Time</h3>
              <p className="text-gray-400">Preserve working capital, reduce upfront AI investment.</p>
            </div>
            <div className="border border-gray-700 p-6">
              <h3 className="text-2xl font-semibold mb-2">Enterprise-Grade Tools Access</h3>
              <p className="text-gray-400">Enable advanced GPT features and admin controls affordably.</p>
            </div>
            <div className="border border-gray-700 p-6">
              <h3 className="text-2xl font-semibold mb-2">Fast Digital Transformation</h3>
              <p className="text-gray-400">Speed up automation across your workflows.</p>
            </div>
            <div className="border border-gray-700 p-6">
              <h3 className="text-2xl font-semibold mb-2">Tailored Leasing Options</h3>
              <p className="text-gray-400">Short or long-term leasing for AI and SaaS tools.</p>
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
              Minimal paperwork, faster approvals.
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
              src="/aichatbot/CGS3.jpg"
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
            ChatGPT Solutions Financing
          </h2>
          <p className="text-center text-lg max-w-4xl mx-auto mb-14">
            Let AI power your business — we’ll handle the finances.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                city: "Who Can Benefit",
                points: [
                  "Tech Startups & SaaS Companies",
                  "Content Agencies & Copywriters",
                  "Call Centers & Support Teams",
                  "Banks & Fintech Firms",
                  "EdTech & eLearning Platforms",
                  "E-commerce, Retail & Services",
                  "IT & Engineering Teams",
                ],
              },
              {
                city: "Why Nihal Finserv",
                points: [
                  "AI-First Financing Expertise",
                  "Minimal Paperwork & Fast Approvals",
                  "Flexible EMI & Leasing Options",
                  "Startup & MSME Friendly",
                ],
              },
              {
                city: "Use Cases",
                points: [
                  "Customer Support Chatbots",
                  "Knowledge Base Assistants",
                  "Content & Code Automation",
                  "Internal HR or Ops Bots",
                  "Lead Generation GPTs",
                ],
              },
              {
                city: "Client Testimonial",
                text: "Nihal Finserv helped us launch with ChatGPT Enterprise in weeks — the financing was seamless, and the ROI followed fast.",
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

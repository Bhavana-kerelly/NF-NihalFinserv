"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";

import ContactSection from '@/components/ContactSection';
import ServiceSection from '@/components/ServiceSection';

export default function ITHardwareFinancing() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-6 bg-[#132b4a] text-white flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/equipmentfinancing/IH1.jpg"
            alt="IT Hardware Financing"
            width={800}
            height={500}
            className="rounded shadow w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-5">
            Upgrade Your Tech. <br /> Preserve Your Cash Flow.
          </h2>
          <p className="text-base mb-6">
            Stay competitive in a digital-first world. Nihal Finserv offers flexible financing to help you acquire essential IT hardware — from laptops to servers — without upfront capital drain.
          </p>
          <p className="text-base">
            Whether you're scaling your startup or revamping your enterprise network, we’re here to fund your infrastructure needs.
          </p>
        </div>
      </section>

      {/* What We Finance */}
      <section className="w-full px-6 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/equipmentfinancing/IH2.jpg"
                alt="IT Hardware Types"
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
              <li>Laptops & Desktops</li>
              <li>Servers & Networking Equipment</li>
              <li>Data Storage & Backup Systems</li>
              <li>Printers, Scanners & Copiers</li>
              <li>POS Systems & Billing Machines</li>
              <li>Surveillance & Security Systems</li>
              <li>AV & Conferencing Equipment</li>
              <li>Telecom & Collaboration Tools</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="bg-[#132b4a] text-white px-8 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h4 className="uppercase text-sm font-semibold underline underline-offset-4 mb-4">
              Key Benefits
            </h4>
            <h2 className="text-5xl font-bold leading-tight mb-4">
              Nihal Finserv -<br />
              <span className="text-gray-400">Your IT</span> <br />
              <span className="text-red-500">Hardware Finance Ally</span>
            </h2>
            <p className="text-gray-300 mb-8 max-w-md">
              Get the right tools to power productivity, security, and scale — while keeping your finances flexible.
            </p>
            <button className="border border-red-500 text-white px-6 py-3 hover:bg-red-500 transition flex items-center gap-2">
              <span className="text-red-500">&#8213;</span> Get In Touch
            </button>
          </div>

          <div className="space-y-6">
            <div className="border border-gray-700 p-6">
              <h3 className="text-2xl font-semibold mb-2">No Large Upfront Investment</h3>
              <p className="text-gray-400">Preserve liquidity while deploying cutting-edge IT systems.</p>
            </div>
            <div className="border border-gray-700 p-6">
              <h3 className="text-2xl font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-400">Leasing lets you upgrade your tech stack periodically.</p>
            </div>
            <div className="border border-gray-700 p-6">
              <h3 className="text-2xl font-semibold mb-2">Boost Efficiency</h3>
              <p className="text-gray-400">Modern IT = better productivity, security, and user experience.</p>
            </div>
            <div className="border border-gray-700 p-6">
              <h3 className="text-2xl font-semibold mb-2">Tax Benefits</h3>
              <p className="text-gray-400">Leasing costs may be treated as business expenses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Replacing “Documents” with “Who It's For” */}
      <section className="bg-[#f5f5f5] px-6 py-12 md:py-20 w-full">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              Who Is It For?
            </h2>
            <p className="text-gray-600 text-lg mb-6 max-w-xl">
              Our IT financing plans are scalable across sectors and business sizes.
            </p>
            <ul className="space-y-4 text-gray-800 text-base md:text-lg">
              <li>✅ Startups & Tech Companies</li>
              <li>✅ Schools, Colleges & EdTech</li>
              <li>✅ Call Centers & BPOs</li>
              <li>✅ Retail Chains</li>
              <li>✅ Hospitals, Labs & Clinics</li>
              <li>✅ Legal, Finance & Consulting Firms</li>
              <li>✅ MSMEs, SMEs & Corporates</li>
            </ul>
          </div>
          <div className="w-full rounded-xl overflow-hidden shadow-md">
            <Image
              src="/equipmentfinancing/IH3.jpg"
              alt="IT Users"
              width={800}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us & Testimonial */}
      <section className="bg-white text-black py-16 px-6 md:px-20">
        <div className="bg-[#132b4a] text-white mt-20 py-16 px-6 md:px-20">
          <h2 className="text-4xl font-bold text-center mb-6">
            IT Hardware Leasing & Financing
          </h2>
          <p className="text-center text-lg max-w-4xl mx-auto mb-14">
            Scale your digital backbone — with smart financing.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                city: "Why Nihal Finserv",
                points: [
                  "Fast digital approvals & onboarding",
                  "Short/long-term tenures to match budget cycles",
                  "Partnered with top OEMs and vendors",
                  "Expert advisors to structure the right asset plan",
                  "Pan-India accessibility for all business types",
                ],
              },
              {
                city: "Client Testimonial",
                text: "Our IT refresh project across 50+ stores became reality with Nihal Finserv. They handled vendor coordination, leasing, and rollout — smooth from start to finish.",
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

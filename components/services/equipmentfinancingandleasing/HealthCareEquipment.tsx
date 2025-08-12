"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";

import ContactSection from '@/components/ContactSection';
import ServiceSection from '@/components/ServiceSection';

const steps = [
  "Medical license and business registration",
  "Equipment invoice or quotation",
  "6–12 months' bank statements",
  "ITRs or audited financials",
  "Hospital/Clinic profile (if available)",
];

export default function HealthcareEquipmentFinancing() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-6 bg-[#132b4a] text-white flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/equipmentfinancing/HCE1.jpg"
            alt="Healthcare Equipment Financing"
            width={800}
            height={500}
            className="rounded shadow w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-5">
            Modernize Your Medical Facility with Smart Financing
          </h2>
          <p className="text-base mb-6">
            Medical equipment is essential for diagnosis and treatment—but often costly. Nihal Finserv offers customized financing for hospitals, clinics, and diagnostic labs to acquire cutting-edge healthcare tools without large upfront investment.
          </p>
          <p className="text-base">
            Upgrade your technology and expand your services with 100% funding options, whether you're starting up or scaling up.
          </p>
        </div>
      </section>

      {/* Equipment We Finance */}
      <section className="w-full px-6 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/equipmentfinancing/HCE2.jpg"
                alt="Medical Equipment Types"
                width={700}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="text-gray-700 text-lg space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight mb-6">
              Equipment We Finance
            </h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>Imaging: MRI, CT, X-ray, Ultrasound</li>
              <li>ICU/OT: Ventilators, Monitors, Surgical Lights</li>
              <li>Laboratory: Auto-analyzers, Centrifuges</li>
              <li>Dental Chairs & Digital Tools</li>
              <li>Dialysis, Oncology, Physio Machines</li>
              <li>Home Care Devices: ECG, Syringe Pumps</li>
              <li>Medical Software & Record Systems</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="bg-[#132b4a] text-white px-8 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h4 className="uppercase text-sm font-semibold underline underline-offset-4 mb-4">
              Key Features
            </h4>
            <h2 className="text-5xl font-bold leading-tight mb-4">
              Nihal Finserv -<br />
              <span className="text-gray-400">Better Care</span> <br />
              <span className="text-red-500">Starts With</span>{" "}
              <span className="text-gray-500">Better Equipment</span>
            </h2>
            <p className="text-gray-300 mb-8 max-w-md">
              Bring modern diagnostics and treatment capabilities to your clinic or hospital—without financial strain.
            </p>
            <button className="border border-red-500 text-white px-6 py-3 hover:bg-red-500 transition flex items-center gap-2">
              <span className="text-red-500">&#8213;</span> Get In Touch
            </button>
          </div>

          <div className="space-y-6">
            <div className="border border-gray-700 p-6">
              <h3 className="text-2xl font-semibold mb-2">Low Upfront Cost</h3>
              <p className="text-gray-400">Preserve your working capital</p>
            </div>
            <div className="border border-gray-700 p-6">
              <h3 className="text-2xl font-semibold mb-2">Improve Patient Care</h3>
              <p className="text-gray-400">Enhance diagnostics and outcomes</p>
            </div>
            <div className="border border-gray-700 p-6">
              <h3 className="text-2xl font-semibold mb-2">Flexible EMIs</h3>
              <p className="text-gray-400">Match repayments to your income pattern</p>
            </div>
            <div className="border border-gray-700 p-6">
              <h3 className="text-2xl font-semibold mb-2">Tax Benefits</h3>
              <p className="text-gray-400">Interest and depreciation claims apply</p>
            </div>
            <div className="border border-gray-700 p-6">
              <h3 className="text-2xl font-semibold mb-2">Lease or Own</h3>
              <p className="text-gray-400">Choose between leasing or ownership</p>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Checklist */}
      <section className="bg-[#f5f5f5] px-6 py-12 md:py-20 w-full">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              Documents Required
            </h2>
            <p className="text-gray-600 text-lg mb-6 max-w-xl">
              Our healthcare financing team supports you throughout the application.
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
              src="/equipmentfinancing/HCE3.jpg"
              alt="Documents"
              width={800}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Business Details */}
      <section className="bg-white text-black py-16 px-6 md:px-20">
        <div className="bg-[#132b4a] text-white mt-20 py-16 px-6 md:px-20">
          <h2 className="text-4xl font-bold text-center mb-6">
            Healthcare Equipment Financing
          </h2>
          <p className="text-center text-lg max-w-4xl mx-auto mb-14">
            Expand your medical capabilities and enhance patient experience with the right tools—affordably financed.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                city: "Who Can Apply",
                points: [
                  "Multi-Specialty Hospitals",
                  "Single-Specialty Clinics (Dental, ENT, Eye, etc.)",
                  "Diagnostic & Imaging Centers",
                  "Day Care Surgery Clinics",
                  "Rehabilitation Centers & Physiotherapy Clinics",
                  "Veterinary Hospitals & Labs",
                  "Medical Colleges & Institutions",
                ],
              },
              {
                city: "Why Nihal Finserv",
                points: [
                  "Expertise in healthcare equipment life cycles",
                  "Dealer tie-ups with OEMs for genuine tools",
                  "Quick disbursals & easy processing",
                  "Custom repayment options (step-up, balloon, seasonal)",
                  "100% cost coverage: device + install + software",
                ],
              },
              {
                city: "Use Cases",
                points: [
                  "Facility modernization",
                  "Imaging upgrades (MRI, CT, etc.)",
                  "ICU/OT setup expansion",
                  "Dental clinic enhancement",
                  "Path lab automation",
                ],
              },
              {
                city: "Client Testimonial",
                text: "Nihal Finserv helped us equip our new diagnostic center with world-class tools—without straining cash reserves. Their medical domain understanding made everything easier.",
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

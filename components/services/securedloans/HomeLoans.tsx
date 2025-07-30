"use client";

import Image from 'next/image';
import CoreValues from '@/components/inner/CoreValues';
import { CheckCircle } from "lucide-react";
import ClientLogosSection from '@/components/ClientLogosSection';
import IndustriesWeServe from '@/components/Industries';
import Faq from '@/components/Faq';
import Testimonials from '@/components/Testimonials';
import ContactSection from '@/components/ContactSection';
import RatingsSection from '@/components/RatingsSection';
import ServiceSection from '@/components/ServiceSection';

const steps = [
  "Requirement Analysis & Planning",
  "Website Design & Prototyping",
  "Development & Coding",
  "Testing & Quality Assurance",
  "Deployment & Post-Launch Support",
];

const insights = [
  {
    title: "Your 10-Step Starter Plan to Dominate in Digi Marketing",
    image: "/insight-1.png", // Place in /public
  },
  {
    title: "Why Your Business Website Might Be Losing Customers?",
    image: "/insight-2.png",
  },
  {
    title: "Why Website Security Should Be Your Top Priority in 2025",
    image: "/insight-3.png",
  },
];

export default function HomeLoans() {
  return (
    <>
      <section className="py-20 px-6  bg-black text-white flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/images/office-full.jpg"
            alt="Office"
            width={800}
            height={500}
            className="rounded shadow w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-5">
            Personal Loans in Hyderabad – Nihal Finserv
          </h2>
          <p className="text-base mb-6">
            Looking for a quick and affordable personal loan in Hyderabad? Nihal Finserv is here to help. We offer personalized loan solutions for salaried and self-employed individuals with competitive interest rates and a smooth, hassle-free process.
          </p>
          <p className="text-base mb-6">
            Whether it’s for medical bills, education, travel, or urgent expenses — we’re committed to making borrowing simple, fast, and transparent.
          </p>
          <p className="text-base">
            Based in Hyderabad, Nihal Finserv is dedicated to supporting your financial needs with trusted service and minimal paperwork.
          </p>
        </div>
      </section>
      
      <section className="w-full px-6 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight mb-6">
              Transform Your Online Presence with Expert <br />
              Custom Web Development Services
            </h2>
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/team-photo.png" // make sure to place the image in /public folder
                alt="Team"
                width={700}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <p className="text-gray-600 text-lg mt-6">
              From web application development to modern, responsive interfaces,
              Ozrit delivers full-spectrum website design and development
              solutions that drive engagement, conversions, and long-term growth.
            </p>
          </div>

          {/* Right Side */}
          <div className="text-gray-700 text-lg space-y-6">
            <p>
              At Ozrit, we begin by deeply understanding your brand, audience, and
              business goals. This insight drives the creation of custom website
              solutions that truly reflect your identity and deliver measurable
              results. Our skilled team of developers and designers collaborates
              to perfect every element — from UI and UX to performance and
              scalability.
            </p>
            <p>
              We don’t just build websites — we build future-ready digital
              experiences. Every website is developed with a robust architecture,
              mobile responsiveness, and SEO optimization at its core. The result?
              A fast, secure, and scalable platform that grows with your business
              and delivers consistently across all devices.
            </p>
            <p>
              With Ozrit’s Web Development Services, your website becomes a
              high-performance digital asset — not just a presence. Our expert
              developers prioritize speed, security, search engine visibility, and
              user-centric design to ensure your site ranks higher and performs
              better.
            </p>
          </div>
        </div>
      </section>
      
      <CoreValues />

      <section className="bg-[#f5f5f5] px-6 py-12 md:py-20 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left: Text and Checklist */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            Our Web Development Process
          </h2>
          <p className="text-gray-600 text-lg mb-6 max-w-xl">
            Our dedicated team of experts collaborates with you to determine optimal development strategies, craft seamless functionalities, and ensure a robust digital presence for your brand
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

        {/* Right: Image */}
        <div className="w-full rounded-xl overflow-hidden shadow-md">
          <Image
            src="/woman-laptop.png" // Place this in /public
            alt="Developer at work"
            width={800}
            height={500}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>

    <ClientLogosSection />
    <IndustriesWeServe />
    <Faq />
    
    <section className="bg-white text-black py-16 px-6 md:px-20">
      <div className="bg-gray-900 text-white mt-20 py-16 px-6 md:px-20">
        <h2 className="text-4xl font-bold text-center mb-6">
          Top Cities in India Leading the Demand for Web Development Services
        </h2>
        <p className="text-center text-lg max-w-4xl mx-auto mb-14">
          With businesses shifting online across every industry, the need for professional web development services is
          at an all-time high. From corporate websites and e-commerce platforms to SaaS products and enterprise
          portals, Indian cities are powering this digital transformation with world-class web design and development
          expertise. Below, we spotlight the top cities driving demand and innovation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              city: "Bengaluru",
              text:
                "Web Development Services in Bengaluru thrive on the city's robust IT ecosystem and startup culture. Bengaluru developers specialize in SaaS product development, enterprise-grade portals, and modern frameworks like React, Angular, and Node.js. Their focus on innovation, scalability, and cloud-native architecture makes them ideal for fast-growing startups and global enterprises.",
            },
            {
              city: "Mumbai",
              text:
                "Web Development Services in Mumbai serve industries ranging from finance and media to retail and healthcare. Developers here excel at building responsive corporate websites, e-commerce solutions with payment integration, and custom CMS platforms. With a strong corporate presence, Mumbai ensures compliance, user-centric design, and robust performance.",
            },
            {
              city: "Delhi",
              text:
                "Web Development Services in Delhi cater to government projects, startups, and enterprises alike. Delhi-based developers are skilled in multilingual sites, e-governance platforms, and digital-first solutions with strong SEO and marketing integration. The city's expertise also extends to building educational portals and large-scale web applications.",
            },
            {
              city: "Chennai",
              text:
                "Web Development Services in Chennai focus on backend reliability, ERP integrations, and enterprise systems. Developers in Chennai are trusted for their expertise in Java, .NET, and PHP frameworks, delivering high-performance web applications for corporates, manufacturing, and logistics industries.",
            },
            {
              city: "Hyderabad",
              text:
                "Web Development Services in Hyderabad combine UI/UX excellence with cutting-edge backend development. Hyderabad teams build SaaS dashboards, scalable e-commerce platforms, and secure fintech portals. With expertise in AI, APIs, and cybersecurity, they cater to global clients requiring robust, enterprise-ready web solutions.",
            },
            {
              city: "Pune",
              text:
                "Web Development Services in Pune provide cost-effective yet high-quality solutions for startups, SMEs, and enterprises. Pune developers excel at MVPs, business websites, and cross-platform applications. Their strength lies in balancing affordability with innovation, making them a go-to hub for emerging businesses.",
            },
          ].map(({ city, text }) => (
            <div key={city} className="border border-gray-700 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-white">{city}</h3>
              <p className="text-gray-300 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="px-6 py-16 bg-white w-full">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-gray-900">
          Our insights on <span className="text-black">Web Development</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {insights.map((item, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="w-full h-52 relative rounded-lg overflow-hidden shadow">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-4 text-lg font-medium text-gray-800 leading-snug">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Testimonials />
    <ContactSection />
    <RatingsSection />
    <ServiceSection />
      
    </>
  );
}

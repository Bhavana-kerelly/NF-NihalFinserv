// components/AboutUs.js
import Image from "next/image";
import Navbar from "@/components/Navbar";
import MissionVision from "@/components/inner/MissionVision";
import CoreValues from "@/components/inner/CoreValues";
import Faq from "@/components/Faq";
import ContactSection from "@/components/ContactSection";

import ServiceSection from "@/components/ServiceSection";
import Footer from "@/components/Footer";

const AboutUs = () => {
  return (
    <>
    <Navbar />
    <div className="about-us-container font-sans text-gray-800">
      
      {/* SECTION 1: Banner Image */}
      <section className="w-full">
        <Image
          src="/images/BannerImage.jpg"
          alt="Office Team"
          width={1920}
          height={600}
          className="w-full h-auto object-cover"
        />
      </section>

      {/* SECTION 2: About + Side Image */}
      <section className="flex flex-col md:flex-row items-center gap-8 px-8 py-16 bg-white">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold">
           Empowering Dreams, <span className="text-red-500">Simplifying Finance</span>
          </h2>
          <p>
            At <strong>Nihal Finserv</strong>, we believe finance should be simple, transparent, and empowering — not overwhelming. Whether you're planning a dream home, buying your first car, managing personal expenses, or seeking smart investment advice, we’re here to guide you at every step. Our mission is clear: <strong>to simplify borrowing and help you make confident financial decisions.</strong>
          </p>
          <p>
            Backed by strong partnerships with leading banks and NBFCs, we bring you the best of both worlds <strong>— competitive offers</strong> and <strong>personalized service</strong>. We cut through the clutter, so you don’t have to spend endless hours comparing loans or worrying about fine print. With us, financing becomes faster, clearer, and built around <strong>you</strong>.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/images/Family.jpg"
            alt="Team Working"
            width={800}
            height={500}
            className="rounded-lg shadow-md"
          />
        </div>
      </section>

      <MissionVision />
    </div>
    <CoreValues />
    <Faq />
    <ContactSection />
  
    <ServiceSection />
    <Footer />
    </>
    
  );
};

export default AboutUs;
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Content from "@/components/Content";
import ContactSection from "@/components/ContactSection";
import ServiceSection from "@/components/ServiceSection";
import Footer from "@/components/Footer";

const Services = () => {
  return (
    <>
      <Navbar />
      <div className="about-us-container font-sans text-gray-800">
        {/* SECTION 1: Office Image */}
        <section className="w-full">
          <Image
            src="/images/office-full.jpg"
            alt="Office Team"
            width={1920}
            height={600}
            className="w-full h-auto object-cover"
          />
        </section>
      </div>
      <Content />
      <ContactSection />
      
      <ServiceSection />
      <Footer />
    </>
  );
};

export default Services;

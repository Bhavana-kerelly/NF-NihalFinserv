import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SoftwareOutsourcing from '../components/SoftwareOutsourcing';
import Industries from '../components/Industries';
import Faq from '../components/Faq';
import MarqueeSection from '../components/MarqueeSection.jsx';
 import FeaturedInsights from '../components/FeaturedInsights';
 import ClientLogosSection from '../components/ClientLogosSection';
 import Testumonials from '../components/Testimonials';
 import ContactSection from '../components/ContactSection';
 import RatingsSection from '../components/RatingsSection';
 import ServiceSection from '../components/ServiceSection';
 import Footer from '../components/Footer';
 import Content from '../components/Content.jsx';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SoftwareOutsourcing />
      <Content />
      <Industries />
      <Faq />
      <MarqueeSection />
      <FeaturedInsights />
      {/* <FeaturedInsightsSection /> */}
      <ClientLogosSection />
      <Testumonials />
      <ContactSection />
      <RatingsSection />
      <ServiceSection />
      <Footer />
      
      
    </>
  );
}


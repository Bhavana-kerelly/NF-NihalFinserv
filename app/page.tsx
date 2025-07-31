import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SoftwareOutsourcing from '../components/SoftwareOutsourcing';
import Faq from '../components/Faq';
import MarqueeSection from '../components/MarqueeSection.jsx';
import FeaturedInsights from '../components/FeaturedInsights';
import Testimonials from '../components/Testimonials';
 import ContactSection from '../components/ContactSection';

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
      {/* <Industries /> */}
      <Faq />
      <MarqueeSection />
      <FeaturedInsights />
      {/* <FeaturedInsightsSection /> */}
      {/* <ClientLogosSection /> */}
      <Testimonials />
      <ContactSection />
    
      <ServiceSection />
      <Footer />
      
      
    </>
  );
}


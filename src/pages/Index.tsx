import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import DeveloperLogos from "@/components/home/DeveloperLogos";
import ServicesGrid from "@/components/home/ServicesGrid";
import PropertyListings from "@/components/home/PropertyListings";
import PropertyManagement from "@/components/home/PropertyManagement";
import ContactForm from "@/components/home/ContactForm";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ReviewsSection from "@/components/home/ReviewsSection";
import PopularCommunities from "@/components/home/PopularCommunities";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <DeveloperLogos />
      <ServicesGrid />
      <PropertyListings />
      <PropertyManagement />
      <ContactForm />
      <WhyChooseUs />
      <ReviewsSection />
      <PopularCommunities />
      <Footer />
    </div>
  );
};

export default Index;
